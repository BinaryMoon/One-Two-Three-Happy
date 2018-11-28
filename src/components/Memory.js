import React from 'react';
import { getDate } from '../helpers';

class Memory extends React.Component {

	render() {

		let title = this.props.index;

		if ( this.props.memories.date ) {
			title = getDate( this.props.memories.date );
		}

		return (
			<div class="memory">
				<h3>{ title }</h3>
				<p>{ this.props.memories.memory1 }</p>
				<p>{ this.props.memories.memory2 }</p>
				<p>{ this.props.memories.memory3 }</p>
			</div>
		);

	}

}

export default Memory;