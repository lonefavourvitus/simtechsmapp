<script>
	// @ts-nocheck

	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import LappyMockup from '$lib/LappyMockup.svelte';
</script>

<main class="hero-cont">
	<div class="hero-text">
		<h1>
			<span>RECORD</span> AND MANAGE YOUR <span>SALES.</span> <br />
			<span>EFFORTLESSLY.</span>
		</h1>
		<h2>
			SimTech SMApp is a simple light weight sales management solution crafted to meet your
			business's unique needs. Whether you run a pharmacy, a wholesale store, large supermarkets or
			any other general merchandise, our reliable software is designed to streamline and enhance
			your daily operations. With a user-friendly interface and powerful features, SimTech SMApp
			effortlessly facilitates seamless sales recording and management.
		</h2>
		<div class="hero-btns">
			<div>
				<ButtonWithIcon btnType="heroBtn" text="Start Recording" />
			</div>
			<div>
				<ButtonWithIcon btnType="ctaBtn" text="Sign In ▶" />
			</div>
		</div>
	</div>
	<!-- <div class="spot" /> -->
	<!-- <div class="desk-top"> -->
	<!-- {#key variableValue}
			<img transition:fade {src} alt="lappy" />
		{/key} -->
	<div class="lappy">
		<LappyMockup />
	</div>
	<!-- <DeskTop /> -->
	<!-- </div> -->
	<!--  -->
	<!-- <div class="hero-image">image will be here</div> -->
</main>

<!-- <div class="desk-cont">
	<div class="comb">
		<div class="vid">
			<VideoPlayer />
		</div>
		<DeskTop />
	</div>
</div> -->

<!-- <DeskTop />
<LappyMockup /> -->
<style>
	.lappy {
		display: flex;
		/* position: absolute; */
		width: 100% !important;
		/* height: 20vh !important; */
		/* border: red !important; */
		/* background: red !important; */
	}
	.desk-top {
		display: flex;
		/* width: 50vw; */
		/* height: fit-content; */
		/* background: green !important; */
	}
	img {
		/* height: 20vh; */
		position: absolute;
		bottom: 37.3vh;
		border-radius: 5px;
		/* transform: rotate(-3deg); */
		z-index: 1;
		left: 52vw;
		width: 36.5vw;
	}
	.hero-btns {
		display: flex;
		align-items: center;
		justify-content: start;
		width: 100%;
		/* background: red; */
		/* margin-left: -0.6rem !important; */
	}

	/* .vid {
		position: absolute;
		z-index: 1;

		top: 90;
		left: -90 !important;
	} */
	/* .desk-top {
		width: 60vw;
	} */

	.spot {
		position: absolute;
		/* height: 10vh; */
		top: 50%;
		left: 40%;
		width: 20vw;
		/* z-index: -4; */
		box-shadow: 0 0 60px 200px #54b4dd0e;
		background: transparent;
		border-radius: 10px;
	}
	div.hero-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: hsl(210, 45%, 4%);
		width: 100vw;
		/* background: #1e242c; */
		/* font-size: 1rem; */
		padding: 0 50px;
	}
	h1 {
		/* font-size: 2rem; */
		text-align: start;
		flex-direction: column;
		/* text-shadow: 0px 0px 100px #54b4dd2e; */
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		/* padding: 0 80px; */
	}
	.hero-cont {
		display: flex;
		font-size: calc(10px + 0.390625vw);
		/* height: 100vh; */
		flex-direction: column;
		/* height: 10vh; */
		/* border: 1px solid deepskyblue; */
	}
	span:first-child {
		/* text-shadow: 0px 0px 100px #54b4dd2e; */

		color: transparent; /* Make text transparent */
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
		background-image: linear-gradient(to right, #e7ff52, #41ff54);
		background-image: linear-gradient(to right, #2563eb, #a855f7);
		/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
	}
	span:nth-child(2) {
		/* text-shadow: 0px 0px 100px #54b4dd2e; */

		color: transparent; /* Make text transparent */

		background-image: linear-gradient(to right, #e7ff52, #41ff54);
		background-image: linear-gradient(to right, #2563eb, #a855f7);
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
		/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
	}
	span:nth-of-type(3) {
		text-shadow: 0px 0px 50px #41ff5475;
		/* #e8ff5255; */

		color: transparent; /* Make text transparent */
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
		background-image: linear-gradient(to right, #e7ff52, #41ff54);
		/* background-image: linear-gradient(to right, #2563eb, #a855f7); */
		/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
	}
	h1 {
		/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
		/* Gradient colors */
		/* background-image: linear-gradient(45deg, #662d8c, #ed1e79, #038f9a); */
		color: #333637; /* Make text transparent */
		color: white; /* Make text transparent */
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
	}
	h2 {
		/* padding: 0 80px; */
		text-align: start;
		color: #b0b3b6;
		font-weight: 400;
		margin-bottom: 1rem;
		font-size: calc(12px + 0.390625vw);
		/* font-size: 1rem; */
		letter-spacing: 1px;
	}

	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		div.hero-text {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: hsl(210, 45%, 4%);
			width: 100vw;
			/* background: #1e242c; */
			/* font-size: 1rem; */
			padding: 0 150px;
			/* margin: 0 1rem; */
		}

		main {
			/* background: red; */
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		main {
			/* background: blue; */
		}
		h1 {
			/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
			/* Gradient colors */
			/* background-image: linear-gradient(45deg, #662d8c, #ed1e79, #038f9a); */
			color: #333637; /* Make text transparent */
			color: white; /* Make text transparent */
			-webkit-background-clip: text; /* Clip the background to the text */
			background-clip: text;
			/* font-size: 2.5rem; */
		}
		h2 {
			padding: 0 10px;
			text-align: start;
			color: #b0b3b6;
			font-weight: 400;
			margin-bottom: 1rem;
			/* font-size: 1rem; */
			letter-spacing: 1px;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.lappy {
			/* background: green/; */
			width: 50vw !important;
			/* transform: translate(-67px, 0px); */
		}
		div {
			/* background: pink; */
		}
		main {
			/* background: pink; */
		}
		.hero-btns {
			display: flex;
			align-items: center;
			margin: 0;
			padding: 0 20px;
			justify-content: start;
			width: 100%;
			/* background: red; */
			/* margin-left: -0.6rem !important; */
		}
		.hero-cont {
			display: flex;
			flex-direction: row;
			/* width: 50vw !important; */
			height: 100vh;
		}
		div.hero-text {
			transform: translateX(30px);

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: hsl(210, 45%, 4%);
			width: 50vw;
			/* background: #1e242c; */
			/* font-size: 5rem; */
			padding: 0;
			margin: 0;
		}
		h1 {
			/* font-size: 3.5rem; */
			font-size: calc(42px + 0.390625vw);
			text-align: start;
			/* align-content: center; */
			/* justify-content: start; */
			margin: 0;
			padding: 0 20px;
			/* width: 50vw; */
		}
		h2 {
			width: 50vw;
			padding: 0 20px;
			text-align: start;
			margin: 0;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		main {
			/* background: green; */
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		main {
			background: green;
		}
	}
</style>
