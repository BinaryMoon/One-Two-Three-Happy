/**
 * Helpers.js
 *
 * Generic helpful functions that can be used anywhere.
 */

import fecha from "./vendors/fecha";

/**
 * Pick a random item from an array.
 *
 * @param {array} arr The array to select from.
 */
export function rando( arr ) {

	return arr[Math.floor(Math.random() * arr.length)];

}


/**
 * Convert a text name in to a 'safe' slug.
 *
 * @param {string} text Text name to convert.
 */
export function slugify( text ) {

	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "");

}


/**
 * Get the current date.
 */
export function getDate( date = null ) {

	if ( date === null ) {
		date = new Date();
	}

	return fecha.format( date, 'Do MMMM YYYY' );

}


/**
 * Get a list of all the memories stored.
 */
export function getMemories() {

	let memories = localStorage.getItem( 'memories' );

	if ( memories && memories.length > 0 ) {
		memories = JSON.parse( memories );
		memories = sortMemories( memories );
		return memories;
	}

	return [];

}


/**
 * Get a list of the memories saved for today only.
 */
export function getTodaysMemories() {

	let memories = getMemories();

	if ( ! memories ) {
		return false;
	}

	// Filter out all the memories except the one that was saved today.
	memories = memories.filter(
		function ( memory ) {
			return memory.prettyDate === getDate();
		}
	);

	if ( memories[0] ) {
		return memories[0];
	}

	return false;

}


/**
 * Add a new memory.
 *
 * @param {object} newMemories 3 new memories for today.
 */
export function addMemories( newMemories ) {

	let memories = getMemories();
	let date = new Date();

	// Filter out todays memory, and keep the rest.
	memories = memories.filter(
		function ( memory ) {
			return memory.prettyDate !== getDate();
		}
	);

	newMemories.date = date.getTime();
	newMemories.prettyDate = getDate();

	memories.push( newMemories );

	saveMemories( memories );

}


/**
 * Save the current memories state.
 *
 * @param {object} memories List of all memories.
 */
export function saveMemories( memories ) {

	memories = sortMemories( memories );

	localStorage.setItem( 'memories', JSON.stringify( memories ) );

}


/**
 * Sort the memories in reverse chronological order.
 *
 * @param {array} memories List of memories.
 */
export function sortMemories( memories = null ) {

	if ( ! memories || memories.length <= 0 ) {
		return memories;
	}

	memories.sort(
		function( a, b ) {
			return b.date - a.date;
		}
	);

	return memories;

}


/**
 * Check to see if the memories object is empty or if there is something to display.
 *
 * @param {object} memories List of memories.
 */
export function emptyMemories( memories = null ) {

	if ( ! memories ) {
		return true;
	}

	if ( 'object' !== typeof memories ) {
		return true;
	}

	if ( memories.length < 1 ) {
		return true;
	}

	if ( ! memories[0] ) {
		return true;
	}

	if (1 === memories.length && ! memories[0].memory1 && ! memories[0].memory2 && ! memories[0].memory3 ) {
		return true;
	}

	return false;

}
