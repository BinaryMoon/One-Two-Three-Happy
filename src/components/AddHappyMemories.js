import React from 'react';
import { getTodaysMemories } from '../helpers';
import { addMemories } from "../helpers";


/**
 * User input form for entering the days happy memories.
 */
class AddHappyMemories extends React.Component {

	state = {
		step: 1,
		memories: {},
		memory: ''
	};

	memoryRef = React.createRef();

	constructor( props ) {

		super( props );

		this.state.memories = getTodaysMemories();
		this.state.memory = this.state.memories['memory' + this.state.step];

	};


	/**
	 * Add a change handler to set the textarea state.
	 */
	handleChange = ( event ) => {

		this.setState(
			{
				memory: event.currentTarget.value
			}
		);

	};


	/**
	 * Save the new memories.
	 */
	formSubmit = ( event = null ) => {

		if ( event ) {
			event.preventDefault();
		}

		// Don't save anything, we're at the end now.
		if ( this.state.step >= 4 ) {
			return false;
		}

		let memories = { ...this.state.memories };
		memories['memory' + this.state.step] = this.memoryRef.current.value;

		this.setState(
			{
				memories
			}
		);

		addMemories( memories );

	};


	setStep = ( step ) => {

		if ( step === this.state.step ) {
			return false;
		}

		// Save the current values.
		this.formSubmit();

		// Change the step.
		this.setState(
			{
				step: step,
				memory: this.state.memories['memory' + step]
			}
		);

	};


	nextStep = ( event ) => {
		this.setStep( this.state.step + 1 );
	};


	// Same as nextStep, but decrementing
	previousStep = ( event ) => {
		this.setStep( this.state.step - 1 );
	};


	getCurrentComponent = () => {

		if ( this.state.step >= 4 ) {
			return (
				<div className="finished">Finished</div>
			);
		}

		let id = 'memory' + this.state.step;

		return (
			<React.Fragment>
				<label htmlFor={id}>{this.state.step}.</label>
				<textarea
					ref={this.memoryRef}
					key={id}
					name={id}
					id={id}
					value={this.state.memory}
					onChange={this.handleChange}
				></textarea>
			</React.Fragment>
		);

	};


	getWizardButtons = () => {

		let buttons = [];

		if ( this.state.step > 1 ) {
			buttons.push(
				<button
					onClick={this.previousStep}
					key={'back'+this.state.step}
				>Back</button>
			);
		}

		if ( this.state.step < 4 ) {
			buttons.push(
				<button
					onClick={this.nextStep}
					key={'next'+this.state.step}
				>Next</button>
			);
		}

		return buttons;

	};


	render() {

		return (
			<form onSubmit={this.formSubmit} className={'step'+this.state.step}>

				{ this.getCurrentComponent() }

				<button onClick={() => { this.setStep( 1 ); }}>1</button>
				<button onClick={() => { this.setStep( 2 ); }}>2</button>
				<button onClick={() => { this.setStep( 3 ); }}>3</button>
				<button onClick={() => { this.setStep( 4 ); }}>4</button>

				{ this.getWizardButtons() }

			</form>
		);

	}

}

export default AddHappyMemories;