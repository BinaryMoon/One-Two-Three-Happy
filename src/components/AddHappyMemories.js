import React from 'react';
import HappyMemory from "./HappyMemory";
import { getTodaysMemories } from '../helpers';
import { addMemories } from "../helpers";


/**
 * User input form for entering the days happy memories.
 */
class AddHappyMemories extends React.Component {

	memory1Ref = React.createRef();
	memory2Ref = React.createRef();
	memory3Ref = React.createRef();


	/**
	 * Save the new memories.
	 */
	formSubmit = ( event ) => {

		event.preventDefault();

		let memories = {
			'memory1': this.memory1Ref.current.value,
			'memory2': this.memory2Ref.current.value,
			'memory3': this.memory3Ref.current.value
		};

		addMemories( memories );

	};


	render() {

		let memories = getTodaysMemories();

		return (
			<form onSubmit={this.formSubmit}>

				<HappyMemory
					formRef={this.memory1Ref}
					id="memory-1"
					number={1}
					memory={memories.memory1}
				/>
				<HappyMemory
					formRef={this.memory2Ref}
					id="memory-2"
					number={2}
					memory={memories.memory2}
				/>
				<HappyMemory
					formRef={this.memory3Ref}
					id="memory-3"
					number={3}
					memory={memories.memory3}
				/>

				<input type="submit" value="Save Happy Memories" />
			</form>
		);

	}

}

export default AddHappyMemories;