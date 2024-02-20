<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	let className;

	export let text;
	export let type = 'button';
	export let isDisabled;
	export let onClick = null;
	export { className as class };

	beforeUpdate(() => {
		console.log('the component is about to update');
	});
	afterUpdate(() => {
		console.log('the component just updated');
	});
	function handleClick() {
		if (onClick) {
			onClick();
		}
	}
</script>

<button class={className} {type} disabled={isDisabled} on:click={handleClick}>
	{text}
</button>

<style>
	button {
		background-color: hsla(230, 100%, 55%, 1);
		background-color: #3b434c;
		color: whitesmoke;
		border: none;
		/* margin: 0 0.5rem; */
		letter-spacing: 0.5px;
		width: 75px;
		width: max-content;
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		/* color: hsla(0, 0%, 25%, 1); */
		font-weight: 600;
		padding: 3.5px;
		margin-left: 0.5rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}

	button:hover {
		background-color: #0062cc;
	}

	button:disabled {
		background-color: #6c757d;
		cursor: not-allowed;
	}
</style>
