import React from 'react';
import { getDate } from '../helpers';

class Memory extends React.Component {

	render() {

		let title = this.props.index;

		if ( this.props.memories.date ) {
			title = getDate( this.props.memories.date );
		}

		return (
			<React.Fragment>
				<h3>{ title }</h3>
				<ul>
					<li>{ this.props.memories.memory1 }</li>
					<li>{ this.props.memories.memory2 }</li>
					<li>{ this.props.memories.memory3 }</li>
				</ul>
			</React.Fragment>
		);

	}

}

export default Memory;