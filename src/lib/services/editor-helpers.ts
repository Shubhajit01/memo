import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { $createHeadingNode, type HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
	$createParagraphNode,
	$getSelection,
	$isRangeSelection,
	REDO_COMMAND,
	UNDO_COMMAND,
	type LexicalEditor
} from 'lexical';

export function formatHeading(editor: LexicalEditor, headingSize: HeadingTagType) {
	editor.update(() => {
		const selection = $getSelection();
		$setBlocksType(selection, () => $createHeadingNode(headingSize));
	});
}

export function formatBulletList(editor: LexicalEditor) {
	editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
}

export function formatNumberedList(editor: LexicalEditor) {
	editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
}

export function formatParagraph(editor: LexicalEditor) {
	editor.update(() => {
		const selection = $getSelection();
		if ($isRangeSelection(selection)) {
			$setBlocksType(selection, () => $createParagraphNode());
		}
	});
}

export function undo(editor: LexicalEditor) {
	editor.dispatchCommand(UNDO_COMMAND, undefined);
}

export function redo(editor: LexicalEditor) {
	editor.dispatchCommand(REDO_COMMAND, undefined);
}
