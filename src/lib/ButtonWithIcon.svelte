<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	import { ini } from '../stores';
	import { navigating } from '$app/stores';

	export let text = '';
	export let disabled = true;
	export let isReloading = false;

	let isReloadingForFilterBtns = false;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}
		const text = node.textContent;
		const duration = text.length / (speed * 0.03);
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	// 142 in two rounds
	export let onClick = () => {
		isReloading = true;
		disabled = true;
		console.log('hmmm');
	};
	export let a = null;
	export let btnFunc = () => {
		a();
	};

	export let onClickForinputFieldFilterExit = () => {
		$ini = false;
		console.log('hmmm');
	};

	export let btnType = '';
	export let btnFuncV1;

	export let onClickForFilterBtns = () => {
		$ini = true;
		isReloadingForFilterBtns = true;
	};

	export let href = '';
	export let icon;
	export { className as class };

	let className;

	export let type = 'button';

	export let sss;
</script>

{#if btnType === 'filterBtns'}
	<button
		class="{className} loading-button"
		{type}
		{disabled}
		on:click={onClickForFilterBtns}
		on:click={sss}
	>
		{text}
		<slot />
	</button>
{/if}
<!-- {#if btnType !== 'filterBtns' && btnType !== 'inputFieldFilterExit' && btnType !== 'mockBtn' && btnType !== 'closeBtn' && btnType !== 'heroBtn' && btnType !== 'ctaBtn'}
	<button
		transition:fade
		class="{className} loading-button"
		{type}
		{disabled}
		on:click={onClick}
		on:click={sss}
	>
		{#if isReloading}
			<div class="loading-spinner" />
		{/if}
		{#if href}
			<a {href} class="button-link">{text} </a>
		{:else}
			{text} {icon}
		{/if}
		<slot />
	</button>
{/if} -->

{#if btnType == 'secLoadUntillGoal'}
	<button class="{className} loading-button" {type} {disabled} on:click={onClick} on:click={sss}>
		{type}
		{text}
		{icon}
		{#if isReloading || $navigating}
			{type}
			<div class="loading-spinner" />
		{/if}
		<slot />
	</button>
{/if}

{#if btnType === 'inputFieldFilterExit'}
	<button
		class="{className} loading-button"
		{type}
		{disabled}
		on:click={onClickForinputFieldFilterExit}
	>
		{text}
		<slot />
	</button>
{/if}
{#if btnType === 'mockBtn'}
	<button transition:typewriter on:click={btnFunc}>
		<!-- {type} -->
		{text}
		<!-- <slot /> -->
	</button>
{/if}
{#if btnType === 'heroBtn'}
	<button class="hero-btn" transition:typewriter on:click={btnFunc}>
		<!-- {type} -->
		{text}
		<!-- <slot /> -->
	</button>
{/if}
{#if btnType === 'ctaBtn'}
	<button class="cta-btn" transition:typewriter on:click={btnFunc}>
		<!-- {type} -->
		{text}
		<!-- <slot /> -->
	</button>
{/if}
{#if btnType === 'closeBtn'}
	<button transition:typewriter class="closeBtn" on:click={btnFunc}>
		<!-- {type} -->
		{text}
		<!-- <slot /> -->
	</button>
{/if}
{#if btnType === 'testBtn'}
	<button transition:typewriter class="testBtn" on:click={btnFuncV1}>
		<!-- {type} -->
		{text}
		<!-- <slot /> -->
	</button>
{/if}

<style>
	.closeBtn {
		padding: 0px 8px;
		margin: 0;
		color: hsla(215, 100%, 80%, 0.786);
		font-size: 1.5rem;
		/* font-size: calc(10px + 0.390625vw); */

		background: hsl(2, 39%, 5%);
	}
	.hero-btn {
		padding: 6px;
		/* margin-right: 3rem; */
		/* margin-left: 3rem; */
		margin: 0 !important;
		background: #a94919;
	}
	.cta-btn {
		padding: 6px;
		/* margin-right: 3rem; */
		/* margin: 0; */
		margin-left: 2rem;

		background: transparent;
		border: 1px solid white;
	}

	button {
		background: hsla(222, 50%, 85%, 1);
		background: #3b434c;
		border: none;
		width: max-content;
		display: flex;
		color: hsla(0, 0%, 25%, 1);
		font-weight: 600;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		background: hsla(222, 50%, 85%, 1);
		background: #3b434c;
		border: none;
		padding: 3px 3px;
		margin: 0.5rem 0.3rem;
		letter-spacing: 0.5px;
		font-size: calc(10px + 0.390625vw);
		width: max-content;
		word-wrap: nowrap;
		border-radius: 5px;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 25%, 1);
		color: #f4f5f5;
		transition: all ease-in-out 0.2s;
	}
	/* button {
	} */
	button:hover {
		background: #2036a1;
		transform: translateY(3px);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}
	.testBtn {
		background: #060a0f;
		transition: all ease-in-out 0.2s;
	}
	/* button {
	} */
	button:hover {
		background: #2036a1;
		transform: translateY(3px);
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
	.loading-button {
		/* position: relative; */
		display: flex;
		/* padding: 10px 20px; */
		/* background-color: #007bff; */
		/* color: white; */
		/* border: none;
		border-radius: 4px; */
		/* align-items: center;
		justify-content: center;
		cursor: pointer; */
		/* overflow: hidden; */
		transition: background-color 0.3s;
	}
	a {
		color: unset;
		text-decoration-line: none;
	}

	/* .loading-button.loading {
		pointer-events: none;
		background-color: #ccc;
	} */

	.loading-spinner {
		/* position: absolute; */
		top: 50%;
		left: 50%;
		transform: rotate(-50%, -50%);
		width: 10px;
		color: #2036a1;
		height: 10px;
		margin-top: 0.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		border-radius: 50%;
		border: 2px solid #e6ecf2;
		border-top-color: transparent;
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 1399.98px) {
	}

	/* Large devices (desktops, less than 1200px) */
	@media (max-width: 1199.98px) {
	}

	/* Medium devices (tablets, less than 992px) */
	@media (max-width: 991.98px) {
		.cta-btn,
		.hero-btn {
			/* padding: 6px; */
			margin-right: 0rem;
			/* background: transparent; */
			/* border: 1px solid; */
		}
	}

	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
	}

	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
	}
</style>
