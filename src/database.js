import Dexie from 'dexie';

const db = new Dexie( 'onetwothree' );


/**
 * Setup the tables.
 */
db.version(1).stores(
	{
		memories: 'id, emoji, memory, date',
		tags: '++',
		meta: 'key',
	}
);


/**
 * Export all table info to the console.
 */
export function databaseExport() {

	databaseTableExport( 'memories' );
	databaseTableExport( 'tags' );
	databaseTableExport( 'meta' );

}


/**
 * Export the specified table data.
 *
 * @param {string} table Table name.
 */
function databaseTableExport( table ) {

	db
		.table( table )
		.toArray()
		.then(
			( data ) => {
				// console.log( table, JSON.stringify( data ) );
			}
		);

}

export default db;