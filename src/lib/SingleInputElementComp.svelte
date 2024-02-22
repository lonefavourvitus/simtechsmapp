<script>
// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	export let inputType;
	export let value;
	// export let newStockAmount;
	export let placeholder;
	export { className as class };
	let className = '';
</script>

{#if inputType === 'number'}
	<input transition:slide type="number" bind:value {placeholder} class={className} />
{:else if inputType === 'text'}
	<input transition:slide type="text" bind:value {placeholder} class={className} />
{/if}
