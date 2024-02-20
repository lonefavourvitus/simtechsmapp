<script>
	import Button from '$lib/Button.svelte';
	import LightTheme from '/src/icons/LightTheme.svelte';
	import MoonlightTheme from '/src/icons/MoonlightTheme.svelte';
	import {
		menuCompDarkProps,
		drugListCompDarkProp,
		drugsInputFormCompDarkProps,
		lumpCompDarkProps,
		darkMode,
		mainBgDarkProp,
		isExpandedForThemeToggler
	} from '../stores';

	const themeToggler = () => {
		$darkMode = !$darkMode;
	};
</script>

{#if $darkMode}
	<div>
		<p>Theme</p>
		<Button varButton="Dark" onClick={themeToggler}><MoonlightTheme /></Button>
	</div>
{:else}
	<div>
		<p>Theme</p>
		<Button varButton="Light" onClick={themeToggler}><LightTheme /></Button>
	</div>
{/if}

<style>
	div {
		font-size: 13px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	p {
		color: #e6ecf2;
	}
</style>
