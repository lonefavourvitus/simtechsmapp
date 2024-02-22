<script>
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	let variableValue = 1;
	$: src = `assets/images/heroproductshots/ps${variableValue}.png`;
	const interval = setInterval(() => {
		// console.log(`Variable Value: ${variableValue}`);
		src = `assets/images/heroproductshots/ps${variableValue}.png`;
		// console.log(src);

		// Increment the variable
		variableValue++;

		// Check if the variable has reached the target value
		if (variableValue > 13) {
			// console.log('Variable reached the target value of 10.');
			// clearInterval(interval); // Stop the interval
			variableValue = 1;
		}
	}, 3000); // Interval set to 200 milliseconds
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
	height="60vh"
	width="100vw"
	viewBox="220 0 1610 1000"
	xml:space="preserve"
>
	<desc>Created with Fabric.js 3.5.0</desc>
	<defs />
	<rect x="0" y="0" fill="blue" />
	<g transform="matrix(0.7344 0 0 0.7344 959.9473 524.9712)" id="49633">
		<g style="">
			<g transform="matrix(1 0 0 1 0 430.83)" id="984263">
				<image
					style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
					xlink:href="https://cdn.pixelied.com/mockups-v2/005a9509-f298-4fde-a7de-b1198187d315/shadow.png"
					x="-1307"
					y="-284"
				/>
			</g>
			<g transform="matrix(1 0 0 1 82 -100.33)" id="283299">
				<image
					style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
					xlink:href="https://cdn.pixelied.com/mockups-v2/005a9509-f298-4fde-a7de-b1198187d315/mainbase.png"
					x="-960"
					y="-614.5"
				/>
			</g>
		</g>
	</g>
	<g transform="matrix(1 0 0 1 9600.5 5250.5)">
		<rect
			style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: url(#SVGID_19); fill-rule: nonzero; opacity: 0.5;"
			x="-960"
			y="-525"
			rx="0"
			ry="0"
		/>
	</g>
	<foreignObject x="0" y="0">
		<!--
		  In the context of SVG embedded in an HTML document, the XHTML
		  namespace could be omitted, but it is mandatory in the
		  context of an SVG document
		-->
		<div transition:fade xmlns="http://www.w3.org/1999/xhtml">
			<!-- {#key variableValue} -->
			<img transition:fade {src} alt="lappy" />
			<!-- {/key} -->
		</div>
	</foreignObject>
</svg>

<!-- <div>hiiiiii</div> -->
<style>
	div {
		border-radius: 10px !important;
	}
	img {
		border-radius: 10px !important;
		width: 100%;
	}
	foreignObject {
		background: hsl(210, 45%, 4%);
		border-radius: 10px !important;
		transform: translate(535px, 51px);
		height: 60%;
		width: 60%;
	}
	svg {
		display: flex;
		border-radius: 5px !important;
		/* transform: translateX(-90px); */
		/* background: green; */
		/* transform: translateY(-90px); */
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		svg {
			transform: translate(-20px, 170px);
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		main {
			background: green;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		main {
			background: green;
		}
	}
</style>
