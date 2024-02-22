<script>
	// @ts-nocheck

	export let tooltip = false;
</script>

<span data-tooltip={tooltip}>
	<slot />
</span>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99999999;
		/* background: red; */
	}
</style>
