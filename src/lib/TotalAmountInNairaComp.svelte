<script>
	import { handleDrugRemoval } from '/src/functions/handleDrugRemovalFunction_F.svelte';
	import {
		doubleLinerValue,
		lumpCompDarkProps,
		drugStore,
		drugProperties,
		nodeStopper,
		isClickedForRestockBtn
	} from '../stores';

	export let totalAmountInNaira;
	$: popp = totalAmountInNaira;
	// export let totalAmountInNaira = '';
	// $: totalAmountInNaira = alone[5][alone[5].length - 1].reduce((a, { price }) => a + price, 0);
</script>

<div class="metrics-aligner">
	<p class="p1" class:darkyP1P3={$lumpCompDarkProps.darkyP1P3}>T.A In Naira:</p>
	<p class="p2" class:darkyP2P4={$lumpCompDarkProps.darkyP2P4}>
		{popp}
	</p>
</div>

<style>
	.metrics-aligner {
		display: flex;
		flex-direction: row;
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
		/* overflow: scroll;
		flex-wrap: nowrap; */

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
		padding: 0;
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
		padding: 0;
		border: none;
		margin-bottom: 0.2rem;
		display: flex;
		position: -webkit-sticky;
		position: sticky;
		top: 0px;
		z-index: 99999;
		/* justify-content: center; */
		/* width: 100%; */
		/* background: hsla(222, 50%, 80%, 1); */
		transition: all ease-in-out 0.2s;
	}
	.drug-title {
		padding: 0;
		border: none;
		margin-bottom: 0.2rem;
		display: flex;
		position: -webkit-sticky;
		position: sticky;
		top: 0px;
		z-index: 99999;
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
	.destructured-for-out-of-stock {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		align-items: center;
		padding: 1px 0;
		border-radius: 5px;
		margin: 0.2rem 0.4rem;
		background: hsl(0, 50%, 70%, 1);
		justify-content: space-around;
		/* background: hsla(222, 0%, 95.5%, 1); */

		transition: all ease-in-out 0.2s;
	}

	.destructured {
		border-bottom: 1px solid hsla(0, 0%, 70%, 1);
		display: flex;
		align-items: center;
		padding: 1px 0;
		border-radius: 5px;
		margin: 0.2rem 0.4rem;
		justify-content: space-around;
		/* background: hsla(222, 0%, 95.5%, 1); */
		background: hsla(200, 50%, 85%, 1);

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
	}
	.for-line {
		border: 3px solid hsla(0, 50%, 45%, 1);
		margin: 1rem 0;
	}
	.restock-btn {
		margin: 6rem;
	}
</style>
