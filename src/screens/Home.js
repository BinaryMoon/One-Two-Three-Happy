import React from "react";
import Header from "../components/Header";
import AddHappyMemories from "../components/AddHappyMemories";


class Home extends React.Component {

	render() {

		return (
			<React.Fragment>
				<Header></Header>
				<div className="content home">
					<h2 className="title">What made you happy today?</h2>
					<AddHappyMemories />
				</div>
			</React.Fragment>
		);

	};

};

export default Home;