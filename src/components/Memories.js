import React from 'react';
import Memory from './Memory';

class Memories extends React.Component {

	render() {

		return (
			<React.Fragment>
			{
				Object.keys( this.props.memories ).map(
					key => (
						<Memory
							key={key}
							index={key}
							memories={this.props.memories[key]}
						/>
					)
				)
			}
			</React.Fragment>
		);

	}

}

export default Memories;