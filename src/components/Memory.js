import React from 'react';
import { getDate } from '../helpers';
import { linkTags } from '../tags';
import { openmojiPath, openmoji } from '../openmoji';

class Memory extends React.Component {

	render() {

		let memory = this.props.memory;
		let emoji = this.props.emoji;

		// Ensure the memories have been saved.
		if ( ! memory ) {
			return null;
		}

		if ( ! emoji ) {
			emoji = 'heart';
		}

		return (
			<div className="memory">
				<img src={openmojiPath( openmoji[ emoji ] )} alt="" />
				<p dangerouslySetInnerHTML={{__html:linkTags( memory )}}></p>
				<span className="date">{getDate( this.props.date )}</span>
			</div>
		);

	}

}

export default Memory;