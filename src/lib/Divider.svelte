<script>
	let dd = 'horizontal';
</script>

<main>
	{#if dd == 'horizontal'}
		<div class="divider-hor" />
	{/if}
</main>

<main>
	{#if dd == 'vertical'}
		<div class="divider" />
	{/if}
</main>

<style>
	main {
		display: flex;
		/* flex-grow: 0; */
	}
	.divider {
		width: fit-content;
		height: 3.5rem;
		border-right: #016968 3px solid;
	}
	.divider-hor {
		width: 17rem;
		height: 2px;
		margin: 0.5rem 0;
		background: hsla(215, 100%, 80%, 0.786);

		/* border-top: #016968 3px solid; */
	}
</style>
