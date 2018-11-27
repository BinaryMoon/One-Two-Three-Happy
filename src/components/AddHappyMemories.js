import React from "react";
import HappyMemory from "./HappyMemory";

class AddHappyMemories extends React.Component {

	render() {

		return (
			<form>
				<HappyMemory id="memory-1">1.</HappyMemory>
				<HappyMemory id="memory-2">2.</HappyMemory>
				<HappyMemory id="memory-3">3.</HappyMemory>
				<input type="submit" value="Save Happy Memories" />
			</form>
		);

	}

}

export default AddHappyMemories;