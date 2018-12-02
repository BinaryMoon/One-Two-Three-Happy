import React from "react";
import Header from "../components/Header";
import Archive from "../components/Archive";
import { getMemories } from "../memories";

class ArchiveTag extends React.Component {

	render() {

		let params = this.props.match.params;
		let memories = getMemories();

		return (
			<React.Fragment>
				<Header />
				<Archive
					title={'Tag: ' + params.tag}
					memories={memories}
					tag={params.tag}
				/>
			</React.Fragment>
		);


	};

};

export default ArchiveTag;