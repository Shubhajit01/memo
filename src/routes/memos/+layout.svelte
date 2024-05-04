<script>
	import MemosHeader from '$lib/components/memos-header.svelte';
	import MemosList from '$lib/components/memos-list.svelte';

	let { children, data } = $props();
</script>

<div class="h-dvh w-dvw overflow-clip flex flex-col items-stretch [--header-h:_4rem]">
	<MemosHeader />
	<main class="grow flex h-[calc(100dvh_-_var(--header-h))]">
		<MemosList initialList={data.list} />
		<div class="grow">
			{@render children()}
		</div>
	</main>
</div>
