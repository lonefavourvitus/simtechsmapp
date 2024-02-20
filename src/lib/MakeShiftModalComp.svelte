<script>
	export let tooltip = false;
	export let isCentered = false;
</script>

{#if isCentered}
	<span class="aligny" data-tooltip={tooltip}>
		<div class="divider-hor" />

		<slot />
		<div class="divider-hor" />
	</span>
{/if}
{#if !isCentered}
	<span class="non-aligny" data-tooltip={tooltip}>
		<div class="divider-hor" />

		<slot />
		<div class="divider-hor" />
	</span>
{/if}

<style>
	slot {
		font-family: 'Roboto', sans-serif;
	}
	.divider-hor {
		width: 100%;
		/* height: 1rem; */
		margin: 0.5rem 0;
		/* background: red !important; */
		/* border-top: lightseagreen 3px solid; */
	}
	.aligny {
		align-items: center;
		display: flex;
		/* align-self: start; */
		align-items: center;
		justify-content: center;
		/* z-index: 1; */
		/* width: 33px;
		height: 44px; */
		/* background: rgba(255, 0, 0, 0.275); */
	}
	.non-aligny {
		display: flex;
		align-self: start;
		align-items: center;
		justify-content: center;
		/* z-index: 1; */
		/* width: 33px;
		height: 44px; */
		/* background: rgba(255, 0, 0, 0.275); */
	}

	[data-tooltip]:before,
	[data-tooltip]:after {
		visibility: hidden;
	}

	[data-tooltip]:before {
		position: absolute;
		border-radius: 10px;
		padding: 20px;
		width: 28vw;
		/* border: hsla(132, 60%, 30%, 1) 3px solid !important; */
		/* height: 50vh; */
		background: hsl(250, 87%, 28%);
		background: #12181f;
		color: #e6ecf2;
		color: #abb5bf;
		font-weight: 600;
		/* color: red; */
		content: attr(data-tooltip);
		text-align: center;
		/* border: unset !important; */
		font-size: 0.7rem;
		font-size: 0.8rem;
		margin: 0 0.5rem;
		letter-spacing: 1.2px;
		/* margin: 0 2rem; */
		box-shadow: 0px 0px 2220px 2200px hsla(0, 0%, 4%, 0.2);
		line-height: 1.5;
		transition: 0.00001s ease-out;
	}

	[data-tooltip]:hover:before,
	[data-tooltip]:hover:after {
		visibility: visible;
		align-items: center;
		justify-content: center;
		transform: translate(0%, 120%);
	}

	[data-tooltip='false']:hover:before,
	[data-tooltip='false']:hover:after {
		visibility: hidden;
	}
</style>
