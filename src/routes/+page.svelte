<script>
	// @ts-nocheck

	import HeroCont from '$lib/HeroCont.svelte';
	import FeaturesHeadie from '$lib/FeaturesHeadie.svelte';
	import DeskTop from '$lib/DeskTop.svelte';
	import FeaturesComp from '$lib/FeaturesComp.svelte';
	import CardOne from '$lib/CardOne.svelte';
	import CardHouse from '$lib/CardHouse.svelte';
	import Testimonials from '$lib/Testimonials.svelte';
	import IOWrapperComp from '$lib/IOWrapperComp.svelte';
	import MarqueeComp from '$lib/MarqueeComp.svelte';
	import MarqueeS from '$lib/MarqueeS.svelte';
	import Stats from '$lib/Stats.svelte';
</script>

<!-- <svelte:head /> -->
<a href="/auth" role="button" class="btn btn-sm btn-primary">Sign In</a>
<HeroCont />
<MarqueeComp />
<DeskTop />
<FeaturesHeadie featuresHeadie="firstFeatureSet" />
<FeaturesComp />
<FeaturesHeadie featuresHeadie="secondFeatureSet" />
<CardHouse num="one" />
<Testimonials />
<!-- <Stats /> -->
<CardHouse num="two" />

<!-- <IOWrapperComp><h1>jksjksdjksdjksdjkd</h1></IOWrapperComp> -->
<style>
	a {
		/* font-size: 3rem; */
		position: fixed;
		/* margin: 12rem !important; */
	}
	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		* {
			background: red;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		* {
			background: black;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		* {
			background: green;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		* {
			background: blue;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		* {
			background: pink;
		}
	}
</style>
