<script lang="ts">
	import type { LexicalEditor } from 'lexical';

	import UndoIcon from '~icons/lucide/undo-2';
	import RedoIcon from '~icons/lucide/redo-2';
	import TitleIcon from '~icons/lucide/heading';
	import HeadingIcon from '~icons/lucide/heading-2';
	import SubHeadingIcon from '~icons/lucide/heading-3';
	import ParagraphIcon from '~icons/lucide/type';
	import BulletListIcon from '~icons/lucide/list';
	import NumberedListIcon from '~icons/lucide/list-ordered';

	import {
		formatHeading,
		undo,
		redo,
		formatParagraph,
		formatBulletList,
		formatNumberedList
	} from '$lib/services/editor-helpers';

	let { editor }: { editor: LexicalEditor } = $props();

	const toolGroups = [
		[
			{ text: 'Undo', icon: UndoIcon, action: () => undo(editor) },
			{ text: 'Redo', icon: RedoIcon, action: () => redo(editor) }
		],
		[
			{ text: 'Title', icon: TitleIcon, action: () => formatHeading(editor, 'h1') },
			{ text: 'Heading', icon: HeadingIcon, action: () => formatHeading(editor, 'h2') },
			{
				text: 'Subheading',
				icon: SubHeadingIcon,
				action: () => formatHeading(editor, 'h3')
			},
			{
				text: 'Paragraph',
				icon: ParagraphIcon,
				action: () => formatParagraph(editor)
			},
			{
				text: 'Bullet List',
				icon: BulletListIcon,
				action: () => formatBulletList(editor)
			},
			{
				text: 'Numbered List',
				icon: NumberedListIcon,
				action: () => formatNumberedList(editor)
			}
		]
	];
</script>

<div class="grow-0 mb-12 flex items-center border-b border-gray-200 px-6 py-2 gap-20">
	{#each toolGroups as group}
		<ul class="flex items-center divide-x border rounded-md overflow-clip">
			{#each group as { action, text, icon } (text)}
				<li>
					<button
						onclick={action}
						class="py-1 px-2 block hover:bg-gray-100/70 transition-colors active:bg-indigo-600 active:text-white"
					>
						<svelte:component this={icon} class="size-5" />
					</button>
				</li>
			{/each}
		</ul>
	{/each}
</div>
