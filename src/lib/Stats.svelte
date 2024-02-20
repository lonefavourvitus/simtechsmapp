<script>
	import tilt from '/src/functions/tilt.js';

	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let timeline = [
		{ year: 'users', label: 148 + '+' },
		{ year: 2006, label: 'jQuery' },
		{ year: 2010, label: 'Angular 1' },
		{ year: 2013, label: 'React' },
		{ year: 2019, label: 'Svelte3' }
	];

	const width = 900;

	let duration = 1000;
	let index = tweened(0, { duration, easing: quadInOut });
	let dotSize = tweened(3, { duration: 200, easing: quadInOut });

	onMount(() => {
		const interval = setInterval(next, 1500);

		return () => {
			clearInterval(interval);
		};
	});

	function next() {
		$dotSize = 3;
		if ($index < timeline.length - 1) {
			$index++;
		} else {
			$index = 0;
		}

		setTimeout(() => ($dotSize = 8), 500);
	}
</script>

<main>
	<div use:tilt class="cont">
		<div class="line" />

		<!-- <div class="line">o</div> -->
		<h1>SimTech SMApp is the backbone of every modern store's POS system.</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut architecto ab sint.
			Consectetur quia asperiores facere libero? Eos, qui nemo. Quibusdam repellendus illo earum
			nostrum? Nulla excepturi alias dolor.
		</p>
	</div>

	<svg use:tilt viewBox="{-60 + $index * 200} 0 {width / timeline.length} 120">
		<line x1="20" y1="95" x2={30 + $index * 200} y2="95" stroke="black" />

		{#each timeline as event, i}
			<g>
				<text class="label" x={25 + i * 40 * timeline.length} y="20" text-anchor="middle"
					>{event.label}</text
				>
				<text class="year" x={25 + i * 40 * timeline.length} y="60" text-anchor="middle"
					>{event.year}</text
				>
				<circle cx={25 + i * 40 * timeline.length} cy="95" r={$dotSize} />
			</g>
		{/each}
	</svg>
</main>

<style>
	.svg-line {
		height: 20vh;
	}
	.line {
		/* margin-top: 3rem; */
		margin-bottom: 2rem;
		width: 100%;
		padding: 0 60px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5px;
		background-image: linear-gradient(to right, #e7ff52, #41ff54);
	}
	main {
		display: flex;
		width: 100vw;
		align-items: center;
		height: 100vh;
		flex-direction: column;
		/* flex-wrap: wrap; */
		justify-content: space-evenly;
		background: center / contain no-repeat
			linear-gradient(hsla(117, 92%, 5%, 0.96), hsla(226, 92%, 5%, 0.96), #060a0f);
	}
	:global(body) {
		display: flex;
	}
	.cont {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 45vh;
		align-items: center;
		border-radius: 10px;
		padding: 0 10px;
		justify-content: center;
		/* margin-top: 10px; */
		transition: all 0.5s;
	}
	svg {
		display: flex;
		/* border: 1px solid blue; */
		background: #00000070;
		width: 100vw;
		border-radius: 10px;
		height: 45vh;

		overflow: visible;
		transition: all 0.5s;
	}
	.cont,
	svg {
		width: 95vw;
		box-shadow: -2px 0px 0px 0px hsl(271, 91%, 30%), 2px 0px 0px 0px hsl(126, 100%, 30%),
			0px -2px 0px 0px hsl(61, 100%, 30%), 0px 2px 0px 0px hsl(226, 91%, 30%);
		transition: all 0.5s;
		/* animation: rot 5s linear infinite; */
	}
	.cont:hover,
	svg:hover {
		box-shadow: none;
		transition: all 0.5s;
	}
	.cont {
		/* transform: scaley(0.3); */
	}
	text {
		fill: #ccc;
	}
	.year {
		font-size: 2rem;
		font-weight: 400;
	}
	.label {
		fill: #ccc;
	}
	line {
		stroke-width: 5px;
		stroke: #ccc;
		stroke-dasharray: 2 2;
	}
	circle {
		fill: orange;
	}
	div {
		/* display: flex; */
		/* padding: 40px; */
		/* justify-content: space-between; */
		/* align-items: center; */
		/* flex-direction: column; */
		background: #00000070;
		/* width: 100vw; */
		/* border: 1px solid pink; */
	}
	h1 {
		/* width: 30vw; */
		/* width: 100vw; */
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: start;
		color: #ccc;
		/* padding: 0 100px; */
		font-weight: 700;
		font-size: calc(25px + 0.190625vw);
		margin-bottom: 1rem;
	}
	p {
		/* padding: 0 100px; */
		/* width: 100vw; */
		display: flex;
		align-items: center;
		font-size: calc(12px + 0.390625vw);
		color: #b0b3b6;
		/* padding: 0 400px; */
		line-height: 1.4;
		letter-spacing: 0.5px;
		/* word-spacing: 0.5px; */
		/* font-weight: 600; */
		/* border-bottom: 2px solid blue; */
		text-align: start;
		justify-content: center;
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		main {
			/* background: red; */
			/* padding: 0 160px; */
			justify-content: space-evenly;
			flex-direction: row;
			overflow: hidden;
		}
		.cont {
			padding: 0 10px;
		}
		.cont,
		svg {
			width: 50vw;
			overflow: hidden;
		}
		.cont,
		svg {
			width: 45vw;
			box-shadow: -2px 0px 0px 0px hsl(271, 91%, 30%), 2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%), 0px 2px 0px 0px hsl(226, 91%, 30%);
			transition: all 0.5s;
			/* animation: rot 5s linear infinite; */
		}
		.cont:hover,
		svg:hover {
			box-shadow: none;
			transition: all 0.5s;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		main {
			/* background: blue; */
			flex-direction: row;
			justify-content: space-evenly;

			/* padding: 0 160px; */
		}
		.cont {
			/* display: none; */
			padding: 0 10px;
		}
		div,
		svg {
			width: 50vw;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		h1 {
			/* font-size: calc(15px + 0.390625vw); */
		}
		.cont,
		svg {
			width: 45vw;
			box-shadow: -2px 0px 0px 0px hsl(271, 91%, 30%), 2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%), 0px 2px 0px 0px hsl(226, 91%, 30%);
			transition: all 0.5s;
			/* animation: rot 5s linear infinite; */
		}
		.cont:hover,
		svg:hover {
			box-shadow: none;
			transition: all 0.5s;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		main {
			/* background: pink; */
			/* padding: 0 160px; */
			width: 100vw;
			justify-content: space-evenly;
		}
		.line {
			/* display: flex; */
			/* width: 50vw; */
		}
		div,
		svg {
			width: 50vw;
		}
		div {
			padding: 40px;
			width: 50vw;
			height: 60vh;
		}
		h1 {
			/* font-size: calc(40px + 0.390625vw); */
		}
		.cont,
		svg {
			width: 45vw;
			box-shadow: -2px 0px 0px 0px hsl(271, 91%, 30%), 2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%), 0px 2px 0px 0px hsl(226, 91%, 30%);
			transition: all 0.5s;
			/* animation: rot 5s linear infinite; */
		}
		.cont:hover,
		svg:hover {
			box-shadow: none;
			transition: all 0.5s;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		div {
			padding: 0 90px;
			/* width: 50vw; */
			/* height: 60vh; */
		}
		main {
			justify-content: space-evenly;
		}
		.cont,
		svg {
			width: 45vw;
			box-shadow: -2px 0px 0px 0px hsl(271, 91%, 30%), 2px 0px 0px 0px hsl(126, 100%, 30%),
				0px -2px 0px 0px hsl(61, 100%, 30%), 0px 2px 0px 0px hsl(226, 91%, 30%);
			transition: all 0.5s;
			/* animation: rot 5s linear infinite; */
		}
		.cont:hover,
		svg:hover {
			box-shadow: none;
			transition: all 0.5s;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
	}
</style>
