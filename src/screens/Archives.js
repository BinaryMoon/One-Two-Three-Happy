import React from "react";
import Header from "../components/Header";
import Archive from "../components/Archive";
import db from '../database';

class Archives extends React.Component {

	state = {
		memories: {},
		tags: [],
	};

	componentDidMount() {

		db.table( 'memories' )
			.orderBy( 'id' )
			.reverse()
			.toArray()
			.then(
				( memories ) => {
					this.setState( { memories } );
				}
			);

		db
			.table( 'tags' )
			.toArray()
			.then(
				(tags) => {
					this.setState( { tags } );
				}
			);

	}

	render() {

		let title = this.props.title ? this.props.title : 'Happy Memories';
		let memories = { ...this.state.memories };

		if ( this.props.tag ) {
			let tag = '#' + this.props.tag;
			let keys = Object.keys( memories ).filter(
				( key ) => {
					let included = memories[key].memory.toLowerCase().includes( tag );
					return included;
				}
			);

			memories = keys.map(
				( key ) => {
					return memories[key];
				}
			);
		}

		return (
			<React.Fragment>
				<Header />
				<Archive
					title={ title }
					memories={ memories }
					tags={ this.state.tags }
				/>
			</React.Fragment>
		);

	};

};

export default Archives;