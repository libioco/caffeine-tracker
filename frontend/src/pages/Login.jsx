import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/login.css";

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

		<div class="login-container">
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email or Phone" required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required/>
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login"/>
          </div>
          <div class="signup-link">Not a member? <a href="#">Signup now!</a></div>
        </form>
      </div>
    </div>
	);
};

export default Login;
