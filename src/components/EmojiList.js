import React from 'react';
import { openmoji, openmojiPath } from '../openmoji';

class EmojiList extends React.Component {

	render() {

		// Ensure the emoji value is always set to something.
		let defaultKey = this.props.emoji;
		if ( ! defaultKey ) {
			defaultKey = 'happy';
		}

		return (
			<div className="emoji-list">
			{Object.keys( openmoji ).map(
				(key) => (
					<label
						key={key}
					>
						<input
							ref={this.props.formRef}
							type="radio"
							value={key}
							name="emoji-list"
							checked={defaultKey === key}
							onChange={this.props.handleEmojiChange}
						/>
						<img src={ openmojiPath( openmoji[ key ] ) } alt={key} />
					</label>
				)
			)}
			</div>
		);

	};

};

export default EmojiList;