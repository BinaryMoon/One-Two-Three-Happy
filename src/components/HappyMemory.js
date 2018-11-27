import React from "react";


/**
 * A textarea for one of the days three memories.
 */
class HappyMemory extends React.Component {

	textareaRef = React.createRef();

	render() {

		return (
			<React.Fragment>
				<label htmlFor={this.props.id}>{this.props.children}</label>
				<textarea
					ref={this.textareaRef}
					id={this.props.id}
				>
				</textarea>
			</React.Fragment>
		);

	}

}

export default HappyMemory;