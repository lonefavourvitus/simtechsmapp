<script>
	import { v4 as uuidv4 } from 'uuid';
	import { supabase } from '$lib/supabaseClient';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import {
		drugStore,
		drugProperties,
		drugsInputFormCompDarkProps,
		ini,
		filteredStore,
		sessionUserId,
		kkk,
		filterPar,
		sSalesEmptyarray
	} from '../stores';

	let data;

	let dateVal = '';
	let brandVal = '';
	let stockVal = '';

	$: eitherVals = dateVal || brandVal || stockVal;

	let filteredData = [];

	const filterFunc = async (filterAPI, filterValueType, filterVal) => {
		if (dateVal === '' && brandVal === '' && stockVal === '') {
			console.log('pls fill in the fields');
			return;
		} else {
			const {
				data: { session }
			} = await supabase.auth.getSession();

			console.log('session is:', session);
			// console.log('session error is:', error);
			console.log('data is:', data);

			if (filterValueType === 'last_stock_position') {
				if (filterVal.includes('e')) {
					filterVal = filterVal.replace('e', '.');
				}
			}

			const response = await fetch(filterAPI, {
				method: 'POST',
				body: JSON.stringify({
					input: filterVal,
					type: filterValueType,
					sessionUserId: $sessionUserId
				}),

				headers: {
					'Content-Type': 'application/json'
				}
				// body: JSON.stringify({ input: 'inputValue' })
			});

			dateVal = '';

			if (response.ok) {
				const data = await response.json();
				$kkk = true;
				$filteredStore = data;
				console.log($filteredStore);
				// console.log(body);
				isReloading = false;
			} else {
				// Handle the error appropriately
				console.error('Failed to fetch filtered data');
				// console.log(inputValue);
				// console.log(body);
			}
		}
	};

	let isReloading = false;

	$: $sSalesEmptyarray = $filteredStore.emptySalesArray;
	$: console.log($sSalesEmptyarray);
	$: console.log($filteredStore.emptySalesArray);

	function filterByDate() {
		const valueType = 'ref_date';
		filterFunc('/filterData', valueType, dateVal);
		console.log('working?');
		console.log(valueType);
		console.log(dateVal);
		console.log(filteredData);
		isReloading = true;
	}

	function filterByBrand() {
		const valueType = 'ref_unit_name';
		filterFunc('/filterData', valueType, brandVal);
		console.log('working?');
		console.log(valueType);
		console.log(brandVal);
		console.log(filteredData);
		isReloading = true;
	}

	function filterByStock() {
		const valueType = 'last_stock_position';
		filterFunc('/filterData', valueType, stockVal);
		console.log('working?');
		console.log(valueType);
		console.log(stockVal);
		console.log(filteredData);
		isReloading = true;
	}

	function convertEToDot(node) {
		const transform = () => (node.value = node.value.replace('e', '.'));
		// node.addEventListener('input', transform, { capture: true });
		transform();
		console.log(node.textContent);
		console.log(transform());
	}
</script>

<!-- {#if message}
	<p class="message" class:darkyMessage={$drugsInputFormCompDarkProps.darkyMessage}>{message}</p>
{/if} -->
<!--  -->
{#if $ini}
	{#if $filterPar == 'date'}
		<main>
			<!-- <main transition:fly={{ x: 200, duration: 2000 }} use:convertToLowerCase> -->
			<form on:submit|preventDefault={filterByDate}>
				<!-- <form method="post" action="/api/loginAPI" on:submit|preventDefault={handleSubmit}> -->
				<div class="input-group">
					<input
						id="input-field"
						class:darkyInput={$drugsInputFormCompDarkProps.darkyInput}
						type="text"
						bind:value={dateVal}
						placeholder="input date..."
					/>
				</div>
				<div class="input-group submit-button">
					{#if eitherVals == ''}
						<button
							style="background:hsla(000,0%,58%,1);cursor:not-allowed"
							disabled={true}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit">Submit</button
						>
					{:else}
						<button
							disabled={false}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit"
						>
							{#if isReloading}
								<div class="loading-spinner" />
							{/if}
							Submit</button
						>
					{/if}
				</div>
			</form>
		</main>
	{:else if $filterPar == 'brand'}
		<main>
			<form on:submit|preventDefault={filterByBrand}>
				<!-- <form method="post" action="/api/loginAPI" on:submit|preventDefault={handleSubmit}> -->
				<div class="input-group">
					<input
						id="input-field"
						class:darkyInput={$drugsInputFormCompDarkProps.darkyInput}
						type="text"
						bind:value={brandVal}
						placeholder="input brand unit name..."
					/>
				</div>
				<div class="input-group submit-button">
					{#if eitherVals == ''}
						<button
							style="background:hsla(000,0%,58%,1);cursor:not-allowed"
							disabled={true}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit">Submit</button
						>
					{:else}
						<button
							disabled={false}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit"
						>
							{#if isReloading}
								<div class="loading-spinner" />
							{/if}
							Submit</button
						>
					{/if}
				</div>
			</form>
		</main>
	{:else}
		<main>
			<form on:submit|preventDefault={filterByStock}>
				<!-- <form method="post" action="/api/loginAPI" on:submit|preventDefault={handleSubmit}> -->
				<div class="input-group">
					<input
						use:convertEToDot
						id="input-field"
						class:darkyInput={$drugsInputFormCompDarkProps.darkyInput}
						type="text"
						bind:value={stockVal}
						placeholder="input stock value..."
					/>
				</div>
				<div class="input-group submit-button">
					{#if eitherVals == ''}
						<button
							style="background:hsla(000,0%,58%,1);cursor:not-allowed"
							disabled={true}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit">Submit</button
						>
					{:else}
						<button
							disabled={false}
							id="btn"
							class:darkyButtonAndP={$drugsInputFormCompDarkProps.darkyButtonAndP}
							type="submit"
						>
							{#if isReloading}
								<div class="loading-spinner" />
							{/if}
							Submit</button
						>
					{/if}
				</div>
			</form>
		</main>
	{/if}
	<!-- content here -->
{/if}

<style>
	main {
		display: flex;
		/* width: 50vw; */
		/* width: fit-content; */
		/* width: auto; */
		/* position: fixed; */
		/* transform: translateX(-200px); */
		animation: translate 0.2s linear;
		animation-iteration-count: 1;
		/* left: 66px; */
		transition: all ease-in-out 2s;
	}

	.input-group.submit-button {
		transform: translateX(-12px);
		transition: all ease-in-out 0.2s;
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
		width: fit-content;
		border-right: #016968 3px solid;
		background-color: #12181f;

		transition: all ease-in-out 0.2s;
		display: flex;
	}
	input {
		width: fit-content;
		border: none;
		background: hsla(222, 50%, 90%, 1);
		padding: 10px;
		color: hsla(0, 0%, 20%, 1);
		background: hsl(210, 45%, 4%) !important;
		color-scheme: dark;

		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}
	@keyframes translate {
		0% {
			transform: translateX(-250px);
			transition: all ease-in-out 2s;
		}
		100% {
			transform: translateX(0);
			transition: all ease-in-out 2s;
		}
	}
	.darkyInput {
		background: hsla(222, 50%, 40%, 1);
	}
	input:hover {
		background: hsla(222, 50%, 80%, 1);
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
		color: hsla(222, 50%, 85%, 1);
		font-weight: 600;
		background: #3b434c;
		border-radius: 5px;
		cursor: pointer;
		transition: all ease-in-out 0.2s;
		margin-left: 0.5rem;
	}
	button:hover {
		background: #2036a1;
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
	.darkyButtonAndP {
		background: hsla(222, 50%, 45%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyButtonAndP:hover:not(p) {
		background: hsla(222, 50%, 40%, 1);
		transition: all ease-in-out 0.2s;
	}
	.loading-spinner {
		/* position: absolute; */
		top: 50%;
		left: 50%;
		transform: rotate(-50%, -50%);
		width: 10px;
		color: hsl(0, 8%, 80%);
		height: 10px;
		margin-top: 0.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		border-radius: 50%;
		border: 2px solid hsla(222, 50%, 85%, 1);
		border-top-color: transparent;
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
