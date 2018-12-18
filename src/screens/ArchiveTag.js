import React from 'react';
import Archives from './Archives';


class ArchiveTag extends React.Component {

	render() {

		let params = this.props.match.params;

		return (
			<Archives
				title={'Tag: <strong>' + params.tag + '</strong>'}
				tag={params.tag}
			/>
		);


	};

};

export default ArchiveTag;