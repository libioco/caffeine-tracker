import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	var loginUser;
	var loginPass;
	const [message, setMessage] = useState("");

	const doLogin = async (event) => {
		event.preventDefault();
		var obj = { username: loginUser.value, password: loginPass.value };
		var js = JSON.stringify(obj);

		try {
			const response = await fetch("http://localhost:3000/api/login", {
				method: "POST",
				body: js,
				headers: { "Content-Type": "application/json" },
			});

			var res = JSON.parse(await response.text());

			if (res._id <= 0) {
				setMessage("User/Password combination incorrect");
			} else {
				var user = {
					firstName: res.firstName,
					lastName: res.lastName,
					id: res.id,
					age: res.age,
					weight: res.weight,
				};
				localStorage.setItem("user_data", JSON.stringify(user));
				setMessage("");
				window.location.href = "/";
			}
		} catch (e) {
			alert(e.toString());
			return;
		}
	};

	return (
		<div className="login">
			<div className="container">
				<h2>Sign In</h2>
				<form className="form">
					<input
						required
						id="loginUser"
						type="text"
						placeholder="Username"
						ref={(c) => (loginUser = c)}
					/>
					<input
						required
						id="loginPass"
						type="password"
						placeholder="Password"
						ref={(c) => (loginPass = c)}
					/>

					<button type="button" id="loginButton" className="buttons" onClick={doLogin}>
						Continue
					</button>
					<span id="loginResult">{message}</span>

					<span className="register-span">
						Need an account? <Link to="/register">Register here</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
