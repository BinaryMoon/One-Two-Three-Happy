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
						<React.Fragment key={key}>
							<Memory
								memory={memories[key].memory1}
								date={memories[key].date}
								emoji={memories[key].emoji1}
							/>
							<Memory
								memory={memories[key].memory2}
								date={memories[key].date}
								emoji={memories[key].emoji2}
							/>
							<Memory
								memory={memories[key].memory3}
								date={memories[key].date}
								emoji={memories[key].emoji3}
							/>
						</React.Fragment>
					)
				)
			}
			</React.Fragment>
		);

	}

}

export default Memories;