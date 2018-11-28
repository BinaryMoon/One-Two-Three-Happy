import React from "react";
import Memories from "./Memories";


/**
 * List the users happy memories as stored in Localstorage.
 */
class HappyArchive extends React.Component {

	render() {

		return (
			<div className="content archive">
				<h1>Happy Memories</h1>
				{/* <Tags></Tags> */}
				<Memories
					memories={this.props.memories}
				/>
			</div>
		);

	}

};

export default HappyArchive;
