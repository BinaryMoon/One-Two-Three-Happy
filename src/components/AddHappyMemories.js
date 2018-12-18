import React from 'react';
import { rando, getDate, getToday } from '../helpers';
import { addMemory, getMemoryKey } from '../memories';
import { exportTags } from '../tags';
import { Link } from 'react-router-dom';
import { openmojiPath, openmojiJoy } from '../openmoji';
import EmojiList from './EmojiList';
import db, { databaseExport } from '../database';


/**
 * User input form for entering the days happy memories.
 */
class AddHappyMemories extends React.Component {

	state = {
		step: 0,
		memories: {},
		memory: '',
		emoji: 'happy',
		tags: [],
	};

	// References to the different components.
	memoryRef = React.createRef();

	componentDidMount() {

		databaseExport();

		// Load Memories.
		db
			.table( 'memories' )
			.where( 'id' )
			.startsWith( getToday() )
			.toArray()
			.then(
				(memories) => {
					let state = { memories };

					if ( 'undefined' !== typeof memories[ 0 ] ) {
						state.memory = ( 'string' === typeof memories[ 0 ].memory ? memories[ 0 ].memory : '' );
						state.emoji = ( 'string' === typeof memories[ 0 ].emoji ? memories[ 0 ].emoji : 'happy' );
					}

					this.setState( state );
				}
			);

		// Load Tags.
		db
			.table( 'tags' )
			.toArray()
			.then(
				(tags) => {
					this.setState( { tags } );
				}
			);

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
		if ( this.state.step >= 3 ) {
			return false;
		}

		let step = this.state.step;

		let memories = { ...this.state.memories };

		if ( ! memories[ step ] ) {
			memories[ step ] = {};
		}

		memories[ step ] = {
			id: getMemoryKey( this.state.step ),
			memory: this.memoryRef.current.value,
			emoji: this.state.emoji,
			date: getDate(),
		};

		this.setState(
			{
				memories
			}
		);

		addMemory( memories[ step ] );

		let newTags = exportTags( memories[ step ].memory, this.state.tags );

		this.setState(
			{
				tags: newTags
			}
		);

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

		let state = {
			step,
			memory: '',
			emoji: 'happy',
		};

		if ( this.state.memories[ step ] ) {
			state.memory = ( this.state.memories[ step ].memory ? this.state.memories[ step ].memory : '' );
			state.emoji = ( this.state.memories[ step ].emoji ? this.state.memories[ step ].emoji : 'happy' );
		}

		// Change the step.
		this.setState( state );

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
		if ( this.state.step >= 3 ) {

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
		let id = getMemoryKey( this.state.step );

		return (
			<React.Fragment>
				<textarea
					ref={this.memoryRef}
					key={'editor' + id}
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
		if ( this.state.step < 2 ) {
			buttons.push(
				<button
					className="next-wizard"
					onClick={ this.nextStep }
					key={ 'next' + this.state.step }
				>Next Memory</button>
			);
		}

		// Finish the wizard.
		if ( 2 === this.state.step ) {
			buttons.push(
				<button
					className="next-wizard"
					onClick={ this.nextStep }
					key={ 'next' + this.state.step}
				>Finish</button>
			);
		}

		return buttons;

	};


	render() {

		return (
			<form onSubmit={this.formSubmit} className={ 'form-step' + this.state.step }>

				<nav className="wizard">
					<button className="step0" onClick={() => { this.setStep( 0 ); }}>1</button>
					<button className="step1" onClick={() => { this.setStep( 1 ); }}>2</button>
					<button className="step2" onClick={() => { this.setStep( 2 ); }}>3</button>
					<button className="step3" onClick={() => { this.setStep( 3 ); }}>Happy</button>
				</nav>

				{ this.getCurrentComponent() }

				{ this.getWizardButtons() }

			</form>
		);

	}

}

export default AddHappyMemories;