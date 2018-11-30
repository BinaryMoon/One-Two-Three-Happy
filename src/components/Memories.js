import React from 'react';
import Memory from './Memory';
import { Link } from 'react-router-dom';

class Memories extends React.Component {

	render() {

		if ( ! this.props.memories || this.props.memories.length < 1 ) {

			return (
				<div className="message">
					<h3>No memories yet</h3>
					<Link to="/" className="button">Add your first</Link>
				</div>
			);

		}

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