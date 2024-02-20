<script>
	import TranWrapper from '$lib/TranWrapper.svelte';
	import IOWrapperComp from '$lib/IOWrapperComp.svelte';
	import CardOne from '$lib/CardOne.svelte';

	export let num;
</script>

{#if num === 'one'}
	<!-- <IOWrapperComp> -->
	<TranWrapper height="100vh">
		<div>
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="600"
				h2Title="Simplicity at its core"
				para="Experience the heart of simplicity with our software. From intuitive interfaces to user-friendly features, we've crafted an experience that streamlines your operations effortlessly. Simplicity isn't just a feature; it's the essence of our software, ensuring that every task feels intuitive and stress-free. Welcome to a world where powerful capabilities come wrapped in a user-friendly package."
			/>
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="800"
				h2Title="Work online or offline"
				para="Enjoy uninterrupted productivity with our software that seamlessly transitions between offline and online modes. Whether you're in a bustling store or a remote location, our solution ensures that you can continue working without missing a beat. It's the flexibility to stay productive regardless of your connectivity, providing a reliable tool that adapts to your business needs, whether online or offline."
			/>
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="1000"
				h2Title="Sleek UI design"
				para="Immerse yourself in a visually stunning and intuitive user interface. Our sleek UI design not only enhances the aesthetics but also ensures a smooth and delightful user experience. Interact with your data effortlessly and enjoy the modern elegance of a UI designed for simplicity and functionality. Welcome to a world where style meets usability."
			/>
			<!-- </div> -->
			<!-- <div> -->
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="1200"
				h2Title="Lightning-Fast and Responsive"
				para="Experience unparalleled speed and responsiveness with our software. Lightning-fast performance ensures that tasks are completed in the blink of an eye, while responsiveness adapts seamlessly to your every command. From swift data retrieval to instantaneous interactions, our software is designed to keep pace with your business demands. Embrace a level of speed and responsiveness that transforms the way you work."
			/>
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="1400"
				h2Title="Streamlined Efficiency: Lesser Hardware, Greater Power"
				para="Redefine efficiency with our software, requiring only a desktop or laptop and a mini receipt printer. No need for bulky hardware or barcode scanners. Experience powerful functionality without the unnecessary equipment. It's not just streamlined operations; it's efficiency reimagined, simplifying your setup for optimal performance. Welcome to a future where simplicity meets power."
			/>
			<CardOne
				iconName="cardOneIcon1"
				inDelayVal="1600"
				h2Title="Lightning-Fast and Responsive"
				para="Experience unparalleled speed and responsiveness with our software. Lightning-fast performance ensures that tasks are completed in the blink of an eye, while responsiveness adapts seamlessly to your every command. From swift data retrieval to instantaneous interactions, our software is designed to keep pace with your business demands. Embrace a level of speed and responsiveness that transforms the way you work."
			/>
		</div>
		<!-- </IOWrapperComp> -->
	</TranWrapper>
{:else}
	<!-- <IOWrapperComp> -->
	<TranWrapper height="100vh">
		<!-- <div class="blog-header">Top Stories from our blog</div> -->
		<!-- <div class="blog-header"> -->
		<h1>
			Top <span style="text-shadow: 0px 0px 50px hsl(221, 100%, 63%, 0.459);">stories</span>
			from our
			<span
				style="color: transparent; /* Make text transparent */
				text-shadow: 0px 0px 50px hsla(126, 100%, 63%, 0.459);
				/* text-shadow: 0px 0px 50px #a855f7; */
				/* background-image: linear-gradient(to right, #e7ff52, #41ff54); */
				background-image: linear-gradient(to right, #e7ff52, #41ff54);
				-webkit-background-clip: text; /* Clip the background to the text */
				background-clip: text;">blog.</span
			>
		</h1>
		<!-- <div class="line-cont">
				<div class="line1" />
				<div class="line2" />
				<div class="line3" />
				<div class="line4" />
				<div class="line5" />
			</div> -->
		<!-- </div> -->
		<div>
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="600"
				h2Title="Do we still need handheld scanners in 2024?"
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="800"
				h2Title="Comming soon..."
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="1000"
				h2Title="Blog title here"
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
			<!-- </div> -->
			<!-- <div> -->
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="1200"
				h2Title="Comming soon..."
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="1400"
				h2Title="Blog title here"
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
			<CardOne
				cardIsForBlog="true"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIMiIZd3jfSrbATKOH_3ZTEyrp8M50Q3QKsaXeJMiUYhBShlihzKiFROVr4Kcbefo1Ck&usqp=CAU"
				inDelayVal="1600"
				h2Title="Comming soon..."
				para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, natus aliquid modi minima, nam non alias maiores officia error delectus culpa sapiente provident sequi. Doloremque minus vel vero deleniti."
			/>
		</div>
	</TranWrapper>
	<!-- <h1 class="heading">{title}</h1> -->
	<!-- </IntersectionObserver> -->
	<!-- </IOWrapperComp> -->
{/if}

<style>
	h1 {
		margin-left: 2rem;
		margin-bottom: 2rem;
		padding: 10px;
		/* display: flex; */
		/* width: fit-content; */
		justify-content: center;
		align-self: flex-start;
		/* display: flex; */
		flex-direction: row;
		background: hsl(213, 43%, 7%);
		/* width: 95vw; */
		/* flex-wrap: wrap; */
		/* border: 1px solid cyan; */
		/* height: fit-content; */
		align-items: flex-start;
		border-radius: 10px;
		font-size: calc(40px + 0.390625vw);
		justify-content: center;
		color: #ccc;
		width: fit-content;
		/* background: #000000; */
		/* height: 17vh; */
		/* border: 1px solid red; */
	}
	.blog-header {
		font-size: calc(20px + 0.390625vw);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		color: #ccc;
		width: fit-content;
		/* background: #000000; */
		/* height: 17vh; */
		border: 1px solid red;
		/* text-align: start; */
		/* background: red; */
	}
	.line1 {
		height: 10px;
		width: 100%;
		background: linear-gradient(
			to right,
			hsl(271, 91%, 30%),
			hsl(126, 100%, 30%),
			hsl(61, 100%, 30%),
			hsl(226, 91%, 30%),
			hsl(0, 100%, 30%)
		);
	}
	.line2 {
		height: 10px;
		background: linear-gradient(
			to right,
			hsl(271, 91%, 30%),
			hsl(126, 100%, 30%),
			hsl(61, 100%, 30%),
			hsl(226, 91%, 30%)
		);
		width: 95%;
	}
	.line3 {
		height: 10px;
		background: linear-gradient(
			to right,
			hsl(271, 91%, 30%),
			hsl(126, 100%, 30%),
			hsl(61, 100%, 30%)
		);
		width: 90%;
	}
	.line4 {
		height: 10px;
		background: linear-gradient(to right, hsl(271, 91%, 30%), hsl(126, 100%, 30%));
		width: 85%;
	}
	.line5 {
		height: 10px;
		background: hsl(271, 91%, 30%);
		width: 80%;
	}
	.line-cont {
		display: flex;
		justify-content: space-between;
		height: 70%;
		flex-direction: column;
		margin-right: 10px;
		width: 50vw;
		align-items: start;
	}
	span {
		color: transparent; /* Make text transparent */

		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
		background-image: linear-gradient(to right, #2563eb, #a855f7);

		transition: all 1s;
	}
	img {
		display: flex;
		align-items: center;
		/* border: 1px solid pink; */
		justify-content: center;
		width: 8vw;
		/* width: 20vw; */
		/* height: 15vh; */
		border-radius: 100px;
		margin: 1rem;
		transition: all 1s;
	}
	.marquee-container {
		display: flex;
		width: 100vw;
		overflow-x: hidden;
		flex-direction: row;
		position: relative;
		transition: all 1s;
	}

	.marquee-container:hover .marquee {
		animation-play-state: var(--pause-on-hover);
	}

	.marquee-container:active .marquee {
		animation-play-state: var(--pause-on-click);
	}

	.marquee {
		/* flex: 0 0 auto; */
		/* flex: display; */
		/* min-width: 100%; */
		z-index: 1;
		display: flex;
		width: fit-content;
		/* border: 1px solid cyan; */
		flex-direction: row;
		align-items: center;
		gap: var(--gap, 0);
		animation: scroll var(--duration) linear infinite;
		animation-play-state: var(--play);
		animation-direction: var(--direction);
		padding-right: var(--gap, 0);
		transition: all 1s;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
			transition: all 1s;
		}
		/* 50% {
			transform: translateX(-100%);
			transition: all 1s;
		} */
		100% {
			transform: translateX(-100%);
			transition: all 1s;
		}
	}

	.initial-child-container {
		/* flex: 0 0 auto; */
		/* display: flex; */
		/* min-width: auto; */
		/* flex-direction: row; */
	}

	.gradient::after,
	.gradient::before {
		background: linear-gradient(to right, var(--gradientColor, black), transparent);
		content: '';
		height: 100%;
		position: absolute;
		width: var(--gradientWidth, 10%);
		z-index: 2;
	}

	.gradient::before {
		left: 0;
		top: 0;
	}

	.gradient::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
	div {
		display: flex;
		flex-direction: row;
		background: hsl(213, 43%, 7%);
		width: 95vw;
		flex-wrap: wrap;
		/* border: 1px solid cyan; */
		height: fit-content;
		align-items: flex-start;
		align-content: center;
		margin: auto;
		border-radius: 10px;
		justify-content: center;
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		div {
			/* background: red !important; */
			/* overflow: visible; */
			/* width: 100vh; */
			/* height: 80vh; */
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		div {
			/* display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			flex-direction: row !important;
			border: 1px solid pink !important;
			*/
			/* background: rgb(201, 255, 192); */
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		div {
			/* background: grid-row: ;; */
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		div {
			/* background: rgba(0, 0, 255, 0.464) !important; */
			/* background: cyan; */
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		div {
			/* background: green !important; */
		}
	}
</style>
