import { goto } from '$app/navigation';
import { getDB } from '$lib/db';
import { type EditorState } from 'lexical';
import { deriveName } from './utils';

export async function getMemosList() {
	const _db = await getDB();
	const list = await _db.collections.memo.find({ sort: [{ _updatedAt: 'desc' }] }).exec();
	return list;
}

export async function addMemo() {
	const db = await getDB();
	const { id } = await db.collections.memo.insert({
		id: crypto.randomUUID(),
		name: 'Untitled Memo',
		body: '',
		userId: '',
		_createdAt: Date.now(),
		_updatedAt: Date.now()
	});
	await goto(`/memos/${id}`);
}

export async function deleteMemo(id: string) {
	const db = await getDB();
	const memo = await db.collections.memo.findOne(id).exec();
	if (!memo) return;
	await memo.remove();
}

export async function getMemo(id: string) {
	const db = await getDB();
	const memo = await db.collections.memo.findOne(id).exec();
	return memo;
}

export async function updateMemo({ id, body }: { id: string; body: string }) {
	const db = await getDB();
	const memo = await db.collections.memo.findOne(id).exec();
	if (!memo) return;
	await memo.incrementalPatch({
		body,
		_updatedAt: Date.now()
	});
}

export async function updateMemoFromEditorState({ id, state }: { id: string; state: EditorState }) {
	const db = await getDB();
	const memo = await db.collections.memo.findOne(id).exec();
	if (!memo) return;
	const body = JSON.stringify(state);

	if (body === memo.body) return;

	await memo.incrementalPatch({
		body,
		name: deriveName(state),
		_updatedAt: Date.now()
	});
}
