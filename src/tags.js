
const tagRegex = /#[-_a-z0-9]+/gi;

/**
 * Get a list of all the tags.
 */
export function getTags() {

	let tags = localStorage.getItem( 'tags' );

	if ( tags && tags.length > 0 ) {
		return JSON.parse( tags );
	}

	return [];

}


/**
 * Save the list of tags in Local Storage.
 *
 * @param {array} tags List of tags.
 */
export function saveTags( tags ) {

	if ( ! tags ) {
		return;
	}

	tags.sort(
		( a, b ) => {
			return a.toLowerCase().localeCompare( b.toLowerCase() );
		}
	);

	localStorage.setItem( 'tags', JSON.stringify( tags ) );

}


/**
 * Extract tags from a users memory and then save them.
 *
 * @param {string} text Text containing a memory, and possibly some tags.
 */
export function exportTags( text ) {

	if ( ! text ) {
		return;
	}

	let tags = getTags();
	let matches = text.match( tagRegex );

	if ( ! matches ) {
		return;
	}

	// Merge arrays and remove duplicates.
	tags = [
		...tags,
		...matches
	];

	// Make array unique.
	tags = [ ...new Set( tags ) ];

	saveTags( tags );

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