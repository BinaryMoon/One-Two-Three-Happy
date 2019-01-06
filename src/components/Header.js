import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = (props) => (
	<header>

		<span className="site-title">
			<Link to="/">One Two Three Happy</Link>
		</span>

		<Navigation />

		<section className="about">
			<p>One Two Three Happy could also be called a Gratitude Journal, or a Happiness Journal. A way to keep track of those things that bring you joy.</p>
			<p className="meta"><Link to="/privacy-policy/">Privacy Policy</Link></p>
		</section>

	</header>
);

export default Header;
