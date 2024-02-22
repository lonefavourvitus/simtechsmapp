<script>
	// @ts-nocheck

	import { slide } from 'svelte/transition';
	import Button from '$lib/Button.svelte';
	import ViewPreviousSalesBtn from '$lib/PreviousSalesBtn.svelte';
	import AddNewDrugButton from '$lib/AddNewDrugButton.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
	import MakeShiftModalComp from '$lib/MakeShiftModalComp.svelte';
	// import ButtonRev from '$lib/ButtonRev.svelte';
	import { scrollBehaviourProperty } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	import SettingsIcon from '/src/icons/SettingsIcon.svelte';
	import AngleIcon from '/src/icons/Angle.svelte';
	import { doubleLinerValue, menuCompDarkProps } from '../stores';

	let hh = 'On';
	let mm = 'terent';
	let cc = 'Single Line';

	let smoothScrollToggler = () => (
		(scrollBehaviourProperty.behavior =
			scrollBehaviourProperty.behavior === 'smooth' ? 'auto' : 'smooth'),
		hh === 'On' ? (hh = 'Off') : (hh = 'On'),
		console.log('The button has been set to', hh)
	);

	function nicey() {
		$doubleLinerValue === 15.3 + 'rem'
			? (($doubleLinerValue = 'max-content'), console.log($doubleLinerValue), (cc = 'Single Line'))
			: (($doubleLinerValue = 15.3 + 'rem'), console.log($doubleLinerValue), (cc = 'Break Line'));
		console.log($doubleLinerValue);
	}

	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
</script>

<main>
	<form action="/auth?/signout" method="POST">
		<button> sign out </button>
	</form>

	<Button varButton="Reload data" />
	<slot />
	<nav class:darkyNav={$menuCompDarkProps.darkyNav}>
		<main>
			<SettingsIcon onClick={clickHandler} />
			<div class="user-name"><h2>hi! favour</h2></div>
			<AngleIcon />
		</main>
		{#if isExpanded}
			<ul transition:slide>
				<li class:darkyLi={$menuCompDarkProps.darkyLi}>
					<p class:darkyP={$menuCompDarkProps.darkyP}>Smooth Scroll</p>
					<div><Button varButton={hh} onClick={smoothScrollToggler} /></div>
				</li>

				<li class="parent" class:darkyLi={$menuCompDarkProps.darkyLi}>
					<p class:darkyP={$menuCompDarkProps.darkyP}>Drug Unit Line</p>
					<div>
						<Button class="childclass" varButton={cc} onClick={nicey} />
					</div>
				</li>
			</ul>
		{/if}
	</nav>
</main>

<style>
	.lo {
		margin-bottom: 0;
		color: hsla(0, 0%, 25%, 1);
		padding: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 0.7rem;
		border: unset;
		letter-spacing: 1px;
		/* width: 30vw !important; */
		font-weight: 600;
		transition: all ease-in-out 0.2s;
	}
	div {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	main {
		display: flex;
		align-items: center;
		background-color: hsl(222, 75%, 30%);
		justify-content: space-between;
		/* position: relative; */
		transition: all ease-in-out 0.2s;
	}
	nav {
		display: flex;
		flex-direction: column;
		width: 17vw;
		margin-right: 1rem;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		border: 1.5px solid hsla(222, 50%, 35%, 1);
		border-radius: 5px;
		height: fit-content;
		align-self: center;
		justify-self: center;
		transition: all ease-in-out 0.2s;
	}
	.darkyNav {
		border: 1.5px solid hsla(222, 50%, 95%, 1);
		border-radius: 3px;
		transition: all ease-in-out 0.2s;
	}
	ul {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0;
		left: 300px;
		padding: 0;
		transition: all ease-in-out 0.2s;
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		width: 50%;
		color: hsla(0, 0%, 25%, 1);
		font-weight: 600;
		/* color: hsla(0, 0%, 40%, 1); */
		letter-spacing: 0.3px;
		transition: all ease-in-out 0.2s;
	}

	li {
		margin: 0.1rem 0;
		list-style: none;
		background: hsla(222, 50%, 95%, 1);
		font-size: 0.8rem;
		color: hsla(0, 0%, 25%, 1);
		display: flex;
		width: 100%;
		padding: 6px 0;
		transition: all ease-in-out 0.2s;
	}

	.darkyLi {
		background: hsla(222, 50%, 15%, 1);
		color: hsla(0, 0%, 100%, 1);
		transition: all ease-in-out 0.2s;
	}

	.darkyP {
		color: hsla(0, 0%, 90%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
