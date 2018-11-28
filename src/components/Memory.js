import React from 'react';

class Memory extends React.Component {

	render() {

		return (
			<React.Fragment>
				<h3>{ this.props.index }</h3>
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