<script>
// @ts-nocheck

	// import { handleDrugRemoval } from '/src/functions/handleDrugRemovalFunction_F.svelte';
	import {
		// doubleLinerValue,
		lumpCompDarkProps
		// drugStore,
		// drugProperties,
		// nodeStopper,
		// isClickedForRestockBtn
	} from '../../../stores';
	// import Button from '$lib/Button.svelte';
	// import ButtonRev from '$lib/ButtonRev.svelte';
	// import drugName from '$lib/DrugsInputForm.svelte';
	// import SingleInputElementComp from '$lib/SingleInputElementComp.svelte';
	// import { fade, blur, fly, slide, scale } from 'svelte/transition';
	// import RemoveBtn from '$lib/RemoveBtn.svelte';
	// import { nodeUnitFunction } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	// // import { nodeAction } from '/src/functions/node_blockInputForOutOfStockBrands_F.svelte';
	import ToolTipForP from '/src/routes/view-previous-sales-page-redirect/lib/ToolTipForP.svelte';
	export let aaa = [];
	export let bbb = [];
</script>

<div>
	{#each aaa as drug}
		<!-- <div id="sticky-header" class="gt"> -->
		{#each bbb as drugFullBrandName}
			<main class:darkyDrugTitle={$lumpCompDarkProps.darkyDrugTitle}>
				<h2 class="drug-title" class:darkyH2AndP={$lumpCompDarkProps.darkyH2AndP}>
					<ToolTipForP tooltip={drugFullBrandName.toUpperCase()}>
						{drug.toUpperCase()}
					</ToolTipForP>
				</h2>
			</main>
		{/each}
		<!-- </div> -->
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 55.48px;
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
		display: flex;
		flex-direction: column;
		background: hsla(200, 50%, 15%, 1);
		background: hsla(200, 50%, 25%, 1);
		/* position: sticky !important;
		top: 0 !important; */

		transition: all ease-in-out 0.2s;
	}

	.drug-title {
		padding: 0;
		border: none;
		margin-bottom: 0.2rem;
		/* margin-bottom: 8rem; */
		display: flex;
		/* position: sticky;
		top: 0; */
		/* position: -webkit-sticky;
		top: 0px;
		z-index: -10; */
		/* justify-content: center; */
		/* width: 100%; */
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.2s;
	}

	.darkyDrugTitle {
		background: hsla(222, 50%, 12%, 1);
		width: 100%;
		transition: all ease-in-out 0.2s;
	}
	h2 {
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
		font-weight: 600;
		transition: all ease-in-out 0.2s;
	}

	.darkyH2AndP {
		color: hsla(0, 0%, 70%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
