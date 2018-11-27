import React from "react";
import Memories from "./Memories";


/**
 * List the users happy memories as stored in Localstorage.
 */
class HappyArchive extends React.Component {

	render() {

		return (
			<div class="content archive">
				<h1>Happy Memories</h1>
				<Memories />
			</div>
		);

	}

};

export default HappyArchive;
