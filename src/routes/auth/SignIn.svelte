<script>
	import { enhance } from '$app/forms';
	// import { PUBLIC_DEMO_MODE } from '$env/static/public';
	// import type { ActionData } from './$types';
	import TextSwapper from '$lib/TextSwapper.svelte';
	import SpinningLoader from '$lib/SpinningLoader.svelte';
	console.log(enhance);
	export let form;
	let loading = false;
	let disabled = false;
</script>

<main>
	<div class="login-section">
		<div class="welcome">
			<h1>Welcome Back</h1>
			<h2>Sign in to your account</h2>
		</div>
		<div class="login">
			<button>Continue with Gmail</button>

			<p class="or">or</p>

			<form
				class="form"
				method="POST"
				action="/auth?/signin"
				use:enhance={() => {
					loading = true;
					return async ({ result, update }) => {
						update();
						if (result.type == 'failure') {
							loading = false;
						}
					};
				}}
			>
				<label for="email">Email</label>
				<input
					autocomplete="username"
					id="email"
					name="email"
					value={form?.values?.email ?? ''}
					class="input text-center"
					type="email"
					placeholder="email"
					required
				/>

				<div class="pass-label">
					<label for="password">Password</label>
					<a href="?forgot">Forgot Password?</a>
				</div>

				<input
					autocomplete="current-password"
					id="password"
					name="password"
					class="input text-center mt-2"
					type="password"
					placeholder="password"
					required
				/>
				<SpinningLoader class={disabled ? 'disabled' : ''} btnText="Sign In" {disabled} {loading} />
				<!-- <SpinningLoader btnText="Sign In" {disabled} {loading} />
				<SpinningLoader btnText="Sign In" {disabled} {loading} /> -->
			</form>
			<div class="sign-up-section">
				<p>Don't have an account?</p>
				<div class="loading" />
				<a href="?signup">Sign Up Now</a>
			</div>
		</div>
	</div>
	<div class="testimonial-section">
		<div class="context">
			<h1>Record and manage sales effortlessly:</h1>
			<div class="text-swapper">
				<TextSwapper />
			</div>
		</div>

		<ul class="circles">
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
		</ul>
	</div>
</main>

<style>
	:global(.disabled) {
		background: red;
	}
	.text-swapper {
		margin-top: -13rem;
		transform: translateY(-112px);
	}
	main {
		display: flex;
		width: 100vw;
		height: 100vh;
		/* align-items: center; */
		justify-content: center;
	}
	.login {
		display: flex;
		height: 100%;
		margin: 4rem;
		width: 70%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.or {
		background-color: hsl(222, 75%, 30%);
		padding: 5px 10px;
		color: beige;
		/* flex-direction: row;
		align-items: center; */
		width: auto;
		justify-content: center;
		border-radius: 40px;
	}
	.sign-up-section {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 5px;
		justify-content: center;
		flex-direction: row;
	}
	.sign-up-section p {
		display: flex;
		font-size: 0.8rem;
		max-width: max-content;
		align-items: center;
		justify-content: flex-end;
	}
	.sign-up-section a {
		display: flex;
		font-size: 0.8rem;
		max-width: max-content;
		align-items: start;
		justify-content: flex-start;
	}
	.pass-label {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.welcome {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 5rem;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 1rem 0;
	}
	input {
		background: hsla(222, 50%, 85%, 1);
		display: flex;
		padding: 10px;
		flex-direction: column;
		color: hsla(0, 0%, 25%, 1);
		margin: 0.4rem 0 1rem 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-radius: 5px;
		border: none;
	}

	.pass-label a {
		display: flex;
		align-items: end;
		margin: 0rem;
		padding: 0;
		flex-wrap: nowrap;
		max-width: max-content;
		justify-content: flex-start;
	}
	h2 {
		color: hsla(0, 0%, 25%, 1);
		font-size: 1rem;
	}
	label {
		display: flex;
		flex-direction: column;
		padding: unset;
		color: hsla(0, 0%, 25%, 1);
		margin: unset;
		align-items: start;
		justify-content: center;
		width: 100%;
	}
	p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: hsla(0, 0%, 25%, 1);
		width: 100%;
	}
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: hsla(222, 75%, 20%, 1);
		width: 100%;
		font-size: 0.8rem;
		text-decoration: none;
		border-bottom: 2px hsla(222, 75%, 70%, 1) solid;
		letter-spacing: 1px;
	}

	button:first-child {
		width: 100%;
		margin: 1rem 0;

		background: hsla(0, 93%, 59%, 1);
		padding: 10px;
		border: none;
		/* padding: 3px 3px;
		margin: 0 0.5rem; */
		letter-spacing: 0.5px;
		/* width: 75px; */
		/* width: max-content; */
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 100%, 1);
		font-weight: 600;
		margin-left: 1px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	button:last-child {
		width: 100%;
		margin: 1rem 0;

		background: hsla(222, 50%, 20%, 1);
		padding: 10px;
		border: none;
		/* padding: 3px 3px;
		margin: 0 0.5rem; */
		letter-spacing: 0.5px;
		/* width: 75px; */
		/* width: max-content; */
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 100%, 1);
		font-weight: 600;
		margin-left: 1px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	button:hover {
		background: hsla(222, 50%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}
	.login-section {
		background: hsla(200, 50%, 98%, 1);
		width: 38vw;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
	.testimonial-section {
		/* background: red; */
		width: 62vw;
	}
	.testimonial-section {
		/* background: red; */
		width: 62vw !important;
	}

	* {
		margin: 0px;
		padding: 0px;
	}

	body {
		font-family: 'Exo', sans-serif;
	}

	.context {
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 62vw !important;
		/* position: absolute; */
		/* top: 50vh; */
		height: 100vh;
	}

	.context h1 {
		text-align: center;
		margin-bottom: 10rem;
		color: #fff;
		font-size: 50px;
	}

	.area {
		background: hsla(222, 50%, 20%, 1);
		background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
		width: 62vw !important;
		/* height: 10vh !important; */
	}

	.circles {
		/* position: absolute; */
		/* top: 0; */
		/* left: 0; */
		width: 100vw !important;
		/* height: 1vh !important; */
		overflow: hidden;
	}

	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 50px;
		/* height: 50px !important; */
		background: rgba(255, 255, 255, 0.2);
		animation: animate 25s linear infinite;
		bottom: 0px;
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 10px;
		animation-delay: 3s;
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 90px;
		animation-delay: 7s;
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.circles li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.circles li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 90px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg) scale(0);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(723deg) scale(2);
			opacity: 0;
			border-radius: 50%;
		}
	}
	.loading {
		position: absolute;
		left: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loading div {
		position: absolute;
		width: 0.3rem;
		border-radius: 1px;
		height: 0.3rem;
		background: whitesmoke;
		transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
		animation: loading-fzua35 1s calc(var(--delay) * 1s) infinite ease;
	}

	.loading div:nth-child(1) {
		--delay: 0.1;
		--rotation: 36;
		--translation: 150;
	}

	.loading div:nth-child(2) {
		--delay: 0.2;
		--rotation: 72;
		--translation: 150;
	}

	.loading div:nth-child(3) {
		--delay: 0.3;
		--rotation: 108;
		--translation: 150;
	}

	.loading div:nth-child(4) {
		--delay: 0.4;
		--rotation: 144;
		--translation: 150;
	}

	.loading div:nth-child(5) {
		--delay: 0.5;
		--rotation: 180;
		--translation: 150;
	}

	.loading div:nth-child(6) {
		--delay: 0.6;

		--rotation: 216;
		--translation: 150;
	}

	.loading div:nth-child(7) {
		--delay: 0.7;
		--rotation: 252;
		--translation: 150;
	}

	.loading div:nth-child(8) {
		--delay: 0.8;
		--rotation: 288;
		--translation: 150;
	}

	.loading div:nth-child(9) {
		--delay: 0.9;
		--rotation: 324;
		--translation: 150;
		color: red !important;
	}

	.loading div:nth-child(10) {
		--delay: 1;
		--rotation: 360;
		--translation: 150;
	}

	@keyframes loading-fzua35 {
		0%,
		10%,
		20%,
		30%,
		50%,
		60%,
		70%,
		80%,
		90%,
		100% {
			transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
		}

		50% {
			transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
		}
	}

	.btn-cont {
		display: flex;
		width: 100%;
	}
</style>
