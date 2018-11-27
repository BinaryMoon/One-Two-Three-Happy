import React from "react";
import HappyMemory from "./HappyMemory";

class AddHappyMemories extends React.Component {

	render() {

		return (
			<form>
				<HappyMemory>1.</HappyMemory>
				<HappyMemory>2.</HappyMemory>
				<HappyMemory>3.</HappyMemory>
				<input type="submit" value="Save Happy Memories" />
			</form>
		);

	}

}

export default AddHappyMemories;