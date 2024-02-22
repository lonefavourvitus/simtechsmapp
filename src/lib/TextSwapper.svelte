<script>
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	let currentTextIndex = 0;
	let texts = [
		'Book keeping.',
		'Data/Inventory management.',
		'Realtime metrics.',
		'Sales filtering.',
		'Sales tracking.',
		'Stock keeping.'
	];
	let currentText = texts[currentTextIndex];

	let intervalId;

	onMount(() => {
		intervalId = setInterval(swapText, 2000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});

	function swapText() {
		currentTextIndex = (currentTextIndex + 1) % texts.length;
		currentText = texts[currentTextIndex];
	}
</script>

{#key currentText}
	<h1 in:fly={{ y: +20 }}>
		{currentText}
	</h1>
	<!-- <h1 transition:blur>{currentText}</h1> -->
{/key}

<style>
	h1 {
		color: whitesmoke;
		display: flex;
		height: 30px !important;
		align-items: center;
		justify-content: center;
	}
</style>
