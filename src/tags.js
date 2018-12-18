import db from './database';

const tagRegex = /#[-_a-z0-9]+/gi;


/**
 * Save the list of tags in Local Storage.
 *
 * @param {array} tags List of tags.
 */
export function saveTags( tags ) {

	if ( ! tags && tags.length < 1 ) {
		return;
	}

	tags.sort(
		( a, b ) => {
			return a.toLowerCase().localeCompare( b.toLowerCase() );
		}
	);

	db.table( 'tags' ).bulkPut( tags );

	return tags;

}


/**
 * Extract tags from a users memory and then save them.
 *
 * @param {string} text Text containing a memory, and possibly some tags.
 * @param {object} currentTags List of existing tags.
 */
export function exportTags( text, currentTags ) {

	if ( ! text ) {
		return;
	}

	let matches = text.match( tagRegex );
	let tags = {};

	if ( ! matches ) {
		return;
	}

	// Filter out any tags that have already been saved.
	tags = matches.filter(
		( key ) => {
			return currentTags.indexOf( key ) < 0;
		}
	);

	if ( tags ) {
		saveTags( tags );
	}

	// Merge the currentTags with the newly saved tags so that we can update the tag state.
	return [
		...currentTags,
		...tags
	];

}


/**
 * Link any tags found in a memory to the relevant tag archive.
 *
 * @param {string} text Text that may contain tags.
 */
export function linkTags( text ) {

	let matches = text.match( tagRegex );

	if ( ! matches ) {
		return text;
	}

	Object.keys( matches ).map(
		key => {
			let url = getTagUrl( matches[ key ] );
			let replace = `<a href="${url}">${matches[key]}</a>`;
			let reg = new RegExp( matches[key], 'gi' );

			text = text.replace( reg, replace );

			return true;
		}
	);

	return text;

}


/**
 * Generate a tag archive url based upon the tag name.
 *
 * @param {string} tag Tag name.
 */
export function getTagUrl( tag ) {

	tag = tag.replace( '#', '');

	return `/tag/${tag}/`;

}