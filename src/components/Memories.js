import React from 'react';
import Memory from './Memory';
import { Link } from 'react-router-dom';
import { emptyMemories } from '../helpers';

class Memories extends React.Component {

	render() {

		let memories = this.props.memories;

		if ( emptyMemories( memories ) ) {

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
				Object.keys( memories ).map(
					key => (
						<Memory
							key={key}
							index={key}
							memories={memories[key]}
						/>
					)
				)
			}
			</React.Fragment>
		);

	}

}

export default Memories;