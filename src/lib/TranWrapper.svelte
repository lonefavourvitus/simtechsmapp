<script>
// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import HeroCont from '$lib/HeroCont.svelte';
	import VideoPlayer from '$lib/VideoPlayer.svelte';
	import DeskTop from '$lib/DeskTop.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';

	import viewport from '/src/functions/useViewportAction';
	let enteredViewport = false;
	export let tranWrapperChild = null;
	export let inYVal = 200;
	export let inXVal = 200;
	export let inDurationVal = 1000;
	export let inDelayVal = 0;
	export let outYVal = -200;
	export let outXVal = -200;
	export let outDurationVal = 1000;
	export let outDelayVal = 0;
	export let tType = 'yAxis';
	export let height = '50vh';
	export let width = '100% !importrant';
	export let position = null;
	export let zIndex = null;
	// export let marginBottom = null;
	// export let marginTop = null;
</script>

{#if tranWrapperChild == 'deskTop'}
	<main
		style="width:{width};height:{height};position:{position};z-index:{zIndex};"
		use:viewport
		on:enterViewport={() => (enteredViewport = true)}
	>
		{#if enteredViewport}
			{#if tType === 'xAxis'}
				<div
					in:fly={{ x: inXVal, duration: inDurationVal, delay: inDelayVal }}
					out:fly={{ x: outXVal, duration: outDurationVal, delay: outDelayVal }}
				>
					<slot>hi from tranWrapper</slot>
				</div>
			{/if}
			{#if tType === 'yAxis'}
				<div
					in:fly={{ y: inYVal, duration: inDurationVal, delay: inDelayVal }}
					out:fly={{ y: outYVal, duration: outDurationVal, delay: outDelayVal }}
				>
					<slot>hi from tranWrapper</slot>
				</div>
			{/if}
		{/if}
	</main>
{:else}
	<main
		style="width:{width};height:{height};position:{position};z-index:{zIndex};"
		use:viewport
		on:enterViewport={() => (enteredViewport = true)}
		on:exitViewport={() => (enteredViewport = false)}
	>
		{#if enteredViewport}
			{#if tType === 'xAxis'}
				<div
					in:fly={{ x: inXVal, duration: inDurationVal, delay: inDelayVal }}
					out:fly={{ x: outXVal, duration: outDurationVal, delay: outDelayVal }}
				>
					<slot>Hi From TranWrapper</slot>
				</div>
			{/if}
			{#if tType === 'yAxis'}
				<div
					in:fly={{ y: inYVal, duration: inDurationVal, delay: inDelayVal }}
					out:fly={{ y: outYVal, duration: outDurationVal, delay: outDelayVal }}
				>
					<slot>Hi From TranWrapper</slot>
				</div>
			{/if}
		{/if}
	</main>
{/if}

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: fit-content;
		flex-direction: column;
		width: 100% !important;
		/* border: 1px solid white; */
		/* background: deeppink; */
	}
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		/* border: 1px solid transparent; */
		/* position: absolute; */
		/* background: hsla(328, 100%, 54%, 0.183); */
		/* height: 100%; */
		width: 100% !important;
		/* overflow-x: hidden !important; */
	}
</style>
