<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { afterUpdate, onMount, onDestroy } from 'svelte';
	import {
		showModal,
		formattedMultiDrugEntriesArray,
		receiptPricesFromStore,
		showPrintBtn,
		multiDrugEntriesArray
	} from '../stores';

	export let multiEntries = [];
	export let receiptPrices = [];

	let formattedReceiptPrices = [];

	let currentDateTime = new Date();

	onMount(() => {
		console.log('receipt mounted');
	});

	onDestroy(() => {
		console.log("this is a CONSOLE.LOG payload comming from Receipt's onDestroy lifecycle");
	});

	$: $receiptPricesFromStore = $receiptPricesFromStore;
	console.log($receiptPricesFromStore);

	$: totalAmount = $receiptPricesFromStore.reduce((acc, cur) => acc + cur, 0);

	$: console.log(totalAmount);

	$: console.log($receiptPricesFromStore);

	console.log(formattedReceiptPrices);

	$: reactiveReceiptPricesFromStore = $receiptPricesFromStore;

	$: console.log($formattedMultiDrugEntriesArray);

	let text = 'print and send receipt';

	let print = () => {
		if (text == 'print and send receipt') {
			text = 'printing...';
			setTimeout(() => {
				text = 'done  ✔';
			}, 2000);
			setTimeout(() => {
				text = 'sending to database for potential future references...';
			}, 4000);
			setTimeout(() => {
				text = 'done  ✔';
			}, 6000);
			setTimeout(() => {
				$showModal = false;
				text = 'print and send receipt';
				// function clearAllEntries() {
				$multiDrugEntriesArray = [];
				$formattedMultiDrugEntriesArray = [];
				formattedReceiptPrices = [];
				receiptPrices = [];
				$receiptPricesFromStore = [];
				reactiveReceiptPricesFromStore = [];
				$showPrintBtn = false;
				console.log($showPrintBtn);
				// }
			}, 8000);
		}
	};

	const closeModal = () => {
		$showModal = !$showModal;
	};
</script>

<div class="modal" transition:fly>
	<div class="modal-content">
		<span class="close" on:keyup on:click={closeModal}>&times;</span>
		<div class="address">
			<h1>Medking J. Pharmacy</h1>
			<div>14 Beeline Street</div>
			<div>Port Harcourt</div>
		</div>
		<div class="cashier-and-date">
			<div>Cashier: Maureen Jedidah</div>
			<div>
				{currentDateTime.toLocaleString([], {
					timeZone: 'Africa/Lagos',
					weekday: 'short',
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})}
			</div>
			<div>Customer id: Null</div>
			<div>Receipt No: 4590</div>
		</div>

		<div class="units">
			<div class="one">
				{#each multiEntries as anEntry}
					<div>
						{anEntry}
					</div>
				{/each}
			</div>
			<div class="two">
				{#each reactiveReceiptPricesFromStore.filter((string, index) => reactiveReceiptPricesFromStore.indexOf(string) === index) as aPrice}
					<div>
						₦{aPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} per unit
					</div>
				{/each}
			</div>
		</div>
		<div class="cashier-and-date">
			<div>Method of transaction: Cash</div>
		</div>
		<div class="cashier-and-date">
			<div>Loyalty Points:0</div>
			<div>
				Total amount: ₦{$receiptPricesFromStore
					.reduce((acc, cur) => acc + cur, 0)
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
			</div>
		</div>
		<div class="cashier-and-date">
			<div>Thanks for patronising us 😄!</div>
			<div>We hope to see you again 😄!</div>
		</div>
		<main>
			<button on:click={print}>{text}</button>
		</main>

		<div />
	</div>
</div>

<!-- {/if}
{/if} -->
<style>
	h1 {
		font-size: 0.8rem;
	}
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		border: none;
		background: blue;
		color: azure;
		padding: 3px 5px;
		width: fit-content;
		margin: 1rem 0;
		display: flex;
		/* flex-basis: 1; */
		/* align-self: center;
		margin-left: 1rem;
		justify-content: center; */
		/* transform: translatex(3.5rem); */
		border-radius: 5px;
		background: #2036a1;
		transition: all ease-in-out 0.2s;
		cursor: pointer;
	}
	button:hover {
		background: #535c94;
	}

	.address,
	.cashier-and-date {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 10px 0;
		border-bottom: grey 2px solid;
	}
	.one,
	.two {
		display: flex;
		flex-direction: column;
		width: fit-content;
		text-wrap: nowrap;
		flex-wrap: nowrap;
		margin: 1rem 0;
	}
	.one div,
	.two div {
		margin: 0.3rem 0;
	}
	.units {
		display: flex;
		/* width: fit-content; */
		align-items: center;
		/* flex-wrap: nowrap; */
		gap: 30px;
		justify-content: center;
	}

	/* Add your modal CSS styling here */
	.modal {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 30vw;
		transform: translate(26rem, 5rem);
		height: fit-content;
		font-size: 0.7rem;
		background-color: rgba(0, 0, 0, 0.5);
		overflow: auto;
		z-index: 1;
	}

	.modal-content {
		background-color: #fefefe;
		margin: 10% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
</style>
