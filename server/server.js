// darrenbansil
// nUVh2BxqZdnnJBru
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const url =
	"mongodb+srv://darrenbansil:nUVh2BxqZdnnJBru@cluster0.qd3npqx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
client.connect();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
	next();
});

app.listen(3000); // start Node + Express server on port 3000

app.post("/api/login", async (req, res, next) => {
	// incoming: username, password
	// outgoing: id, firstName, lastName, error
	var error = "";
	const { username, password } = req.body;
	const db = client.db("CaffeineDB");
	const results = await db
		.collection("Users")
		.find({ Username: username, Password: password })
		.toArray();

	var id = -1;
	var fn = "";
	var ln = "";
	var age = -1;
	var weight = -1;

	if (results.length > 0) {
		id = results[0]._id;
		fn = results[0].FirstName;
		ln = results[0].LastName;
		age = results[0].Age;
		weight = results[0].Weight;
	}
	var ret = { id: id, firstName: fn, lastName: ln, age: age, weight: weight, error: "" };
	res.status(200).json(ret);
});

app.post("/api/register", async (req, res, next) => {
	// incoming: firstname, lastname , username, password
	// outgoing: errors
	const { firstName, lastName, age, weight, username, password } = req.body;
	const newUser = {
		FirstName: firstName,
		LastName: lastName,
		Age: age,
		Weight: weight,
		Username: username,
		Password: password,
	};

	var error = "";
	try {
		const db = client.db("CaffeineDB");
		const result = db.collection("Users").insertOne(newUser);
	} catch (e) {
		error = e.toString();
	}
	var ret = { error: error };
	res.status(200).json(ret);
});

app.post("/api/addRecord", async (req, res, next) => {
	// incoming: userid, caffeine intake (mg), drink name
	// outgoing: errors

	const { userId, caffeineIntake, drinkName } = req.body;

	const newRecord = {
		userId: userId,
		date: new Date(),
		caffeineIntake: caffeineIntake,
		drinkName: drinkName,
	};

	var error = "";
	try {
		const db = client.db("CaffeineDB");
		const result = db.collection("Records").insertOne(newRecord);
	} catch (e) {
		error = e.toString();
	}

	var ret = { error: error };
	res.status(200).json(ret);
});

app.post("/api/getWeekRecords", async (req, res, next) => {
	var error = "";
	const { userId } = req.body;
	const db = client.db("CaffeineDB");

	const results = await db.collection("Records").find({ userId: userId }).toArray();

	console.log(results[0].FirstName);

	var caffeineRecords = [];

	results.sort(function (a, b) {
		return new Date(a.date) - new Date(b.date);
	});

	if (results.length > 0) {
		let j = 0;
		let prevDate = results[0].date.getDate();
		caffeineRecords[0] = parseInt(results[0].caffeineIntake);

		for (let i = 1; i < results.length; i++) {
			if (results[i].date.getDate() == prevDate) {
				caffeineRecords[j] += parseInt(results[i].caffeineIntake);
			} else {
				caffeineRecords[++j] = parseInt(results[i].caffeineIntake);
			}
		}
	}

	var ret = { caffeineRecords: caffeineRecords };
	res.status(200).json(ret);
});
