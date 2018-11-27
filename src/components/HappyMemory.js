import React from "react";

class HappyMemory extends React.Component {

	textareaRef = React.createRef();

	render() {

		return (
			<React.Fragment>
				<label>{this.props.children}</label>
				<textarea
					ref={this.textareaRef}
				>
				</textarea>
			</React.Fragment>
		);

	}

}

export default HappyMemory;