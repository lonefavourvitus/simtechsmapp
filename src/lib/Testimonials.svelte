<script>
	// @ts-nocheck

	import Divider from '$lib/Divider.svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import FeaturesCompIconFac from '/src/icons/FeaturesCompIconFac.svelte';

	let testimonials = [
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PN1z_wR3bCyDG1rdinSv2ilCJctZymZ-bg&usqp=CAU',
			text: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ad quia quo mollitiunt amet consequatur cum quasi unde neque animi error eligendi quos aperiam sit! Animi adporro officiis!',
			author: '-Priyanka Pradesh, ceo, Paten Shines.'
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PN1z_wR3bCyDG1rdinSv2ilCJctZymZ-bg&usqp=CAU',
			text: '	mkkjhjg ipsum dolor sit amet, rgcdfg ttryrtttu elit. Voluptatum ad quia quo mollitiunt amet consequatur cum quasi unde neque animi error eligendi quos aperiam sit! Animi adporro trytry!',
			author: '-Maresh Krone, ceo, Aurora Inc.'
		}
		// { image: author: 'Jane Smith', text: 'I love working with Svelte.' },
	];

	let currentTestimonial = 0;

	function nextTestimonial() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		// updateTestimonial();
	}

	function prevTestimonial() {
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
		// updateTestimonial();
	}

	// function updateTestimonial() {
	// testimonialText.innerHTML = testimonials[currentTestimonial].text;
	// testimonialAuthor.innerHTML = `- ${testimonials[currentTestimonial].author}`;
	// updateRadioButtons();
	// }

	function updateRadioButtons() {
		for (let i = 0; i < testimonials.length; i++) {
			radioButtons[i].checked = i === currentTestimonial;
		}
	}

	// Set interval to change testimonial every 5 seconds (5000 milliseconds)
	setInterval(nextTestimonial, 5000);
</script>

<!-- {#key currentTestimonial} -->
<main>
	<h1>LOVED BY OUR LOYAL <span>CUSTOMERS</span></h1>
	<Divider dd="horizontal" />
	<!-- <div class="image"> -->
	<img src={testimonials[currentTestimonial].image} alt="ee" />
	<!-- <FeaturesCompIconFac iconName="cardOneIcon1" /> -->
	<!-- </div> -->
	<div class="bq-and-directions">
		<div class="arrow">
			<ButtonWithIcon btnFuncV1={prevTestimonial} btnType="testBtn" text="&lBarr;" />
		</div>
		{#key currentTestimonial}
			<div class="bqandatt">
				<blockquote>
					{testimonials[currentTestimonial].text}
					<h3>{testimonials[currentTestimonial].author}</h3>
				</blockquote>
			</div>
		{/key}
		<div class="arrow">
			<ButtonWithIcon btnFuncV1={nextTestimonial} btnType="testBtn" text="&rBarr;" />
		</div>
	</div>
	<div class="radio-container">
		<!-- Radio buttons to indicate testimonial index -->
		{#each testimonials as testimonial, index (testimonial)}
			<input type="radio" bind:group={currentTestimonial} value={index} class="radio-btn" />
		{/each}
	</div>
</main>

<!-- {/key} -->
<style>
	.radio-container {
		display: flex;
		justify-content: center;
		/* background: green; */
		padding: 5px 10px;
		border-radius: 10px;
		background-image: linear-gradient(to right, #2563eb, #a855f7);
	}

	.radio-btn {
		margin: 0 5px;
		background-image: linear-gradient(to right, #2563eb, #a855f7);
		cursor: pointer;
	}

	span {
		color: transparent; /* Make text transparent */

		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
		background-image: linear-gradient(to right, #2563eb, #a855f7);

		transition: all 1s;
	}
	.arrow {
		display: flex;
		border-radius: 50px;
		align-self: center;
		border-radius: 10px;
		height: fit-content;
		padding: 10px;
		justify-content: center;
		transition: all 1s;

		/* background: hsl(0, 0%, 36%); */
		/* font-size: 70px !important; */
	}
	.bq-and-directions {
		display: flex;
		transition: all 1s;
	}
	main {
		margin-top: 9rem;
		display: flex;
		margin-bottom: 16rem;
		/* border: 1px solid green; */
		flex-direction: column;
		align-items: center;
		/* width: 100vw;
		height: 100vh; */
		/* height: fit-content; */
		height: 100vh !important;
		justify-content: center;
		background:
			center / contain no-repeat
				linear-gradient(#060a0f, hsla(226, 92%, 5%, 0.96), hsla(117, 92%, 5%, 0.96)),
			url('assets/images/heroproductshots/ps1.png');
		transition: all 1s;

		/* background: red; */
		/* background-blend-mode: multiply; */
		/* opacity: 0; */
		/* background-color: black; */
	}
	/* img {
		display: flex;
		height: 2vh;
		width: 2vw;
	} */
	img {
		border-radius: 50px;
		/* padding: 15px; */
		margin: 1rem 0;
		height: 13vh;
		width: 8vw;
		border: 2px solid rgb(92, 89, 89);
		background: #060a0f;
		transition: all 1s;
	}
	h3 {
		/* width: 30vw; */
		/* background: hsl(0, 80%, 36%); */
		line-height: 1.4;
		letter-spacing: 0.5px;
		padding: 15px 0;
		font-weight: 400;
		/* margin: 1rem; */
		border-radius: 10px;
		/* margin: 1rem; */
		font-size: 15px;
		text-align: center;
		transition: all 1s;
	}
	h1 {
		/* width: 30vw; */
		/* background: hsl(0, 0%, 36%); */
		color: hwb(0 80% 20%);
		line-height: 1.4;
		letter-spacing: 0.5px;
		font-weight: 500;
		/* padding: 10px; */
		border-radius: 10px;
		/* margin: 1rem; */
		text-align: center;
		transition: all 1s;
	}
	blockquote {
		width: fit-content;
		background: hsl(0, 0%, 36%);
		background: #060a0f;
		color: #bbd2ee;

		line-height: 1.4;
		letter-spacing: 0.5px;
		font-weight: 500;
		/* height: 200px; */
		padding: 10px;
		border-radius: 10px;
		margin: 1rem;
		text-align: center;
		animation: fade 1s;

		transition: all 1s;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
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
			/* margin: calc(2rem); */
		}
		blockquote {
			width: 50vw;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		blockquote {
			width: 30vw;
		}
		div {
			/* display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			flex-direction: row !important;
			border: 1px solid pink !important;
			*/
			/* background: rgba(255, 0, 238, 0.187) !important; */
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		div {
			/* background: #f8536f3a !important; */
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		div {
			/* background: rgba(0, 0, 255, 0.464) !important; */
			/* background: rgba(0, 0, 255, 0) !important; */
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		div {
			/* background: green !important; */
		}
	}
</style>
