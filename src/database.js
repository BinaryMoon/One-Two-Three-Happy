import Dexie from 'dexie';

const db = new Dexie( 'onetwothree' );

db.version(1).stores(
	{
		memories: 'id, emoji, memory, date',
		tags: '++',
	}
);

export default db;