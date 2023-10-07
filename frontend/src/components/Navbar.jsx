import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

const Navbar = () => {
	return (
		<div class="topnav">
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
			<Link to="/data">
				<img
					src="https://media.discordapp.net/attachments/1156773996558307430/1160087538543886437/socialsciences_statistics.png?ex=653362b6&is=6520edb6&hm=e426fb693270ba5e18ad988ce9d58f672839f7e64470af3f428f048eb038af61&="
					alt="Data Button"
				/>
			</Link>
			<Link to="/settings">
				<img
					src="https://media.discordapp.net/attachments/1156773996558307430/1160088183107768411/gear_brown-removebg-preview.png?ex=65336350&is=6520ee50&hm=15ba93de4da5935a76b9e591a7de34d0afab400eba1699415ce25d4964bd1171&="
					alt="Setting Button"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
