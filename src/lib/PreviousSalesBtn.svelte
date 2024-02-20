<script>
	import Button from '$lib/Button.svelte';
	export let btnName = '';
	export let hrefAt;
	export let linky = '';
</script>

<main>
	<Button varButton={btnName} class="pbtn"><a href={hrefAt}>{linky}</a></Button>
</main>

<style>
	a {
		text-decoration-line: none;
		color: hsla(0, 0%, 25%, 1);
	}
	:global(.pbtn) {
		margin: 0px 0.5rem !important;
	}
</style>
