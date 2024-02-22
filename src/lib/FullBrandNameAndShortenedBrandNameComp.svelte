<script>
// @ts-nocheck

	import { handleDrugRemoval } from '/src/functions/handleDrugRemovalFunction_F.svelte';
	import {
		doubleLinerValue,
		lumpCompDarkProps,
		drugStore,
		drugProperties,
		nodeStopper,
		isClickedForRestockBtn
	} from '../stores';
	import Button from '$lib/Button.svelte';
	import ButtonRev from '$lib/ButtonRev.svelte';
	import drugName from '$lib/DrugsInputForm.svelte';
	import SingleInputElementComp from '$lib/SingleInputElementComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import RemoveBtn from '$lib/RemoveBtn.svelte';
	import { nodeUnitFunction } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	// import { nodeAction } from '/src/functions/node_blockInputForOutOfStockBrands_F.svelte';
	import ToolTip from '$lib/ToolTip.svelte';
	export let aaa = [];
	export let bbb = [];
</script>

<div>
	{#each aaa as drug}
		{#each bbb as drugFullBrandName}
			<main class:darkyDrugTitle={$lumpCompDarkProps.darkyDrugTitle}>
				<h2 class="drug-title" class:darkyH2AndP={$lumpCompDarkProps.darkyH2AndP}>
					<ToolTip tooltip={drugFullBrandName.toUpperCase()}>
						{drug.toUpperCase()}
					</ToolTip>
				</h2>
			</main>
		{/each}
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 55.48px;
		border-radius: 10px;
		/* margin: 1rem; */
		/* border-left: 1px solid #204a60;
		border-right: 1px solid #204a60; */

		z-index: 0;
	}
	:global(.restock-btn) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;
		margin: 0 !important;
		margin-top: 0.5rem !important;
	}
	:global(.restock-btn-cancel) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;
		margin-bottom: 0.5rem !important;
	}

	:global(.buttonrev-class-for-lump) {
		margin-bottom: 0.5rem;
	}

	main {
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		/* background: hsla(200, 50%, 15%, 1); */
		border-radius: 5px;
		/* padding: 1px;
		 */
		margin-bottom: 0.1rem;
		transition: all ease-in-out 0.2s;
	}

	.darkyDrugTitle {
		background: hsla(222, 50%, 12%, 1);
		width: 100%;
		transition: all ease-in-out 0.2s;
	}
	h2 {
		margin-bottom: 0.4rem;
		color: hsl(0, 5%, 74%);
		padding: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #12181f;
		text-align: center;
		font-size: 0.7rem;
		border: unset;
		letter-spacing: 1px;
		border-radius: 5px;
		font-weight: 500;
		transition: all ease-in-out 0.2s;
	}

	.darkyH2AndP {
		color: hsla(0, 0%, 70%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
