<script>
	// based on suggestions from:
	// Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
	// On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
	// and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv

	export let label;

	export let fontSize = 16;
	export let value = 'on';

	export let checked = true;

	const uniqueID = Math.floor(Math.random() * 100);

	function handleClick(event) {
		const target = event.target;

		const state = target.getAttribute('aria-checked');

		checked = state === 'true' ? false : true;

		value = checked === true ? 'on' : 'off';

		console.log(target);
	}
	export let func;
</script>

<div class="s s--slider" style="font-size:{fontSize}px">
	<p id={`switch-${uniqueID}`}>{label}</p>
	<button
		role="switch"
		aria-checked={checked}
		aria-labelledby={`switch-${uniqueID}`}
		on:click={handleClick}
		on:click={func}
	/>
</div>

<style>
	:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}

	/* Slider Design Option */

	div {
		display: flex !important;
		/* align-items: center !important; */
		justify-content: space-between !important;
		margin: 0.5rem 0;
	}

	.s--slider button {
		width: 2.1rem;
		height: 17px;
		position: relative;
		border-radius: 10px;
		margin: 0 0 0 0.5em;
		background: var(--gray);
		border: none;
	}

	.s--slider button::before {
		content: '';
		position: absolute;
		width: 0.8rem;
		border-radius: 5px;
		height: 0.8rem;
		background: #fff;
		top: 0.12em;
		right: 1.4em;
		transition: transform 0.3s;
	}

	.s--slider button[aria-checked='true'] {
		background-color: var(--accent-color);
	}

	.s--slider button[aria-checked='true']::before {
		transform: translateX(1rem);
		transition: transform 0.3s;
	}

	.s--slider button:focus {
		/* box-shadow: 0 0px 0px 1px var(--accent-color); */
	}

	/* Slider Design Option */
	.s--slider button {
		/* border-radius: 10px; */
	}

	.s--slider button::before {
		/* border-radius: 10px; */
	}

	.s--slider button:focus {
		/* box-shadow: 0 0px 8px var(--accent-color); */
		/* border-radius: 10px; */
	}
	p {
		color: #e6ecf2;
	}
</style>
