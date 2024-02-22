<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	let load = false;
	let currentDateTime = new Date();
	console.log(currentDateTime);
	const interval = setInterval(() => {
		currentDateTime = new Date();
		// console.log(currentDateTime);
	}, 1000);

	let tttt = currentDateTime.toLocaleString([], {
		timeZone: 'Africa/Lagos',
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});
	console.log(tttt);
	onMount(() => {
		load = true;
		// Start the interval when the component is mounted
	});

	onDestroy(() => {
		// Clear the interval when the component is destroyed
		clearInterval(interval);
	});
</script>

{#if load}
	<div>
		<p>
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
		</p>
	</div>
{:else}
	<div class="progress" />
{/if}

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		background: beige;
		background: #3b434c;
		border-radius: 5px;
		width: fit-content;
		padding: 1px 4px;
		color: whitesmoke;
		margin: 0.5rem 0.3rem;
		text-align: center;
		flex-wrap: nowrap;
	}
	.progress {
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
		background: transparent !important;
		width: 17vw;
		height: 10px;
		border-radius: 16px;
		/* margin: 0 auto; */
		color: #fff;
		/* border: 0.1px solid; */
		/* transform: translateY(-640px); */
		position: relative;
	}

	.progress::before {
		/* display: flex;
		align-items: center;
		justify-content: center; */
		content: '';
		position: absolute;
		margin: 1px;
		inset: 0 100% 0 0;
		border-radius: inherit;
		background: currentColor;
		animation: progress-pf82op 1s infinite alternate-reverse;
	}

	@keyframes progress-pf82op {
		100% {
			inset: 0;
		}
	}
</style>
