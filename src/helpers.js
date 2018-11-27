/**
 * Helpers.js
 *
 * Generic helpful functions that can be used anywhere.
 */


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
