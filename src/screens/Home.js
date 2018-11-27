import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import AddHappyMemories from "../components/AddHappyMemories";


class Home extends React.Component {

	render() {

		return (
			<React.Fragment>
				<Header></Header>
				<div className="content home">
					<Welcome />
					<AddHappyMemories />
				</div>
			</React.Fragment>
		);

	};

};

export default Home;