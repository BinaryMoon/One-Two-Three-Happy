import React from 'react';
import { rando, getDate } from '../helpers';
import { getTodaysMemories, addMemories } from '../memories';
import { Link } from 'react-router-dom';
import { openmojiPath, openmojiJoy } from '../openmoji';
import EmojiList from './EmojiList';


/**
 * User input form for entering the days happy memories.
 */
class AddHappyMemories extends React.Component {

	state = {
		step: 1,
		memories: {},
		memory: '',
		emoji: 'happy',
	};

	// References to the different components.
	memoryRef = React.createRef();

	constructor( props ) {

		super( props );

		let memories = getTodaysMemories();

		if ( ! memories ) {
			memories = {
				memory1: '',
				memory2: '',
				memory3: '',
				emoji1: 'happy',
				emoji2: 'happy',
				emoji3: 'happy',
			};
		}

		this.state.memories = getTodaysMemories();
		this.state.memory = this.state.memories['memory' + this.state.step];
		this.state.emoji = this.state.memories['emoji' + this.state.step];

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
	 * Add a change handler for setting the emoji value.
	 */
	handleEmojiChange = ( event ) => {

		this.setState(
			{
				emoji: event.currentTarget.value
			},
			this.formSubmit
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
		memories['emoji' + this.state.step] = this.state.emoji;

		this.setState(
			{
				memories
			}
		);

		addMemories( memories );

	};


	/**
	 * Set the current step for the wizard.
	 */
	setStep = ( step ) => {

		if ( step === this.state.step ) {
			return false;
		}

		// Save the current values.
		this.formSubmit();

		// Ensure there's a default value for the selected emoji.
		let emoji = 'happy';
		if ( this.state.memories['emoji' + step] ) {
			emoji = this.state.memories['emoji' + step];
		}

		// Change the step.
		this.setState(
			{
				step: step,
				memory: this.state.memories['memory' + step],
				emoji: emoji,
			}
		);

	};


	nextStep = ( event ) => {
		this.setStep( this.state.step + 1 );
	};


	previousStep = ( event ) => {
		this.setStep( this.state.step - 1 );
	};


	/**
	 * Get the current component for the wizard based on the slide being viewed.
	 * Most of the slides are the memory component so display the textarea.
	 * The final slide (slide 4) displays a completion message.
	 */
	getCurrentComponent = () => {

		// Final slide: Submission complete.
		if ( this.state.step >= 4 ) {

			let image = openmojiPath( rando( openmojiJoy ) );

			return (
				<div className="finished message">
					<img src={image} alt="Yay!" />
					<h3>All done for {getDate()}, Happy Days!</h3>
					<div className="actions">
						<Link to="/archive/" className="archive button">View Archive</Link>
						<button className="ghost" onClick={() => { this.setStep( 1 ); }}>Start Again</button>
					</div>
				</div>
			);

		}

		// Ask for a new memory.
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
				<EmojiList
					handleEmojiChange={this.handleEmojiChange}
					emoji={this.state.emoji}
				/>
			</React.Fragment>
		);

	};


	/**
	 * Get the buttons to enable progress through the wizard.
	 */
	getWizardButtons = () => {

		let buttons = [];

		// Next Memory.
		if ( this.state.step < 3 ) {
			buttons.push(
				<button
					className="next-wizard"
					onClick={this.nextStep}
					key={'next'+this.state.step}
				>Next Memory</button>
			);
		}

		// Finish the wizard.
		if ( 3 === this.state.step ) {
			buttons.push(
				<button
					className="next-wizard"
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