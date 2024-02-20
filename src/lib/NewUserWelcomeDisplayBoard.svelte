<script>
	import { fade, blur, fly, scale } from 'svelte/transition';
	import { aboutUsToggler, whyUsToggler } from '../stores';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';
</script>

<!-- <label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label> -->

{#if $aboutUsToggler}
	<main in:fly={{ y: 50, duration: 500 }} out:fly={{ y: 200, duration: 500 }}>
		<div>
			<p class="heading" in:fly={{ y: 50, duration: 500 }}>
				<!-- <ButtonWithIcon btnType="mockBtn" text="X" /> -->
				Welcome to CDR Software! <br />
				Please take a moment to read through our welcome cards😊.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				We're delighted to have you on board. CDR Software specializes in pharmacy management,
				providing a comprehensive solution to streamline your sales operations. Our general
				merchandise variant is also in active developement and will soon be available for use by
				non-pharmaceutical businesses.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Our commitment to a simple and sleek user interface stems from our dedication to ensuring
				our customers can effortlessly perform critical tasks. We've meticulously designed the
				interface to prioritize intuitive navigation and uncomplicated workflows. With CDR
				Software/application, we aim to provide an experience that enables you to manage your
				pharmacy sales operations seamlessly, allowing you to focus on what matters most—efficiently
				serving your customers and growing your business😊.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				At the top left of the navigation bar, you'll find the input field where you can enter drug
				names for submission. Multiple drugs can be submitted by separating them with a comma. After
				each submission or sale, you'll have the option to print a receipt for the transaction.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				The Data Management section offers three essential functions: reloading your sales, viewing
				previous sales (sales from yesterday), and applying various filters to analyze your sales
				data. Additionally, you can add new drug brands to your inventory.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Under Resources and Support, you can access our software documentation, user guides, and a
				comprehensive drugs glossary to enhance your understanding of pharmaceuticals. For easy
				stock management, simply click "Register New Stock for this Brand" to create a new drug
				stock.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				On the far right, you'll find your user profile icon. Clicking this opens a menu granting
				access to your profile/account page, a sign-out option, a theme toggler, and other useful
				features that you should explore😊.
			</p>

			<p in:fly={{ y: 50, duration: 500 }}>
				As we embark on this exciting journey together, it's important to note that CDR Software is
				in its early stages, a budding project that holds immense promises. We appreciate your
				patience and understanding as we work diligently to enrich the feature set and enhance your
				user experience. Your valuable feedback holds a special place in our hearts—it's the beacon
				guiding us towards improvements. Think of this as a united goal, where your insights and
				thoughts are integral to shaping this software into something exceptional. Together, we'll
				build a product that exceeds expectations, tailored to your needs and preferences😊.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Thank you for choosing CDR Software for your pharmacy management needs. We look forward to
				assisting you in optimizing your sales operations😊.
			</p>
		</div>
	</main>
{/if}
{#if $whyUsToggler}
	<main in:fly={{ y: 50, duration: 500 }} out:fly={{ y: 200, duration: 500 }}>
		<div>
			<p class="heading" in:fly={{ y: 50, duration: 500 }}>
				<!-- <ButtonWithIcon btnType="mockBtn" text="X" /> -->
				Why CDR?<br />
				It all began with a simple yet profound idea: a question surfaced – how can we design a point-of-sale
				(POS)/sales management system that minimizes hardware dependency for pharmacies, supermarkets,
				and retail companies? Our aim was clear: to empower these markets with heightened efficiency
				and cost-effectiveness.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Traditionally, sales management systems for pharmacies/supermarkets/retail companies heavily
				lean on point-of-sale (POS) systems, burdened by hardware necessities such as inventory
				scanners, barcode readers, router/network equipment, and more—all of which contribute to
				associated costs. Our driving force is to strategically shift the load of these
				hardware-dependent operations, as much as possible, to the software side. We're committed to
				embracing a digital approach that trims down hardware dependencies significantly, thus
				resulting in substantial cost reductions.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				With CDR Software, we're pioneering a transition that liberates
				pharmacies/supermarkets/retail companies from bulky hardware setups. By doing so, we
				streamline operations, enhance flexibility, and boost cost-effectiveness. Imagine a pharmacy
				experience where technology seamlessly integrates into your workflow, making every
				transaction smoother and every process more efficient.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Our mission is to empower pharmacies/supermarkets/retail companies, allowing them to
				dedicate more time to what truly matters—caring for their customers and community. CDR
				Software is the bridge between vision and reality, embodying a future where pharmacy
				management is intuitive, adaptable, and accessible to all.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				SO IN THE END, WHO REALLY NEEDS THIS SOFTWARE?<br />
				In essence, our software offers a dual advantage. On a practical level, if you're seeking to
				steer clear of bulky, power-hungry hardware that eats up space, this software provides an elegant
				solution. Delving deeper, it represents an opportunity for major sales companies to explore our
				software, making a smooth transition to a fully digital, hardware-light environment. It's the
				promise of efficiency and a leap into a more streamlined future.
			</p>
			<p in:fly={{ y: 50, duration: 500 }}>
				Discover the future of pharmacies/supermarkets/retail companies operations with CDR—a leap
				toward efficiency, cost savings, and a seamless pharmacy experience 😊.
			</p>
		</div>
	</main>
{/if}

<style>
	br {
		font-size: 4rem;
	}
	main {
		display: flex;
		/* width: 100vw; */
		/* margin: 1rem 20rem; */
		box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.457);
		/* flex-direction: column; */
		/* color: white; */
		/* background: green; */
		/* transform: translate(100%, 0px); */
		/* position: absolute; */
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	div {
		display: flex;
		box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.457);

		width: 100vw;
		width: fit-content;
		gap: 20px;
		padding: 10px 10px;
		/* margin: 0 0.2rem; */
		flex-direction: column;
		/* flex-wrap: wrap; */
		color: white;
		border-radius: 5px;
		background: #12181f;
		/* transform: translate(100%, 0px); */
		/* align-items: center; */
		justify-content: center;
		text-align: center;
	}
	p {
		display: flex;
		border-radius: 5px;
		font-size: 0.9rem;
		flex-direction: column;
		color: #cde2ff;
		letter-spacing: 1px;
		line-height: 19px;
		box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.457);
		/* color: white; */
		width: 30vw;
		letter-spacing: 1px;
		line-height: 19px;
		box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.457);
		font-weight: 300;
		padding: 16px 16px;
		margin: 0.3rem 0;
		background: #1b205b;
		background: #1e242c;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.heading {
		background: #1b205b;
	}
</style>
