<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
</script>

<main transition:slide>
	<slot
		><!-- optional fallback -->
		hi from navvy
	</slot>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: space-around;
		/* height: 5vh; */
		/* justify-content: space-between; */
		/* justify-content: space-evenly; */
		width: 100vw;
		background-color: hsl(222, 75%, 30%);
		background-color: #12181f;
	}
</style>
