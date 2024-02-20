<script>
	import { onMount } from 'svelte';
	let emoji;
	const emojis = ['😄', '😊', '🎉', '👋', '😇', '😎'];
	const randomEmoji = Math.floor(Math.random() * emojis.length);
	emoji = emojis[randomEmoji];
	let greeting = '';
	export let namey;
	console.log(namey);
	// const greetings = ['Good morning', 'Good afternoon', 'Good evening', 'Hi', 'Welcome back'];

	onMount(() => {
		setTimeout(() => {
			showEmoji = true;
		}, 1000);
		const nn = new Date().getHours();
		const todayDate = new Date();
		// const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
		const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
		const today = todayDate.toLocaleDateString('en-NG', options).replace(/\//g, '-');
		const todayTime = todayDate.toLocaleTimeString('en-NG', {
			timeZone: 'Africa/Lagos',
			hour12: false
		});
		const currentHour = parseInt(todayTime.split(':')[0], 10);
		console.log(todayTime); // Output: the current hour as a number
		console.log(currentHour);
		console.log(nn);
		// console.log(hour);
		const greetings = [];
		if (currentHour >= 5 && currentHour < 12) {
			const greetings = ['Good morning', 'Hi', 'Welcome back', 'Welcome'];
			const randomIndex = Math.floor(Math.random() * greetings.length);
			greeting = greetings[randomIndex];
			console.log(randomIndex);
			console.log(greeting);
		} else if (currentHour >= 12 && currentHour < 18) {
			const greetings = ['Good afternoon', 'Hi', 'Welcome back', 'Welcome'];
			const randomIndex = Math.floor(Math.random() * greetings.length);
			greeting = greetings[randomIndex];
		} else {
			const greetings = ['Good evening', 'Hi', 'Welcome back', 'Nightie'];
			const randomIndex = Math.floor(Math.random() * greetings.length);
			greeting = greetings[randomIndex];
		}

		// const randomIndex= Math.floor(Math.random() * 3) + 3;
	});

	let showEmoji = false;
</script>

<main>
	{#if greeting}
		<p>
			{greeting}, {namey}
			{#if showEmoji}
				<span class="emoji">{emoji}</span>
			{/if}
		</p>

		<!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?> -->
		<!-- Written by Treer (gitlab.com/Treer) -->
	{:else}
		<div class="progress" />
	{/if}
</main>

<!-- <script>
	import { onMount } from 'svelte';

	let greeting = '';

	const greetings = ['Good morning', 'Good afternoon', 'Good evening', 'Hi', 'Welcome back'];

	onMount(() => {
		const currentHour = new Date().getHours();
		const randomIndex = Math.floor(Math.random() * 5);

		if (currentHour >= 5 && currentHour < 12) {
			greeting = currentHour === 9 ? greetings[0] : greetings[randomIndex];
		} else if (currentHour >= 12 && currentHour < 18) {
			greeting = currentHour === 14 ? greetings[1] : greetings[randomIndex];
		} else {
			greeting = currentHour === 20 ? greetings[2] : greetings[randomIndex];
		}
	});
</script>

<main>
	{#if greeting}
		<h1>{greeting}, Jon Doe!</h1>
	{:else}
		<p>Loading...</p>
	{/if}
</main> -->
<style>
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		color: #e6ecf2;
		border-radius: 5px;
		width: fit-content;
		padding: 1px 4px;
		/* margin: 0.5rem 0.3rem; */

		text-align: center;
		background: #016968;
		flex-wrap: nowrap;
	}
	main {
		display: flex;
		align-items: center;
		/* padding: 3px 3px; */
		margin: 0.5rem 0.3rem;
		justify-content: center;
	}
	.progress {
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
		/* background: red !important; */
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
	.emoji {
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
</style>
