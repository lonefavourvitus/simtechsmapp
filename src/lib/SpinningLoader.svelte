<script>
	export let loading = false;
	export let btnText;
	export let text;
	export let icon;
	export let href;
	export let disabled = true;
	export { className as class };
	let className = '';
</script>

<div class="btn-cont {className}">
	<button class:disabled {disabled}>
		<div class:loading>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>

		{#if href}
			<a {href} class="button-link">{text}</a>
		{:else}
			{btnText}
		{/if}
	</button>
</div>

<style>
	.disabled {
		background: grey;
		border-radius: 5px;
		color: hsl(0, 0%, 16%);
	}
	button {
		width: 100%;
		margin: 1rem 0;

		background: hsla(222, 50%, 20%, 1);
		padding: 10px;
		border: none;
		/* padding: 3px 3px;
		margin: 0 0.5rem; */
		letter-spacing: 0.5px;
		/* width: 75px; */
		/* width: max-content; */
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 100%, 1);
		font-weight: 600;
		margin-left: 1px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	button:hover {
		background: hsla(222, 50%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}
	.loading {
		position: absolute;
		left: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loading div {
		position: absolute;
		width: 0.3rem;
		border-radius: 1px;
		height: 0.3rem;
		background: whitesmoke;
		transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
		animation: loading-fzua35 1s calc(var(--delay) * 1s) infinite ease;
	}

	.loading div:nth-child(1) {
		--delay: 0.1;
		--rotation: 36;
		--translation: 150;
	}

	.loading div:nth-child(2) {
		--delay: 0.2;
		--rotation: 72;
		--translation: 150;
	}

	.loading div:nth-child(3) {
		--delay: 0.3;
		--rotation: 108;
		--translation: 150;
	}

	.loading div:nth-child(4) {
		--delay: 0.4;
		--rotation: 144;
		--translation: 150;
	}

	.loading div:nth-child(5) {
		--delay: 0.5;
		--rotation: 180;
		--translation: 150;
	}

	.loading div:nth-child(6) {
		--delay: 0.6;

		--rotation: 216;
		--translation: 150;
	}

	.loading div:nth-child(7) {
		--delay: 0.7;
		--rotation: 252;
		--translation: 150;
	}

	.loading div:nth-child(8) {
		--delay: 0.8;
		--rotation: 288;
		--translation: 150;
	}

	.loading div:nth-child(9) {
		--delay: 0.9;
		--rotation: 324;
		--translation: 150;
		color: red !important;
	}

	.loading div:nth-child(10) {
		--delay: 1;
		--rotation: 360;
		--translation: 150;
	}

	@keyframes loading-fzua35 {
		0%,
		10%,
		20%,
		30%,
		50%,
		60%,
		70%,
		80%,
		90%,
		100% {
			transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
		}

		50% {
			transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
		}
	}

	.btn-cont {
		display: flex;
		width: 100%;
	}
</style>
