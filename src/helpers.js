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
 * Get a nicely formatted date.
 *
 * @param {timestamp} date The date you want to format. If no date is specified it will use todays date.
 */
export function getDate( date = null ) {

	if ( date === null ) {
		date = new Date();
	}

	return fecha.format( date, 'Do MMMM YYYY' );

}


/**
 * Get todays date, nicely formatted.
 */
export function getToday() {

	let date = new Date();
	return fecha.format( date, 'YYYY-MM-DD' );

}

