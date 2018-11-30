import React from 'react';
import { getTodaysMemories } from '../helpers';
import { addMemories, rando } from '../helpers';
import { Link } from 'react-router-dom';
import { openmojiPath, openmojiJoy } from '../openmoji';


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

		let memories = getTodaysMemories();

		if ( ! memories ) {
			memories = {
				memory1: '',
				memory2: '',
				memory3: '',
			};
		}

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

		// let memoryString = memories.memory1 + memories.memory2 + memories.memory3;

		// console.log( memoryString );

		// if ( memoryString ) {
			addMemories( memories );
		// }

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


	previousStep = ( event ) => {
		this.setStep( this.state.step - 1 );
	};


	getCurrentComponent = () => {

		if ( this.state.step >= 4 ) {

			let image = openmojiPath( rando( openmojiJoy ) );

			return (
				<div className="finished message">
					<img src={image} alt="Yay!" />
					<h3>Happy Days!</h3>
					<div className="actions">
						<Link to="/archive/" className="archive button">View Archive</Link>
						<button className="ghost" onClick={() => { this.setStep( 1 ); }}>Start Again</button>
					</div>
				</div>
			);

		}

		let id = 'memory' + this.state.step;

		return (
			<React.Fragment>
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

		// if ( this.state.step > 1 ) {
		// 	buttons.push(
		// 		<button
		// 			onClick={this.previousStep}
		// 			key={'back'+this.state.step}
		// 		>Back</button>
		// 	);
		// }

		if ( this.state.step < 3 ) {
			buttons.push(
				<button
					onClick={this.nextStep}
					key={'next'+this.state.step}
				>Next Memory</button>
			);
		}

		if ( 3 === this.state.step ) {
			buttons.push(
				<button
					onClick={this.nextStep}
					key={'next'+this.state.step}
				>Finish</button>
			);
		}

		return buttons;

	};


	render() {

		return (
			<form onSubmit={this.formSubmit} className={'form-step'+this.state.step}>

				<nav className="wizard">
					<button className="step1" onClick={() => { this.setStep( 1 ); }}>1</button>
					<button className="step2" onClick={() => { this.setStep( 2 ); }}>2</button>
					<button className="step3" onClick={() => { this.setStep( 3 ); }}>3</button>
					<button className="step4" onClick={() => { this.setStep( 4 ); }}>Complete</button>
				</nav>

				{ this.getCurrentComponent() }

				{ this.getWizardButtons() }

			</form>
		);

	}

}

export default AddHappyMemories;