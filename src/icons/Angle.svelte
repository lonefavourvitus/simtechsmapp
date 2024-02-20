<!-- <?xml version="1.0" encoding="utf-8"?> -->
<script>
	// import { iconRotationTrigger } from '../stores';
	import { fillColour, trigAngRotOnHover } from '../stores';
	let iconRotationTrigger = true;
	function toggleRotation() {
		iconRotationTrigger = !iconRotationTrigger;
	}
</script>

{#if iconRotationTrigger && $trigAngRotOnHover}
	<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
	<svg
		class="setting-close"
		width="800px"
		height="800px"
		viewBox="0 0 24 24"
		on:mouseover={toggleRotation}
		on:focus={toggleRotation}
		on:keydown={null}
		fill={$fillColour}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 14.5C11.9015 14.5005 11.8038 14.4813 11.7128 14.4435C11.6218 14.4057 11.5392 14.3501 11.47 14.28L8 10.78C7.90861 10.6391 7.86719 10.4715 7.88238 10.3042C7.89756 10.1369 7.96848 9.97954 8.08376 9.85735C8.19904 9.73515 8.352 9.65519 8.51814 9.63029C8.68428 9.6054 8.85396 9.63699 9 9.72003L12 12.72L15 9.72003C15.146 9.63699 15.3157 9.6054 15.4819 9.63029C15.648 9.65519 15.801 9.73515 15.9162 9.85735C16.0315 9.97954 16.1024 10.1369 16.1176 10.3042C16.1328 10.4715 16.0914 10.6391 16 10.78L12.5 14.28C12.3675 14.4144 12.1886 14.4931 12 14.5Z"
			fill={$fillColour}
		/>
	</svg>
{:else}
	<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
	<svg
		class="setting-open"
		width="800px"
		height="800px"
		on:mouseleave={toggleRotation}
		on:focus={toggleRotation}
		on:keydown={null}
		viewBox="0 0 24 24"
		fill={$fillColour}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 14.5C11.9015 14.5005 11.8038 14.4813 11.7128 14.4435C11.6218 14.4057 11.5392 14.3501 11.47 14.28L8 10.78C7.90861 10.6391 7.86719 10.4715 7.88238 10.3042C7.89756 10.1369 7.96848 9.97954 8.08376 9.85735C8.19904 9.73515 8.352 9.65519 8.51814 9.63029C8.68428 9.6054 8.85396 9.63699 9 9.72003L12 12.72L15 9.72003C15.146 9.63699 15.3157 9.6054 15.4819 9.63029C15.648 9.65519 15.801 9.73515 15.9162 9.85735C16.0315 9.97954 16.1024 10.1369 16.1176 10.3042C16.1328 10.4715 16.0914 10.6391 16 10.78L12.5 14.28C12.3675 14.4144 12.1886 14.4931 12 14.5Z"
			fill={$fillColour}
		/>
	</svg>{/if}

<style>
	svg {
		height: 1rem;
		width: 1rem;
	}
	.setting-open {
		animation: 0.7s rotate-for-open;
		transform: rotate(180deg);
	}

	@keyframes rotate-for-open {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(180deg);
		}
		/* 100% {
			transform: rotate(0);
		} */
	}
	.setting-close {
		animation: 0.7s rotate-for-close;
	}
	@keyframes rotate-for-close {
		from {
			transform: rotate(180deg);
		}

		to {
			transform: rotate(0deg);
		}
		/* 100% {
			transform: rotate(0);
		} */
	}
</style>
