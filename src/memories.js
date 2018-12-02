import { getDate } from './helpers';


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
 * Get memories that include the specified tag.
 *
 * @param {string} tag Tag to filter by.
 */
export function getMemoriesByTag( tag ) {

	let memories = getMemories();

	tag = '#' + tag;

	Object.keys( memories ).map(
		key => {
			if ( memories[key].memory1 && ! memories[key].memory1.includes( tag ) ) { memories[key].memory1 = ''; }
			if ( memories[key].memory2 && ! memories[key].memory2.includes( tag ) ) { memories[key].memory2 = ''; }
			if ( memories[key].memory3 && ! memories[key].memory3.includes( tag ) ) { memories[key].memory3 = ''; }

			if ( ! memories[key].memory1 && ! memories[key].memory2 && ! memories[key].memory3 ) {
				delete memories[key];
			}
			return true;
		}
	);

	return memories;

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
