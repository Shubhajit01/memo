<script lang="ts">
	import Editor from '$lib/components/editor.svelte';
	import { CONSTS } from '$lib/data/constants';
	import { updateMemoFromEditorState } from '$lib/services/memos';

	let { data } = $props();
</script>

<svelte:head>
	<title>Memo</title>
</svelte:head>

{#key data.id}
	{#if data.snapshot}
		<Editor
			content={data.snapshot.body || CONSTS.EMPTY_EDITOR_STATE}
			onUpdate={(state) => {
				updateMemoFromEditorState({
					state,
					id: data.id
				});
			}}
		/>
	{/if}
{/key}
