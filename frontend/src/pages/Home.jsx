import React from "react";
import { Link } from "react-router-dom";

import CaffeineGraph from "../components/CaffeineGraph";
import "./css/home.css";

const Home = () => {
	var user = JSON.parse(localStorage.getItem("user_data"));
	var newDrinkName;
	var newCaffeine;

	const doAddRecord = async (event) => {
		var userId = user.id;

		event.preventDefault();
		var obj = {
			userId: userId,
			drinkName: newDrinkName.value,
			caffeineIntake: newCaffeine.value,
		};

		console.log(obj);

		var js = JSON.stringify(obj);

		try {
			const response = await fetch("http://localhost:3000/api/addRecord", {
				method: "POST",
				body: js,
				headers: { "Content-Type": "application/json" },
			});

			var res = JSON.parse(await response.text());

			if (res.error.length > 0) {
				alert("ERROR: Cannot add record.");
			}
		} catch (e) {
			alert(e.toString());
			return;
		}
	};

	return (
		<div class="home">
			<div className="left-container"></div>
			<div className="right-container">
				<div className="top">
					<h2>What did you drink today?</h2>
					<input id="newDrinkName" type="text" ref={(c) => (newDrinkName = c)} />
					<h2>How much caffeine does it have?</h2>
					<input id="newCaffeine" type="number" ref={(c) => (newCaffeine = c)} />
					<button type="submit" onClick={doAddRecord}>
						Add Record
					</button>
				</div>

				<div className="bottom">
					<CaffeineGraph />
				</div>
				<div className="bottom"></div>
			</div>
		</div>
	);
};

export default Home;
