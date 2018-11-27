import React from "react";


/**
 * A textarea for one of the days three memories.
 */
class HappyMemory extends React.Component {

	state = {};

	constructor( props ) {

		super( props );

		this.state = {
			memory: props.memory
		};

	}


	/**
	 * Add a change handler to set the textarea state.
	 */
	handleChange = ( event ) => {

		this.setState(
			{
				memory: event.currentTarget.value
			}
		);

	}


	render() {

		return (
			<React.Fragment>
				<label htmlFor={this.props.id}>{this.props.number}.</label>
				<textarea
					ref={this.props.formRef}
					name={this.props.id}
					id={this.props.id}
					value={this.state.memory}
					onChange={this.handleChange}
				></textarea>
			</React.Fragment>
		);

	}

}

export default HappyMemory;