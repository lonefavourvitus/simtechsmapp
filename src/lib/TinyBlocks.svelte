<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { supabase } from '$lib/supabaseClient';
	import { get } from 'svelte/store';
	import { v4 as uuidv4 } from 'uuid';
	import {
		multiDrugEntriesArray,
		formattedMultiDrugEntriesArray,
		receiptPricesFromStore,
		nodeStopper,
		drugStore,
		drugProperties,
		eachStockEssentialInfo,
		formattedMultiDrugEntriesObject,
		showPrintBtn
	} from '../stores';
	import { onMount, onDestroy } from 'svelte';
	let anEntry;
	let hoveredEntry = null;

	// let $receiptPrices = [];

	export let typedName = '';
	export let altName = '';
	export let price;
	export let unitName = '';
	export let fullBrandName = '';
	export let message = null;
	let bb = '4e6934b0-1b4b-4419-a3b3-defca7fcfaa8';
	let bbfake = '4e6734b0-1b4b-4419-a3b3-defca7fcfaa8';

	// export const formattedMultiDrugEntriesArray = [];

	let bbb = [];

	let dirty = false;

	// let insertMultiEntries = true;
	console.log($nodeStopper);
	function handleHover(entry) {
		hoveredEntry = entry;
	}

	const regex = /^[a-zA-Z0-9 +]*$/;

	const newArray = [];

	function checkIfAnyStringsMatch(stringsArray, targetArray) {
		return targetArray.some((targetString) => stringsArray.includes(targetString));
	}

	// // Example arrays
	// const array1 = ["apple", "banana", "cherry"];
	// const array2 = ["banana", "orange", "grape"];

	// console.log(containsAtLeastOne(array1, array2));  // Output: true

	function clearAllEntries() {
		$multiDrugEntriesArray = [];
		$formattedMultiDrugEntriesArray = [];
		// 20230818000000
	}

	function formatMultiDrugEntriesArray() {
		let clean = false;
		console.log('fmrt clicked');
		for (const item of $multiDrugEntriesArray) {
			const parts = item.split(' x ');
			console.log(parts);
			if (parts.length === 2 && !isNaN(parts[1])) {
				$formattedMultiDrugEntriesObject = {
					drugName: parts[0],
					xTimes: parts[1]
				};

				console.log($eachStockEssentialInfo);

				console.log($formattedMultiDrugEntriesObject);
				// if (condition) {

				// }
				$formattedMultiDrugEntriesArray.push(...Array(parseInt(parts[1])).fill(parts[0]));
			} else {
				$formattedMultiDrugEntriesArray.push(item);
			}
		}
		console.log($formattedMultiDrugEntriesArray);

		if (checkIfAnyStringsMatch($formattedMultiDrugEntriesArray, $nodeStopper)) {
			console.log(true);
			console.log('cant input any drugs');
		} else {
			console.log(false);
			for (const val of $formattedMultiDrugEntriesArray) {
				drugName = val;
				console.log($formattedMultiDrugEntriesArray);
				handleSubmit();
			}
			// clearAllEntries();
		}

		// console.log(drugName);
		// if ($nodeStopper.includes('gsk antacid suspension')) {
		// 	// console.log(drugName);
		// 	console.log(`${drugName + ' is in nodestopper, nodestopper array is:' + $nodeStopper}`);

		// 	console.log($formattedMultiDrugEntriesArray);
		// 	return;
		// } else {
		// }
		// rrr;
		// $multiDrugEntriesArray = [];
		// $formattedMultiDrugEntriesArray = [];
	}

	function handleMouseOut() {
		hoveredEntry = null;
	}
	function handleDelete(entry) {
		let index = $multiDrugEntriesArray.indexOf(entry);
		if (index !== -1) {
			// index = 'deleting...';
			$multiDrugEntriesArray.splice(index, 1);

			hoveredEntry = null;
			console.log($multiDrugEntriesArray);
		}
	}

	onDestroy(() => {
		console.log('Component will be destroyed');
		console.log($multiDrugEntriesArray);
	});
	let nn = [];
	let nonifyTinyBlocks = (node) => {
		// console.log(node);
		// nn.push(node.textContent);
		console.log(nn);
		// if ($multiDrugEntriesArray.length < 0) {
		// 	node.style.display = 'none';
		// }
	};

	$: drugName = '';

	let todayDate = new Date();
	console.log(todayDate);
	$: {
		console.log(drugName);
	}

	async function handleSubmitDrugValues(unitName, price) {
		// console.log($formattedMultiDrugEntriesArray);

		if (
			// drugName == fullBrandName ||
			drugName == unitName &&
			!$nodeStopper.includes(drugName)
		) {
			todayDate = new Date();

			// const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
			let options = {
				timeZone: 'Africa/Lagos',
				hour12: true,
				weekday: 'short',
				year: '2-digit',
				month: '2-digit',
				day: '2-digit'
			};

			let today = todayDate.toLocaleDateString('en-NG', options).replace(/\//g, '-');

			let todayTime = todayDate.toLocaleTimeString('en-NG', {
				timeZone: 'Africa/Lagos',
				hour12: true
			});

			console.log(today); // Outputs something like "Fri-05-06"
			console.log(todayTime);
			console.log(todayDate);

			// drugName = fullBrandName;
			// drugName = 'HName';
			// drugName = unitName;

			if ($nodeStopper.includes(drugName)) {
				alert('This drug is out of stock, to continue recording sales for this brand, restock it');
				console.log($nodeStopper);
				console.log(drugName);
				console.log(unitName);
				// drugName = unitName + 'is out of stock';
				// drugName = null;

				return;
			} else {
				const currentDrugs = get(drugStore);
				console.log(currentDrugs);

				const index = currentDrugs.findIndex((drug) => drug[1][0] === unitName);

				// if (index !== -1) {
				const newDrugs = [...currentDrugs];
				// Find the index of the last stock
				// const lastIndex = currentDrugs[index][5];
				const lastIndex = currentDrugs[index].length - 1;
				console.log(lastIndex);
				// Get the last stock
				// let lastStock = currentDrugs[0][lastIndex];
				let lastStock = currentDrugs[index][lastIndex][currentDrugs[index][lastIndex].length - 1];
				console.log(lastStock);

				// Get the last array in the last stock

				let lastArray = lastStock[lastStock.length - 1];
				console.log(lastArray);

				let newDrugInput = {
					isMulti: 'testy',
					id: uuidv4(),
					drugName,
					price: lastStock[2][0],
					date: today,
					time: todayTime
				};
				// $receiptPricesFromStore
				// 	.push(lastStock[2][0])
				// 	.filter((string, index) => $receiptPricesFromStore.indexOf(string) === index);

				// let formattedReceiptPrices = $receiptPrices.filter(
				// 	(string, index) => $receiptPrices.indexOf(string) === index
				// );
				// function li() {
				let b = [];
				$receiptPricesFromStore.push(lastStock[2][0]);
				// }
				// li();
				console.log('angry');
				console.log($receiptPricesFromStore);
				console.log(newDrugInput);
				console.log(b);
				// console.log($receiptPrices);
				// console.log('JSON.stringify:', JSON.stringify(newDrugInput));
				// console.log('JSON.parse:', JSON.parse(newDrugInput));
				// console.log('JSON:', newDrugInput.json);

				drugName = '';
				message = null;

				lastArray.push(newDrugInput);

				let lastStockPostition = lastStock[0];

				console.log(lastStockPostition);

				let lastStockStockAmount = lastStock[1];

				console.log(lastStockStockAmount);

				let lastStockPriceTag = lastStock[2];

				console.log(lastStockPriceTag);

				// async function handleLogin() {
				// const response = await fetch('/api/loginAPI', {
				// 	method: 'post',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		jumu: 'pop'
				// 		// ref_unit_name: unitName,
				// 		// drug_id: newDrugInput.id,
				// 		// ref_date: today,
				// 		// sales_input: JSON.stringify(newDrugInput),
				// 		// last_stock_position: lastStockPostition[0],
				// 		// last_stock_stock_amount: lastStockStockAmount[0],
				// 		// last_stock_price_tag: lastStockPriceTag[0]
				// 	})
				// });

				// if (response.ok) {
				// 	const data = await response.json();
				// 	console.log('sales input is:', data);
				// 	// Redirect or perform any other actions after successful login
				// } else {
				// 	const error = await response.json();
				// 	console.error(error.error);
				// 	console.log(response);
				// }
				// }

				supabase
					.from('drug_sales_input')
					.insert({
						ref_unit_name: unitName,
						drug_id: newDrugInput.id,
						ref_date: today,
						sales_input: JSON.stringify(newDrugInput),
						last_stock_position: lastStockPostition[0],
						last_stock_stock_amount: lastStockStockAmount[0],
						last_stock_price_tag: lastStockPriceTag[0],
						user_id_from_profiles: bb
					})

					.single()
					.then((result) => console.log(result))
					.catch((error) => console.log(error));

				// newDrugs[index][5][newDrugs[index][5][1].length - 1].push(newDrugInput); // Push the new value to the last nested array
				console.log('array index is', index);
				console.log(newDrugInput);
				console.log('lastIndex is', lastIndex);
				console.log('lastStock is', lastStock);
				console.log('lastArray is', lastArray);
				drugStore.set(newDrugs);
				console.log('inside', newDrugs);
				console.log(index, 'in not eqaul');
				console.log('spec index is:', index);
				$showPrintBtn = true;

				// let vehicles = {
				// 	car: 'benz',
				// 	motorcycle: 'yamaha'
				// };
				// const response = await fetch('/api/test', {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		ref_unit_name: unitName,
				// 		drug_id: newDrugInput.id,
				// 		ref_date: today,
				// 		sales_input: JSON.stringify(newDrugInput),
				// 		last_stock_position: lastStockPostition[0],
				// 		last_stock_stock_amount: lastStockStockAmount[0],
				// 		last_stock_price_tag: lastStockPriceTag[0]
				// 	})
				// });
				// console.log(response);

				// if (response.ok) {
				// 	// Request was successful
				// 	const data = await response.json();
				// 	console.log(data); // Display success message
				// } else {
				// 	// Request failed
				// 	const errorData = await response.json();
				// 	console.error(errorData); // Display error message
				// }

				// console.log('array index is', newDrugs[index][5][newDrugs[index][5].length - 1]);
				// console.log(lastArray.push(newDrugInput));
				// console.log(lastObjectArray);
				// } else {
				// 	console.log(index);
				// }
				// async function handleSubmit() {

				// }
				// console.log(response);
				return { unitName, price };
			}
		} else {
			console.log('not accepted');
			return;
		}
	}

	// console.log($receiptPrices);

	async function handleSubmit() {
		// if
		regex.test(drugName) && drugName == unitName;
		// {
		console.log(unitName);
		handleSubmitDrugValues(unitName, price);
		console.log(unitName);

		$drugProperties.forEach((drug) => {
			console.log(drug);
			handleSubmitDrugValues(...drug);
		});

		// $nodeStopper = [];

		console.log('nodeStopper array in drugs input form is:', $nodeStopper);
		// } else {
		// 	console.log('not a drug name');
		// }
	}

	// async function handleSubmit() {
	// 	// if
	// 	(regex.test(drugName) && drugName == typedName) || drugName == altName;
	// 	// {
	// 	console.log(unitName);
	// 	handleSubmitDrugValues(typedName, altName, unitName, price);
	// 	console.log(unitName);

	// 	$drugProperties.forEach((drug) => {
	// 		handleSubmitDrugValues(...drug);
	// 	});

	// 	// $nodeStopper = [];

	// 	// console.log('nodeStopper array in drugs input form is:', $nodeStopper);
	// 	// } else {
	// 	// 	console.log(drugName, 'is not a drug name');
	// 	// }
	// }
	console.log(bbb);
	let hideMultientriesArray = !true;
</script>

{#if $multiDrugEntriesArray.length !== 0}
	<main transition:scale>
		{#each $multiDrugEntriesArray as anEntry, i (anEntry)}
			<div
				use:nonifyTinyBlocks
				transition:scale
				class="entry-container"
				on:mouseenter={() => handleHover(anEntry)}
				on:mouseleave={handleMouseOut}
				on:click={() => handleDelete(anEntry)}
				on:keydown={() => {}}
			>
				{hoveredEntry === anEntry ? 'Remove' + ' ' + anEntry + '?' : anEntry}
			</div>
		{/each}
		<!-- <div> -->
		<button on:click={formatMultiDrugEntriesArray}>Submit</button>
		<!-- <button on:click={rrr}>test</button> -->
		<!-- <button on:click={clear}>Clear all entries</button> -->
		<!-- </div> -->
	</main>
{/if}

<style>
	.hideMultientriesArray {
		display: none;
	}
	div {
		margin: 0 1rem;
		margin-right: 0.3rem;
		background: hsl(179, 65%, 40%);
		padding: 1px 5px;
		color: hsl(169, 91%, 5%);
		width: fit-content;
		border-radius: 5px;
	}
	button {
		/* margin: 0 1rem; */
		margin-right: 0.3rem;
		background: #2036a1;
		padding: 1px 5px;
		color: hsl(0, 0%, 93%);
		width: fit-content;
		border-radius: 5px;
		transition: all 0.3s;
	}
	button:hover {
		/* margin: 0 1rem; */
		margin-right: 0.3rem;
		background: hsl(230, 67%, 58%);
		color: hsl(0, 0%, 93%);
		transform: translateY(1px);
		cursor: pointer;
		transition: all 0.3s;
	}
	div:not(:first-child) {
		margin: 0 0.3rem;
	}
	main {
		display: flex;
		align-items: center;
		font-size: 0.9rem;
		justify-content: center;
		border: 1px solid hsl(212, 13%, 23%);
		margin-left: 0.5rem;
		border-radius: 10px;
		letter-spacing: 0.3px;
	}
	.entry-container {
		/* padding: 10px; */
		cursor: pointer;
		/* border: 1px solid #ccc; */
		margin: 0.5rem;
		transition: all ease-in-out 0.3s;
	}

	.entry-container:hover {
		color: white;
		background-color: hsl(349, 86%, 44%);
		transition: all ease-in-out 0.3s;
	}
</style>
