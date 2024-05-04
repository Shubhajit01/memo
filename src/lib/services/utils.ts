import { CONSTS } from '$lib/data/constants';
import { $getRoot, type EditorState } from 'lexical';

export function formatDate(date: Date | number | string) {
	const _date = date instanceof Date ? date : new Date(date);
	return Intl.DateTimeFormat(navigator.language, {
		dateStyle: 'medium'
	}).format(_date);
}

export function deriveName(state: EditorState) {
	console.log(state.read(() => $getRoot().getTextContent()));
	return (
		state
			.read(() => $getRoot().getTextContent())
			.trim()
			.slice(0, 60) || CONSTS.EMPTY_NAME
	);
}
