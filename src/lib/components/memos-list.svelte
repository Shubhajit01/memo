<script lang="ts">
	import { page } from '$app/stores';
	import PlusIcon from '~icons/lucide/plus';
	import { distinctUntilChanged, startWith } from 'rxjs/operators';
	import autoAnimate from '@formkit/auto-animate';

	import { db } from '$lib/db';
	import { addMemo } from '$lib/services/memos';
	import { formatDate } from '$lib/services/utils';
	import type { Memo } from '$lib/db/collections/memo';

	let { initialList = [] }: { initialList?: Array<Memo> } = $props();

	let memos = $derived(
		db.collections.memo
			.find({ sort: [{ _updatedAt: 'desc' }] })
			.$.pipe(startWith(initialList), distinctUntilChanged())
	);
</script>

<div class="grow-0 w-full max-w-72 border-r border-gray-200 overflow-y-auto overflow-x-clip h-full">
	<div
		class="flex items-center justify-between gap-4 p-4 sticky bg-white/90 backdrop-blur-sm left-0 top-0 z-[1]"
	>
		<h1 class="text-md inline font-semibold align-middle space-x-1">
			<span>Memos</span>
			<span class="text-sm">({$memos.length})</span>
		</h1>

		<button
			onclick={addMemo}
			aria-label="Add a new memo"
			class="cursor-pointer size-6 flex items-center justify-center border border-gray-200 rounded-md"
		>
			<PlusIcon class="size-5 text-gray-600" />
		</button>
	</div>

	<ul class="space-y-2 mb-4 pt-px" use:autoAnimate>
		{#each $memos as memo (memo.id)}
			{@const href = `/memos/${memo.id}`}
			<li class="px-4 block">
				<a
					{href}
					data-active={$page.url.pathname.startsWith(href)}
					class="py-3 px-4 border block space-y-px rounded-md group/link border-gray-200 hover:bg-gray-100/70 data-[active=true]:border-indigo-100 data-[active=true]:bg-indigo-600"
				>
					<p class="text-sm font-medium group-data-[active=true]/link:text-white w-full truncate">
						{memo.name}
					</p>
					<p class="text-xs text-gray-600 group-data-[active=true]/link:text-indigo-50">
						{formatDate(memo._updatedAt)}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</div>
