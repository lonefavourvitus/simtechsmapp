<script>
	// import ViewPreviousSalesBtn from '$lib/PreviousSalesBtn.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import ToolTip from '$lib/ToolTip.svelte';
	import UserIcon from '/src/icons/UserIcon.svelte';

	import IconComp from '$lib/IconComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	let isHovered = false;
	let isHoveredForMenuItems = false;
	let hideTimeout;
	export let svg = '';
	// let vertical = true;

	function handleHover() {
		clearTimeout(hideTimeout);
		isHovered = true;
	}

	function handleMouseLeave() {
		hideTimeout = setTimeout(() => {
			isHovered = false;
		}, 500); // Adjust the delay time as needed
	}
	function handleHoverForMenuItems() {
		isHoveredForMenuItems = !isHoveredForMenuItems;
	}
	function handleClick() {
		console.log('btn clicked'); // $pp = !$pp;
	}
</script>

<button
	class={isHovered ? 'active' : ''}
	on:mouseover={handleHover}
	on:mouseleave={handleMouseLeave}
	on:focus={handleHover}
	on:blur
>
	<UserIcon />

	{#if isHovered}
		<main transition:fly on:mouseenter={handleHoverForMenuItems()} class="menu-contents">
			<div>
				<slot><!-- optional fallback --></slot>
			</div>
		</main>
	{/if}
</button>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div * {
		padding: 0.5rem !important;
		margin: 2rem !important;
	}
	.menu-contents {
		background-color: white;
		background-color: #12181f;
		/* background-color: hsl(222, 75%, 30%); */
		position: absolute;
		/* padding: 10px; */
		/* background: hsla(222, 50%, 70%, 1); */
		margin-top: 12.9rem;
		/* border: lightseagreen 3px solid !important; */
		display: flex;
		align-items: center;
		box-shadow: 0px 0px 10px 10px hsla(30, 4%, 0%, 0.5);
		justify-content: center;
		border-radius: 10px;
	}

	button {
		/* position: relative; */
	}

	.active .menu-contents {
		background-color: #12181f;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-contents a {
		/* display: block;
		margin-bottom: 5px; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		background: hsl(223, 50%, 85%);
		border: none;
		padding: 3px 3px;
		margin: 0.5rem 0.3rem;
		display: flex;
		letter-spacing: 0.5px;
		width: 75px;
		width: max-content;
		word-wrap: nowrap;
		/* flex-direction: column; */
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		/* display: flex; */
		flex-wrap: nowrap;
		color: hsla(0, 0%, 25%, 1);
		font-weight: 600;
		/* margin-left: 1px; */
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}

	button:hover {
		background: hsla(222, 50%, 80%, 1);
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
</style>
