<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import TranWrapper from '$lib/TranWrapper.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import FeaturesCompIconFac from '/src/icons/FeaturesCompIconFac.svelte';
	let innerWidth;
	$: viewPortSize = innerWidth;

	// $: console.log(viewPortSize);
</script>

<svelte:window bind:innerWidth />

{#if viewPortSize > 914}
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="yAxis">
			<div class="details">
				<div class="h2-and-icon-cont">
					<div in:fly={{ delay: 500, x: -50 }} class="icon-div">
						<FeaturesCompIconFac iconName="filterIcon" />
					</div>
					<h2 in:fly={{ delay: 700, x: -50 }}>
						<span class="feature-details-span">Powerful</span> Filtering Options.
					</h2>
				</div>
				<!-- <h2 in:fly={{ delay: 500, x: -50 }}>
					<span class="feature-details-span">Powerful</span> Filtering Options.
				</h2> -->
				<p in:fly={{ delay: 900, x: -50 }}>
					Navigate your data easily with our powerful filtering options. Filter by date, product
					name, stock, date stamp, or seamlessly combine them for pinpoint accuracy. It's not just
					filtering; it's the flexibility to tailor your data exploration to your exact needs,
					effortlessly.
				</p>
				<div in:fly={{ delay: 1100, x: -50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
		</TranWrapper>
		<TranWrapper position="relative" zIndex="-9" tType="xAxis" inXVal="-1000" inDelayVal="600">
			<!-- <div class="di-wrapper"> -->
			<div class="di-wrapper">
				<div class="di" />
			</div>

			<!-- </div> -->
		</TranWrapper>

		<TranWrapper position="relative" zIndex="-99" tType="xAxis" inDelayVal="1350" inXVal="-500">
			<!-- <div class="image"> -->
			<img class="img-tag" src="assets/images/heroproductshots/ps1.png" alt="sim" />
			<!-- </div> -->
		</TranWrapper>
		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper height="60vh"> -->
		<TranWrapper position="relative" zIndex="-99" tType="xAxis" inDelayVal="1350" inXVal="500">
			<!-- <div class="image"> -->
			<img class="img-tag-2" src="assets/images/heroproductshots/ps1.png" alt="sim" />
			<!-- </div> -->
		</TranWrapper>

		<TranWrapper position="relative" zIndex="-9" tType="xAxis" inXVal="1000" inDelayVal="600">
			<!-- <div class="di-wrapper"> -->
			<div class="di-wrapper">
				<div class="di-2" />
			</div>

			<!-- </div> -->
		</TranWrapper>

		<TranWrapper tType="yAxis">
			<div class="details-2">
				<!-- <h2 in:fly={{ delay: 500, x: 50 }}>
					<span class="feature-details-span">Realtime</span> Analytics Dashboard.
				</h2> -->
				<div class="h2-and-icon-cont">
					<div in:fly={{ delay: 500, x: 50 }} class="icon-div">
						<FeaturesCompIconFac iconName="dashboardAnalyticsIcon1" />
					</div>
					<h2 in:fly={{ delay: 700, x: 50 }}>
						<span class="feature-details-span">Realtime</span> Analytics Dashboard.
					</h2>
				</div>
				<p in:fly={{ delay: 900, x: 50 }}>
					Take command of your business effortlessly with our real-time dashboard. Instant insights
					are just a click away, simplifying decision-making at your fingertips. Easily monitor
					sales trends, track inventory levels, and stay in control with our dynamic, real-time
					dashboard. It's not just data; it's the simplicity of being in charge, instantly.
				</p>
				<div in:fly={{ delay: 1100, x: 50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
		</TranWrapper>
		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="yAxis">
			<div class="details">
				<div class="h2-and-icon-cont">
					<div in:fly={{ delay: 500, x: -50 }} class="icon-div">
						<FeaturesCompIconFac iconName="receiptIcon" />
					</div>
					<h2 in:fly={{ delay: 700, x: -50 }}>
						<span class="feature-details-span">Generate receipts.</span> Effortlessly.
					</h2>
				</div>
				<!-- <h2 in:fly={{ delay: 500, x: -50 }}>
					Generate Receipts. <span class="feature-details-span">Effortlessly.</span>
				</h2> -->
				<p in:fly={{ delay: 900, x: -50 }}>
					Elevate your brand with our professionally generated receipts. Sent seamlessly to your
					customers' phone, email, SMS, or preferred social media, our feature ensures a smooth and
					professional touch to every transaction. It's not just a function; it's the key to
					effortless, distinctive professionalism.
				</p>
				<div in:fly={{ delay: 1100, x: -50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
		</TranWrapper>
		<TranWrapper position="relative" zIndex="-9" tType="xAxis" inXVal="-1000" inDelayVal="600">
			<!-- <div class="di-wrapper"> -->
			<div class="di-wrapper">
				<div class="di" />
			</div>

			<!-- </div> -->
		</TranWrapper>

		<TranWrapper position="relative" zIndex="-99" tType="xAxis" inDelayVal="1350" inXVal="-500">
			<!-- <div class="image"> -->
			<img class="img-tag" src="assets/images/heroproductshots/ps1.png" alt="sim" />
			<!-- </div> -->
		</TranWrapper>
		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper height="60vh"> -->
		<TranWrapper position="relative" zIndex="-99" tType="xAxis" inDelayVal="1350" inXVal="500">
			<!-- <div class="image"> -->
			<img class="img-tag-2" src="assets/images/heroproductshots/ps1.png" alt="sim" />
			<!-- </div> -->
		</TranWrapper>
		<TranWrapper position="relative" zIndex="-9" tType="xAxis" inXVal="1000" inDelayVal="600">
			<!-- <div class="di-wrapper"> -->
			<div class="di-wrapper">
				<div class="di-2" />
			</div>

			<!-- </div> -->
		</TranWrapper>

		<TranWrapper tType="yAxis">
			<div class="details-2">
				<!-- <h2 in:fly={{ delay: 500, x: 50 }}>
					<span class="feature-details-span">Simple</span> Stock Tracking.
				</h2> -->
				<div class="h2-and-icon-cont">
					<div in:fly={{ delay: 500, x: 50 }} class="icon-div">
						<FeaturesCompIconFac iconName="dashboardAnalyticsIcon" />
					</div>
					<h2 in:fly={{ delay: 700, x: 50 }}>
						<span class="feature-details-span">Simple</span> Stock Tracking.
					</h2>
				</div>
				<p in:fly={{ delay: 900, x: 50 }}>
					Experience the simplicity of precise inventory management. Our stock tracking feature is
					designed for ease, giving you powerful control over your inventory without the complexity.
					Prevent stockouts and overstocks effortlessly, ensuring a more streamlined and efficient
					business. Stock tracking that feels as simple as it is powerful.
				</p>
				<div in:fly={{ delay: 1100, x: 50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
		</TranWrapper>
		<!-- </TranWrapper> -->
	</main>
{:else}
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="xAxis" height="fit-content">
			<div class="details-vert">
				<div class="h2-and-icon-cont">
					<div class="icon-div"><FeaturesCompIconFac iconName="dashboardAnalyticsIcon1" /></div>
					<h2 in:fly={{ delay: 500, x: 50 }}>
						<span class="feature-details-span">Powerful</span> Filtering Options.
					</h2>
				</div>

				<p in:fly={{ delay: 700, x: 50 }}>
					Navigate your data easily with our powerful filtering options. Filter by date, product
					name, stock, date stamp, or seamlessly combine them for pinpoint accuracy. It's not just
					filtering; it's the flexibility to tailor your data exploration to your exact needs,
					effortlessly.
				</p>
				<div in:fly={{ delay: 900, x: 50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
			<!-- <div class="di-wrapper-verty"> -->
			<div class="di-verty" />
			<!-- </div> -->
			<img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" />

			<!-- <TranWrapper tType="xAxis" inDelayVal="600" inYVal="-500" height="fit-content"> -->
			<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
			<!-- </TranWrapper> -->
		</TranWrapper>

		<!-- <main> -->
		<!-- <TranWrapper tType="xAxis" inDelayVal="600" inYVal="-500" height="fit-content"> -->
		<!-- <div class="image"> -->
		<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
		<!-- </div> -->
		<!-- </TranWrapper> -->
		<!-- </main> -->

		<!-- <TranWrapper tType="yAxis" inYVal="-1000" inDelayVal="600" height="10vh"> -->
		<!-- <div class="di-wrapper"> -->
		<!-- <div class="di-wrapper-vert"> -->
		<!-- <div class="di-vert" /> -->
		<!-- </div> -->

		<!-- </div> -->
		<!-- </TranWrapper> -->

		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="xAxis" inXVal="-200" height="fit-content">
			<div class="details-vert">
				<div class="h2-and-icon-cont">
					<div class="icon-div"><FeaturesCompIconFac iconName="dashboardAnalyticsIcon1" /></div>
					<h2 in:fly={{ delay: 500, x: -50 }}>
						<span class="feature-details-span">Realtime</span> Analytics Dashboard.
					</h2>
				</div>

				<p in:fly={{ delay: 700, x: -50 }}>
					Take command of your business effortlessly with our real-time dashboard. Instant insights
					are just a click away, simplifying decision-making at your fingertips. Easily monitor
					sales trends, track inventory levels, and stay in control with our dynamic, real-time
					dashboard. It's not just data; it's the simplicity of being in charge, instantly.
				</p>
				<div in:fly={{ delay: 900, x: -50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
			<!-- <div class="di-wrapper-verty"> -->
			<div class="di-verty" />
			<!-- </div> -->
			<img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" />

			<!-- <TranWrapper tType="xAxis" inDelayVal="600" inYVal="-500" height="fit-content"> -->
			<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
			<!-- </TranWrapper> -->
		</TranWrapper>

		<!-- <main> -->
		<!-- <TranWrapper tType="xAxis" inDelayVal="600" inYVal="-500" height="fit-content"> -->
		<!-- <div class="image"> -->
		<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
		<!-- </div> -->
		<!-- </TranWrapper> -->
		<!-- </main> -->

		<!-- <TranWrapper tType="yAxis" inYVal="-1000" inDelayVal="600" height="10vh"> -->
		<!-- <div class="di-wrapper"> -->
		<!-- <div class="di-wrapper-vert"> -->
		<!-- <div class="di-vert" /> -->
		<!-- </div> -->

		<!-- </div> -->
		<!-- </TranWrapper> -->

		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="xAxis" height="fit-content">
			<div class="details-vert">
				<div class="h2-and-icon-cont">
					<div class="icon-div"><FeaturesCompIconFac iconName="dashboardAnalyticsIcon" /></div>
					<h2 in:fly={{ delay: 500, x: 50 }}>
						Generate Receipts. <span class="feature-details-span">Effortlessly.</span>
					</h2>
				</div>

				<p in:fly={{ delay: 700, x: 50 }}>
					Elevate your brand with our professionally generated receipts. Sent seamlessly to your
					customers' phone, email, SMS, or preferred social media, our feature ensures a smooth and
					professional touch to every transaction. It's not just a function; it's the key to
					effortless, distinctive professionalism.
				</p>
				<div in:fly={{ delay: 900, x: 50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
			<div class="di-verty" />

			<img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" />
		</TranWrapper>
		<!-- <TranWrapper tType="yAxis" inYVal="-1000" inDelayVal="600" height="10vh"> -->
		<!-- <div class="di-wrapper"> -->
		<!-- <div class="di-wrapper-vert"> -->
		<!-- <div class="di-vert" /> -->
		<!-- </div> -->

		<!-- </div> -->
		<!-- </TranWrapper> -->

		<!-- <TranWrapper tType="yAxis" inDelayVal="600" inYVal="-500" height="40vh"> -->
		<!-- <div class="image"> -->
		<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
		<!-- </div> -->
		<!-- </TranWrapper> -->
	</main>
	<main>
		<!-- <TranWrapper tType="yAxis" height="60vh"> -->
		<TranWrapper tType="xAxis" inXVal="-200" height="fit-content">
			<div class="details-vert">
				<div class="h2-and-icon-cont">
					<div class="icon-div"><FeaturesCompIconFac iconName="dashboardAnalyticsIcon" /></div>
					<h2 in:fly={{ delay: 500, x: -50 }}>
						<span class="feature-details-span">Simple</span> Stock Tracking.
					</h2>
				</div>
				<p in:fly={{ delay: 700, x: -50 }}>
					Experience the simplicity of precise inventory management. Our stock tracking feature is
					designed for ease, giving you powerful control over your inventory without the complexity.
					Prevent stockouts and overstocks effortlessly, ensuring a more streamlined and efficient
					business. Stock tracking that feels as simple as it is powerful.
				</p>
				<div in:fly={{ delay: 900, x: -50 }} class="btn-cont">
					<ButtonWithIcon btnType="heroBtn" text="try now" />
					<ButtonWithIcon btnType="ctaBtn" text="learn more" />
				</div>
			</div>
			<div class="di-verty" />

			<img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" />
		</TranWrapper>
		<!-- <TranWrapper tType="yAxis" inYVal="-1000" inDelayVal="600" height="10vh"> -->
		<!-- <div class="di-wrapper"> -->
		<!-- <div class="di-wrapper-vert"> -->
		<!-- <div class="di-vert" /> -->
		<!-- </div> -->

		<!-- </div> -->
		<!-- </TranWrapper> -->

		<!-- <TranWrapper tType="yAxis" inDelayVal="600" inYVal="-500" height="40vh"> -->
		<!-- <div class="image"> -->
		<!-- <img class="image" src="assets/images/heroproductshots/ps1.png" alt="sim" /> -->
		<!-- </div> -->
		<!-- </TranWrapper> -->
		<!-- </TranWrapper> -->
	</main>
{/if}

<style>
	* {
		padding: 0;
		margin: 0;
	}
	span {
		padding: 0 6px;
	}
	.icon-div {
		width: min-content;
		/* border: 1px solid green; */
		/* padding-left: 6px; */
		padding-right: 6px;
		height: min-content;
		/* display: flex; */
		/* align-self: start; */
	}
	.h2-and-icon-cont {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	h2 {
		display: flex;
		align-self: self-end;
		justify-content: flex-end;
	}
	.details-vert h2 {
		font-weight: 300;
	}
	.details-vert p {
		font-weight: 300;
	}
	.k {
		color: hsl(20, 74%, 28%);
	}
	.icon-span {
		border: 1px solid brown;
		height: fit-content;
		display: flex;
		width: fit-content;
	}
	.headie-span {
		color: transparent; /* Make text transparent */

		/* background-image: linear-gradient(to right, #e7ff52, #41ff54); */
		background-image: linear-gradient(to right, #2563eb, #a855f7);
		-webkit-background-clip: text; /* Clip the background to the text */
		background-clip: text;
	}
	.features-headie-wrapper {
		/* background: red; */
		display: flex;
		/* border: 2px solid blue; */
		justify-content: center;
		align-items: center;
		width: 100vw;
		flex-direction: column;
	}
	.features-headline {
		width: 30vw;
		/* display: flex; */
		/* justify-content: center; */
		/* align-self: center; */
		text-align: center;
		color: #ccc;
		font-weight: 700;
		font-size: 2.1rem;
		margin-bottom: 1rem;
	}
	.features-paragraph {
		width: 100vw;
		display: flex;
		align-items: center;
		font-size: 1.05rem;
		color: #b0b3b6;
		padding: 0 400px;
		line-height: 1.4;
		letter-spacing: 0.5px;
		/* word-spacing: 0.5px; */
		/* font-weight: 600; */
		/* border-bottom: 2px solid blue; */
		text-align: center;
		justify-content: center;
	}

	.di-vert {
		/* position: absolute; */
		height: 100%;
		/* transform: translateX(70px); */
		width: 1px;
		/* z-index: 999; */
		background-image: linear-gradient(to bottom, #0c121d, 40%, #e8ff52, #41ff54, #a955f7);
		/* background: red; */
		/* background-position: 200% 300%; */
	}
	.di {
		/* position: absolute; */
		height: 0.2vh;
		/* transform: translateX(70px); */
		width: 100%;
		z-index: 999;
		background-image: linear-gradient(to right, #0c121d, 40%, #e8ff52, #41ff54, #a955f7);
		/* background: red; */
		/* background-position: 200% 300%; */
	}
	.di-2 {
		/* position: absolute; */
		height: 0.2vh;
		/* transform: translateX(70px); */
		width: 100%;
		z-index: 999;
		background-image: linear-gradient(to right, #a955f7, #e8ff52, #41ff54, 60%, #0c121d);
		/* background: red; */
		/* background-size: 400% 400% 400% 400%; */
	}
	.tall {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 3340px;
	}
	/* main:hover .image {
		transform: translateX(37vw);
		opacity: 1;

		transition: opacity 3.5s, transform 1.5s;
	} */
	.btn-cont {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: start;
		margin: 0 !important;
	}
	.details {
		/* transform: translateX(calc(-300px)); */
	}
	.details h2,
	.details-2 h2 {
		/* display: flex; */
		align-self: flex-start;
		color: #ffffffe6;
		width: fit-content;
		margin: 0.5rem 0;
		/* line-height: 1.4; */
		letter-spacing: 0.8px;
		font-weight: 400;
		line-height: 1.4;
		/* letter-spacing: 0.5px; */
		/* background: red !important; */
	}

	.details {
		/* transform: translateX(-350px); */
		color: #ffffff91;
		border-radius: 0px 10px 10px 0px;
		display: flex;
		letter-spacing: 0.8px;
		line-height: 1.4;
		/* letter-spacing: 0.5px; */
		/* position: absolute;
		z-index: 22; */
		/* transform: translateX(-32.8vw); */

		padding: 0px 40px;
		flex-direction: column;
		background: linear-gradient(to bottom, #131b2b, 20%, #060a0f);
		/* background: #2036a1; */
		/* background: #131b2b; */
		align-items: flex-start;
		height: 40vh;
		justify-content: center;
		width: fit-content;
		transition: all 1.5s;
	}
	.details-2 {
		/* transform: translateX(-350px); */
		border-radius: 10px 0px 0px 10px;
		display: flex;
		/* position: absolute;
		z-index: 22; */
		/* transform: translateX(-32.8vw); */

		color: #ffffff91;
		padding: 0px 40px;
		flex-direction: column;
		background: hsl(221, 83%, 33%);
		background: linear-gradient(to bottom, #060a0f, 80%, #131b2b);
		align-items: center;
		height: 40vh;
		justify-content: center;
		width: fit-content;
		letter-spacing: 0.8px;
		line-height: 1.4;
		/* width: 36vw; */
		transition: all 1.5s;
	}
	.di-verty {
		height: 0.25vh;
		/* transform: translateX(70px); */
		width: 90vw;
		z-index: 999;
		display: flex;
		align-items: start;
		justify-content: center;
		background-size: 500% auto;
		background-image: linear-gradient(to right, #0c121d, 40%, #e8ff52, #41ff54, #a955f7);
		animation: textShine 5s ease-in-out infinite alternate;
		/* background: red; */
		/* padding: 20px 100px; */
	}
	.details-vert p {
		margin: 0.5rem 0;
	}
	.details-vert {
		/* transform: translateX(-350px); */
		color: #ffffff91;
		border-radius: 10px 10px 0px 0px;
		display: flex;
		letter-spacing: 0.8px;
		line-height: 1.4;
		/* letter-spacing: 0.5px; */
		/* position: absolute; */
		z-index: 22;
		/* transform: translateX(-32.8vw); */

		padding: calc(20px + 1vh);
		flex-direction: column;
		background: linear-gradient(to bottom, #131b2b, 20%, #060a0f);
		/* background: #2036a1; */
		/* background: #131b2b; */
		align-items: start;
		/* height: 40vh; */
		height: fit-content;
		justify-content: center;
		/* border: 1px solid green; */
		/* border: 1px solid lightseagreen; */
		width: 90vw;
		transition: all 1.5s;
	}

	.di-wrapper {
		background: rgb(6, 10, 15);
		/* background: green; */
		/* background: #ccc; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: fit-content; */
		height: 40vh;
	}
	.di-wrapper-vert {
		background: rgb(6, 10, 15);
		background: black;
		/* background: green; */
		/* background: #ccc; */
		border: 1px solid pink;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: fit-content; */
		height: 20vh;
	}

	.ijmage {
		display: flex;
		/* border: 1px solid #a855f7; */
		/* border: 1px solid #a855f7; */
		border-right: none;
		width: 35vw;
		width: fit-content;
		/* border-width: 10px; */
		border-radius: 0px 10px 0px 10px;
		height: fit-content;
		/* transform: translateX(-350px); */
		/* opacity: 0.1; */
		transition: all 2s;
	}
	.image {
		display: flex;
		/* border: 1px solid #16491e; */
		/* border: 1px solid #16491e; */
		width: 35vw;
		width: 100vw;
		width: 90vw;
		/* padding: 0 40px; */
		/* border-width: 10px; */
		border-radius: 0px 0px 10px 10px;
		/* height: 40vh; */
		height: fit-content;
		/* transform: translateY(-10vh); */
		/* opacity: 0.1; */
		transition: all 2s;
		display: flex;
		/* border: 1px solid #a855f7; */
		/* border-right: none; */
		/* width: 35vw; */
		/* width: fit-content; */
		/* border-width: 10px; */
		border-radius: 0px 0px 10px 10px;
		/* transform: translateX(-350px); */
		/* opacity: 0.1; */
		transition: all 2s;
	}

	/* .image:hover {
		transform: translateX(-0vw);
		opacity: 1;

		transition: all 1s;
	} */
	.img-tag {
		display: flex;
		border: 1px solid #a855f7;
		border-right: none;
		width: 35vw;
		width: fit-content;
		/* border-width: 10px; */
		border-radius: 10px 0px 0px 10px;
		height: 40vh;
		/* transform: translateX(-350px); */
		/* opacity: 0.1; */
		transition: all 2s;
		/* transition: border-width 1s linear; */
	}
	.img-tag-2 {
		border: 1px solid #a855f7;
		border-left: none;
		width: 35vw;
		/* border-width: 10px; */
		border-radius: 0px 10px 10px 0px;
		width: fit-content;
		height: 40vh;
		/* transform: translateX(-350px); */
		/* opacity: 0.1; */
		transition: all 2s;
		/* transition: border-width 1s linear; */
	}
	/* img:hover {
		transform: translateX(350px);
		opacity: 1;
		transition: all 2s;
	} */
	main {
		display: flex;
		align-items: center;
		justify-content: start;
		position: relative;
		/* height: fit-content; */
		height: max-content;
		font-size: calc(10px + 0.390625vw);
		padding: 0;
		width: 100vw;
		/* flex-wrap: wrap; */
		flex-direction: column;
		margin: 5rem 0;
		/* margin: 0; */
		overflow-x: hidden;
		overflow-y: hidden;
		/* width: fit-content; */
		/* border-radius: 10px; */
		/* border: 1px solid red; */
		transition: all 1.5s;
	}
	main {
		display: flex;
		align-items: center;
		justify-content: start;
		position: relative;
		height: fit-content;
		/* height: 90vh; */
		font-size: calc(10px + 0.390625vw);
		padding: 0;
		width: 100vw;
		/* flex-wrap: nowrap; */
		/* flex-wrap: wrap; */
		flex-direction: row;
		margin: 5rem 0;
		/* margin: 0; */
		overflow-x: hidden;
		overflow-y: hidden;
		/* width: fit-content; */
		/* border-radius: 10px; */
		/* border: 2px solid red; */
		transition: all 1.5s;
	}

	.feature-details-span {
		color: transparent; /* Make text transparent */

		background-image: linear-gradient(
			to right,
			#a955f7,
			#e8ff52,
			#41ff54,
			hsl(221, 83%, 33%)
		); /* background-image: linear-gradient(to right, #2563eb, #161418); */
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		/* text-fill-color: transparent; */
		background-size: 500% auto;
		animation: textShine 5s ease-in-out infinite alternate;
	}
	@keyframes textShine {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
	div.green {
		height: 100vh;
		width: 40vw;
		background: green;
		transition: all 2s;
	}
	.details:hover ~ img {
		width: 20px;
	}
	div.red {
		height: 100vh;
		width: 40vw;
		/* margin-top: 6rem !important; */
		background: red;
		/* transform: translateY(280px); */
	}
	div.blue {
		height: 100vh;
		width: 40vw;
		background: blue;
	}
	div.blue {
		height: 100vh;
		width: 40vw;
		background: pink;
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		main {
			background: rgba(90, 126, 13, 0.753) !important;
			/* overflow: visible; */
			/* width: 100vh; */
			height: 80vh;
		}
		.details-vert {
		}
		/* .di,
		.di-2,
		.di-wrapper {
			height: 0;
			width: 0;
		} */
		.img-tag-2 {
			/* transform: translateX(-77px); */
		}
		.di-verty {
			width: 55.53vw;
		}
		.image {
			width: 55.53vw;
		}
		.details-vert {
			width: 55.53vw;
			/* z-index: 999999; */
			padding: 30px 10px;
		}

		.details-vert-2 {
			width: 60vw;
			/* transform: translateX(-3vw); */
			/* z-index: 999999; */
			/* overflow: scroll; */
			padding: 30px 10px;
		}
		.img-tag,
		.img-tag-2 {
			width: fit-content;
		}

		.details:hover .img-tag {
			/* width: 49vw !important; */
			height: 30px !important;
		}
		.details:hover + .img-tag {
			/* width: 49vw !important; */
			height: 30px !important;
		}
		.details:hover ~ .img-tag {
			/* width: 49vw !important; */
			height: 30px !important;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		main {
			/* display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			flex-direction: row !important;
			border: 1px solid pink !important;
			*/
			background: rgba(255, 0, 238, 0.187) !important;
		}
		.details,
		.details-2 {
			padding: 30px 10px;
			width: 40vw;
		}

		h1 {
			/* background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd); */
			/* Gradient colors */
			/* background-image: linear-gradient(45deg, #662d8c, #ed1e79, #038f9a); */
			color: #333637; /* Make text transparent */
			color: white; /* Make text transparent */
			-webkit-background-clip: text; /* Clip the background to the text */
			background-clip: text;
			font-size: 2.5rem;
		}
		/* h2 {
			padding: 0 80px;
			text-align: center;
			color: #b0b3b6;
			font-weight: 400;
			margin-bottom: 1rem;
			font-size: 1rem;
			letter-spacing: 1px;
		} */
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		main {
			background: #f8536f3a !important;
		}
		.details,
		.details-2 {
			width: 32vw;
		}
		/* h2 {
		width: 50vw;
		padding: 0 20px;
		text-align: start;
		margin: 0;
	} */
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		main {
			/* background: rgba(0, 0, 255, 0.464) !important; */
			background: rgba(0, 0, 255, 0) !important;
		}
		.details,
		.details-2 {
			width: 32vw;
		}
		.details-2 {
			align-items: start;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		main {
			background: green !important;
		}
		.details-2 {
			align-items: start;
		}
	}
</style>
