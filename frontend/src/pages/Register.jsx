import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/register.css"

const Register = () => {
	var registerFirst;
	var registerLast;
	var registerAge;
	var registerWeight;
	var registerUser;
	var registerPass;

	const [message, setMessage] = useState("");

	const doRegister = async (event) => {
		event.preventDefault();
		var obj = {
			firstName: registerFirst.value,
			lastName: registerLast.value,
			age: registerAge.value,
			weight: registerWeight.value,
			username: registerUser.value,
			password: registerPass.value,
		};

		var js = JSON.stringify(obj);

		try {
			const response = await fetch("http://localhost:3000/api/register", {
				method: "POST",
				body: js,
				headers: { "Content-Type": "application/json" },
			});

			var res = JSON.parse(await response.text());

			if (res.error.length > 0) {
				setMessage("ERROR: Cannot register.");
			} else {
				// var user = { firstName: res.FirstName, lastName: res.LastName, id: res.id };
				// localStorage.setItem("user_data", JSON.stringify(user));
				setMessage("");
				window.location.href = "/login";
			}
		} catch (e) {
			alert(e.toString());
			return;
		}
	};

	return (
		<div className="register">
			<div className="container">
				<h2>Register</h2>
				<form className="form">
					<input
						required
						id="registerFirst"
						type="text"
						placeholder="First Name"
						ref={(c) => (registerFirst = c)}
					/>
					<input
						required
						id="registerLast"
						type="text"
						placeholder="Last Name"
						ref={(c) => (registerLast = c)}
					/>
					<input
						required
						id="registerAge"
						type="number"
						placeholder="Age"
						ref={(c) => (registerAge = c)}
					/>
					<input
						required
						id="registerWeight"
						type="number"
						placeholder="Weight (lbs)"
						ref={(c) => (registerWeight = c)}
					/>
					<input
						required
						id="registerUser"
						type="text"
						placeholder="Username"
						ref={(c) => (registerUser = c)}
					/>
					<input
						required
						id="registerPass"
						type="password"
						placeholder="Password"
						ref={(c) => (registerPass = c)}
					/>

					<button type="button" id="loginButton" className="buttons" onClick={doRegister}>
						Continue
					</button>
					<span id="loginResult">{message}</span>
					<br></br>
					<span className="register-span">
						Have an account? <Link to="/login">Login here</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Register;
