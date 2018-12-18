import React from "react";
import { getTagUrl } from "../tags";
import { Link } from 'react-router-dom';


class Tags extends React.Component {

	render() {

		if ( ! this.props.tags ) {
			return null;
		}

		let tags = this.props.tags;

		return (
			<div className="tags">
			{
				Object.keys( tags ).map(
					key => {
						let url = getTagUrl( tags[ key ] );
						return (
							<Link
								key={'tag' + key}
								to={url}
							>{tags[ key ]}</Link>
						);
					}
				)
			}
			</div>
		);

	}

}

export default Tags;