<script>
// @ts-nocheck

	import { lumpCompDarkProps, ll } from '../stores';
	import { onMount, onDestroy } from 'svelte';

	// export let lumpCompDarkPropss;

	export let drugd;
	export let onRemove;
	onMount(() => {
		console.log('rembtn just mounted');
	});
	onDestroy(() => {
		$ll = false;

		console.log('rembtn just got unMounted');
		console.log($ll);
	});

	function handleClick() {
		onRemove(drugd);
	}
	function removeBtnNodeFunc(node) {
		console.log(node);
	}
</script>

<button
	use:removeBtnNodeFunc
	class:darkyButton={$lumpCompDarkProps.darkyButton}
	on:click={handleClick}
>
	remove
</button>

<style>
	button {
		border-radius: 5px;
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		border: none;
		font-size: 0.7rem;
		display: flex;
		padding: 1px 3px !important;
		margin: 3px 3px;
		/* flex-grow: -2; */
		/* flex-shrink: 11; */
		justify-self: center;
		align-self: center;
		cursor: pointer;
		transition: all ease-in-out 0.2s;
	}
	.darkyButton {
		background: hsla(222, 50%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
