<script>
	import { drugProperties, isExpandedForGlossary, drugStore } from '../stores';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
</script>

{#if $isExpandedForGlossary}
	<main transition:slide class="cont">
		<!-- <main class="main-class" transition:slide> -->
		<ul>
			<li>
				<h1>FULL BRAND NAME</h1>
				{#each $drugStore as aDrugShortenedBrandName}
					<h2>{aDrugShortenedBrandName[0]}</h2>
				{/each}
			</li>

			<li>
				<h1>UNIT NAME</h1>
				{#each $drugProperties as aDrugProperty}
					<h2>{aDrugProperty[0]}</h2>
				{/each}
			</li>
		</ul>
		<ul />
		<!-- </main> -->
	</main>
{/if}

<style>
	h1 {
		border-bottom: 3px solid hsla(100, 100%, 30%, 1);
		width: 100%;
		font-size: 0.8rem;
		display: flex;
		letter-spacing: 0.5px;
		align-items: center;
		color: hsla(0, 0%, 15%, 1);
		justify-content: center;
	}
	h2 {
		color: hsla(0, 0%, 15%, 1);
		width: 100%;
		font-size: 0.8rem;
		padding: 2px 6px;
		margin: 0.3rem 0rem;
		background: hsla(222, 50%, 70%, 1);
		letter-spacing: 0.5px;
		border-radius: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cont {
		display: flex;
		/* width: 100vw; */
		box-shadow: 0px 2px 1px 9px hsla(222, 50%, 10%, 0.5);
		/* display: flex; */
		flex-direction: column;
		border-radius: 1rem;
		width: fit-content;
		align-items: center;
		padding: 15px;
		background: hsla(222, 50%, 85%, 1);
		justify-content: center;
		transition: all ease-in-out 0.2s;

		/* z-index: 9999; */
		/* transform: translate(50%, 50%); */
		/* position: absolute; */
		/* align-items: center; */
	}
	.main-class {
	}
	ul:first-child {
		display: flex;
		list-style: none;
		margin: 0px !important;
		padding: 0px !important;
	}
	ul:last-child {
		width: 100%;
		display: flex;
		list-style: none;
	}
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0.5rem;
	}
</style>
