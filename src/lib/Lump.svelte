<script>
	// @ts-nocheck

	import {
		doubleLinerValue,
		lumpCompDarkProps,
		ll,
		indexMagic,
		drugStore,
		drugProperties,
		newStockDn,
		sumView
	} from '../stores';
	import { afterUpdate } from 'svelte';
	import { beforeUpdate } from 'svelte';
	import FullBrandNameAndShortenedBrandNameComp from '$lib/FullBrandNameAndShortenedBrandNameComp.svelte';
	import StockArrayComp from '$lib/StockArrayComp.svelte';
	import Button from '$lib/Button.svelte';
	import SingleInputElementComp from '$lib/SingleInputElementComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import ButtonRev from '$lib/ButtonRev.svelte';
	export let oneDrugStore = [];
	console.log(oneDrugStore);
	console.log(oneDrugStore[2][0]);
	let eachStock = oneDrugStore[5];
	let newStockAmount;
	let newPriceTag;

	const stockArray = 2;
	export let view;
	export let rem;
	let tt = true;
	let toggler = true;

	function findIndexByValue(value) {
		return $drugStore.findIndex((element) => {
			if (Array.isArray(element)) {
				return element.flat().includes(value);
			}

			console.log(`${element} is not an array`);
			return false;
		});
	}

	function clickHandler() {
		toggler = !toggler;
		$ll = true;
		console.log(`ll from clickhandler is ${$ll}, should be what?`);
		$indexMagic = true;
	}
	let isDisabledForStockAndNewPriceTagSubmitBtn = 'disabled';

	$: {
		newStockAmount == null || newStockAmount > 1000 || newPriceTag == null || newPriceTag > 5000
			? (isDisabledForStockAndNewPriceTagSubmitBtn = 'disabled')
			: (isDisabledForStockAndNewPriceTagSubmitBtn = '');
	}
	function pushNewStockArray() {
		// let dn = eachStock[3][0];
		// console.log('dn i.e eachStock[3][0] is:', eachStock[3][0]);
		// let vv = dn.drugName;
		// console.log('vv is: ', vv);
		console.log($drugStore[2]);
		console.log(oneDrugStore);
		console.log(oneDrugStore[2]);
		let drugStoreIndex = findIndexByValue(oneDrugStore[1][0]);
		console.log(drugStoreIndex);

		// function findIndexByValueS() {
		// 	return $drugStore[drugStoreIndex][5].findIndex((pelement) => {
		// 		if (Array.isArray(pelement)) {
		// 			return pelement.flat().includes(eachStock[0][0]);
		// 		}
		// 		console.log('i from stockvaluefunc is:', i);
		// 		console.log(`${pelement} is not an array`);
		// 		return false;
		// 	});
		// }

		// let st = findIndexByValueS();

		drugStore.update((storeValue) => {
			const stockCount = storeValue[drugStoreIndex][2].length + 1; // Get the count of existing stock information arrays
			// console.log(storeValue[drugStoreIndex][5][0][0][0]);
			let stockSuffix;
			if (stockCount === 1) {
				stockSuffix = 'st';
			} else if (stockCount === 2) {
				stockSuffix = 'nd';
			} else if (stockCount === 3) {
				stockSuffix = 'rd';
			} else {
				stockSuffix = 'th';
			}

			const stockName = `${stockCount}${stockSuffix} stock`; // Generate the stock name
			// $oll.push(stockName);

			const newStockArray = [
				[stockName], // Stock name array
				[Number(newStockAmount)], // Stock-related value arrays
				[Number(newPriceTag)], // Stock details array,
				[] // Stock details array,
			];

			storeValue[drugStoreIndex][2].push(newStockArray);
			// let naa = storeValue[drugStoreIndex][5][st][0][0];
			// storeValue[drugStoreIndex][5][st][0][0] = naa + '.';

			// console.log(storeValue[drugStoreIndex][2][0][0][0]);
			// console.log(drugStore, storeValue);
			// console.log(storeValue, 0);
			// console.log(storeValue[drugStoreIndex][2][0][1][0]);
			// console.log(storeValue[drugStoreIndex][1]);
			// console.log(storeValue[drugStoreIndex][1]);
			// console.log(storeValue[drugStoreIndex]);
			$newStockDn = storeValue[drugStoreIndex][1][0];
			// console.log($newStockDn);

			// function updateNumericValue() {
			// 	let drugBrandUnitName = storeValue[drugStoreIndex][1][0];
			// 	newPriceTagFromFirstEverNewlyCreatedStock = storeValue[drugStoreIndex][2][0][2][0];
			// 	drugProperties.update((drugs) => {
			// 		return drugs.map((drug) => {
			// 			if (drug[0] === drugBrandUnitName || drug[1] === drugBrandUnitName) {
			// 				console.log(typeof newStockAmount);

			// 				return [...drug.slice(0, 1), newPriceTagFromFirstEverNewlyCreatedStock];
			// 			} else {
			// 				return drug;
			// 			}
			// 		});
			// 	});
			// }
			// updateNumericValue();

			// Example usage
			return storeValue;
		});

		// drugPropertiesValues[3][0] = newStockAmount;
		// let c = drugPropertiesValues[0][3];
		// let b = drugPropertiesValues[drugStoreIndex][5][st][0][2];
		// console.log(c);
		// console.log(drugPropertiesValues);
		// tt = false;
		// // console.log($cancelToggler);
		// // dn = null;
		// // console.log('dn i.e eachStock[3][0] is:', dn);
		// // vv = null;
		// // console.log('vv is: ', vv);
		// drugStoreIndex = null;
		// console.log(drugStoreIndex);
		// st = null;
		// console.log(st);
	}

	beforeUpdate(() => {
		console.log('Lump component is about to update');
	});

	afterUpdate(() => {
		console.log('Lump component just updated');
	});
</script>

<main transition:slide class="m-wrapper">
	<!-- <div class="wrapper"> -->
	<FullBrandNameAndShortenedBrandNameComp
		class="wrapper"
		aaa={oneDrugStore[1]}
		bbb={oneDrugStore[0]}
	/>
	<main transition:slide class="new-brand-announcer-main" style="width:{$doubleLinerValue}">
		{#if oneDrugStore[2].length === 0}
			{#if view}
				<!-- <h1>Empty</h1> -->
			{:else}
				<!-- else content here -->
				<h1 class="new-brand-announcer">
					You have not registered any stocks for this brand, to register your first stock, click the
					button below
				</h1>
				{#if tt}
					{#if toggler}
						<!-- <div transition:blur class="single-input-element-comp-wrapper"> -->
						<div transition:scale class="reg-new-stock-btn">
							<Button
								class="restock-btn"
								varButton="Register new stock for this brand"
								onClick={clickHandler}
							/>
						</div>
					{:else}
						<!-- <div transition:blur> -->

						<div transition:scale class="single-input-element-comp-wrapper">
							<div class="sing-input one">
								<SingleInputElementComp
									class="single-input-element-comp-for-lump"
									inputType="number"
									bind:value={newStockAmount}
									placeholder="Stk Amt..."
								/>
								<SingleInputElementComp
									class="single-input-element-comp-for-lump"
									inputType="number"
									bind:value={newPriceTag}
									placeholder="Price..."
								/>
							</div>
							<div class="btns">
								<Button class="restock-btn-cancel" varButton="Cancel" onClick={clickHandler} />

								<ButtonRev
									class="buttonrev-class-for-lump"
									text="Submit"
									isDisabled={isDisabledForStockAndNewPriceTagSubmitBtn}
									onClick={pushNewStockArray}
								/>
							</div>
						</div>
					{/if}
				{/if}
				<!-- {:else if $sumView}
			<StockArrayComp
				stockArray={oneDrugStore[stockArray][oneDrugStore[stockArray].length - 1]}
				eachy={oneDrugStore}
			/> -->
			{/if}
		{:else}
			<!-- <div class="new-brand-announcer"> -->
			<StockArrayComp remS={rem} stockArray={oneDrugStore[stockArray]} eachy={oneDrugStore} />
			<!-- </div> -->
		{/if}
	</main>
</main>

<style>
	.new-brand-announcer {
		background: hsla(222, 100%, 87%, 1);
		color: hsla(222, 100%, 27%, 1);
		font-size: 1rem;
		border: lightseagreen 3px solid !important;
		letter-spacing: 0.5px;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
	}

	.m-wrapper {
		display: flex;
		border-radius: 5px !important;
		flex-direction: column;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
	}

	@keyframes loading-fzua35 {
		0% {
			height: 10%;
		}
		50% {
			height: 50%;
		}
		100% {
			height: 100%;
		}
	}

	.reg-new-stock-btn {
		display: flex;
		margin: 0.5rem;
		padding: 15px 0px !important;
		align-items: center;
		justify-content: space-evenly;
	}
	.sing-input {
		display: flex;
		align-items: center;
		margin-top: 1rem;
		width: 100%;
		justify-content: space-evenly;
	}
	.btns {
		width: 100%;
		display: flex;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		align-items: center;
		justify-content: space-around;
	}

	:global(.restock-btn) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;

		border: lightseagreen 3px solid !important;
	}
	:global(.restock-btn-cancel) {
		background-color: hsla(230, 100%, 55%, 1) !important;

		color: whitesmoke !important;
		margin-bottom: 0.5rem !important;
	}

	:global(.buttonrev-class-for-lump) {
		margin-bottom: 0.5rem;
	}

	.single-input-element-comp-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		flex-direction: column;
	}

	:global(.single-input-element-comp-for-lump) {
		width: 6vw;
		border: none;

		background: hsla(222, 50%, 90%, 1);
		padding: 3.5px;
		color: hsla(0, 0%, 20%, 1);
		color-scheme: dark;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
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
		border-radius: 5px !important;
		background: hsl(210, 45%, 4%) !important;
		transition: all ease-in-out 0.2s;
	}
	.single-input-element-comp-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
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

	h1 {
		margin: 0.5rem;
		top: 0;
		padding: 5px;
		text-align: center;
		border-radius: 5px;
	}

	.new-brand-announcer-main {
		border-radius: 5px !important;
		border: 1.5px solid #204a60;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
	}
</style>
