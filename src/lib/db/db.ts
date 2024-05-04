import memoizee from 'memoizee';
import { createRxDatabase, type RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { type AppCollections, appCollections } from './collections';

export interface AppDatabase extends RxDatabase<AppCollections> {}

let _db: AppDatabase;

const init = memoizee(
	async () => {
		const db = await createRxDatabase<AppCollections>({
			name: 'memos:db',
			storage: getRxStorageDexie()
		});

		await db.addCollections(appCollections);

		_db = db;

		return db;
	},
	{ promise: true }
);

const getDB = init;

export { getDB, init, _db as db };
