<script>
	// @ts-nocheck

	import TranWrapper from '$lib/TranWrapper.svelte';
	export let para = '';
	export let featuresHeadie = '';
</script>

<TranWrapper tType="yAxis" height="70vh" inDelayVal="600">
	<div class="features-headie-wrapper">
		{#if featuresHeadie === 'firstFeatureSet'}
			<div class="features-headline">
				<span class="headie-span">Effortless</span> Sales Management: Your Business.
				<span class="headie-span-sec">Simplified.</span>
			</div>
			<div class="features-paragraph">
				Running your business has never been easier. Our cutting-edge sales recording and management
				app is designed for seamless operations, putting Powerful at the forefront. From effortless
				navigation to instant professionalism in receipt generation, precision inventory management
				to powerful real-time insights – we've curated a suite of features tailored to elevate your
				business.
			</div>
		{/if}
		{#if featuresHeadie === 'secondFeatureSet'}
			<div class="features-headline">
				Where <span class="headie-span">Powerful</span> meets
				<span class="headie-span-sec">Simple.</span>
			</div>
			<div class="features-paragraph">
				Running your business has never been easier. Our cutting-edge sales recording and management
				app is designed for seamless operations, putting Powerful at the forefront. From effortless
				navigation to instant professionalism in receipt generation, precision inventory management
				to powerful real-time insights – we've curated a suite of features tailored to elevate your
				business.
			</div>
		{/if}
	</div>
</TranWrapper>

<style>
	.headie-span {
		color: transparent; /* Make text transparent */
		text-shadow: 0px 0px 50px hsla(126, 100%, 63%, 0.459);
		text-shadow: 0px 0px 50px hsl(221, 100%, 63%, 0.459);
		/* text-shadow: 0px 0px 50px #a855f7; */
		/* background-image: linear-gradient(to right, #e7ff52, #41ff54); */
		background-image: linear-gradient(to right, #2563eb, #a855f7);
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
	}
	.headie-span-sec {
		color: transparent; /* Make text transparent */
		text-shadow: 0px 0px 50px hsla(126, 100%, 63%, 0.459);
		text-shadow: 0px 0px 50px hsl(221, 100%, 63%, 0.459);
		/* text-shadow: 0px 0px 50px #a855f7; */
		/* background-image: linear-gradient(to right, #e7ff52, #41ff54); */
		background-image: linear-gradient(to right, #e7ff52, #41ff54);
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
	}
	.features-headie-wrapper {
		/* background: red; */
		display: flex;
		/* border: 1px solid blue; */
		justify-content: center;
		align-items: center;
		/* font-size: calc(10px + 0.390625vw); */

		/* font-size: calc(15px + 0.390625vw); */
		/* height: 20vh; */
		width: 100vw;
		flex-direction: column;
	}
	.features-headline {
		width: 100vw;
		/* display: flex; */
		/* justify-content: center; */
		font-size: calc(22px + 0.390625vw);
		/* align-self: center; */
		/* font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400)); */

		text-align: center;
		padding: 0 60px;
		color: #ccc;
		font-weight: 700;
		/* font-size: 1.5rem; */
		margin-bottom: 1rem;
		/* padding: calc(10vw * (5vw - 100px)); */
		/* padding: calc(20px + (40 - 20) * ((100vw - 400px) / (1200 - 400))); */
		/* margin: calc(10px + (20 - 10) * ((100vw - 400px) / (800 - 400))); */
	}
	.features-paragraph {
		width: 100vw;
		display: flex;
		padding: 0 50px;
		align-items: center;
		font-size: calc(12px + 0.390625vw);
		/* font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400)); */

		/* padding: 0 calc(50%); */
		/* font-size: 1.05rem;*/
		/* padding: calc(20px + (40 - 20) * ((100vw - 400px) / (1200 - 400))); */

		color: #b0b3b6;
		/* padding: 0 400px; */
		line-height: 1.4;
		letter-spacing: 0.5px;
		/* word-spacing: 0.5px; */
		/* font-weight: 600; */
		/* border-bottom: 2px solid blue; */
		/* margin: calc(10px + (20 - 10) * ((100vw - 400px) / (800 - 400))); */

		text-align: center;
		justify-content: center;
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		.features-headline {
			/* background: red; */
			/* padding: 0 10px; */
			font-size: calc(30px + 0.390625vw);
		}
		.features-headline {
			/* background: red; */
			padding: 0 150px;
		}
		.features-paragraph {
			/* background: rgb(18, 17, 17); */
			padding: 0 150px;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		.features-headie-wrapper {
			/* background: pink; */
		}
		.features-headline {
			/* background: red; */
			/* padding: 0 10px; */
			font-size: calc(35px + 0.390625vw);
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.features-headie-wrapper {
			/* background: green; */
		}

		.features-headline {
			/* background: red; */
			font-size: calc(35px + 0.390625vw);
			padding: 0 300px;
		}
		.features-paragraph {
			/* background: rgb(18, 17, 17); */
			padding: 0 250px;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.features-headie-wrapper {
			/* background: blue; */
		}

		.features-headline {
			/* background: red; */
			font-size: calc(30px + 0.390625vw);
			padding: 0 450px;
		}
		.features-paragraph {
			/* background: rgb(18, 17, 17); */
			padding: 0 400px;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		.features-headie-wrapper {
			/* background: grey; */
		}
	}
</style>
