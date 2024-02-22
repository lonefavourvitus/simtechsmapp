<script>
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import TranWrapper from '$lib/TranWrapper.svelte';
	import tilt from '/src/functions/tilt.js';

	import FeaturesCompIconFac from '/src/icons/FeaturesCompIconFac.svelte';
	export let iconName = '';
	export let h2Title = '';
	export let para = '';
	export let inDelayVal = '';
	export let cardIsForBlog;
	export let src;
	export let alt;
</script>

{#if cardIsForBlog}
	<div>
		<main>
			<div in:fly={{ delay: 700, x: -50 }}>
				<img {src} {alt} />
				<!-- <FeaturesCompIconFac {iconName} /> -->
			</div>
			<h2 class="blog-h2" in:fly={{ delay: 900, x: -50 }}>{h2Title}</h2>
			<p in:fly={{ delay: 1100, x: -50 }} class="para">
				{para}
			</p>
		</main>
	</div>
{/if}

{#if !cardIsForBlog}
	<div use:tilt>
		<main>
			<div in:fly={{ delay: 700, x: -50 }}>
				<FeaturesCompIconFac {iconName} />
			</div>
			<h2 in:fly={{ delay: 900, x: -50 }}>{h2Title}</h2>
			<p in:fly={{ delay: 1100, x: -50 }} class="para">
				{para}
			</p>
		</main>
	</div>
{/if}

<style>
	img {
		display: flex;
		align-self: center;
		justify-content: center;
		height: 200px;
		border-radius: 10px;
		width: 100%;
	}
	h2 {
		margin-top: 10px;
		color: #ffffff91;
		font-size: calc(10px + 0.390625vw);
	}
	.blog-h2 {
		font-size: calc(20px + 0.390625vw);
		color: #ffffffb4;
	}
	p {
		color: #b0b3b6;
		line-height: 1.4;
		letter-spacing: 0.5px;
		font-size: calc(10px + 0.390625vw);
	}
	h2,
	p {
		padding: 8px 0;
		letter-spacing: 0.4px;
		/* border-top: 1px solid hsl(271, 91%, 30%); */
	}
	main {
		/* box-shadow: -7px 0px 20px 0px hsl(271, 91%, 30%), 7px 0px 20px 0px hsl(126, 100%, 30%),
			0px -7px 20px 0px hsl(126, 100%, 30%), 0px 7px 20px 0px hsl(271, 91%, 30%);
		 */
		/* background-image: linear-gradient(
			to bottom left,
		hsl(271, 91%, 5%),
			hsl(126, 100%, 5%)
		); */
		border-radius: 10px;
		background: #060a0f;
		/* background-image: linear-gradient(to bottom left, hsl(213, 43%, 7%), hsl(213, 43%, 4%) 100%); */
		/* border: 1px pink solid; */
		width: 300px;
		height: fit-content;
		padding: 15px;
		margin: 3rem;
		transition: all 0.5s;
	}
	main:hover {
		box-shadow:
			-2px 0px 0px 0px hsl(271, 91%, 30%),
			2px 0px 0px 0px hsl(126, 100%, 30%),
			0px -2px 0px 0px hsl(61, 100%, 30%),
			0px 2px 0px 0px hsl(226, 91%, 30%);
		/* animation: rot 5s linear infinite; */
		transition: all 0.5s;
	}
	div {
		/* border: 1px solid green; */
	}
	@keyframes rot {
		0% {
			box-shadow:
				-2px 0px 0px 0px hsl(271, 91%, 30%),
				2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%),
				0px 2px 0px 0px hsl(226, 91%, 30%);
		}
		/* 25% {
			box-shadow: 0px 2px 0px 0px hsl(226, 91%, 30%), -2px 0px 0px 0px hsl(271, 91%, 30%),
				2px 0px 0px 0px hsl(126, 100%, 30%), 0px -2px 0px 0px hsl(61, 100%, 30%);
		} */
		75% {
			box-shadow:
				0px -2px 0px 0px hsl(61, 100%, 30%),
				0px 2px 0px 0px hsl(226, 91%, 30%),
				-2px 0px 0px 0px hsl(271, 91%, 30%),
				2px 0px 0px 0px hsl(126, 100%, 30%);
		}
		100% {
			box-shadow:
				2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%),
				0px 2px 0px 0px hsl(226, 91%, 30%),
				-2px 0px 0px 0px hsl(271, 91%, 30%);
		}
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		main {
			/* background: red !important; */
			/* overflow: visible; */
			/* width: 100vh; */
			/* height: 80vh; */
			margin: calc(2rem);
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		div {
			/* display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			flex-direction: row !important;
			border: 1px solid pink !important;
			*/
			background: rgba(255, 0, 238, 0.187) !important;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		div {
			background: #f8536f3a !important;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		div {
			/* background: rgba(0, 0, 255, 0.464) !important; */
			background: rgba(0, 0, 255, 0) !important;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		div {
			background: green !important;
		}
	}
</style>
