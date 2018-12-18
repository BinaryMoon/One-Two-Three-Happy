import React from 'react';
import Memories from './Memories';
import Tags from './Tags';


/**
 * List the users happy memories as stored in Localstorage.
 */
class Archive extends React.Component {

	render() {

		// let tags = [ ...this.props.tags ];

		return (
			<div className="content archive">
				<h1 dangerouslySetInnerHTML={{__html:this.props.title}}></h1>
				<Tags tags={this.props.tags} />
				<Memories memories={this.props.memories} />
			</div>
		);

	}

};

export default Archive;
