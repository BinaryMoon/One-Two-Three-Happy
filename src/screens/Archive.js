import React from "react";
import Header from "../components/Header";
import Archive from "../components/Archive";
import { getMemories } from "../memories";

class Archives extends React.Component {

	render() {

		let memories = getMemories();

		return (
			<React.Fragment>
				<Header />
				<Archive
					title="Happy Memories"
					memories={memories}
				/>
			</React.Fragment>
		);

	};

};

export default Archives;