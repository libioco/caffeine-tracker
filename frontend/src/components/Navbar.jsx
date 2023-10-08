import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
	const doLogout = (event) => {
		event.preventDefault();
		localStorage.removeItem("user_data");
		window.location.href = "/login";
	};

	return (
		<div className="navbar">
			<div className="logo">
				<img
					src="https://cdn.discordapp.com/attachments/1156773996558307430/1160291374613155981/company-removebg-preview.png?ex=6534208c&is=6521ab8c&hm=b4be42b17788640387813b739fb745d03e13fe89bd2077cd4cf51848634b6c37&"
					alt="mojomonitor logo"
				/>
				<h1>MojoMonitor</h1>
			</div>
			<div className="links">
				<Link to="/">
					<img
						src="https://cdn.discordapp.com/attachments/1156773996558307430/1160088777885241434/house_brown-removebg-preview.png?ex=653363de&is=6520eede&hm=26939833d0cfd0c2f7ad553c6f4641a5956ad03030d7eeeca97759a54316962d&"
						alt="Home Button"
					/>
				</Link>
				<Link to="/profile">
					<img
						src="https://media.discordapp.net/attachments/1156773996558307430/1160089534575427614/brown_png-removebg-preview.png?ex=65336492&is=6520ef92&hm=dcfd4db7bf3b93b82acb67b20265f2305c9c6934de04ee7c4964f6d6f3842f02&=;"
						alt="Profile Button"
					/>
				</Link>
				{/* <Link to="/settings">
					<img
						src="https://media.discordapp.net/attachments/1156773996558307430/1160088183107768411/gear_brown-removebg-preview.png?ex=65336350&is=6520ee50&hm=15ba93de4da5935a76b9e591a7de34d0afab400eba1699415ce25d4964bd1171&="
						alt="Setting Button"
					/>
				</Link> */}
				<button onClick={doLogout}>Log Out</button>
			</div>
		</div>
	);
};

export default Navbar;
