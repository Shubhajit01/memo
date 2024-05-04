import { init } from '$lib';

export const ssr = false;

export async function load() {
	console.time();
	const db = await init();
	console.timeEnd();
	return { db };
}
