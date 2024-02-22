<script>
	// import { supabase } from '$lib/supabaseClient';
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { page, navigating } from '$app/stores';
	import DrugList from '$lib/DrugList.svelte';
	import NewUserWelcomeDisplayBoard from '$lib/NewUserWelcomeDisplayBoard.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import UserProfileComp from '$lib/UserProfileComp.svelte';
	import NavBarCont from '$lib/NavBarCont.svelte';
	import RealTime from '$lib/RealTime.svelte';
	import {
		drugStore,
		drugProperties,
		drugShtore,
		sessionUserId,
		sumView,
		whyUsToggler,
		aboutUsToggler,
		sess
	} from '../../stores';
	import DrugsInputForm from '$lib/DrugsInputForm.svelte';
	import Switch from '$lib/Switch.svelte';
	import ToolTip from '$lib/ToolTip.svelte';
	import LoadingButton from '$lib/LoadingButton.svelte';
	import UserIcon from '/src/icons/UserIcon.svelte';
	import NewDrugInput from '$lib/NewDrugInput.svelte';
	import FormBtn from '$lib/FormBtn.svelte';
	import UserDisplay from '$lib/UserDisplay.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
	import MakeShiftModalComp from '$lib/MakeShiftModalComp.svelte';
	import { scrollBehaviourProperty } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	import SettingsIcon from '/src/icons/SettingsIcon.svelte';
	import AngleIcon from '/src/icons/Angle.svelte';
	import {
		doubleLinerValue,
		menuCompDarkProps,
		isExpandedForAddNewDrugForm,
		isExpandedForGlossary
	} from '../../stores';
	import Glossary from '$lib/Glossary.svelte';
	import ButtonRev from '$lib/ButtonRev.svelte';
	import MenuHoverSysComp from '$lib/MenuHoverSysComp.svelte';
	import { onMount } from 'svelte';

	console.log($page);

	function toggleWhyUs() {
		console.log('oooo');
	}
	function toggleAboutUs() {
		$whyUsToggler = false;
		$aboutUsToggler = !$aboutUsToggler;
	}

	export let data;

	let loading = true;
	let hh = 'On';
	let mm = 'terent';
	let cc = 'Single Line';
	$sess = data.session;
	console.log($sess);
	$sessionUserId = data.session.user.id;
	console.log($sessionUserId);
	let smoothScrollToggler = () => (
		(scrollBehaviourProperty.behavior =
			scrollBehaviourProperty.behavior === 'smooth' ? 'auto' : 'smooth'),
		hh === 'On' ? (hh = 'Off') : (hh = 'On'),
		console.log('The button has been set to', hh)
	);
	function toggleGlossaryModal() {
		$isExpandedForGlossary = !$isExpandedForGlossary;
		console.log($isExpandedForGlossary);
	}
	function nicey() {
		$doubleLinerValue === 15.3 + 'rem'
			? (($doubleLinerValue = 'max-content'), console.log($doubleLinerValue), (cc = 'Single Line'))
			: (($doubleLinerValue = 15.3 + 'rem'), console.log($doubleLinerValue), (cc = 'Break Line'));
		console.log($doubleLinerValue);
	}
	function toggleAddnewdrugbrandFormModal() {
		$isExpandedForAddNewDrugForm = !$isExpandedForAddNewDrugForm;
	}
	let disabled = false;
	let bb = data.session.user.id;
	console.log(data.session);
	console.log(data);

	let text = 'Close sales';

	let isLoadingForProfile;
	let isLoadingForSignOut;
	let isReloading = false;

	console.log($navigating);
	// isLoading = false;
	let signoutFormAction = '/auth?/signout';

	let isloaded = false;
	// sss();
	onMount(() => {
		isloaded = true;
	});
	let onClick = () => {};
	function vvv() {
		location.reload(true);

		console.log('working?');
	}
	let switchValue;
	let sliderValue;
	function toggleView() {
		$sumView = !$sumView;
	}
	function po() {
		console.log('porent');
	}
	let namey = data.profile?.username ?? 'Newbie';
</script>

<div class="mainy" transition:fade>
	<div class="menu" transition:fade>
		{#if $navigating}
			<div class="progress-bar" />
		{/if}

		<NavBarCont>
			<DrugsInputForm {bb} />
			<div transition:fade class="divider" />

			<FormBtn {isLoadingForSignOut} action="/auth?/signout" method="POST" buttonText="sign out" />

			<MakeShiftModalComp
				tooltip={"When you refer a friend(i.e tell a friend about this application) and get him/her to start making use of it, we reward you with money. But for the mean time, this feature is still in active developement, we will let you know once it's ready for usage, Thank You!"}
				isCentered="true"
			>
				<ButtonWithIcon
					class="user-btn"
					text="Refer"
					btnType="mockBtn"
					icon=""
					disabled={false}
					on:focus
					on:blur
				/>
			</MakeShiftModalComp>
			<MenuHoverSysComp menuText="Data management">
				<div class="user-class">
					<ButtonWithIcon
						btnType="mockBtn"
						class="user-btn"
						on:focus
						on:blur
						text="Reload sales"
						icon=""
						disabled={false}
						sss={vvv}
					/>
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						btnType="mockBtn"
						type="secLoadUntillGoal"
						text="View previous sales"
						href="/view-previous-sales-page-redirect"
						icon=""
						disabled={false}
					/>
					<ButtonWithIcon
						class="user-btn"
						on:focus
						btnType="mockBtn"
						on:blur
						text="Add new drug brand"
						icon=""
						disabled={false}
						onClick={toggleAddnewdrugbrandFormModal}
					/>
				</div>
			</MenuHoverSysComp>
			<MenuHoverSysComp menuText="Resources and support">
				<div class="user-class">
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="About Us"
						icon=""
						btnType="mockBtn"
						disabled={false}
						btnFunc={toggleAboutUs}
					/>

					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="Why CDR?"
						icon=""
						btnType="mockBtn"
						disabled={false}
						a={() => {
							$aboutUsToggler = false;
							$whyUsToggler = !$whyUsToggler;
							console.log('yay');
						}}
					/>

					<MakeShiftModalComp
						tooltip={'Hello, Our docs and guide are still in active developement, we will make it available to you as soon as it is ready for using. In the mean time, If You are stuck somewhere, you can request for technical assistance through our help line (08125450505), we typically respond within two minutes. Thank you for understanding!'}
					>
						<ButtonWithIcon
							btnType="mockBtn"
							class="user-btn"
							on:focus
							on:blur
							text="Docs"
							icon=""
							disabled={false}
						/>
					</MakeShiftModalComp>
					<ButtonWithIcon
						class="user-btn"
						btnType="mockBtn"
						on:focus
						on:blur
						text="Glossary"
						icon=""
						disabled={false}
						onClick={toggleGlossaryModal}
					/>

					<!-- </ToolTip> -->
				</div>
			</MenuHoverSysComp>
			<div class="divider" />
			<RealTime />
			<UserDisplay {namey} />
			<UserIcon>
				<!-- <form action="/account?/signout" method="POST"> -->
				<div class="prof-signout">
					<LoadingButton {isLoadingForProfile} href="/account" buttonText="" linkAtt="profile" />

					<FormBtn
						{isLoadingForSignOut}
						action="/auth?/signout"
						method="POST"
						buttonText="sign out"
					/>
				</div>
				<div class="divider-hor" />
				<ThemeToggler />
				<div class="divider-hor" />

				<Switch
					bind:value={sliderValue}
					label="Enable smooth scroll"
					fontSize={13}
					design="slider"
					func={smoothScrollToggler}
				/>
				<Switch
					bind:value={sliderValue}
					label="Break unit line"
					fontSize={13}
					design="slider"
					func={nicey}
				/>
				<Switch
					bind:value={sliderValue}
					label="Enable tabular view"
					fontSize={13}
					design="slider"
					func={toggleView}
				/>
			</UserIcon>
		</NavBarCont>
		<!-- <div class="yy">yuppp</div> -->
	</div>

	{#if isloaded}
		<div class="drug-list" transition:fade>
			<DrugList {namey} />
		</div>
	{:else}
		<main>
			<div class:loading transition:fade>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<p class="sales">A little patience while we load your sales...</p>
		</main>
	{/if}
	<!-- <div>yuppp</div> -->

	<main transition:slide class="gloss">
		<Glossary />
	</main>
	{#if $aboutUsToggler || $whyUsToggler}
		<div
			class="new-user-display-board"
			in:fly={{ y: 50, duration: 500 }}
			out:fly={{ y: -50, duration: 500 }}
		>
			<NewUserWelcomeDisplayBoard />
		</div>
	{/if}
</div>

<style>
	* {
		padding: 0;
	}
	.drug-list {
		animation: loading-fzua35 0.7s alternate-reverse infinite ease-in-out;
	}
	@keyframes loading-fzua35 {
		0% {
			height: 10%;
		}
		50% {
			height: 50%;
		}
		100% {
			height: 100%;
		}
	}

	.new-user-display-board {
		height: 92vh;
		position: absolute;
		/* width: 100vw; */
		border-radius: 5px;
		overflow: scroll;
		z-index: 99999991 !important;
		top: 57px;
		right: 39rem;
		box-shadow: 0 0 0px 2000px rgba(0, 0, 0, 0.523);
		/* right: -499px; */
		/* transform: translateY(-15rem); */
	}

	.gloss {
		display: flex;

		transform: translateY(25vh);
		position: fixed;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	.prof-signout {
		display: flex;
		align-items: center;
		justify-content: space-between !important;
		flex-direction: row;
	}
	.divider {
		width: 0px;
		height: 3.5rem;
		border-right: #016968 3px solid;
	}
	.divider-hor {
		width: 100%;
		margin: 0.5rem 0;
		border-top: #016968 3px solid;
	}

	.user-class:first-child {
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
	}
	:global(.no-data-class) {
		width: 50% !important;
		display: flex;
		align-self: center;
		justify-content: center;
	}
	:global(.no-data-class p) {
		text-align: center;
	}

	:global(.no-data-class p:first-of-type) {
		text-align: center;
		color: hsla(200, 50%, 85%, 1);
		text-decoration: underline;
		text-decoration-thickness: 1.8px;
	}
	:global(.navbar-cont) {
		display: flex;
		align-items: center;
		background: red !important;
		justify-content: center;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	.mainy {
		width: fit-content !important;
		transition: all ease-in-out 0.2s;
	}

	.menu {
		display: flex;
		position: fixed;
		z-index: 9999999;
	}

	.loading {
		display: flex;
		align-items: center;

		justify-content: center;
	}

	.loading div {
		position: absolute;
		width: 0.5rem;
		border-radius: 10px;
		height: 2rem;
		background: hsla(222, 50%, 80%, 1);
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
	p {
		display: flex;
		align-items: center;
		justify-content: center;

		transform: translateY(14vh);
		font-size: 1rem;
		letter-spacing: 1px;
		color: hsla(222, 50%, 80%, 1);
	}

	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
		transform: translateY(49vh);
	}

	@keyframes progress-pf82op {
		100% {
			inset: 0;
		}
	}

	.progress-bar {
		background-color: #474bff;
		background: linear-gradient(to right, #ff6600, #ffcc00, #00cc66);

		height: 0.5vh;
		position: fixed;
		border-radius: 10px;
		top: 0;
		animation: progressAnimation 1s infinite alternate-reverse;
	}

	@keyframes progressAnimation {
		0% {
			width: 0;
		}
		100% {
			width: 100vw;
		}
	}
</style>
