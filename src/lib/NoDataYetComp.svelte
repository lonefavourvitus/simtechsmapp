<script>
	// @ts-nocheck

	import { mainBgDarkProp } from '../stores';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	export let emptyDataAnnouncer;
	export let HintToGetData;
	export { className as class };
	let className = '';

	let visible = false;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.0);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<main class={className} class:darkyMain={$mainBgDarkProp.darkyMain}>
	<div>
		{#if visible}
			<p class="e">{emptyDataAnnouncer}</p>

			<p>
				{HintToGetData}
			</p>
		{/if}

		<!-- <slot>this is a slot</slot>
	</div>
	<label>
		<input type="checkbox" bind:checked={visible} />
	</label> -->
	</div>
</main>

<style>
	.e {
		color: #5d8df5;
		text-decoration: underline;
	}
	main {
		/* background: hsla(200, 50%, 15%, 1); */

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100vw;
		/* height: content; */
		height: 80vh;
	}
	div {
		display: flex;
		/* margin: 3rem; */
		align-self: center;
		padding: 10px;
		width: 30rem;
		border-radius: 10px;
		border: #3b434c 3px solid !important;
		flex-direction: column;
		background: #1e242c;
		/* height: fit-content; */
		/* justify-content: center; */
	}
	p {
		display: flex;
		color: hsla(200, 50%, 85%, 1);
		align-self: center;
		font-size: 1rem;
		letter-spacing: 0.7px;
		padding: 3px;
		text-align: center;
		justify-content: center;
	}
</style>
