<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
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

	function handleView() {
		alert('Intersection Observer view event triggered');
		console.log('Intersection Observer view event triggered');
	}

	let container;
	let observer;

	onMount(() => {
		if (browser) {
			const handleIntersect = (entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						observer.unobserve(entry.target);
						handleView();
					}
				});
			};
			const options = { threshold: 0.5, rootMargin: '100% 0% -100%' };
			observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(container);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<div transition:fade bind:this={container}>
	<slot />
	hmmm
</div>

<style>
	div {
		height: 80vh;
	}
</style>
