<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	
	export let filteredNames;
	export let selectName;
</script>

{#if filteredNames.length > 0}
	<ul transition:scale class="suggestions">
		{#each filteredNames as words, i (words)}
			<li transition:slide on:keydown={() => {}} on:click={() => selectName(words)}>{words}</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		flex-direction: column;
		top: 3rem;
		box-shadow: 0px 8px 10px 10px hsla(30, 4%, 0%, 0.5);
		left: 4vw;
		border-radius: 0px 0px 10px 10px;
		background: #12181f;
	}
	li {
		/* text-decoration: none; */
		list-style: none;
		background: #24a8a6;
		margin: 0.4rem;
		padding: 1px 3px;
		font-size: 0.9rem;
		border-radius: 5px;
	}
</style>
