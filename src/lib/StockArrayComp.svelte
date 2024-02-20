<script>
	import { nodeStopper, sumView } from '../stores';
	import EachStockComp from '$lib/EachStockComp.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	let nodey = [];
	export let stockArray = [];
	export let remS;
	console.log(stockArray);
	$: pp;
	function pp(node) {
		const nodeId = node.getAttribute('id');
		nodey.push(node);
		console.log(nodey);
		if (node.textContent == 0) {
			if ($nodeStopper.includes(nodeId)) {
				console.log(node);

				console.log(`${nodeId} is already in $nodeStopper array, will not push.`);
				return;
			} else {
				$nodeStopper.push(nodeId);
				console.log($nodeStopper);
			}
		} else {
			console.log(node);
			console.log('nah nah');
			return;
		}

		return {
			destroy() {
				// $nodeStopper = $nodeStopper.filter((val) => val !== node.textContent);
				console.log($nodeStopper);
			}
		};
	}
</script>

<!-- 
{#if stockArray.length == 0}
	<p>nothing</p>-->
<!-- {#if $sumView} -->
<div transition:fly use:pp class:show-sum-view={$sumView}>
	<EachStockComp eachStock={stockArray[stockArray.length - 1]} />
</div>
<!-- {:else} -->
{#each stockArray as dad}
	<div transition:fly use:pp class:hide-norm-view={!$sumView}>
		<EachStockComp remE={remS} eachStock={dad} />
	</div>
{/each}
<!-- {:else if !$sumView} -->
<!-- {#each stockArray as dad} -->

<!-- {/each} -->
<!-- {/if} -->

<!-- {/if} -->
<style>
	.show-sum-view {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px !important;
		flex-direction: column;
		/* transform: scale(0.5); */
		/* animation: loading-fzua35 0.7s alternate infinite ease-in-out; */
		transition: all 0.5s;
	}
	.hide-norm-view {
		display: flex;
		flex-direction: column;
		flex-direction: column;

		align-items: center;
		justify-content: center;
		border-radius: 5px !important;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out;
		transition: all 0.5s; */
	}

	@keyframes loading-fzua35 {
		0% {
			height: 10%;
		}
		/* 50% {
			height: 50%;
		} */
		100% {
			height: 100%;
		}
	}

	div {
		display: none;

		border-radius: 5px !important;
		/* animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out; */
		/* transition: all 0.5s; */
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

	p {
		margin: 0;
		font-size: 0.65rem;
		font-size: 0.8rem;
		padding: 0 0px;
		font-weight: 500;
		color: hsla(0, 0%, 25%, 1);
		transition: all ease-in-out 0.2s;
	}
</style>
