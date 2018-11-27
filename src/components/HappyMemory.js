import React from "react";

class HappyMemory extends React.Component {

	textareaRef = React.createRef();

	render() {

		return (
			<React.Fragment>
				<label for={this.props.id}>{this.props.children}</label>
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