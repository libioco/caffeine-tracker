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
					className="logo1"
					src="https://cdn.discordapp.com/attachments/1156773996558307430/1160443955285078117/logo-removebg-preview.png?ex=6534aea6&is=652239a6&hm=0f97ae6ee19b20838b52a1aa319017397e657b99cfb90d9f4645633a6bb81c4a&"
					alt="mojomonitor logo"
				/>
				<img
					className="logo2"
					src="https://media.discordapp.net/attachments/1156773996558307430/1160446060855046234/logo_words-removebg-preview.png?ex=6534b09c&is=65223b9c&hm=df3f9c86e916eee5ea1220bc6dcfadfc7d43e2d46d21c9f4cbbbbf87f7aba24c&="
					alt="mojomonitor word"
				/>
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
