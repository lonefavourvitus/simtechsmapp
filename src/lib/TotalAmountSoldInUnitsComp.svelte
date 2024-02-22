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
	import FullBrandNameAndShortenedBrandNameComp from '$lib/FullBrandNameAndShortenedBrandNameComp.svelte';
	// import DrugEntity from '$lib/DrugEntity.svelte';
	import StockArrayComp from '$lib/StockArrayComp.svelte';
	import ButtonRev from '$lib/ButtonRev.svelte';
	import drugName from '$lib/DrugsInputForm.svelte';
	import SingleInputElementComp from '$lib/SingleInputElementComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import RemoveBtn from '$lib/RemoveBtn.svelte';
	import { nodeUnitFunction } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	// import { nodeAction } from '/src/functions/node_blockInputForOutOfStockBrands_F.svelte';
	import ToolTip from '$lib/ToolTip.svelte';
	export let totalAmountSoldInUnits = '';
</script>

<div class="metrics-aligner">
	<p class="p1">Amount Sold:</p>
	<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
		{totalAmountSoldInUnits}
	</p>
</div>

<style>
	.metrics-aligner {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	:global(.restock-btn) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;
		/* margin-bottom: 0.5rem !important; */
		margin: 0 !important;
		margin-top: 0.5rem !important;
	}
	:global(.restock-btn-cancel) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;
		margin-bottom: 0.5rem !important;
		/* margin: 0 !important;
		margin-top: 0.5rem !important; */
	}

	:global(.buttonrev-class-for-lump) {
		margin-bottom: 0.5rem;
	}

	:global(.single-input-element-comp-for-lump) {
		width: 6vw;
		border: none;
		margin-bottom: 0.5rem;

		background: hsla(222, 50%, 90%, 1);
		padding: 3.5px;
		color: hsla(0, 0%, 20%, 1);
		color-scheme: dark;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}

	.p1 {
		font-size: 0.7rem;
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		display: flex;
		/* width: 100% */
		flex-wrap: wrap;
		padding: 3px 3px;
		/* margin: 0.2rem; */
		margin-right: 0;

		transition: all ease-in-out 0.2s;
	}

	.p2 {
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
		/* margin: 0.2rem;
		margin-left: 0; */
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}

	.darkyP1P3 {
		background: hsla(100, 50%, 10%, 1);
		border-right: 2px solid hsla(100, 100%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}

	.darkyP2P4 {
		background: hsla(100, 40%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}

	p {
		margin: 0;
		font-size: 0.65rem;
		font-size: 0.8rem;
		padding: 0 0px;
		font-weight: 500;
		color: hsla(0, 0%, 25%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
