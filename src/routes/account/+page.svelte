<!-- src/routes/account/+page.svelte -->
<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import { page, navigating } from '$app/stores';

	export let data;
	export let form;

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm;
	let loading = false;
	let fullName = profile?.full_name ?? '';
	let username = profile?.username ?? '';

	let website = profile?.website ?? '';
	let avatarUrl = profile?.avatar_url ?? '';

	const handleSubmit = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<div class="form-widget">
	<div class="mes-cont">
		{#if $navigating}
			<!-- navigating to {$navigating.to.url.pathname} -->
			<div class="progress" />
		{/if}
	</div>
	<form
		class="form-widget m"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<!-- <div>
			<label for="website">Website</label>
			<input id="website" name="website" type="url" value={form?.website ?? website} />
		</div> -->

		<main class="btns">
			<input
				type="submit"
				class="button block primary"
				value={loading ? 'updating...' : 'update'}
				disabled={loading}
			/>

			<form method="post" action="?/signout" use:enhance={handleSignOut}>
				<button class="button block" disabled={loading}>sign out</button>
			</form>
		</main>
	</form>
</div>

<style>
	main {
		display: flex;
		/* width: 50vw; */
		width: fit-content;
		/* width: auto; */
		/* position: fixed; */
		/* left: 66px; */
		transition: all ease-in-out 0.2s;
	}
	label {
		margin: 0.5rem 0;
		display: flex;
		align-self: start;
		justify-content: center;
		color: hsla(222, 50%, 80%, 1);
		color: whitesmoke;
	}
	.input-group.submit-button {
		transform: translateX(-12px);
		transition: all ease-in-out 0.2s;
	}
	.message {
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		font-weight: 500;
		border-radius: 5px;
		display: flex;
		width: 23vw;
		padding: 4px 3.2px;
		position: absolute;
		border: none;
		display: flex;
		bottom: 40px;
		left: 5px;
		text-align: center;
		transition: all ease-in-out 0.2s;
	}
	.darkyMessage {
		color: hsla(0, 100%, 85%, 1);
		background: hsla(0, 100%, 10%, 1);
		transition: all ease-in-out 0.2s;
	}

	form {
		padding: 0;
		margin: 0;
		/* background-color: hsl(222, 75%, 30%); */
		width: fit-content;
		/* border-right: lightseagreen 3px solid; */

		transition: all ease-in-out 0.2s;
		display: flex;
	}
	input {
		width: fit-content;
		border: none;
		background: hsla(222, 50%, 90%, 1);
		padding: 10px;
		color: hsla(0, 0%, 20%, 1);
		color-scheme: dark;
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
	}
	.darkyInput {
		background: hsla(222, 50%, 40%, 1);
	}
	input:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyInput:hover {
		background: hsla(222, 50%, 50%, 1);
	}

	button:hover {
		background: hsla(222, 50%, 80%, 1);
		transition: all ease-in-out 0.2s;
	}
	p {
		padding: 10px;
		background: hsla(222, 50%, 85%, 1);
		transition: all ease-in-out 0.2s;
	}
	.input-group {
		display: flex;
		padding: 10px;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	.darkyButtonAndP {
		background: hsla(222, 50%, 45%, 1);
		transition: all ease-in-out 0.2s;
	}
	.darkyButtonAndP:hover:not(p) {
		background: hsla(222, 50%, 40%, 1);
		transition: all ease-in-out 0.2s;
	}
	.form-widget {
		display: flex;
		flex-direction: column;
		background: hsla(240, 29%, 3%, 1);
		width: 100vw;
		height: 100vh;
		align-items: center;
		justify-content: center;
	}

	div {
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		/* width: 100vw;
		height: 100vh; */
		align-items: center;
		justify-content: center;
	}
	.form-widget input[type='text'],
	.form-widget input[type='url'] {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
	}

	.form-widget input[type='text']:disabled {
		background-color: #f2f2f2;
	}

	.form-widget input[type='submit'],
	.form-widget button {
		/* width: fit-content; */
		/* padding: 10px; */
		border: none;
		border-radius: 4px;
		font-size: 16px;
		color: #fff;
		background-color: #007bff;
		cursor: pointer;
	}

	.form-widget input[type='submit']:disabled,
	.form-widget button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.form-widget .button.primary {
		background-color: #28a745;
	}

	.form-widget .button.block {
		/* display: flex;
		align-items: center; */
		/* width: 100%; */
	}
	button {
		/* width: 100%; */
		display: flex;
		padding: 0.58rem;
		align-items: center;
		justify-content: center;
	}
	.form-widget.m {
		display: flex;
		align-items: center;
		width: fit-content;
		justify-content: center;
	}
	.btns {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 1rem;
		width: 100%;
	}

	input {
		/* margin: 1rem; */
	}
	.mes-cont {
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: red !important; */
		/* transform: translateY(-80px); */
		width: 38vw;
	}

	.progress {
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
		width: 36vw;
		height: 10vh !important;
		border-radius: 16px;
		/* margin: 0 auto; */
		color: #474bff;
		/* color: red; */
		/* border: 0.1px solid; */
		/* transform: translateY(-640px); */
		/* position: relative; */
	}

	.progress::before {
		/* display: flex;
align-items: center;
justify-content: center; */
		content: '';
		position: absolute;
		margin: 1px;
		height: 1vh;
		inset: 0 100% 0 0;
		border-radius: inherit;
		background: currentColor;
		animation: progress-pf82op 1s infinite alternate-reverse;
	}

	@keyframes progress-pf82op {
		100% {
			inset: 0;
		}
	}
</style>
