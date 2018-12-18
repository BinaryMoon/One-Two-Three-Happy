import { getToday } from './helpers';
import db from './database';


/**
 * Get a list of all the memories stored.
 */
export function getMemories() {

	let memories = [];

	if ( memories && memories.length > 0 ) {
		memories = JSON.parse( memories );
		memories = sortMemories( memories );
		return memories;
	}

	return [];

}


/**
 * Save a new memory.
 *
 * @param {object} memory The memory to save/ update.
 */
export function addMemory( memory = null ) {

	if ( null === memory ) {
		return;
	}

	if ( '' === memory.memory ) {
		return;
	}

	if ( null === memory.emoji ) {
		memory.emoji = 'happy';
	}

	db
		.table( 'memories' )
		.put( memory );

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

	if ( ! memories[0].memory ) {
		return true;
	}

	return false;

}


/**
 * Get a key for saving the Wizard tab memory data for each day.
 *
 * @param {int} step Current wizard tab.
 */
export function getMemoryKey( step ) {

	return getToday() + '-' + step;

}