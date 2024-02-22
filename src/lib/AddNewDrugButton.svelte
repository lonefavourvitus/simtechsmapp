<script>
	// @ts-nocheck

	import Button from '$lib/Button.svelte';
	import { isExpandedForAddNewDrugForm } from '../stores';

	let isClickedForAddNewDrug = true;
	function clickHandler() {
		isClickedForAddNewDrug = !isClickedForAddNewDrug;
		$isExpandedForAddNewDrugForm = !$isExpandedForAddNewDrugForm;
		console.log($isExpandedForAddNewDrugForm);
	}
</script>

<main>
	{#if isClickedForAddNewDrug}
		<Button varButton="Add New Drug" onClick={clickHandler} />
	{:else}
		<Button varButton="Add New Drug" onClick={clickHandler} />
	{/if}
</main>
