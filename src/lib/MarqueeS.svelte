<div class="marquee">
	<div>
		<!-- <span>You spin me right round, baby. Like a record, baby.</span> -->
		<span>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
		</span>
		<span>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
			<img
				src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg"
				alt=""
			/>
		</span>
	</div>
</div>

<style>
	.marquee {
		height: 25px;
		height: 300px;
		width: 420px;
		width: 50vw;
		overflow: hidden;
		position: relative;
		background: red;
	}

	.marquee div {
		display: block;
		width: 200%;
		height: 30px;
		height: 300px;

		position: absolute;
		overflow: hidden;

		animation: marquee 5s linear infinite;
	}

	.marquee span {
		float: left;
		width: 50%;
	}
	img {
		float: left;
		width: 50%;
		display: flex;
		align-items: center;
		/* border: 1px solid pink; */
		justify-content: center;
		width: 8vw;
		height: 15vh;
		border-radius: 100px;
		margin: 1rem;
		transition: all 1s;
	}

	@keyframes marquee {
		0% {
			left: 0;
		}
		100% {
			left: -100%;
		}
	}
</style>
