<script>
// @ts-nocheck

	import RemoveBtn from '$lib/RemoveBtn.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import Button from '$lib/Button.svelte';
	import SingleInputElementComp from '$lib/SingleInputElementComp.svelte';
	import ButtonRev from '$lib/ButtonRev.svelte';
	import AmountInStockComp from '$lib/AmountInStockComp.svelte';
	import drugName from '$lib/DrugsInputForm.svelte';
	import TotalAmountInNairaComp from '$lib/TotalAmountInNairaComp.svelte';
	import TotalAmountSoldInUnitsComp from '$lib/TotalAmountSoldInUnitsComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { supabase } from '$lib/supabaseClient';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { handleDrugRemoval } from '/src/functions/handleDrugRemovalFunction_F.svelte';
	import { nodeUnitFunction } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	import {
		newStockBtnIsNeeded,
		bb,
		lumpCompDarkProps,
		oll,
		jj,
		drugStore,
		drugProperties,
		indexMagic,
		cancelToggler,
		cancel,
		nodeStopper,
		sumView,
		newStockDn,
		formattedMultiDrugEntriesObject,
		ll,
		eachStockEssentialInfo,
		mm
	} from '../stores';

	export let eachStock = [];

	export let remE;

	$: es = eachStock;
	$: namey = eachStock[0];
	$: totalAmountInNaira = eachStock[3]
		.reduce((a, { price }) => a + price, 0)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	$: totalAmountRemaining =
		eachStock[1] - eachStock[3].length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	$: totalAmountSoldInUnits = eachStock[3].length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	$: console.log(totalAmountInNaira);
	$: console.log(totalAmountRemaining);
	$: console.log(totalAmountSoldInUnits);

	$: {
		if (totalAmountRemaining <= 0) {
			$newStockBtnIsNeeded = true;
		}
	}

	// <!-- totalComponents += 1;
	// console.log(`total number of times this component has been created: ${totalComponents}`); -->

	let stockPositionRaw;
	let newStockAmount;
	let newPriceTag;

	// $: console.log(es);
	// $: console.log(eachStock[0]);
	// $: console.log(eachStock[0][0]);
	// $: console.log(eachStock[1]);
	// $: console.log(eachStock[2]);
	$: console.log(eachStock[3]);

	console.log(eachStock);
	// console.log(eachStock[0]);
	// console.log(eachStock[0][0]);

	let toggler = true;
	let tt = true;

	function nodeActionyf(node) {
		if ($nodeStopper.includes(node.textContent)) {
			console.log(`${node.textContent} is already in $nodeStopper array, will not push.`);
			return;
		} else {
			$nodeStopper.push(node.textContent);
			console.log('Node is: ', node, 'text content pushed:', $nodeStopper);
		}

		console.log($nodeStopper);
		console.log('nodeStopper array is:', $nodeStopper);

		return {
			destroy() {
				$nodeStopper = $nodeStopper.filter((val) => val !== node.textContent);
				// $nodeStopper = [];

				console.log($nodeStopper);
				console.log(console.log($nodeStopper));
			}
		};
	}

	function findIndexByValue(value) {
		return $drugStore.findIndex((element) => {
			if (Array.isArray(element)) {
				return element.flat().includes(value);
			}

			console.log(`${element} is not an array`);
			return false;
		});
	}

	let isDisabledForStockAndNewPriceTagSubmitBtn = 'disabled';

	function clickHandler() {
		toggler = !toggler;
		$ll = true;
		console.log(`ll from clickhandler is ${$ll}, should be what?`);
		$indexMagic = true;
	}

	let _showUnits = 'show units';

	let show = false;

	let a;
	function showUnits(e) {
		console.log(e);
		a;
		if (e.target.innerText == 'show units') {
			_showUnits = 'hide units';
			a = false;
		} else {
			_showUnits = 'show units';
			a = true;
		}
		// show = !show;
		// a = !a;
	}

	$: if ($sumView) {
		a = true;
		_showUnits = 'show units';
	} else {
		a = false;
		_showUnits = 'hide units';
	}

	$: {
		newStockAmount == null || newStockAmount > 1000 || newPriceTag == null || newPriceTag > 5000
			? (isDisabledForStockAndNewPriceTagSubmitBtn = 'disabled')
			: (isDisabledForStockAndNewPriceTagSubmitBtn = '');
	}

	function pushNewStockArray() {
		let dn = eachStock[3][0];
		let brandDrugName = dn.drugName;

		console.log('brandDrugName is: ', brandDrugName);

		let drugStoreIndex = findIndexByValue(brandDrugName);

		console.log(drugStoreIndex);

		function findIndexByValueS() {
			return $drugStore[drugStoreIndex][2].findIndex((pelement) => {
				if (Array.isArray(pelement)) {
					return pelement.flat().includes(eachStock[0][0]);
				}

				console.log(`${pelement} is not an array`);

				return false;
			});
		}

		let st = findIndexByValueS();

		function nb() {
			return $drugProperties.findIndex((element) => {
				// if (Array.isArray(element)) {
				return element.flat().includes(brandDrugName);
			});
		}

		drugStore.update((storeValue) => {
			const stockCount = storeValue[drugStoreIndex][2].length + 1; // Get the count of existing stock information arrays

			console.log(storeValue[drugStoreIndex][2][0][0][0]);

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
			$oll.push(stockName);

			const newStockArray = [
				[stockName], // Stock name array
				[Number(newStockAmount)], // Stock-related value arrays
				[Number(newPriceTag)], // Stock details array,
				[] // Stock details array,
			];

			storeValue[drugStoreIndex][2].push(newStockArray);

			stockPositionRaw = storeValue[drugStoreIndex][2][st][0][0];

			storeValue[drugStoreIndex][2][st][0][0] = stockPositionRaw + '.';

			console.log(storeValue[drugStoreIndex][2][0][0][0]);
			console.log(stockPositionRaw);
			console.log(drugStore, storeValue);
			console.log(storeValue, 0);
			console.log(storeValue[drugStoreIndex]);
			console.log(storeValue[drugStoreIndex][2]);

			$nodeStopper = $nodeStopper.filter((val) => val !== brandDrugName);

			// const { data: updatedRows, error: updateError } = supabase
			// 	.from('drug_sales_input')
			// 	.select('*');
			// .update({ last_stock_position: '1st stock.' })
			// .eq('last_stock_position', '1st stock');
			// if (updateError) {
			// 	console.error(updateError);
			// } else {
			// 	// console.log(data);
			// 	console.log(updatedRows);
			// }

			$cancelToggler = true;
			$ll = false;
			$bb = true;
			$cancel = true;
			$jj = true;

			return storeValue;
		});

		// function updatePriceTag() {
		// 	drugProperties.update((drugs) => {
		// 		return drugs.map((drug) => {
		// 			if (drug[0] === brandDrugName) {
		// 				console.log(typeof newStockAmount);

		// 				return [...drug.slice(0, 3), Number(newPriceTag)];
		// 			} else {
		// 				return drug;
		// 			}
		// 		});
		// 	});
		// }

		// updatePriceTag();

		supabase
			.from('drug_sales_input')
			.update({
				last_stock_position: stockPositionRaw + '.'
			})
			.eq('ref_unit_name', brandDrugName)
			.eq('last_stock_position', stockPositionRaw) // Add this line to filter by '1st stock'
			.order('id')
			// .single()
			.then((result) => console.log(result))
			.catch((error) => console.log(error));

		tt = false;

		console.log($cancelToggler);

		dn = null;

		console.log('dn i.e eachStock[3][0] is:', dn);

		brandDrugName = null;

		console.log('brandDrugName is: ', brandDrugName);

		drugStoreIndex = null;

		console.log(drugStoreIndex);

		st = null;

		console.log(st);
		console.log($nodeStopper);
	}

	let pp = '';

	function extractDrugName(node) {
		console.log(node.textContent);
		pp = node.textContent;
	}

	$: {
		setTimeout(() => {
			if ($mm.dod == !undefined) {
				$mm.push({
					dod: $newStockDn,
					tot: totalAmountRemaining
				});
			} else {
				$mm.push({
					dod: eachStock[3][0].drugName,
					tot: totalAmountRemaining
				});
			}
		}, 1000);
	}

	// $: console.log($mm);

	console.log($newStockDn);

	onMount(() => {
		$mm.push({
			dod: $newStockDn,
			tot: totalAmountRemaining
		});

		console.log(eachStock[3][0]);
	});
</script>

{#if namey[0].includes('.')}
	<div class="test">
		{#each eachStock[0] as stockPosition, i}
			<div class="stock-false-div"><h1>{stockPosition}..</h1></div>
		{/each}
		<div class="out-of-stock-div">
			<h1>THIS STOCK HAS BEEN EXHAUSTED!</h1>
		</div>
		{#each eachStock[3] as drug, i (drug.id)}
			<div transition:slide class="test">
				<main>
					<div
						class="destructured"
						class:darkyAlphaMainAndDestructured={$lumpCompDarkProps.darkyAlphaMainAndDestructured}
					>
						<slot />
						<div
							use:nodeUnitFunction
							class="ps"
							class:darkyPs={$lumpCompDarkProps.darkyPs}
							id={drug.id}
						>
							<p class="none">{drug.id}</p>
							<p>{i + 1}</p>
							<p>{drug.drugName}</p>
							<p>₦{drug.price}</p>
							<p>{drug.time}</p>
							<p>{drug.date}</p>
						</div>
					</div>
				</main>
			</div>
		{/each}
		<!-- <button on:click={increment}>Increment</button> -->

		<main
			class="total-amount-container"
			class:darkyTotalAmountContainer={$lumpCompDarkProps.darkyTotalAmountContainer}
		>
			<div class="p-container1">
				{#each eachStock[1] as drugStoreAmountInStock (drugStoreAmountInStock)}
					<div>
						<AmountInStockComp {drugStoreAmountInStock} />
					</div>
				{/each}
				<div>
					<TotalAmountSoldInUnitsComp {totalAmountSoldInUnits} />
				</div>
			</div>
			<div class="p-container1 reddy">
				<div>
					<p class="p1" class:darkyP1P3={$lumpCompDarkProps.darkyP1P3}>Remaining:</p>
					{#each eachStock[1] as drugStoreAmountInStock}
						{#if totalAmountRemaining <= drugStoreAmountInStock / 3}
							<p
								class="{drugName} stock-remaining-red"
								class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}
							>
								{totalAmountRemaining}
							</p>
						{:else if totalAmountRemaining <= drugStoreAmountInStock / 1.5}
							<p class="stock-remaining-yellow" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{:else}
							<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{/if}
					{/each}
				</div>

				<TotalAmountInNairaComp {totalAmountInNaira} />
			</div>
		</main>

		<!-- <button on:click={increment}>Increment</button> -->
	</div>
	<!-- <div transition:blur class={$submittedMap.get(dad) ? 'hide' : ''}> -->
{:else if totalAmountRemaining <= -1}
	<div class="test">
		{#each eachStock[0] as stockPosition, i}
			<div class="stock-false-div"><h1>{stockPosition}...</h1></div>
		{/each}
		<div class="out-of-stock-div">
			<h1>THIS STOCK HAS BEEN EXHAUSTED!</h1>
		</div>
		{#each eachStock[3] as drug, i (drug.id)}
			<!-- {#if i + 1 >= eachStock[1][0]}
				<h1 use:nj>yeahhh</h1>
			{:else} -->
			<!-- else content here -->
			<div transition:slide class="test">
				<main>
					<div
						class="destructured"
						class:darkyAlphaMainAndDestructured={$lumpCompDarkProps.darkyAlphaMainAndDestructured}
					>
						<slot />
						<div
							use:nodeUnitFunction
							class="ps"
							class:darkyPs={$lumpCompDarkProps.darkyPs}
							id={drug.id}
						>
							<p class="none">{drug.id}</p>
							<p>{i + 1}</p>
							<p use:nodeActionyf>{drug.drugName}</p>
							<p>₦{drug.price}</p>
							<p>{drug.time}</p>
							<p>{drug.date}</p>
							{#if !remE}<RemoveBtn drugd={drug.id} onRemove={handleDrugRemoval} />{/if}
						</div>
					</div>
				</main>
			</div>
			<!-- {/if} -->
		{/each}
		<!-- <button on:click={increment}>Increment</button> -->

		<main
			class="total-amount-container"
			class:darkyTotalAmountContainer={$lumpCompDarkProps.darkyTotalAmountContainer}
		>
			<div class="p-container1">
				{#each eachStock[1] as drugStoreAmountInStock (drugStoreAmountInStock)}
					<div>
						<AmountInStockComp {drugStoreAmountInStock} />
					</div>
				{/each}
				<div>
					<TotalAmountSoldInUnitsComp {totalAmountSoldInUnits} />
				</div>
			</div>
			<div class="p-container1 reddy">
				<div>
					<p class="p1" class:darkyP1P3={$lumpCompDarkProps.darkyP1P3}>Remaining:</p>
					{#each eachStock[1] as drugStoreAmountInStock}
						{#if totalAmountRemaining <= drugStoreAmountInStock / 3}
							<p
								class="{drugName} stock-remaining-red"
								class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}
							>
								{totalAmountRemaining}
							</p>
						{:else if totalAmountRemaining <= drugStoreAmountInStock / 1.5}
							<p class="stock-remaining-yellow" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{:else}
							<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{/if}
					{/each}
				</div>

				<TotalAmountInNairaComp {totalAmountInNaira} />
			</div>
		</main>
	</div>

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
{:else if totalAmountRemaining === 0}
	<div class="test">
		{#each eachStock[0] as stockPosition, i}
			<div class="stock-false-div"><h1>{stockPosition}...</h1></div>
		{/each}
		<div class="out-of-stock-div">
			<h1>THIS STOCK HAS BEEN EXHAUSTED!</h1>
		</div>
		{#each eachStock[3] as drug, i (drug.id)}
			<!-- {#if i + 1 >= eachStock[1][0]}
				<h1 use:nj>yeahhh</h1>
			{:else} -->
			<!-- else content here -->
			<div transition:slide class="test">
				<main>
					<div
						class="destructured"
						class:darkyAlphaMainAndDestructured={$lumpCompDarkProps.darkyAlphaMainAndDestructured}
					>
						<slot />
						<div
							use:nodeUnitFunction
							class="ps"
							class:darkyPs={$lumpCompDarkProps.darkyPs}
							id={drug.id}
						>
							<p class="none">{drug.id}</p>
							<p>{i + 1}</p>
							<p use:nodeActionyf>{drug.drugName}</p>
							<p>₦{drug.price}</p>
							<p>{drug.time}</p>
							<p>{drug.date}</p>
							{#if !remE}<RemoveBtn drugd={drug.id} onRemove={handleDrugRemoval} />{/if}
						</div>
					</div>
				</main>
			</div>
			<!-- {/if} -->
		{/each}
		<!-- <button on:click={increment}>Increment</button> -->

		<main
			class="total-amount-container"
			class:darkyTotalAmountContainer={$lumpCompDarkProps.darkyTotalAmountContainer}
		>
			<div class="p-container1">
				{#each eachStock[1] as drugStoreAmountInStock (drugStoreAmountInStock)}
					<div>
						<AmountInStockComp {drugStoreAmountInStock} />
					</div>
				{/each}
				<div>
					<TotalAmountSoldInUnitsComp {totalAmountSoldInUnits} />
				</div>
			</div>
			<div class="p-container1 reddy">
				<div>
					<p class="p1" class:darkyP1P3={$lumpCompDarkProps.darkyP1P3}>Remaining:</p>
					{#each eachStock[1] as drugStoreAmountInStock}
						{#if totalAmountRemaining <= drugStoreAmountInStock / 3}
							<p
								class="{drugName} stock-remaining-red"
								class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}
							>
								{totalAmountRemaining}
							</p>
						{:else if totalAmountRemaining <= drugStoreAmountInStock / 1.5}
							<p class="stock-remaining-yellow" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{:else}
							<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
								{totalAmountRemaining}
							</p>
						{/if}
					{/each}
				</div>

				<TotalAmountInNairaComp {totalAmountInNaira} />
			</div>
		</main>
	</div>

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

	<!-- <button on:click={increment}>Increment</button> -->
{:else}
	<div class="yy">
		{#each eachStock[0] as stockPosition, i}
			{#if $sumView}
				<div class="misc">
					<div class="stock-true-div"><h1>{stockPosition}...</h1></div>
					<div class="stock-true-div">
						<button class="show-units-btn" on:click={showUnits}>{_showUnits}</button>
					</div>
					{#each eachStock[2] as priceTag, i}
						<div class="stock-true-div"><h1>₦{priceTag}</h1></div>
					{/each}
				</div>
			{:else}
				<div class="stock-true-div"><h1>{stockPosition}...</h1></div>
			{/if}
		{/each}
		<!-- {#if $sumView} -->
		<!-- {#if show} -->
		{#each eachStock[3] as drug, i (drug.id)}
			<!-- {#key a} -->
			<div transition:slide class="yay" class:hide={a}>
				<!-- {/key} -->
				<main>
					<div
						class="destructured"
						class:darkyAlphaMainAndDestructured={$lumpCompDarkProps.darkyAlphaMainAndDestructured}
					>
						<slot />
						<div
							use:nodeUnitFunction
							class="ps"
							class:darkyPs={$lumpCompDarkProps.darkyPs}
							id={drug.id}
						>
							<p class="none">{drug.id}</p>
							<p>{i + 1}</p>
							<p use:extractDrugName>{drug.drugName}</p>
							<p>₦{drug.price}</p>
							<p>{drug.time}</p>
							<p>{drug.date}</p>
							{#if !remE}<RemoveBtn drugd={drug.id} onRemove={handleDrugRemoval} />{/if}
						</div>
					</div>
				</main>
			</div>
		{/each}
		<!-- {/if} -->
		<!-- {:else} -->
		<!-- {#each eachStock[3] as drug, i (drug.id)}
				<div transition:slide>
					<main>
						<div
							class="destructured"
							class:darkyAlphaMainAndDestructured={$lumpCompDarkProps.darkyAlphaMainAndDestructured}
						>
							<slot />
							<div
								use:nodeUnitFunction
								class="ps"
								class:darkyPs={$lumpCompDarkProps.darkyPs}
								id={drug.id}
							>
								<p class="none">{drug.id}</p>
								<p>{i + 1}</p>
								<p use:extractDrugName>{drug.drugName}</p>
								<p>₦{drug.price}</p>
								<p>{drug.time}</p>
								<p>{drug.date}</p>
								{#if !remE}<RemoveBtn drugd={drug.id} onRemove={handleDrugRemoval} />{/if}
							</div>
						</div>
					</main>
				</div>
			{/each} -->
		<!-- {/if} -->
		<main
			class="total-amount-container"
			class:darkyTotalAmountContainer={$lumpCompDarkProps.darkyTotalAmountContainer}
		>
			<div class="p-container1">
				{#each eachStock[1] as drugStoreAmountInStock (drugStoreAmountInStock)}
					<div>
						<AmountInStockComp {drugStoreAmountInStock} />
					</div>
				{/each}
				<div>
					<TotalAmountSoldInUnitsComp {totalAmountSoldInUnits} />
				</div>
			</div>
			<div class="p-container1 reddy">
				{#key totalAmountRemaining}
					<div>
						<p class="p1" class:darkyP1P3={$lumpCompDarkProps.darkyP1P3}>Remaining:</p>
						{#each eachStock[1] as drugStoreAmountInStock}
							{#if totalAmountRemaining <= drugStoreAmountInStock / 3}
								<p
									class="{drugName} stock-remaining-red"
									class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}
								>
									{totalAmountRemaining}
								</p>
							{:else if totalAmountRemaining <= drugStoreAmountInStock / 1.5}
								<p class="stock-remaining-yellow" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
									{totalAmountRemaining}
								</p>
							{:else}
								<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
									{totalAmountRemaining}
								</p>
							{/if}
						{/each}
					</div>
				{/key}

				<TotalAmountInNairaComp {totalAmountInNaira} />
			</div>
		</main>
	</div>
{/if}

<style>
	.misc {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* font-size: 3px; */
	}
	.seal {
		border: solid 2px hsl(0, 50%, 45%, 1);
	}

	.hide {
		height: 0vh;
		opacity: 0;

		/* background: red !important; */
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
		/* transform: translate(0px, 90px); */
		transition: all ease-in-out 0.4s;
	}
	@keyframes loading-fzua35 {
		10% {
			background: red;
			transition: all ease-in-out 0.4s;
		}
		50% {
			background: green;
			transition: all ease-in-out 0.4s;
		}
		100% {
			background: blue;
			transition: all ease-in-out 0.4s;
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
		/* margin-top: 0.5rem; */
		align-items: center;
		margin-top: 1rem;
		width: 100%;
		justify-content: space-evenly;
	}
	.show-units-btn {
		background-color: hsl(0, 50%, 50%, 1);
		color: white;
		width: max-content;
		border-radius: 5px;
		border: none;
		display: flex;
		padding: 1px 5px;
		cursor: pointer;
		align-items: center;
		transition: all 0.4s;
	}
	.show-units-btn:hover {
		transform: translateX(-2px) translateY(3px) scale(0.97);
		box-shadow: 1px 1px 10px 1px red;
		transition: all 0.4s;
	}
	.btns {
		width: 100%;
		display: flex;
		/* margin: 0.4rem; */
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		align-items: center;
		justify-content: space-around;
	}
	.ss {
		/* background: lightcoral !important; */
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
		/* margin: 0 !important;
		margin-top: 0.5rem !important; */
	}

	:global(.buttonrev-class-for-lump) {
		margin-bottom: 0.5rem;
	}

	main {
		display: flex;
		flex-direction: column;
		/* background: hsla(200, 50%, 98%, 1); */
		background: hsla(200, 50%, 15%, 1);
		border-radius: 5px !important;
		/* overflow: scroll;
		flex-wrap: nowrap; */
		/* border: 1px solid #204a60 !important; */

		transition: all ease-in-out 0.2s;
	}
	.single-input-element-comp-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		/* margin: 3rem 0; */
		flex-direction: column;
	}

	:global(.single-input-element-comp-for-lump) {
		width: 6vw;
		border: none;
		/* margin: 0 1rem; */

		background: hsla(222, 50%, 90%, 1);
		padding: 3.5px;
		color: hsla(0, 0%, 20%, 1);
		color-scheme: dark;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}
	.drug-label-title {
		color: hsl(0, 50%, 45%, 1);
	}
	.out-of-stock-div {
		/* background: hsl(0, 50%, 75%, 1);
		color: hsl(0, 50%, 45%, 1);
		border-radius: 5px;
		padding: 0 6px;
		margin: 0.7rem 0;
		display: flex;
		align-self: center;
		justify-content: center; */
	}
	.stock-true-div {
		width: fit-content;
	}
	.stock-true-div h1 {
		background-color: hsla(120, 90%, 67%, 1);
		font-size: 0.9rem;
		border-radius: 5px !important;
		padding: 3px;
		color: hsla(120, 90%, 27%, 1);
	}
	h1 {
		background: hsl(0, 50%, 75%, 1);
		color: hsl(0, 50%, 45%, 1);
		border-radius: 5px;
		padding: 6px;
		font-size: 1.2rem;
		text-align: center;
		margin: 0.7rem 0.4rem;
		display: flex;
		align-self: center;
		justify-content: center;
	}

	.ps {
		display: flex;
		border-radius: 5px;
		width: 100%;
		align-items: center;
		/* justify-content: flex-start; */
		background: hsla(200, 50%, 94%, 1);
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;
		margin: 0.2rem;
		transition: all ease-in-out 0.2s;
	}

	.ps p {
		background: hsla(222, 100%, 87%, 1);
		border-radius: 5px;
		margin: 3px 3px;
		letter-spacing: 0.3px;
		display: flex;
		align-self: flex-start;
		justify-self: flex-start;
		align-content: center;
		justify-content: center;
		padding: 0px 0px !important;
		/* width: fit-content; */
		flex-wrap: wrap;
		flex-grow: 1;
		transition: all ease-in-out 0.2s;
	}

	.darkyPs p {
		background: hsla(222, 100%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyPs {
		background: hsla(200, 50%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}
	main:last-child {
		border: none;
		transition: all ease-in-out 0.2s;
	}
	.p-container1 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		/* justify-content: space-evenly !important; */
		/* flex-wrap: wrap; */
		/* padding-left: 6px !important; */
	}
	.p-container2 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		/* padding-right: 6px !important; */
		/* justify-content: end; */
		transition: all ease-in-out 0.2s;
	}

	.p1 {
		font-size: 0.7rem;
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		display: flex;
		/* width: 100% */
		padding: 3px 4px;
		margin: 0.2rem;
		margin-right: 0;

		transition: all ease-in-out 0.2s;
	}

	.stock-remaining-red {
		background: hsl(0, 50%, 50%, 1);
		/* background: hsla(100, 50%, 62%, 1); */
		color: hsl(0, 0%, 96%, 1);
		border-radius: 0 10px 10px 0;
		/* border-radius: 5px !important; */
		margin: 0.2rem;
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.stock-remaining-yellow {
		background: hsl(51, 50%, 50%, 1);
		/* background: hsla(100, 50%, 62%, 1); */

		border-radius: 0 10px 10px 0;
		margin: 0.2rem;
		color: hsla(0, 0%, 20%, 1);
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p2 {
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
		margin: 0.2rem;
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p3 {
		font-size: 0.7rem;
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p4 {
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
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
	.total-amount-container {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		border-right: 2px solid hsla(222, 50%, 75%, 1);
		margin: 0.4rem 0.4rem;
		padding: 5px 0;
		border-radius: 5px;
		flex-wrap: wrap;
		/* width: fit-content; */
		/* height: 40vh; */
		border-right: unset;
		background: hsla(100, 50%, 85%, 1);
		justify-content: space-around !important;
		transition: all ease-in-out 0.2s;
		/* flex-direction: row; */

		/* margin: 0; */
	}
	.darkyTotalAmountContainer {
		background: hsla(100, 50%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}

	.total-amount-container div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 3px;
		transition: all ease-in-out 0.2s;
	}
	.drug-title-for-out-of-stock {
		color: hsl(0, 50%, 45%, 1);
		border-radius: 5px !important;
		background: hsl(0, 50%, 70%, 1);
		padding: 0;
		/* border: 10px solid green !important; */
		margin-bottom: 0.2rem;
		display: flex;
		/* position: -webkit-sticky;
		position: sticky;
		top: 0px; */
		/* z-index: 99999; */
		/* justify-content: center; */
		/* width: 100%; */
		/* background: hsla(222, 50%, 80%, 1); */
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

	.none {
		display: none !important;
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

	.drug-namey-out-of-stock {
		border-radius: 5px !important;
		background: hsla(222, 50%, 80%, 1);
	}

	.ps p:nth-child(2) {
		background: hsla(222, 100%, 70%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyAlphaMainAndDestructured {
		background: hsla(200, 50%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}
	.test {
		/* height: 1000px; */
	}

	.for-line {
		border: 1px solid hsla(0, 50%, 45%, 1);
		margin: 1rem 0;
	}

	.restock-btn {
		margin: 6rem;
	}

	.bob {
		background: blue;
	}

	.restock-btn-container {
		/* background: red; */
		/* position: absolute; */
		/* margin-top: 2rem;
		margin-bottom: 5rem; */
		display: flex;
		align-items: center;
		justify-content: center;
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

	main {
		display: flex;
		flex-direction: column;
		/* background: hsla(200, 50%, 98%, 1); */
		background: hsla(200, 50%, 15%, 1);
		border-radius: 5px !important;
		/* overflow: scroll;
		flex-wrap: nowrap; */
		border: 1px solid #204a60 !important;

		transition: all ease-in-out 0.2s;
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
	.drug-label-title {
		color: hsl(0, 50%, 45%, 1);
	}
	.out-of-stock-div {
		/* background: hsl(0, 50%, 75%, 1);
		color: hsl(0, 50%, 45%, 1);
		border-radius: 5px;
		padding: 0 6px;
		margin: 0.7rem 0;
		display: flex;
		align-self: center;
		justify-content: center; */
	}
	.stock-true-div {
		width: fit-content;
	}
	.stock-false-div {
		width: fit-content;
	}
	.stock-true-div h1 {
		background-color: hsla(120, 90%, 67%, 1);
		font-size: 0.9rem;
		padding: 0 2px;
		color: hsla(120, 90%, 27%, 1);
	}
	.stock-false-div h1 {
		background-color: hsla(120, 10%, 67%, 1);
		font-size: 0.9rem;
		padding: 0 2px;
		color: hsla(120, 10%, 30%, 1);
	}
	h1 {
		background: hsl(0, 50%, 75%, 1);
		color: hsl(0, 50%, 45%, 1);
		border-radius: 5px;
		padding: 6px;
		font-size: 1.2rem;
		text-align: center;
		margin: 0.7rem 0.4rem;
		display: flex;
		align-self: center;
		justify-content: center;
	}

	.ps {
		display: flex;
		border-radius: 5px;
		width: 100%;
		align-items: center;
		/* justify-content: flex-start; */
		background: hsla(200, 50%, 94%, 1);
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;
		margin: 0.2rem;
		transition: all ease-in-out 0.2s;
	}

	.ps p {
		background: hsla(222, 100%, 87%, 1);
		border-radius: 5px;
		margin: 3px 3px;
		letter-spacing: 0.3px;
		display: flex;
		align-self: flex-start;
		justify-self: flex-start;
		align-content: center;
		justify-content: center;
		padding: 0px 0px !important;
		/* width: fit-content; */
		flex-wrap: wrap;
		flex-grow: 1;
		transition: all ease-in-out 0.2s;
	}

	.darkyPs p {
		background: hsla(222, 100%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyPs {
		background: hsla(200, 50%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}
	main:last-child {
		border: none;
		transition: all ease-in-out 0.2s;
	}
	.p-container1 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		/* justify-content: space-evenly !important; */
		/* flex-wrap: wrap; */
		/* padding-left: 6px !important; */
	}
	.p-container2 {
		display: flex;
		border-radius: 10px;
		align-items: center;
		/* padding-right: 6px !important; */
		/* justify-content: end; */
		transition: all ease-in-out 0.2s;
	}

	.stock-remaining-red {
		background: hsl(0, 50%, 50%, 1);
		/* background: hsla(100, 50%, 62%, 1); */
		color: hsl(0, 0%, 96%, 1);
		border-radius: 0 10px 10px 0;
		margin: 0.2rem;
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.stock-remaining-yellow {
		background: hsl(51, 50%, 50%, 1);
		/* background: hsla(100, 50%, 62%, 1); */

		border-radius: 0 10px 10px 0;
		margin: 0.2rem;
		color: hsla(0, 0%, 20%, 1);
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p2 {
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
		margin: 0.2rem;
		margin-left: 0;
		font-size: 0.7rem;
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p3 {
		font-size: 0.7rem;
		background: hsla(100, 50%, 70%, 1);
		border-radius: 10px 0px 0 10px;
		border-right: 2px solid hsla(100, 100%, 20%, 1);
		padding: 3px 4px;
		transition: all ease-in-out 0.2s;
	}
	.p4 {
		background: hsla(100, 50%, 62%, 1);
		border-radius: 0 10px 10px 0;
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
	.total-amount-container {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		border-right: 2px solid hsla(222, 50%, 75%, 1);
		margin: 0.4rem 0.4rem;
		padding: 5px 0;
		border-radius: 5px;
		flex-wrap: wrap;
		/* width: fit-content; */
		/* height: 40vh; */
		border-right: unset;
		background: hsla(100, 50%, 85%, 1);
		justify-content: space-around !important;
		transition: all ease-in-out 0.2s;
		/* flex-direction: row; */

		/* margin: 0; */
	}
	.darkyTotalAmountContainer {
		background: hsla(100, 50%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}

	.total-amount-container div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 3px;
		transition: all ease-in-out 0.2s;
	}
	.drug-title-for-out-of-stock {
		color: hsl(0, 50%, 45%, 1);
		background: hsl(0, 50%, 70%, 1);
		border-radius: 5px !important;
		padding: 0;
		border: none;
		margin-bottom: 0.2rem;
		display: flex;
		/* position: -webkit-sticky;
		position: sticky;
		top: 0px; */
		z-index: -12;
		/* justify-content: center; */
		/* width: 100%; */
		/* background: hsla(222, 50%, 80%, 1); */
		transition: all ease-in-out 0.2s;
	}
	.drug-title {
		padding: 0;
		border: none;
		margin-bottom: 0.2rem;
		border: 7px green;
		display: flex;
		/* position: -webkit-sticky;
		position: sticky;
		top: 0px;
		z-index: -12; */
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

	.darkyH2AndP {
		color: hsla(0, 0%, 70%, 1);
		transition: all ease-in-out 0.2s;
	}

	.none {
		display: none !important;
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

	.destructured-for-out-of-stock {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		align-items: center;
		border-radius: 5px !important;
		padding: 1px 0;
		border-radius: 5px;
		/* margin: 0 0.4rem; */
		background: hsl(0, 50%, 70%, 1);
		justify-content: space-around;
		/* background: hsla(222, 0%, 95.5%, 1); */

		transition: all ease-in-out 0.2s;
	}
	.yay {
		height: 8.3vh;
		opacity: 1;
		margin: 0 0.3rem;
		transition: all ease-in-out 0.4s;
	}

	.destructured {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		align-items: center;
		padding: 1px;
		flex-wrap: nowrap;
		border-radius: 5px !important;
		border-radius: 5px;
		/* margin: 0rem 0.3rem; */
		justify-content: space-around;
		/* background: hsla(222, 0%, 95.5%, 1); */
		background: hsla(200, 50%, 85%, 1);
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */

		transition: all ease-in-out 0.2s;
	}

	.drug-namey-out-of-stock {
		background: hsla(222, 50%, 80%, 1);
	}

	.ps p:nth-child(2) {
		background: hsla(222, 100%, 70%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyAlphaMainAndDestructured {
		background: hsla(200, 50%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}
	.test {
		/* height: 1000px; */
		border: 1px hsla(0, 50%, 45%, 1) solid;
		border-radius: 5px !important;
		border: 1px hsla(0, 50%, 45%, 1) solid;
	}

	.yy {
		/* background: pink; */
		/* column-gap: 235px; */
		border: 1.5px solid #204a60;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
	}
</style>
