import React from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

	render() {

		return (
			<nav className="navigation">
				<NavLink exact className="link-home" to="/">Today</NavLink>
				<NavLink exact className="link-archive" to="/archive/">Memories</NavLink>
				<NavLink exact className="link-about" to="/about/">About</NavLink>
			</nav>
		);

	}
}

export default Navigation;