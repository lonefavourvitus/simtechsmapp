<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import SignOutSvg from '/src/icons/SignOutSvg.svelte';
	export let action = '/auth?/signout';
	export let method = 'POST';
	export let disabled = false;
	export let isLoadingForSignOut = false;
	export let onClick = () => {
		// if ($navigating) {
		isLoadingForSignOut = !isLoadingForSignOut;
		// }
	};

	// onMount(() => {
	// 	// Simulating data loading on component mount
	// 	isLoading = true;
	// 	setTimeout(() => {
	// 		isLoading = false;
	// 	}, 2000);
	// });
	export let buttonText = 'Sign Out';
</script>

<form {action} {method}>
	<button class="loading-button" {disabled} on:click={onClick}>
		{#if isLoadingForSignOut}
			<div class="loading-spinner" />
		{:else}
			<SignOutSvg />
		{/if}
		<div>{buttonText}</div>
	</button>
</form>

<style>
	.loading-button {
		/* position: relative; */
		display: flex;
		/* padding: 10px 20px; */
		/* background-color: #007bff; */
		/* color: white; */
		/* border: none;
		border-radius: 4px; */
		/* align-items: center;
		justify-content: center;
		cursor: pointer; */
		overflow: hidden;
		transition: background-color 0.3s;
	}
	a {
		color: unset;
		text-decoration-line: none;
	}
	button {
		background: hsla(222, 50%, 85%, 1);
		background: #3b434c;
		border: none;
		padding: 3px 3px;
		margin: 0.5rem 0.3rem;
		letter-spacing: 0.5px;
		/* width: fit-content; */
		width: max-content;
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 25%, 1);
		color: #f4f5f5;
		font-weight: 600;
		/* margin-left: 1px; */
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	.loading-button.loading {
		pointer-events: none;
		background-color: #ccc;
	}

	.loading-spinner {
		/* position: absolute; */
		top: 50%;
		left: 50%;
		transform: rotate(-50%, -50%);
		width: 10px;
		color: hsla(0, 0%, 25%, 1);
		height: 10px;
		margin-top: 0.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		border-radius: 50%;
		border: 2px solid hsla(0, 0%, 25%, 1);
		border-top-color: transparent;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
	button:hover {
		background: #2036a1;

		transform: translateY(3px);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}

	.dark {
		background: hsla(222, 40%, 30%, 1);
		color: red;
	}
	.selected {
		background: hsla(222, 40%, 30%, 1);
		color: white;
	}
</style>
