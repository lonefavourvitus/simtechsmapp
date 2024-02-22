<script>
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { pp } from '../stores';

	let className = '';
	export let varButton;
	export let isDisabledP;
	export { className as class };
	export let onClick = () => {};

	function handleClick() {
		if ($pp) {
			console.log('sales closed');
			return;
		}
		onClick();
	}
</script>

<button disabled={isDisabledP} class={className} on:click={handleClick}>
	{varButton}
	<slot />
</button>

<style>
	button {
		background: hsla(222, 50%, 85%, 1);
		background: #3b434c;
		border: none;
		padding: 3px 3px;
		margin: 0 0.3rem;
		letter-spacing: 0.5px;
		width: 75px;
		width: max-content;
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: #e6ecf2;
		font-weight: 600;
		margin-left: 1px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}

	button:hover {
		background: #2036a1;
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}

	.dark {
		background: hsla(222, 40%, 30%, 1);
		color: red;
	}
	.selected {
		background: hsla(222, 40%, 30%, 1);
		color: white;
	}
</style>
