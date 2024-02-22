<script>
	// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import DrugListForP from '/src/routes/view-previous-sales-page-redirect/lib/DrugListForP.svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
	import NavBarCont from '$lib/NavBarCont.svelte';
	import RealTime from '$lib/RealTime.svelte';
	import { test, ini } from '../../stores';
	import { page, navigating } from '$app/stores';
	import InputFieldForFilterVariables from '$lib/InputFieldForFilterVariables.svelte';
	import Switch from '$lib/Switch.svelte';
	import LoadingButton from '$lib/LoadingButton.svelte';
	import UserIcon from '/src/icons/UserIcon.svelte';
	import FormBtn from '$lib/FormBtn.svelte';
	import UserDisplay from '$lib/UserDisplay.svelte';
	import ThemeToggler from '$lib/ThemeToggler.svelte';
	import MakeShiftModalComp from '$lib/MakeShiftModalComp.svelte';
	import { scrollBehaviourProperty } from '/src/functions/nodeUnitFuncForLump_F.svelte';
	import { doubleLinerValue, filteredStore, filterPar, isExpandedForGlossary } from '../../stores';
	import Glossary from '$lib/Glossary.svelte';
	import MenuHoverSysComp from '$lib/MenuHoverSysComp.svelte';
	import { onMount } from 'svelte';
	console.log($page);
	// export let transformedData;hhh
	export let data;
	// let emptySalesArrayVPS = $filteredStore.emptySalesArray;
	console.log(data);
	// let filteredData = [];
	$filteredStore = data;
	let emptySalesArrayVPS = $filteredStore.emptySalesArray;

	console.log($filteredStore);

	let loading = true;
	let hh = 'On';

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

	console.log(data);

	let isLoadingForProfile;
	let isLoadingForSignOut;

	console.log($navigating);

	function handleClick() {
		console.log('btn clicked'); // $pp = !$pp;
	}
	let isloaded = false;
	onMount(() => {
		isloaded = true;
	});

	function toggleInputFieldAndSetFilterTypeToBrand() {
		$filterPar = 'brand';

		// $ini = true;
	}
	function toggleInputFieldAndSetFilterTypeToDate() {
		$filterPar = 'date';

		// $ini = !$ini;
	}
	function toggleInputFieldAndSetFilterTypeToStock() {
		$filterPar = 'stock';

		// $ini = !$ini;
	}

	let sliderValue;
	// let btnType = 'filterBtns';
	let namey = data.profile?.username ?? 'Newbie';
	// let username = profile?.username ?? '';
	// form?.username ?? username
</script>

<!-- <script>
	import DrugListForP from '/src/routes/view-previous-sales-page-redirect/lib/DrugListForP.svelte';
	import DrugsInputFormForPrevData from '/src/routes/view-previous-sales-page-redirect/lib/DrugsInputFormForPrevData.svelte';
	// import { mainBgDarkProp } from '../../stores';
	// import Glossary from '$lib/Glossary.svelte';
	export let data;
	console.log(data);
</script>

 <main class:darkyMain={$mainBgDarkProp.darkyMain}> -->
<!-- <div class="mainy"> -->
<!-- <div class="menu"> -->
<!-- <DrugsInputFormForPrevData /> -->
<!-- {#each data.transformedData as item}
			<h1>{item[0]}</h1>
		{/each} -->
<!-- </div> -->

<!-- <Glossary /> -->
<!-- <DrugListForP {data} /> -->
<!-- <DrugListCompForViewPrevSalesPage {prevDrugStoreData} /> -->

<!-- <div> -->
<!-- <main class="lapper"> -->
<!-- <form action="/auth?/signout" method="POST">
		<button> sign out </button>
	</form> -->
<div class="mainy">
	<div class="menu">
		{#if $navigating}
			<div class="progress-bar" />
		{/if}
		<NavBarCont>
			<InputFieldForFilterVariables type="date" />
			<!-- <DrugsInputForm {bb} /> -->
			<FormBtn {isLoadingForSignOut} action="/auth?/signout" method="POST" buttonText="sign out" />
			<ButtonWithIcon
				class="user-btn"
				on:focus
				on:blur
				type="secLoadUntillGoal"
				text="↖ Back"
				href="/app-main"
				icon=""
				disabled={false}
			/>

			<!-- <form action="/auth?/signout" method="POST"> -->
			<!-- <ButtonWithIcon formAction={signoutFormAction} text="siojkik" /> -->
			<!-- </form> -->
			<MakeShiftModalComp
				tooltip={"When you refer a friend by sharing this application, and they begin using it, we'll show our appreciation by rewarding you with a monetary incentive. However, please note that this feature is currently in active development. Rest assured, we will notify you promptly once it's ready for use. Thank you for your understanding and support!"}
			>
				<ButtonWithIcon
					class="user-btn"
					text="Refer"
					icon=""
					disabled={false}
					on:focus
					on:blur
					onClick={handleClick}
				/>
			</MakeShiftModalComp>
			<!-- <NewDrugInput /> -->
			<MenuHoverSysComp menuText="Filter">
				<div class="user-class">
					<!-- <ToolTip tooltip={'coming soon...'}> -->
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="by brand"
						icon=""
						btnType="filterBtns"
						disabled={false}
						sss={toggleInputFieldAndSetFilterTypeToBrand}
					/>
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="by date"
						icon=""
						btnType="filterBtns"
						disabled={false}
						sss={toggleInputFieldAndSetFilterTypeToDate}
					/>
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="by stock"
						icon=""
						btnType="filterBtns"
						disabled={false}
						sss={toggleInputFieldAndSetFilterTypeToStock}
					/>
					<ButtonWithIcon
						class="user-btn"
						on:focus
						on:blur
						text="close"
						icon=""
						btnType="inputFieldFilterExit"
						disabled={false}
						sss={toggleInputFieldAndSetFilterTypeToStock}
					/>
					<!-- </ToolTip> -->
				</div>
			</MenuHoverSysComp>
			<MenuHoverSysComp menuText="Resources and support">
				<div class="user-class">
					<MakeShiftModalComp
						tooltip={"Hello, Our documentation and guides are presently under active development. We are committed to making them available to you as soon as they are ready for use. In the meantime, if you encounter any challenges or need assistance, please don't hesitate to reach out to our technical support team via our helpline at 08125450505. We strive to respond promptly, typically within two minutes. Thank you for your understanding and patience. Best regards. CDR team 😇."}
					>
						<ButtonWithIcon
							class="user-btn"
							on:focus
							on:blur
							text="Docs"
							icon=""
							disabled={false}
							onClick={handleClick}
						/>
					</MakeShiftModalComp>
					<ButtonWithIcon
						class="user-btn"
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
				<Switch bind:value={sliderValue} label="Enable dark mode" fontSize={13} design="slider" />
			</UserIcon>
		</NavBarCont>

		<!-- <DrugsInputForm {bb} /> -->
	</div>
	<!-- <mhain class="mmm" class:darkyMain={$mainBgDarkProp.darkyMain}> -->
	<!-- {#if $isLoaded} -->
	<!-- <NoDataYetComp
		class="no-data-class"
		emptyDataAnnouncer="Sorry, for some reason, we were not able to load your sales."
		HintToGetData="It could be that you are not connected to the internet anymore, Check your internet connectivity and make sure that you are still connected, then try clicking the reload button to attempt loading the sales again."
	/> -->
	<!-- {:else} -->

	{#if isloaded}
		<!-- {#if emptySalesArrayVPS}
			<p>empty</p>
		{:else} -->
		<DrugListForP {emptySalesArrayVPS} />
		<!-- {/if} -->
	{:else}
		<main>
			<div class:loading>
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
	<main transition:slide class="gloss">
		<Glossary />
	</main>

	<!-- <DrugList /> -->
	<!-- {/if} -->
	<!-- {#if text === 'Close sales'} -->
	<!-- <div class="btn-rev">
			<ButtonRev {text} onClick={handleClick} />
		</div> -->
	<!-- {:else}
			<ButtonRev text={'rat'} onClick={handleClick} />
		{/if} -->
	<!-- </main> -->

	<!-- </main> -->
	<!-- <Switch bind:value={switchValue} label="Enable dark mode" design="inner" />
	<p>
		Switch is {switchValue}
	</p> -->

	<!-- <p>
		Switch is {sliderValue}
	</p> -->

	<!-- <Switch
		bind:value={multiValue}
		label="Choose a theme"
		design="multi"
		options={['light', 'dark']}
		fontSize={12}
	/>
	<p>
	</p> -->
</div>

<!-- <LoadingButton {isLoading} buttonText="" disabled={false} />
<ButtonWithIcon class="user-menu" on:focus on:blur text="Sign out" icon="" disabled={false} />
<FormBtn action="/auth?/signout" method="GET" buttonText="Log Out" /> -->
<style>
	* {
		padding: 0;
	}
	.gloss {
		display: flex;
		/* box-shadow: 0px 2px 1px 9px hsla(222, 50%, 10%, 0.5) !important; */
		/* background: red; */
		transform: translateY(25vh);
		position: fixed;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}
	.prof-signout {
		display: flex;
		/* background: red; */
		align-items: center;
		justify-content: space-between !important;
		flex-direction: row;
	}
	.divider {
		width: 10px;
		height: 3.5rem;
		/* background: red !important; */
		border-right: #016968 3px solid;
	}
	.divider-hor {
		width: 100%;
		/* height: 1rem; */
		margin: 0.5rem 0;
		/* background: red !important; */
		border-top: #016968 3px solid;
	}

	button {
		background: hsla(222, 50%, 85%, 1);
		border: none;
		padding: 3px 3px;
		margin: 0.5rem 0.3rem;
		letter-spacing: 0.5px;
		/* width: 75px; */
		width: max-content;
		word-wrap: nowrap;
		border-radius: 5px;
		transition: all ease-in-out 0.3s;
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 25%, 1);
		font-weight: 600;
		/* margin-left: 1px; */
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
	}

	button:hover {
		background: hsla(222, 50%, 80%, 1);
		transform: translateY(3px);
		transition: all ease-in-out 0.2s;
	}
	button:active {
		background: hsla(222, 50%, 20%, 1);
		transition: all ease-in-out 0.2s;
		color: white;
	}

	.dark {
		background: hsla(222, 40%, 30%, 1);
		color: red;
	}
	.selected {
		background: hsla(222, 40%, 30%, 1);
		color: white;
	}

	.user-class:first-child {
		display: flex;
		align-items: center;
		justify-content: center; /* margin: 2rem 0; */
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
	:global(.user-btn) {
		/* margin: 1rem 0 !important; */
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
	.btn-rev:before {
		content: '';
		width: 7rem;
		height: 2px;
		border-radius: 10px;
		display: flex;
		align-self: center;
		justify-content: center;
		background-color: hsla(230, 100%, 55%, 1);
		/* margin-right: -px; */
	}
	.btn-rev {
		margin: 1.5rem;
		/* width: 100vw !important; */
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.btn-rev:after {
		content: '';
		width: 7rem;
		height: 2px;
		border-radius: 10px;
		display: flex;
		align-self: center;
		justify-content: center;
		background-color: hsla(230, 100%, 55%, 1);
		margin-left: 8px;
	}
	div {
		/* position: sticky;
		top: 0;
		z-index: 99999999; */
		display: flex;
		flex-direction: column;
	}
	/* .mmm {
		position: sticky;
		top: 0;
		z-index: 99999999;
	} */
	.mainy {
		width: fit-content !important;
		/* background: hsla(222, 100%, 5%, 1); */

		/* height: 3000px; */
		/* height: 100vh;
		width: 100vw; */
		/* overflow: scroll; */
		/* display: flex; */
		transition: all ease-in-out 0.2s;
	}
	.darkyMain {
		background: hsla(222, 100%, 5%, 1);
		transition: all ease-in-out 0.2s;
	}
	.lapper {
		display: flex;
		flex-direction: column;
		width: 100vw !important;
	}
	.menu {
		display: flex;
		position: fixed;
		/* top: 0; */
		z-index: 9999999;
	}
	h2 {
		height: 100vh;
		/* background: red; */
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: 80vw; */
	}
	.loading {
		/* position: absolute; */
		/* left: 200px; */
		display: flex;
		align-items: center;
		/* width: 100vw; */
		/* height: 100vh; */
		/* margin: 9rem; */
		/* background: blue; */
		/* transform: translateY(55vh); */
		justify-content: center;
	}
	.loading.sales {
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: 100vw; */
		/* height: 100vh; */
		/* background: blue; */
		/* transform: translateY(-800px); */
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
		/* color: red !important; */
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
		/* padding-top: 3rem; */
		/* width: 100vw; */
		/* height: 100vh; */
		transform: translateY(14vh);
		font-size: 1rem;
		letter-spacing: 1px;
		color: hsla(222, 50%, 80%, 1);
	}
	main {
		/* height: 100vh; */
		/* height: fit-content; */
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
		/* background: red !important; */
		transform: translateY(49vh);
	}
	.progress-bar {
		background-color: #474bff;
		/* background-color: hsl(24, 100%, 81%); */
		background: linear-gradient(to right, #ff6600, #ffcc00, #00cc66); /* Bright colors gradient */

		height: 0.5vh;
		position: fixed;
		border-radius: 10px;
		top: 0;
		animation: progressAnimation 1s infinite alternate-reverse; /* Adjust duration as needed */
	}

	@keyframes progressAnimation {
		0% {
			width: 0;
			/* background-color: hsl(24, 100%, 81%); */
		}
		100% {
			width: 100vw;
			/* background-color: hsl(214, 100%, 81%); */
		}
	}
</style>
