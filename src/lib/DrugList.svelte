<script>
	// @ts-nocheck

	import { drugStore, showModal, multiDrugEntriesArray, showPrintBtn, sumView } from '../stores';
	import Lump from '$lib/Lump.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import Divider from '$lib/Divider.svelte';
	import NewUserWelcomeDisplayBoard from '$lib/NewUserWelcomeDisplayBoard.svelte';
	import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';
	import TinyBlocks from '$lib/TinyBlocks.svelte';
	import NewTooltip from '$lib/NewTooltip.svelte';
	import { onMount } from 'svelte';
	export let data;
	export let namey = '';
	let welAnouncer = false;
	let showProTip = false;
	let showProTipC = false;
	let a = 's';

	console.log($drugStore);
	// for (let index = 0; index < $drugStore.length; index++) {
	// 	const element = $drugStore[index];
	// 	console.log(element);
	let hasData = false; // Initialize 'has data' variable to false
	onMount(() => {
		if (namey == 'Newbie') {
			setTimeout(() => {
				welAnouncer = true;
			}, 4000);
			setTimeout(() => {
				showProTip = true;
			}, 11000);
			setTimeout(() => {
				showProTipC = true;
			}, 13000);
			setTimeout(() => {
				// setInterval(bCursor, 300);
				a = 'p';
			}, 20000);
		}
	});

	// Iterate through the main array and its subarrays

	// onMount(() => {
	// 	for (let i = 0; i < $drugStore.length; i++) {
	// 		for (let j = 0; j < $drugStore[i].length; j++) {
	// 			for (let k = 0; k < $drugStore[i][j].length; k++) {
	// 				const thirdSubarray = $drugStore[i][j][k]; // Access the third subarray
	// 				console.log(Array.isArray(thirdSubarray) ?? 'no array element');

	// 				// if (thirdSubarray.length > 0) {
	// 				if (Array.isArray(thirdSubarray)) {
	// 					console.log('yay , hmm, an array');
	// 					// setTimeout(() => {
	// 					welAnouncer = true;
	// 					// }, 4000);
	// 					break;
	// 				}
	// 				hasData = true; // Set 'has data' to true if third subarray has data
	// 				console.log(hasData);
	// 				console.log(thirdSubarray[0]);
	// 				// break; // Exit the loop if data is found
	// 				// }
	// 			}
	// 		}
	// 		// if (hasData) {
	// 		// 	break; // Exit the outer loop if data is found in any of the third subarrays
	// 		// }
	// 	}
	// });

	// for (let i = 0; i < element[2].length; index++) {
	// 	console.log(i);
	// 	console.log(element[2][i]);
	// }41250
	// third in a row
	// if (element[1].length !== -1) {
	// 	console.log(element[2] + ' ' + 'has a unit');
	// }

	// if (element[2].length === -1) {
	// 	console.log(element[2] + ' ' + 'has no unit');
	// }

	function bCursor() {
		// if (showProTipC) {
		a == 's' ? (a = 'q') : (a = 's');
		// }
	}
	// $: {
	// setInterval(bCursor, 200);
	// }

	function typewriter(node, { speed = 1 }) {
		// const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		// if (!valid) {
		// 	throw new Error(`This transition only works on elements with a single text node child`);
		// }

		const text = node.textContent;
		const duration = text.length / (speed * 0.03);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
	// $: console.log($multiDrugEntriesArray);
	let showXBtn = false;
	// onMount(() => {
	// 	setTimeout(() => {
	// 		welAnouncer = true;
	// 	}, 4000);
	// });
	console.log($drugStore);

	const openModal = () => {
		$showModal = !$showModal;
	};

	const sxb = () => {
		showXBtn = true;
	};

	const sxs = () => {
		$showPrintBtn = false;
		showXBtn = false;
		welAnouncer = true;
	};

	$: $showPrintBtn === false ? (showXBtn = false) : (showXBtn = true);
	// let text = '';
	// let isTyping = false;

	// function startTyping() {
	// 	isTyping = true;
	// 	typeText('Hello, World!');
	// }

	// function typeText(message) {
	// 	let index = 0;
	// 	const typingInterval = setInterval(() => {
	// 		text = message.slice(0, index + 1);
	// 		index++;

	// 		if (index >= message.length) {
	// 			clearInterval(typingInterval);
	// 			isTyping = false;
	// 		}
	// 	}, 100);
	// }
	let visible = true;
</script>

<main transition:fly class="mainy">
	<div class="tiny-blocks">
		{#if $showPrintBtn}
			<main transition:slide class="printRBtn">
				<button on:mouseover={sxb} on:focus on:click={openModal}>Print Receipt</button>
			</main>
		{/if}

		{#if showXBtn && $showModal}
			<main transition:slide class="printRBtn">
				<button class="x" on:click={sxs}>X</button>
			</main>
		{/if}

		<TinyBlocks />
	</div>

	<section transition:slide class="yay" class:griddy={$sumView}>
		{#each $drugStore as aDrugEntity, i}
			<div transition:slide class="lump">
				<Lump oneDrugStore={aDrugEntity} />
			</div>
		{/each}
	</section>
</main>
<!-- <label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>
{#if visible}
	<p
		transition:fly={{ y: 200, duration: 2000 }}
		on:introstart={() => console.log('intro started')}
		on:outrostart={() => console.log('outro started')}
		on:introend={() => console.log('intro ended')}
		on:outroend={() => console.log('outro ended')}
	>
		Flies in and out
	</p>
{/if} -->
{#if welAnouncer}
	<div transition:fly class="welcome-wrapper">
		<div class="emptyDataAnnouncer">
			<!-- <NewUserWelcomeDisplayBoard /> -->
			<div class="hi-close-cont">
				<div class="wel-des">
					<h1>Hi {namey}</h1>
					<h1 class="t">👋</h1>
					<h1 class="">,</h1>
				</div>

				<div class="close-btn">
					<ButtonWithIcon
						btnType="closeBtn"
						text="&times"
						a={() => {
							welAnouncer = false;
							console.log('run oo!');
						}}
					/>
				</div>
			</div>
			<div class="type-and-cursor-cont">
				<p transition:typewriter class="hmm">
					Welcome to CDR soft, Go over to support and Resources ➡▶ About Us to get an overview of
					how this app works (the Guides and Docs are still in active development😊).
				</p>
				<!-- <span class="blinking-cursor">|</span> -->
			</div>
			<div class="pro-tip">
				{#if showProTip}
					<div class="bulb-divider" transition:fade>
						<p class="tip-bulb" transition:typewriter>💡</p>
						<!-- {/if} -->
						<Divider dd="horizontal" />
					</div>
					<!-- <p class="tip-bulb" transition:typewriter>💡</p> -->
				{/if}
				<!-- <Divider dd="horizontal" /> -->
				<!-- {#if showProTipC} -->
				{#if showProTipC}
					<p class="u" transition:typewriter>
						If you want to stop seeing this welcome message, just navigate to your account icon ➡▶
						profile ➡▶ username, then update it to your own username 😊.
					</p>
				{/if}
			</div>
		</div>
	</div>
{/if}

<!-- <main>
	<p>{text}<span class={isTyping ? 'blinking-cursor' : ''}>|</span></p>
	{#if !isTyping}
		<button on:click={startTyping}>Start Typing</button>
	{/if}
</main> -->
<style>
	.u {
		margin: 0 !important;
		padding: 0 20px;
		padding: 20px;
		padding-top: 0px;
		text-align: start;
	}
	.pro-tip {
		display: flex;
		align-items: center;
		justify-content: center;

		flex-direction: column;
	}
	.bulb-divider {
		display: flex;
		align-items: center;
		/* margin: 0.5rem 0; */
		padding: 10px;
		margin: 0 !important;
		justify-content: center;
		flex-direction: row;
	}
	.tip-bulb {
		animation: blink-animation 1s alternate-reverse infinite;
		margin-right: 1rem;
		transition: all 0.5s;
	}

	@keyframes blink-animation {
		0% {
			text-shadow: 0px -2px 10px #c6b324;
			transition: all 0.5s;
		}
		100% {
			text-shadow: 0px -2px 10px #c6b32400;
			transition: all 0.5s;
		}
	}
	.wel-des h1 {
		/* display: flex;
		align-items: center;
		justify-content: center; */
		font-weight: 300;
	}
	.t {
		animation: bounce 1s;
		padding-left: 2px;
	}

	@keyframes bounce {
		0% {
			transform: rotate(20deg);
		}
		50% {
			transform: rotate(-20deg);
		}
		100% {
			transform: rotate(20deg);
		}
	}
	.hmm {
		/* margin-top: 1rem; */
		padding: 0 20px;
		letter-spacing: 1px;
		text-align: start;
		line-height: 19px;
		padding-bottom: 10px;
		background: hsl(235, 54%, 13%);
		background: hsl(2, 39%, 9%);
		background: hsl(30, 95%, 10%);
	}
	.close-btn {
		/* padding: 1rem; */
	}
	.hi-close-cont {
		display: flex;
		align-items: center;
		padding: 20px;
		/* margin: 0 20px; */
		/* margin-top: 1rem; */
		border-radius: unset;
		border-top-right-radius: 5px;
		font-weight: 100;
		border-top-left-radius: 5px;
		justify-content: space-between;
		background: #1b205b;
		background: hsl(2, 39%, 9%);
		background: hsl(30, 95%, 10%);

		/* background: #0c2a2a; */
	}
	.btn-new {
		display: flex;
		justify-content: space-around !important;
		align-items: center;
		/* width: 30rem; */
	}

	.welcome-wrapper {
		display: flex;
		/* flex-direction: column; */
		width: 100vw;
		align-items: center;
		/* height: fit-content; */
		justify-content: center;
	}
	.emptyDataAnnouncer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 3rem;
		width: 23rem;
		margin-top: 1rem;
		font-weight: 300;
		letter-spacing: 1px;
		text-align: start;
		line-height: 19px;
		/* height: 3%; */
		color: hsla(215, 100%, 80%, 0.786);

		box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.457);
		/* padding: 20px; */

		background-color: hsl(210, 45%, 4%);

		/* box-shadow: 0 0 20px 30px red; */
	}
	/* .emptyDataAnnouncer p {
		padding: 0 20px;
		padding-top: 20px;
		padding-bottom: 20px;
	} */
	.printRBtn {
		display: flex;
		align-items: center;
		font-size: 0.9rem;
		justify-content: center;
		border: 1px solid hwb(212 20% 74%);
		margin-left: 0.5rem;
		border-radius: 10px;
		letter-spacing: 0.3px;
	}
	.x {
		background: hsl(0, 67%, 38%);
	}
	.x:hover {
		background: hsl(0, 67%, 58%);
	}

	@keyframes loading-fzua35 {
		0% {
			height: 10%;
		}
		50% {
			height: 50%;
		}
		100% {
			height: fit-content;
		}
	}
	button {
		/* margin: 0 1rem; */
		margin: 0.3rem;
		background: hsl(230, 67%, 38%);
		padding: 1px 5px;
		color: hsl(0, 0%, 93%);
		width: fit-content;
		border-radius: 5px;
		transition: all 0.3s;
	}
	button:hover {
		/* margin: 0 1rem; */
		/* margin-right: 0.3rem; */
		background: hsl(230, 67%, 58%);
		color: hsl(0, 0%, 93%);
		transform: translateY(1px);
		cursor: pointer;
		transition: all 0.3s;
	}
	div {
		/* position: relative; */
		/* overflow: scroll; */
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		/* margin: 0.1rem 0.3rem !important; */
		/* margin-top: 0.5rem !important; */
		/* width: 100vw; */
	}
	.tiny-blocks {
		margin: 0.3rem 0;
		width: fit-content;
	}

	main {
		/* height: 3000px; */
		gap: 2px;
	}

	section {
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		padding: 0 !important;
		margin-top: -0.5rem !important;
		/* animation: loading-fzua35 0.7s alternate-reverse alternate ease-in-out; */
	}
	.mainy {
		display: flex;
		height: fit-content;

		margin-top: 3.5rem;
		/* margin-top: 2rem; */
		flex-direction: column;
		background: hsla(222, 50%, 50%, 1);
		border-radius: 5px;
		background-color: #060b10;
		/* background: hsl(210, 45%, 4%) !important; */
	}
	@keyframes loading-fzua35 {
		10% {
			background: red;
			flex-wrap: nowrap;
			transition: all ease-in-out 0.4s;
		}
		/* 50% {
			background: green;
			transition: all ease-in-out 0.4s;
		} */
		100% {
			background: blue;
			flex-wrap: wrap;
			transition: all ease-in-out 0.4s;
		}
	}
	.lump {
		border-radius: 5px;
		margin: 0.5rem 0.3rem;
		transition: all 0.3s;
	}
	.lump:hover {
		/* box-shadow: 1px 1px 10px 1px #030303; */
		transform: translateY(5px);
		transition: all 0.1s;
	}
	.yay {
		/* height: 8.3vh; */
		opacity: 1;
		flex-wrap: nowrap;
		/* width: 10vw; */
		translate: translateX(9px);
		/* animation: loading-fzua35 0.3s alternate-reverse infinite ease-in-out; */

		transition: all 0.5s;
		transition: all ease-in-out 0.4s;
	}

	.griddy {
		/* background: red !important; */
		/* width: 50vw; */
		border-radius: 5px;
		display: flex;
		flex-wrap: wrap;
		/* height: 0vh; */
		/* opacity: 0; */
		/* align-items: center; */
		justify-content: center;
		translate: translateX(29px);
		/* flex-direction: column; */
		/* animation: loading-fzua35 0.3s alternate-reverse infinite ease-in-out; */

		/* margin: 5rem 0 !important; */
		/* animation: loading-fzua35 0.7s alternate-reverse alternate ease-in-out; */
		transition: all 0.5s;

		/* margin-top: 4rem !important; */
	}
</style>
