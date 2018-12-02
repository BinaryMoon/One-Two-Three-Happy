import React from 'react';
import Header from '../components/Header';
import Archive from '../components/Archive';
import { getMemoriesByTag } from '../memories';

class ArchiveTag extends React.Component {

	render() {

		let params = this.props.match.params;
		let memories = getMemoriesByTag( params.tag );

		return (
			<React.Fragment>
				<Header />
				<Archive
					title={'Tag: <strong>' + params.tag + '</strong>'}
					memories={memories}
					tag={params.tag}
				/>
			</React.Fragment>
		);


	};

};

export default ArchiveTag;