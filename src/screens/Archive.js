import React from "react";
import Header from "../components/Header";
import HappyArchive from "../components/HappyArchive";

class App extends React.Component {

	render() {

		return (
			<React.Fragment>
				<Header></Header>
				<HappyArchive></HappyArchive>
			</React.Fragment>
		);


	};

};

export default App;