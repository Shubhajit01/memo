<script>
	import SearchIcon from '~icons/lucide/search';
</script>

<header class="px-4 py-3 border-b h-[--header-h] border-gray-200 grow-0 flex gap-6 items-center">
	<div class="size-8 grow-0 rounded-full bg-gray-200 border border-gray-300"></div>
	<div class="grow">
		<div class="relative max-w-2xl mx-auto">
			<input
				type="search"
				placeholder="Search for memos"
				class="w-full focus:outline-none border pl-12 text-md border-gray-200 placeholder:text-gray-600 px-4 py-2 rounded-lg bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
			/>
			<SearchIcon class="size-5 text-gray-500 absolute left-4 top-2/4 -translate-y-2/4" />
		</div>
	</div>
	<div class="size-8 grow-0 rounded-full bg-indigo-500"></div>
</header>
