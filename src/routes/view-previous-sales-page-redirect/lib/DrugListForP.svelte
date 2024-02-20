<script>
	import Lump from '$lib/Lump.svelte';
	import NoDataYetComp from '$lib/NoDataYetComp.svelte';
	import {
		drugsInputFormCompDarkProps,
		isDisabled,
		isExpandedForInputForm,
		// loadSalesByDate,
		ini,
		filteredStore,
		sSalesEmptyarray,
		kkk
	} from '../../../stores';
	import { onMount } from 'svelte';
	// export let data;
	// console.log(data)
	export let emptySalesArrayVPS;

	let viewy = true;
	let remRemBtn = true;

	console.log('this is filtered stnnore from dlfp:', $filteredStore);
	console.log($filteredStore.transformedData);
	console.log($filteredStore.vb);
	console.log($sSalesEmptyarray);
	$: $filteredStore = $filteredStore;
	$: checker = $filteredStore.length;
	console.log($filteredStore);
	$: console.log('checker is:', checker);
	$kkk = false;
	onMount(() => {
		console.log('dlistforp mounted');
		return () => {
			console.log('dlistforp unmounted');

			$filteredStore = [];
		};
	});
	// let salesArrayIsEmptyForVb = true;

	// for (const value of Object.values($filteredStore.vb)) {
	// 	// Iterate through the sixth subarray within each value
	// 	for (const subarray of value[5]) {
	// 		if (subarray.length !== 0) {
	// 			salesArrayIsEmpty = false;
	// 			break; // Exit the loop early if a non-empty subarray is found
	// 		}
	// 	}

	// 	if (!salesArrayIsEmptyForVb) {
	// 		break; // Exit the outer loop early if a non-empty subarray is found
	// 	}
	// }

	// console.log(salesArrayIsEmptyForVb);

	// let salesArrayIsEmpty = true;

	// for (const value of Object.values($filteredStore.transformedData)) {
	// 	// Iterate through the sixth subarray within each value
	// 	for (const subarray of value[5]) {
	// 		if (subarray.length !== 0) {
	// 			salesArrayIsEmpty = false;
	// 			break; // Exit the loop early if a non-empty subarray is found
	// 		}
	// 	}

	// 	if (!salesArrayIsEmpty) {
	// 		break; // Exit the outer loop early if a non-empty subarray is found
	// 	}
	// }

	// console.log(salesArrayIsEmpty);

	console.log($filteredStore.transformedData, 'and', $filteredStore.vb);
</script>

<main class="mainy">
	<!-- {#if $sSalesEmptyarray} -->
	<!-- cohhhhhntent here nj-->
	<!-- <p>emptyuuuuuuuuuuuuuuuuu</p> -->
	<!-- {/if} -->

	{#if $kkk}
		{#if $sSalesEmptyarray}
			<NoDataYetComp
				emptyDataAnnouncer="Sorry, there were no matches for your filter."
				HintToGetData="Please ensure you have input a valid filter, and feel free to try again. Your success is important to us😇."
			/>
			<!-- <p>filter is wempty</p> -->
		{:else}
			{#each $filteredStore.vb as aDrugEntity, i}
				<Lump rem={remRemBtn} view={viewy} oneDrugStore={aDrugEntity} />
			{/each}
		{/if}
	{/if}
	{#if !$kkk}
		{#if emptySalesArrayVPS}
			<NoDataYetComp
				emptyDataAnnouncer="Sorry, there are no sales record for yesterday in our systems."
				HintToGetData="However, You can leverage our advanced filtering options, allowing you to search out specific sets of your sales records based on the filters you provide. Explore the power of customization and gain valuable insights into your business operations 😇."
			/>
		{:else}
			{#each $filteredStore.transformedData as aDrugEntity, i}
				<Lump view={viewy} oneDrugStore={aDrugEntity} />
			{/each}
		{/if}
	{/if}

	<!-- {/if} -->
</main>

<style>
	main {
		gap: 10px;
	}
	.mainy {
		display: flex;
		height: fit-content;
		margin-top: 4.5rem !important;
		flex-direction: row !important;
		background: hsla(222, 50%, 50%, 1);
		border-radius: 5px;
		background-color: #060b10;
		/* background: hsl(210, 45%, 4%) !important; */
	}
</style>
