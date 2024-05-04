import { getMemo } from '$lib/services/memos';

export async function load({ params, route }) {
	const snapshot = await getMemo(params.id);
	return { snapshot, id: params.id, routeId: route.id };
}
