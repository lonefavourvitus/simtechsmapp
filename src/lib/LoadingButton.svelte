<script>
	// @ts-nocheck

	import { page, navigating } from '$app/stores';

	export let isLoadingForProfile = false;
	export let buttonText;
	export let type = 'button';
	export let disabled = false;
	export let linkAtt = 'link';
	export let href = '';
	export let onClick = () => {
		// if ($navigating) {
		isLoadingForProfile = !isLoadingForProfile;
		// }
	};
</script>

<button class="loading-button" {type} {disabled} on:click={onClick}>
	{#if isLoadingForProfile}
		<div class="loading-spinner" />
	{/if}
	<div><a {href}>{linkAtt}</a> {buttonText}</div>
</button>

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
		margin-top: 0.1rem;
		display: inline-flex;
		height: 10px;
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
		background: hsla(222, 50%, 80%, 1);
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
