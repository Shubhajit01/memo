<script lang="ts">
	import { createEmptyHistoryState, registerHistory } from '@lexical/history';
	import { HeadingNode, QuoteNode, registerRichText } from '@lexical/rich-text';
	import { mergeRegister } from '@lexical/utils';
	import { createEditor, type EditorState, type SerializedEditorState } from 'lexical';
	import Toolbar from './toolbar.svelte';

	interface Props {
		content: string | SerializedEditorState;
		onUpdate(content: EditorState): void;
	}

	let { content, onUpdate }: Props = $props();

	let editorRef: HTMLDivElement | undefined;

	const editor = createEditor({
		editable: false,
		namespace: 'Editor',
		nodes: [HeadingNode, QuoteNode]
	});

	mergeRegister(registerRichText(editor), registerHistory(editor, createEmptyHistoryState(), 300));

	const addListener = () => {
		return editor.registerUpdateListener(({ editorState, tags }) => {
			if (tags.has('INIT')) return;
			onUpdate(editorState);
		});
	};

	$effect(() => {
		if (editorRef) {
			editor.setRootElement(editorRef);
			editor.setEditable(true);
		}
	});

	$effect(() => {
		if (editor.isEditable()) {
			try {
				const editorState = editor.parseEditorState(content);
				editor.setEditorState(editorState, { tag: 'INIT' });
			} catch {}
		}
		return addListener();
	});
</script>

<div class="flex flex-col h-full">
	<Toolbar {editor} />
	<div class="px-24 size-full grow">
		<div
			contenteditable
			bind:this={editorRef}
			class="size-full outline-none prose mx-auto max-w-full"
		></div>
	</div>
</div>
