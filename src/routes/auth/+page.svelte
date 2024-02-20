<script>
	import { page, navigating } from '$app/stores';

	// import { logo } from '$lib/stores';
	// import { FrownIcon, SmileIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	// import type { ActionData } from './$types';
	import Forgot from './Forgot.svelte';
	import Invite from './Invite.svelte';
	import Reset from './Reset.svelte';
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';
	console.log($page);
	export let form;
	// const to: string | null = $page.url.searchParams.get('to');

	let view = 'signin';

	$: {
		if ($page.url.searchParams.has('signin')) {
			view = 'signin';
		}
		if ($page.url.searchParams.has('signup')) {
			view = 'signup';
		}
		if ($page.url.searchParams.has('invite')) {
			view = 'invite';
		}
		if ($page.url.searchParams.has('forgot')) {
			view = 'forgot';
		}
		if ($page.url.searchParams.has('reset')) {
			view = 'reset';
		}
	}
</script>

<!-- // src/routes/auth/+page.svelte -->
<!-- <script>
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email;
	let password;

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script> -->

<div in:fade class="auth-ui">
	<!-- <div class="progress-loader">
		
	</div> -->

	<div>
		<div>
			<div>
				<!-- {#if $logo} -->
				<!-- <img class="mx-10 mt-10" alt="logo" /> -->
				<!-- {/if} -->

				{#if view == 'signin'}
					<SignIn {form} />
				{:else if view == 'signup'}
					<SignUp {form} />
				{:else if view == 'invite'}
					<Invite {form} />
				{:else if view == 'forgot'}
					<Forgot {form} />
				{:else if view == 'reset'}
					<Reset />
				{/if}
				<div class="mes-cont">
					{#if $navigating}
						<!-- navigating to {$navigating.to.url.pathname} -->
						<div class="progress" />
					{/if}
				</div>

				<div class="mes-cont">
					{#if form?.error}
						<!-- <div in:fade class="alert-error">
						<div> -->
						<!-- <FrownIcon /> -->
						<p in:fade class="alert-error">{form?.error}</p>
						<!-- </div>
					</div> -->
					{/if}

					{#if form?.message}
						<!-- <div in:fade class="alert-success">
						<div> -->
						<!-- <SmileIcon /> -->
						<p in:fade class="alert-success">{form?.message}</p>
						<!-- </div>
					</div> -->
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* .alert-error {
		display: flex;
		align-items: center;
		width: 38vw !important;
		justify-content: center;
		transform: translateY(-80px);
	} */
	/* .auth-ui {
		width: 38vw !important;
		display: flex;
		background: red;
		align-items: center;
		justify-content: center;
	} */
	.alert-success {
		background: hsla(117, 100%, 85%, 1);
		color: hsla(101, 100%, 25%, 1);
		font-weight: 500;
		border-radius: 5px;
		display: flex;
		/* width: fit-content !important; */
		width: fit-content;
		padding: 10px 10px;
		/* position: absolute; */
		border: none;
		/* bottom: 40px; */
		/* margin: 0 9.1rem; */
		/* margin: 0 8.9rem; */
		/* left: 5px; */
		align-items: center;
		justify-content: center;
		text-align: center;
		/* transform: translateY(-180px); */

		transition: all ease-in-out 0.2s;
	}
	.alert-error {
		background: hsla(0, 100%, 85%, 1);
		color: hsla(0, 100%, 35%, 1);
		font-weight: 500;
		border-radius: 5px;
		display: flex;
		/* width: fit-content !important; */
		/* width: fit-content; */
		padding: 10px 10px;
		/* position: absolute; */
		border: none;
		/* bottom: 40px; */
		/* margin: 0 9.1rem; */
		/* margin: 0 8.9rem; */
		/* left: 5px; */
		align-items: center;
		justify-content: center;
		text-align: center;
		/* transform: translateY(-80px); */

		transition: all ease-in-out 0.2s;
	}

	.mes-cont {
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: red !important; */
		transform: translateY(-80px);
		width: 38vw;
	}

	.progress {
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
		width: 36vw;
		height: 10px;
		border-radius: 16px;
		/* margin: 0 auto; */
		color: #474bff;
		/* border: 0.1px solid; */
		transform: translateY(-640px);
		/* position: relative; */
	}

	.progress::before {
		/* display: flex;
		align-items: center;
		justify-content: center; */
		content: '';
		position: absolute;
		margin: 1px;
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
