import React from 'react';
import { getDate } from '../helpers';

class Memory extends React.Component {

	render() {

		let title = this.props.index;
		let memories = this.props.memories;
		let memoryHtml = [];

		// Ensure the memories have been saved.
		if ( ! memories.memory1 && ! memories.memory2 && ! memories.memory3 ) {
			return null;
		}

		// Only display memories that are completed.
		if ( memories.memory1 ) {
			memoryHtml.push( <p>{ memories.memory1 }</p> );
		}
		if ( memories.memory2 ) {
			memoryHtml.push( <p>{ memories.memory2 }</p> );
		}
		if ( memories.memory3 ) {
			memoryHtml.push( <p>{ memories.memory3 }</p> );
		}

		// Work out what title to display.
		if ( this.props.memories.date ) {
			title = getDate( this.props.memories.date );
		}

		return (
			<div className="memory">
				<h3>{ title }</h3>
				{ memoryHtml }
			</div>
		);

	}

}

export default Memory;