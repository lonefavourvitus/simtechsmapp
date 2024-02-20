<script>
	import { v4 as uuidv4 } from 'uuid';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import {
		drugStore,
		drugProperties,
		drugsInputFormCompDarkProps,
		isDisabled,
		nodeStopper,
		formattedKeyDrugNames,
		submitFunction,
		isExpandedForInputForm,
		pp,
		mm,
		receiptPricesFromStore,
		showPrintBtn,
		showModal,
		multiDrugEntriesArray,
		formattedMultiDrugEntriesArray
	} from '../stores';
	import NewDrugInput from '$lib/NewDrugInput.svelte';
	import DataList from '$lib/DataList.svelte';
	import MenuAndOptionsLabel from '$lib/MenuAndOptionsLabel.svelte';
	import { supabase } from '$lib/supabaseClient';
	import Button from '$lib/Button.svelte';
	import { get } from 'svelte/store';
	import Receipt from '$lib/Receipt.svelte';

	import ViewPreviousSalesBtn from '$lib/PreviousSalesBtn.svelte';
	import AddNewDrugButton from '$lib/AddNewDrugButton.svelte';
	import Glossary from '$lib/Glossary.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
	import MakeShiftModalComp from '$lib/MakeShiftModalComp.svelte';

	$: drugName = '';
	// let currentDateTime;

	export let unitName = '';
	export let fullBrandName = '';
	// export let price;
	export let message = null;
	export let bb;
	export let view;

	let mn = JSON.stringify({ lolo: 'popo', polo: 'kkk' });

	console.log(mn);
	$: nn = $mm;
	$: console.log($mm);
	console.log(nn);
	console.log(bb);
	console.log(JSON.parse(mn));
	console.log($receiptPricesFromStore);

	let modalContent = 'This is the modal content.';

	// const UNIT_NAME = 2

	$: {
		dateInput == '' ? ($isDisabled = 'disabled') : ($isDisabled = '');
	}

	let dateInput;

	$: console.log(dateInput);

	// Function to check if input matches and quantity is greater
	let proceedToHandleSubmit = false;
	let proceedToHandleInputForMultiEntries = false;
	let result = '';

	const drugs = [
		{
			dod: 'Atovaquone-proguanil',
			tot: 2
		},
		{
			dod: 'gsk antacid suspension',
			tot: 63
		},
		{
			dod: 'digene relief gel',
			tot: 63
		}
	];

	// // Example usage
	const input = 'Atovaquone-proguanil x 21';
	// const result = checkInput(input);
	// console.log(result);
	$: $drugProperties = $drugProperties;
	$: $formattedKeyDrugNames = $drugProperties.map((subArray) => subArray.slice(0, 1)).flat();
	// $: b = [...wordss, $drugProperties.map((subArray) => subArray.slice(0, 1)).flat()].flat();

	let t = false;
	let b = () => {
		t = !t;
	};
	// $: console.log(b);
	$: words = [...new Set($formattedKeyDrugNames)];
	// $: wordss = wordss;

	$: console.log($drugProperties);
	$: console.log($drugStore);
	$: console.log($formattedKeyDrugNames);
	$: console.log(words);
	$: console.log($formattedMultiDrugEntriesArray);

	const regex = /^[a-zA-Z0-9 +]*$/;

	$: {
		drugName == '' ? ($isDisabled = 'disabled') : ($isDisabled = '');
	}

	let todayDate = new Date();
	console.log(todayDate);

	async function handleSubmitDrugValues(unitName) {
		// if (proceedToHandleSubmit) {
		if (drugName == unitName && words.includes(drugName)) {
			todayDate = new Date();
			drugName = unitName;
			console.log(drugName, 'and', unitName);
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
				console.log(index);

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

				let lastStockPostition = lastStock[0];

				console.log(lastStockPostition);

				let lastStockStockAmount = lastStock[1];

				console.log(lastStockStockAmount);

				let lastStockPriceTag = lastStock[2];

				console.log(lastStockPriceTag);

				let newDrugInput = {
					id: uuidv4(),
					drugName,
					price: lastStock[2][0],
					date: today,
					time: todayTime
				};

				console.log(newDrugInput);
				console.log('JSON.stringify:', JSON.stringify(newDrugInput));
				// console.log('JSON.parse:', JSON.parse(newDrugInput));
				console.log('JSON:', newDrugInput.json);

				lastArray.push(newDrugInput);

				drugName = '';
				message = null;

				$showPrintBtn = true;
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
				// t = false;
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
				return { unitName };
			}
		} else {
			console.log('not accepted');
			return;
		}
		// } else {
		// 	console.log('proceed equals to false');
		// }
	}

	async function handleSubmit() {
		// if
		regex.test(drugName) && drugName == unitName;
		// {
		console.log(unitName);
		handleSubmitDrugValues(unitName);
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

	$: words.sort();

	let filteredNames = [];
	let completedPortion = '';

	function handleInputForDropListSuggestion(event) {
		drugName = event.target.value;
		// filteredNames = words.filter((name) => name.toLowerCase().includes(drugName.toLowerCase()));
		filteredNames = words.filter((name) => name.includes(drugName));
		completedPortion = filteredNames.length > 0 ? filteredNames[0].slice(drugName.length) : '';
	}
	console.log(words);

	function selectName(words) {
		drugName = words;
		completedPortion = '';
		filteredNames = [];
		clearSuggestion();
		filteredNames = [];
		console.log(words);
	}

	// let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
	// let iinputValue = '';

	$multiDrugEntriesArray = [];

	// function checkInput() {}

	function checkInput() {
		const match = drugName.match(/^(.*?)\s*x\s*(\d+)$/);
		// const match = drugName.match(/^(.*?)\s*x\s*(\d+(,\d+)?)$/);

		if (match) {
			console.log(match);
			const inputMedication = match[1];
			const inputQuantity = parseInt(match[2]);

			console.log(`inputMedication is: ${inputMedication}`);
			console.log(`inputQuantity is: ${inputQuantity}`);

			const drug = $mm.find((druggy) => druggy.dod == inputMedication);
			console.log(drug);

			if (drug) {
				console.log(`${drug} is true`);

				if (inputQuantity > drug.tot) {
					result = `Input quantity (${inputQuantity}) is greater than the total quantity (${drug.tot}) for ${drug.dod}.`;
					console.log(
						`Input quantity (${inputQuantity}) is greater than the total quantity (${drug.tot}) for ${drug.dod}.`
					);
					proceedToHandleInputForMultiEntries = false;
				} else {
					result = `Input quantity (${inputQuantity}) is not greater than the total quantity (${drug.tot}) for ${drug.dod}.`;
					console.log(
						`Input quantity (${inputQuantity}) is not greater than the total quantity (${drug.tot}) for ${drug.dod}.`
					);

					// proceedToHandleSubmit = true;
					proceedToHandleInputForMultiEntries = true;
				}
			} else {
				result = 'No matching drug found.';
			}
		} else {
			result = "Invalid input format. Please use 'Medication Name x Quantity' format.";
		}
	}

	function handleInputForMultiEntries(event) {
		drugName = event.target.value;
		// if (words.includes(drugName)) {
		// 	drugName = drugName; // Update the state with valid input
		// } else {
		// 	console.log('no match');
		// }
		if (proceedToHandleInputForMultiEntries) {
			if (
				drugName.includes(',') &&
				words.includes(drugName.replace(/,| x \d+/g, '')) &&
				!$nodeStopper.includes(drugName.replace(/,| x \d+/g, ''))
			) {
				const newWord = drugName.split(',');
				console.log(newWord);

				$multiDrugEntriesArray = [...$multiDrugEntriesArray, ...newWord];

				$multiDrugEntriesArray = $multiDrugEntriesArray.filter((string) => string !== '');

				$multiDrugEntriesArray = $multiDrugEntriesArray.filter(
					(string, index) => $multiDrugEntriesArray.indexOf(string) === index
				);

				drugName = ''; // Clear the input field
				console.log($multiDrugEntriesArray);
				console.log(drugName);
				// let gg=lastStock[2][0]
				// console.log(gg);
			} else {
				if (drugName.includes(',') && $nodeStopper.includes(drugName.replace(/,| x \d+/g, ''))) {
					alert(
						'sorry,' +
							' ' +
							drugName.slice(0, -1) +
							' ' +
							'is out of stock, you must restock it if you wish to continue recording sales specific to it.'
					);
				}
			}
		} else {
			console.log('handleInputForMultiEntries conds not met');
		}
	}

	$: {
		if (drugName.includes('*')) {
			drugName = drugName.replace('*', ' x '); // Add spaces around '*'
			drugName = drugName.replace('  x  ', ' x '); // Remove extra spaces if added more than once

			console.log($multiDrugEntriesArray);
			console.log(drugName);
		}
	}

	function handleKeyDownForMultiEntries(event) {
		if (event.key === '/') {
			event.preventDefault(); // Prevent the default behavior of typing '/'
			drugName += '*'; // Replace '/' with '*'
		}
		//  else {
		// 	drugName += event.key; // For other keys, just append the key to inputText
		// }
	}

	let suggestionText = '';

	const enterKey = 13;

	const clearSuggestion = () => {
		suggestionText = '';
		filteredNames = [];
	};

	// const caseCheckForBruteSuggestion = (word) => {
	// 	word = word.split('');
	// 	let inp = drugName;
	// 	for (let i in inp) {
	// 		if (inp[i] == word[i]) {
	// 			continue;
	// 		} else if (inp[i].toUpperCase() == word[i]) {
	// 			word.splice(i, 1, word[i].toLowerCase());
	// 		} else {
	// 			word.splice(i, 1, word[i].toUpperCase());
	// 		}
	// 	}
	// 	return word.join('');
	// };

	const handleInputForBruteSuggestion = (e) => {
		clearSuggestion();
		let regex = new RegExp('^' + drugName, 'i');
		for (let i in words) {
			if (regex.test(words[i]) && drugName != '') {
				// words[i] = caseCheckForBruteSuggestion(words[i]);
				suggestionText = words[i];
				break;
			}
		}
	};

	const handleKeyDownForBruteSuggestion = (e) => {
		if (e.keyCode == enterKey && suggestionText !== '') {
			e.preventDefault();
			drugName = suggestionText;
			clearSuggestion();
			filteredNames = [];
		}
	};

	$: {
		if (drugName == '') {
			filteredNames = [];

			console.log('empty');
			console.log(filteredNames);
		}
	}
	function convertToLowerCase(node) {
		const transform = () => (node.value = node.value.toLowerCase());
		// node.addEventListener('input', transform, { capture: true });
		transform();
		console.log(node.textContent);
		console.log(transform());
	}
</script>

<!-- <div class="input-container"> -->
<!-- <input
	type="text"
	bind:value={drugName}
	placeholder="Type something here.."
	autocomplete="off"
	on:input={handleInputm}
/> -->
<!-- <span id="suggestion">{suggestionText}</span> -->
<!-- </div> -->
<!-- {#if completedPortion}
	<div class="autocomplete">
		<span>{drugName}</span>
		<span class="autocomplete-suggestion">{completedPortion}</span>
	</div>
{/if} -->

{#if message}
	<p class="message" class:darkyMessage={$drugsInputFormCompDarkProps.darkyMessage}>{message}</p>
{/if}

{#if view}
	{#if $isExpandedForInputForm}
		<!-- <form>hiiiii</form> -->
	{:else}
		<main>
			<form on:submit|preventDefault={handleSubmit}>
				<!-- <form method="post" action="/api/loginAPI" on:submit|preventDefault={handleSubmit}> -->

				<div class="input-group">
					<!-- <input
					on:input={handleInput}
					on:keydown={handleKeyDown}
					id="input-field"
					class:darkyInput={$drugsInputFormCompDarkProps.darkyInput}
					type="text"
					bind:value={drugName}
					placeholder="input drug name..."
				/>-->
					<!-- <span id="suggestion">{suggestionText}</span> -->

					<input type="text" bind:value={suggestionText} autocomplete="off" />
				</div>
				<div class="iinput-group">
					<input
						use:convertToLowerCase
						class="test"
						type="text"
						bind:value={dateInput}
						placeholder="type in date... (Day, dd-mm-yy)"
						autocomplete="off"
						on:input={checkInput}
						on:input={handleInputForMultiEntries}
						on:input={handleInputForBruteSuggestion}
						on:input={handleInputForDropListSuggestion}
						on:keydown={handleKeyDownForMultiEntries}
						on:keydown={handleKeyDownForBruteSuggestion}
					/>
				</div>
				<div transition:fade class="input-group submit-button">
					{#if drugName == ''}
						<button
							style="background:hsla(000,0%,58%,1);cursor:not-allowed"
							disabled={$isDisabled}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit">Submit</button
						>
					{:else}
						<button
							disabled={$isDisabled}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit">Submit</button
						>
					{/if}
				</div>
			</form>

			<!-- <NewDrugInput {handleSubmitDrugValues} /> -->
		</main>

		<div transition:slide class="input-group submit-button">
			{#if dateInput == ''}
				<button
					style="background:hsla(000,0%,58%,1);cursor:not-allowed"
					disabled={$isDisabled}
					id="btn"
					class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
					type="submit">Submit</button
				>
			{:else}
				<button
					disabled={$isDisabled}
					id="btn"
					class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
					type="submit">Submit</button
				>
			{/if}
		</div>
	{/if}
{:else}
	<main>
		<form on:submit|preventDefault={handleSubmit}>
			<!-- <form method="post" action="/api/loginAPI" on:submit|preventDefault={handleSubmit}> -->

			<div class="input-group">
				<!-- <input
					on:input={handleInput}
					on:keydown={handleKeyDown}
					id="input-field"
					class:darkyInput={$drugsInputFormCompDarkProps.darkyInput}
					type="text"
					bind:value={drugName}
					placeholder="input drug name..."
				/>-->
				<!-- <span id="suggestion">{suggestionText}</span> -->

				<input type="text" bind:value={suggestionText} autocomplete="off" />
			</div>
			<div class="iinput-group">
				<input
					use:convertToLowerCase
					class="test"
					type="text"
					bind:value={drugName}
					placeholder="Type in drug name..."
					autocomplete="off"
					on:input={checkInput}
					on:input={handleInputForMultiEntries}
					on:input={handleInputForBruteSuggestion}
					on:input={handleInputForDropListSuggestion}
					on:keydown={handleKeyDownForMultiEntries}
					on:keydown={handleKeyDownForBruteSuggestion}
				/>
			</div>
			<div transition:fade class="input-group submit-button">
				{#if drugName == ''}
					<button
						style="background:hsla(000,0%,58%,1);cursor:not-allowed"
						disabled={$isDisabled}
						id="btn"
						class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
						type="submit">Submit</button
					>
				{:else}
					<button
						disabled={$isDisabled}
						id="btn"
						class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
						type="submit">Submit</button
					>
				{/if}
			</div>
		</form>

		<NewDrugInput {handleSubmitDrugValues} />
		{#if $showModal}
			<Receipt multiEntries={$multiDrugEntriesArray} receiptPrices={$receiptPricesFromStore} />
		{/if}
	</main>
{/if}

<DataList {filteredNames} {selectName} />

<!-- <button on:click={b}>press</button> -->
<style>
	main {
		display: flex;
		/* width: 50vw; */
		width: fit-content;
		/* width: auto; */
		/* position: fixed; */
		/* left: 66px; */
		transition: all ease-in-out 0.2s;
	}
	.input-group.submit-button {
		transform: translateX(-12px);
		transition: all ease-in-out 0.2s;
	}
	.autocomplete {
		background: blue;
	}
	.test {
		transform: translate(-199px, 10px);
		background: transparent;
	}
	.message {
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		font-weight: 500;
		border-radius: 5px;
		display: flex;
		width: 23vw;
		padding: 4px 3.2px;
		position: absolute;
		border: none;
		display: flex;
		bottom: 40px;
		left: 5px;
		text-align: center;
		transition: all ease-in-out 0.2s;
	}
	.darkyMessage {
		color: hsla(0, 100%, 85%, 1);
		background: hsla(0, 100%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}

	form {
		padding: 0;
		margin: 0;
		background-color: hsl(222, 75%, 30%);
		background-color: #12181f;
		width: fit-content;
		/* border-right: lightseagreen 3px solid; */

		transition: all ease-in-out 0.2s;
		display: flex;
	}

	.darkyInput {
		background: hsla(222, 50%, 40%, 1);
	}
	.iinput-group input:hover {
		background: hsla(222, 50%, 80%, 0.2);
		/* background: red; */
		transition: all ease-in-out 0.2s;
	}
	.darkyInput:hover {
		background: hsla(222, 50%, 50%, 1);
	}
	button {
		background: hsla(222, 50%, 85%, 1);
		border: none;
		padding: 3px 5px;
		padding: 10px;
		color: hsla(0, 0%, 25%, 1);
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
		transition: all ease-in-out 0.2s;
		margin-left: 0.5rem;
	}
	button:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.2s;
	}
	p {
		padding: 10px;
		background: hsla(222, 50%, 85%, 1);
		transition: all ease-in-out 0.2s;
	}
	.input-group {
		display: flex;
		padding: 10px;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	.iinput-group {
		/* display: flex; */
		/* padding: 10px; */
		height: 0;
		width: 0;
		/* align-items: center;
		justify-content: center; */
		transition: all ease-in-out 0.2s;
	}
	.iinput-group input {
		color: blue;
		transition: all ease-in-out 0.2s;
	}
	.darkyButtonAndP {
		background: hsla(222, 50%, 45%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyButtonAndP:hover:not(p) {
		background: hsla(222, 50%, 40%, 1);
		transition: all ease-in-out 0.2s;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	body {
		background-color: #2c8df6;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.input-container {
		position: relative;
		background-color: #ffffff;
		width: 25em;
		height: 4.4em;
		border-radius: 5px;
	}
	input {
		display: flex;
		align-items: center;
		width: fit-content;
		border: none;
		background: hsla(222, 50%, 90%, 1);
		padding: 10px;
		outline: none;
		border: none;
		color: hsl(241, 89%, 11%);
		/* color: rgb(184, 19, 19); */
		/* padding: 0 18px; */
		letter-spacing: 1px;
		/* width: inherit;
		height: inherit; */
		color-scheme: dark;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}

	/* input {
		outline: none;
		border: none;
		background-color: transparent;
		position: absolute;
		width: inherit;
		height: inherit;
		color: #000000;
		font-size: 25px;
		padding: 0 18px;
		z-index: 3;
	} */
	#suggestion {
		width: fit-content;
		height: fit-content;
		/* position: fixed; */
		/* z-index: 2;
		top: 0.7rem;
		left: 10%; */
		letter-spacing: 1px;
		background: blue;
		display: flex;
		transform: translate(12px, 10px);
		align-self: center;
		/* padding: 0 18px; */
		font-size: 0.8rem;
		color: hsl(236, 89%, 26%);
	}
	@media screen and (max-width: 600px) {
		.input-container {
			width: 80vw;
		}
	}
</style>
