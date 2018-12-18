import React from 'react';
import Memory from './Memory';
import { Link } from 'react-router-dom';
import { emptyMemories } from '../memories';

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
							memory={memories[key].memory}
							date={memories[key].date}
							emoji={memories[key].emoji}
							key={'memory' + key}
						/>
					)
				)
			}
			</React.Fragment>
		);

	}

}

export default Memories;