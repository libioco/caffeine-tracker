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

	/*imageArray = [https://media.discordapp.net/attachments/1156773996558307430/1160474658693464155/0-removebg-preview.png?ex=6534cb3f&is=6522563f&hm=b6f699513ef9bf1a9c796dd1e28331149d6ec4cb744a4bf2149cea9f97047dc8&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474608261144686/10-removebg-preview.png?ex=6534cb33&is=65225633&hm=d3b52b14984e873bd4c4a8d7c50763ca44a24d15fdc51410eecec0f23b89e5fe&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474608030449704/20-removebg-preview.png?ex=6534cb33&is=65225633&hm=9c7bcc3ac10246e5a028b6b226b9681e4af3ec8e75d40466b2e325dbcf448f49&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474607841710100/30-removebg-preview.png?ex=6534cb33&is=65225633&hm=0fab6a230c73c2d4c29034c1200e64785ebe5a06df4fe34f821c1623c9342243&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474607623610399/40-removebg-preview.png?ex=6534cb33&is=65225633&hm=e0b48814c93fca6b36fab91f243fd1a8684cfb27be10c3d005a5e6a9af180ec2&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474607371964426/50-removebg-preview.png?ex=6534cb32&is=65225632&hm=0cf34a1cc8d5baaf837291a9ca9be5cec4e09b383474b04958e39ac518b77ae6&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474606986072084/60-removebg-preview.png?ex=6534cb32&is=65225632&hm=3408401fd0ebe5c643619b95ba3d081d38a24d71491386944772e9393ad35deb&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474606747000872/70-removebg-preview.png?ex=6534cb32&is=65225632&hm=160a112c875e1c8bfe90438366774a4c84a5c30520f3e3b6bc2592b0c07ead2d&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474606541492324/80-removebg-preview.png?ex=6534cb32&is=65225632&hm=0ac8962e090e88ac5ac7d4328b89d7f4ddd0a392b67e5fd44136be8dbfb6d153&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474606306594926/90-removebg-preview.png?ex=6534cb32&is=65225632&hm=3376146cb9c1103a81de330f420b36c0bb1df76bec05d2ecbc3bdd0bcd908237&=,
	https://media.discordapp.net/attachments/1156773996558307430/1160474606105272472/100-removebg-preview.png?ex=6534cb32&is=65225632&hm=997ba255a92321ca275dd3a110728c637e4c15dc3540144062ace30927ea2ffd&=
		
	]*/

	/*function getImage(dailyCaffeine,recommendedCaffeine){
		var percent = dailyCaffeine/recommendedCaffeine;
		var percentIndex = Math.ceil(percent * 10)
		if (dailyCaffeine >= recommendedCaffeine)
			percentIndex = 10
		return imageArray[percentIndex]
	}*/


	return (
		<div class="home">
			<div className="left-container"><img
					className="percentIntake"
					src="https://media.discordapp.net/attachments/1156773996558307430/1160474658693464155/0-removebg-preview.png?ex=6534cb3f&is=6522563f&hm=b6f699513ef9bf1a9c796dd1e28331149d6ec4cb744a4bf2149cea9f97047dc8&="
					alt="percentRepresentation"
				/></div>
				
			<div className="right-container">
				<div className="top">
					<h2>What did you drink today?</h2>
					<input id="newDrinkName" type="text" ref={(c) => (newDrinkName = c)} />
					<h2>How much caffeine does it have?</h2>
					<input id="newCaffeine" type="text" ref={(c) => (newCaffeine = c)} />
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
