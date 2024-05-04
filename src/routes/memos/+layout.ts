import { getMemosList } from '$lib/services/memos.js';

export const load = async () => {
	const list = await getMemosList();
	return { list };
};
