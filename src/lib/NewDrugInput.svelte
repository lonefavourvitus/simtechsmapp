<script>
	// @ts-nocheck

	import {
		drugProperties,
		isExpandedForAddNewDrugForm,
		drugStore,
		isDisabled,
		formattedKeyDrugNames
	} from '../stores';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { supabase } from '$lib/supabaseClient';

	export let handleSubmitDrugValues;
	// export let typedName = '';
	// export let altName = '';
	// export let shortenedBrandName = '';
	// export let price = null;
	// export let amountInStock = null;
	export let fullBrandName = '';
	export let unitName = '';

	// const regexxy = /^[a-zA-Z0-9 +]*$/;
	// const regex = /^[-()a-zA-Z0-9 +]*$/;
	const regex = /^(?! )[a-z()\-\+ ]*(?<! )$/;

	let message = null;

	$: {
		// typedName !== '' &&
		// altName !== '' &&
		// shortenedBrandName !== '' &&
		fullBrandName !== '' && unitName !== ''
			? // amountInStock !== null &&
				// price != null
				($isDisabled = '')
			: ($isDisabled = 'disabled');
	}

	function addNewDrug() {
		if (
			// regex.test(typedName) &&
			regex.test(unitName) &&
			// regex.test(shortenedBrandName) &&
			regex.test(fullBrandName)
			// regex.test(altName) &&
			// regex.test(amountInStock) &&
			// regex.test(price)
		) {
			message = null;
			drugStore.update((newArray) => {
				newArray.push([
					[fullBrandName],
					// [shortenedBrandName],
					// [typedName],
					[unitName],
					// [amountInStock],
					[]
				]);

				// $drugProperties.push([typedName, altName, unitName, price]);
				$drugProperties.push([unitName]);

				// Insert new row into the "drugs" table
				// const { error } = supabase
				// 	.from('drugs_main')
				// 	.insert({
				// 		typed_name: typedName.toLowerCase(),
				// 		alt_name: altName.toLowerCase(),
				// 		shortened_brand_name: shortenedBrandName.toUpperCase(),
				// 		full_brand_name: fullBrandName.toUpperCase(),
				// 		unit_name: unitName.toLowerCase(),
				// 		amount_in_stock: amountInStock,
				// 		price
				// 	})
				// 	.then((response) => {
				// 		console.log('Inserted new row:', response);
				// 	})
				// 	.catch((error) => {
				// 		console.error('Error inserting new row:', error);
				// 	});

				$drugProperties.forEach((drug) => {
					handleSubmitDrugValues(...drug);
				});
				// typedName = '';
				// altName = '';
				// shortenedBrandName = '';
				// price = null;
				// amountInStock = null;
				fullBrandName = '';
				unitName = '';
				$formattedKeyDrugNames = $drugProperties.map((subArray) => subArray.slice(0, 1)).flat();
				console.log($formattedKeyDrugNames);
				return newArray;
			});
		} else {
			message = 'Symbols Are Not Allowed Except The +, - and () Symbols';

			setTimeout(() => {
				message = '';
			}, 3000);
		}
	}
	console.log($drugProperties);
	let closePopUp = () => ($isExpandedForAddNewDrugForm = !$isExpandedForAddNewDrugForm);
	function convertToLowerCase(node) {
		const transform = () => (node.value = node.value.toLowerCase());
		node.addEventListener('input', transform, { capture: true });
		transform();
		console.log(node.textContent);
		console.log(transform());
	}
</script>

{#if message}
	<p class="message">{message}</p>
	<!-- <p clas"essage" class:darkyMessage={$drugsInputFormCompDarkProps.darkyMessage}>{message}</p> -->
{/if}

{#if $isExpandedForAddNewDrugForm}
	<form transition:slide on:submit|preventDefault={addNewDrug}>
		<h1>Add a new drug</h1>
		<!-- <input type="number" bind:value={amountInStock} placeholder="Amount In Stock..." /> -->

		<div class="input-group">
			<div>
				<input
					use:convertToLowerCase
					type="text"
					bind:value={fullBrandName}
					placeholder="Full Brand Name..."
				/>
				<!-- <input type="text" bind:value={typedName} placeholder="Typed Name..." /> -->
				<input
					use:convertToLowerCase
					type="text"
					bind:value={unitName}
					placeholder="Unit Name..."
				/>
				<!-- <input type="number" bind:value={amountInStock} placeholder="Amount In Stock..." /> -->
			</div>
			<div>
				<!-- <input type="text" bind:value={shortenedBrandName} placeholder="Shortened Brand Name..." /> -->
				<!-- <input type="text" bind:value={altName} placeholder="Alternative Name..." /> -->
				<!-- <input type="number" bind:value={price} placeholder="Price tag..." /> -->
			</div>
			<!-- <div>
				<input type="number" bind:value={amountInStock} placeholder="Amount In Stock..." />
			</div> -->
		</div>
		<div class="btn-container">
			{#if unitName && fullBrandName !== ''}
				<button disabled={$isDisabled} type="submit">Submit</button>
			{:else}
				<button
					disabled={$isDisabled}
					type="submit"
					style="background:hsla(000,0%,48%,1);cursor:not-allowed">Submit</button
				>
			{/if}

			<!-- <div> -->
			<!-- <input type="number" bind:value={amountInStock} placeholder="Amount In Stock..." /> -->
			<!-- </div> -->
			<button type="reset" on:click={closePopUp}>Close</button>
		</div>
	</form>
{/if}

<style>
	form {
		padding: 0;
		background: hsla(222, 50%, 70%, 1);
		margin: 50vh 50vw;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		padding: 15px;
		border: none;
		background: hsla(222, 50%, 70%, 1);
		transition: all ease-in-out 0.2s;
		display: flex;
		border-radius: 5px;
		flex-direction: column;
		overflow: visible;
		transform: translate(-50%, -50%);
		/* z-index: 1; */
		position: absolute;
		/* background-color: #ffffff; */
		box-shadow: 0px 2px 1px 99099px hsla(222, 50%, 0%, 0.8);
	}
	.message {
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		border: 3px solid hsla(0, 100%, 55%, 1) !important;
		/* border: lightseagreen 3px solid !important; */

		font-weight: 500;
		border-radius: 5px;
		display: flex;
		width: 23vw;
		padding: 4px 3.2px;
		position: absolute;
		border: none;
		top: 70vh;
		left: 38vw;
		display: flex;
		/* left: 5px; */
		text-align: center;
		transition: all ease-in-out 0.2s;
	}
	.darkyMessage {
		color: hsla(0, 100%, 85%, 1);
		background: hsla(0, 100%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}

	.btn-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}

	input {
		width: fit-content;
		border: none;
		background: hsla(222, 50%, 90%, 1);
		margin: 0.3rem;
		margin: 0.5rem;
		padding: 4px;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}

	button {
		background: hsla(222, 50%, 45%, 1);
		border: none;
		padding: 3px 5px;
		color: hsla(0, 0%, 85%, 1);
		font-weight: 600;
		padding: 10px;
		border-radius: 5px;
		transition: all ease-in-out 0.2s;
		margin: 0.3rem 0;
	}
	button:hover {
		color: hsla(0, 0%, 25%, 1);
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		padding: 7px;
	}
	.input-group {
		display: flex;
		padding: 0;
		flex-direction: row;
		margin: 0;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	h1 {
		font-size: 1.5rem;
		letter-spacing: 1px;
		text-decoration-line: underline;
		text-decoration-color: hsla(100, 100%, 20%, 1);
	}
	div {
		display: flex;
		flex-direction: column;
	}
</style>
