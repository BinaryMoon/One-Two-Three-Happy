import React from "react";
import Header from "../components/Header";
import HappyArchive from "../components/HappyArchive";
import { getMemories } from "../memories";

class App extends React.Component {

	state = {
		memories: {},
		tags: {}
	};

	componentDidMount() {

		let memories = getMemories();

		this.setState(
			{
				memories
			}
		);

	}

	render() {

		return (
			<React.Fragment>
				<Header />
				<HappyArchive
					memories={this.state.memories}
				/>
			</React.Fragment>
		);


	};

};

export default App;