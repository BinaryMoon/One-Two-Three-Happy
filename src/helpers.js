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
export function getDate() {

	return fecha.format( new Date(), 'Do MMMM YYYY' );

}


/**
 * Get a list of all the memories stored.
 */
export function getMemories() {

	let memories = localStorage.getItem( 'memories' );

	if ( memories && memories.length ) {
		return JSON.parse( memories );
	}

	return {};

}


/**
 * Get a list of the memories saved for today only.
 */
export function getTodaysMemories() {

	let date = slugify( getDate() );
	let memories = getMemories();

	if ( memories[date] ) {
		return memories[date];
	}

	return false;

}


/**
 * Add a new memory.
 *
 * @param {object} newMemories 3 new memories for today.
 */
export function addMemories( newMemories ) {

	const memories = getMemories();
	const slug = slugify( getDate() );

	memories[ slug ] = newMemories;

	saveMemories( memories );

}


/**
 * Save the current memories state.
 *
 * @param {object} memories List of all memories.
 */
export function saveMemories( memories ) {

	localStorage.setItem( 'memories', JSON.stringify( memories ) );

}