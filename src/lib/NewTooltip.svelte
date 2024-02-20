<script>
	let nTooltipText = '';
	let ntooltip = '';
	let nshowTooltip = false;

	function show(event) {
		nTooltipText = event.target.getAttribute('data-tooltip');
		nshowTooltip = true;

		// Position the tooltip near the mouse pointer
		const x = event.clientX;
		const y = event.clientY;
		ntooltip.style.left = `${x + 10}px`;
		ntooltip.style.top = `${y + 10}px`;
	}

	function hide() {
		nshowTooltip = false;
	}

	function handleDelete() {
		// Execute delete logic here
		console.log(`Deleting: ${nTooltipText}`);
	}
</script>

{#if nshowTooltip}
	<div
		class="tooltip"
		bind:this={ntooltip}
		on:mouseenter={show}
		on:mouseleave={hide}
		class:hidden={!nshowTooltip}
	>
		<p>{nTooltipText}</p>
		<button class="delete-button" on:click={handleDelete}>Delete</button>
	</div>
{/if}

<div on:mouseenter={show} on:mouseleave={hide} data-ntooltip="Hover me for a tooltip">Hover me</div>

<style>
	/* ... existing styles ... */

	.delete-button {
		display: inline-block;
		margin-left: 8px;
		cursor: pointer;
	}
</style>
