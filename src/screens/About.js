import React from 'react';
import Header from '../components/Header';

const About = () => (
	<React.Fragment>
		<Header/>

		<div className="content about">
			<h1 className="title">About One Two Three Happy</h1>
			<p>Keeping a daily gratitude journal can transform not only your mindset but the direction and impact of your life.</p>
			<p>By keeping daily notes of the things that make you happy you will find yourself noticing happy events more often, in turn making you happier.</p>

			<h2>Open Source</h2>
			<p>I built OneTwoThreeHappy as a learning excercise. I wanted to learn React and this seemed like a relatively simple project to use as my first. As such, I thought I would build it in the open.</p>
			<p>The code for the OneTwoThreeHappy website is open source and can be found on <a href="https://github.com/BinaryMoon/One-Two-Three-Happy/">Github</a>. I am happy to receive issues and pull requests for the project.</p>

			<h2>Credits</h2>
			<p>This project wouldn't have been possible without the work of a number of open source projects. In no particular order I have used:</p>
			<ul>
				<li><a href="https://dexie.org/">Dexie</a> - Indexeddb library</li>
				<li><a href="https://github.com/taylorhakes/fecha">Fecha</a> - lightweight date formatting.</li>
				<li><a href="http://openmoji.org">OpenMoji</a> - Opensource emojis.</li>
				<li><a href="https://reactjs.org/">ReactJS</a> - A user interface library.</li>
			</ul>
		</div>

	</React.Fragment>
);

export default About;