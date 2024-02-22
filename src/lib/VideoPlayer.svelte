<script>
	// @ts-nocheck

	// These values are bound to properties of the video
	let time = 0;
	let duration;
	let paused = true;
	let volume = 1; // Initial volume value set to 1 (max volume)
	let isFullscreen = false; // Initial fullscreen state set to false

	let showControls = true;
	let showControlsTimeout;

	// Used to track time of last mouse down event
	let lastMouseDown;

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

	// Function to toggle fullscreen
	function toggleFullscreen() {
		if (isFullscreen) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		} else {
			const videoElement = document.querySelector('video');
			if (videoElement.requestFullscreen) {
				videoElement.requestFullscreen();
			} else if (videoElement.mozRequestFullScreen) {
				videoElement.mozRequestFullScreen();
			} else if (videoElement.webkitRequestFullscreen) {
				videoElement.webkitRequestFullscreen();
			} else if (videoElement.msRequestFullscreen) {
				videoElement.msRequestFullscreen();
			}
		}

		isFullscreen = !isFullscreen;
	}
</script>

<div class="wrapper">
	<video
		poster="assets/images/heroproductshots/ps1.png"
		src="assets/images/v.mp4"
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		bind:currentTime={time}
		bind:duration
		bind:paused
		bind:volume
	>
		<track kind="captions" />
	</video>

	<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value={time / duration || 0} />

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>Click anywhere to {paused ? 'play' : 'pause'} / Drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
		<!-- Volume Control -->
		<!-- <input
			type="range"
			min="0"
			max="1"
			step="0.01"
			value={volume}
			on:input={() => (showControls = true)}
		/> -->
		<!-- Fullscreen Toggle Button -->
		<!-- <button on:click={toggleFullscreen}>
			{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
		</button> -->
	</div>
</div>

<style>
	.wrapper {
		/* width: 50vw !important; */
	}
	/* div {
		position: relative;
	} */

	.controls {
		/* position: absolute; */
		transform: translateY(-28px);
		font-size: 0.5rem;
		background: hsl(210, 45%, 4%);
		top: 0;
		/* width: 100%; */
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		padding-top: 2px;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: hsl(210, 45%, 30%);
		/* text-shadow: 0 0 8px black; */
		font-size: 0.5rem;
		opacity: 1;
	}

	.time {
		width: 3em;
	}

	.time:last-child {
		text-align: right;
	}

	progress {
		display: block;
		width: 100%;
		height: 2px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(128, 128, 128, 0.12);
	}

	progress::-webkit-progress-value {
		background-image: linear-gradient(45deg, #a94919 23%, #038f9a 54%, #54b3dd);
	}

	video {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
