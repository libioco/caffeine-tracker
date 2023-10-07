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

app.listen(4000); // start Node + Express server on port 4000
