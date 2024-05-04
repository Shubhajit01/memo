import { getContext, setContext } from 'svelte';
import type { AppDatabase } from './db';

export function setDB(db: AppDatabase) {
	setContext('db', db);
}

export function getDB(): AppDatabase {
	return getContext('db');
}
