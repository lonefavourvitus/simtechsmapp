<script>
// @ts-nocheck

	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	import TranWrapper from '$lib/TranWrapper.svelte';
	import VideoPlayer from '$lib/VideoPlayer.svelte';

	import viewport from '/src/functions/useViewportAction';
	let enteredViewport = false;
</script>

<!-- 
<div use:viewport on:enterViewport={() => (q = true)} on:exitViewport={() => (q = false)}>
	{#if q}
		<div transition:fly={{ y: 200, delay: 250 }}>
			<DeskTop />
		</div>
	{/if}
</div> -->
<TranWrapper height="unset" tranWrapperChild="deskTop">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="188 108 412 342">
		<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="219 108 512 342"> -->
		<g id="freepik--background-complete--inject-4"
			><g id="freepik--Shadows--inject-4"
				><path
					d="M571.745,376.564c0,6.046-76.931,10.947-171.83,10.947s-171.83-4.901-171.83-10.947,76.931-10.947,171.83-10.947,171.83,4.901,171.83,10.947Z"
					style="fill:hsla(210, 100%, 5%,0.3);"
				/></g
			>

			<g id="freepik--Keyboard--inject-4"
				><g
					><path
						d="M229.847,448.58c-5.871-.012-10.25-4.658-9.064-9.616,3.511-14.677,10.279-41.27,12.52-50.052,.433-1.695,2.176-2.898,4.189-2.895l300.27,.503c2.602,.004,4.861,1.548,5.461,3.731l13.239,48.2c1.405,5.114-3.167,9.994-9.261,9.877-20.968-.404-63.166-1.247-75.8-1.731-17.037-.653-64.742,1.632-87.079,1.959-18.502,.27-120.121,.093-154.476,.024Z"
						style="fill: hsl(210, 45%, 8%);
	;"
					/><g style="opacity:.6;"
						><path
							d="M516.986,415.995l-.689-3.141c-.157-.716-.882-1.234-1.727-1.234h-8.232c-1.079,0-1.904,.831-1.736,1.75l.571,3.141c.134,.737,.871,1.281,1.736,1.281h8.349c1.102,0,1.932-.864,1.727-1.797Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M503.422,416.042l-.571-3.141c-.134-.737-.871-1.281-1.736-1.281h-7.142c-1.051,0-1.867,.79-1.746,1.69l.422,3.141c.103,.764,.853,1.341,1.746,1.341h7.292c1.079,0,1.904-.831,1.736-1.75Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M502.494,419.212h-7.503c-1.051,0-1.867,.79-1.746,1.69l.422,3.142c.103,.765,.853,1.341,1.746,1.341h7.653c1.079,0,1.904-.831,1.736-1.75l-.571-3.141c-.134-.737-.871-1.281-1.736-1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M533.287,427.952c-.195-.675-.898-1.149-1.705-1.149h-11.576l-.628,.102-.022-.102h-13.368l-.595,.08-.015-.08h-9.368c-1.051,0-1.867,.79-1.746,1.69l.456,3.401c.104,.772,.867,1.351,1.768,1.341l35.985-.394c1.134-.012,1.957-.934,1.683-1.882l-.87-3.007Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M493.375,410.201h6.931c1.079,0,1.903-.831,1.736-1.75l-.423-2.327c-.134-.737-.871-1.281-1.736-1.281h-6.82c-1.051,0-1.867,.79-1.746,1.69l.312,2.327c.103,.764,.853,1.341,1.746,1.341Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M505.53,410.201h8.065c1.102,0,1.932-.864,1.727-1.797l-.51-2.327c-.157-.716-.882-1.234-1.727-1.234h-7.978c-1.079,0-1.903,.831-1.736,1.75l.423,2.327c.134,.737,.871,1.281,1.736,1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M516.965,402.809h6.579c1.143,0,1.982-.926,1.705-1.882l-.418-1.445c-.195-.675-.898-1.149-1.705-1.149h-6.478c-1.102,0-1.932,.864-1.727,1.797l.317,1.445c.157,.716,.882,1.234,1.727,1.234Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M527.606,408.319l-.673-2.327c-.195-.675-.898-1.149-1.705-1.149h-6.891c-1.102,0-1.932,.864-1.727,1.797l.51,2.327c.157,.716,.882,1.234,1.727,1.234h7.054c1.143,0,1.982-.926,1.705-1.882Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M503.901,402.809h7.811c1.102,0,1.932-.864,1.727-1.797l-.317-1.445c-.157-.716-.882-1.234-1.727-1.234h-7.757c-1.079,0-1.904,.831-1.736,1.75l.262,1.445c.134,.737,.871,1.281,1.736,1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M528.864,402.809h5.604c1.178,0,2.023-.98,1.683-1.953l-.505-1.444c-.224-.64-.907-1.079-1.683-1.079h-5.517c-1.143,0-1.982,.926-1.705,1.882l.418,1.445c.195,.675,.899,1.149,1.705,1.149Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M536.339,432.636l8.775,.067c1.169-.013,1.998-.987,1.661-1.952l-6.306-18.052c-.224-.64-.907-1.078-1.683-1.078h-6.277c-1.143,0-1.982,.926-1.705,1.882l5.536,19.134h0Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M500.413,401.058l-.263-1.445c-.134-.737-.871-1.281-1.736-1.281h-6.539c-1.051,0-1.867,.79-1.746,1.69l.194,1.445c.103,.764,.853,1.341,1.746,1.341h6.608c1.079,0,1.903-.831,1.736-1.75Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M453.187,409.038h6.931c1.079,0,1.903-.831,1.736-1.75l-.423-2.327c-.134-.737-.871-1.281-1.736-1.281h-6.82c-1.051,0-1.867,.79-1.746,1.69l.312,2.327c.103,.764,.853,1.341,1.746,1.341Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M465.342,409.038h8.065c1.101,0,1.932-.864,1.727-1.797l-.51-2.327c-.157-.716-.882-1.234-1.727-1.234h-7.978c-1.079,0-1.903,.831-1.736,1.75l.423,2.327c.134,.737,.871,1.281,1.736,1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M477.173,402.261h6.579c1.143,0,1.982-.926,1.705-1.882l-.418-1.444c-.195-.675-.899-1.149-1.705-1.149h-6.478c-1.102,0-1.932,.864-1.727,1.797l.317,1.444c.157,.716,.882,1.234,1.727,1.234Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M487.419,407.155l-.673-2.327c-.195-.675-.898-1.149-1.705-1.149h-6.891c-1.102,0-1.932,.864-1.727,1.797l.51,2.327c.157,.716,.882,1.234,1.727,1.234h7.054c1.143,0,1.982-.926,1.705-1.882Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M464.11,402.261h7.811c1.102,0,1.932-.864,1.727-1.797l-.317-1.445c-.157-.716-.882-1.234-1.727-1.234h-7.757c-1.079,0-1.903,.831-1.736,1.75l.262,1.445c.134,.737,.871,1.281,1.736,1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M460.622,400.511l-.263-1.444c-.134-.737-.871-1.281-1.736-1.281h-6.539c-1.051,0-1.867,.79-1.746,1.69l.194,1.444c.103,.764,.853,1.341,1.746,1.341h6.608c1.079,0,1.904-.831,1.736-1.75Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M531.999,423.502l-.909-3.141c-.195-.675-.898-1.149-1.705-1.149h-7.898c-1.102,0-1.932,.864-1.727,1.797l.689,3.141c.157,.716,.882,1.234,1.727,1.234h8.118c1.143,0,1.982-.926,1.705-1.882Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M529.803,415.91l-.909-3.141c-.195-.675-.898-1.149-1.705-1.149h-7.366c-1.101,0-1.932,.864-1.727,1.797l.689,3.141c.157,.716,.882,1.234,1.727,1.234h7.586c1.143,0,1.982-.926,1.705-1.882Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M538.915,408.248l-.889-2.49c-.194-.544-.777-.915-1.437-.915h-6.041c-1.143,0-1.982,.926-1.705,1.882l.673,2.327c.195,.675,.898,1.149,1.705,1.149h6.01c1.178,0,2.023-.98,1.683-1.953Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M518.651,423.587l-.689-3.142c-.157-.716-.882-1.234-1.727-1.234h-8.516c-1.079,0-1.903,.831-1.736,1.75l.571,3.141c.134,.737,.871,1.281,1.736,1.281h8.634c1.102,0,1.932-.864,1.727-1.797Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M476.572,423.75l-.689-3.141c-.157-.716-.882-1.234-1.727-1.234h-8.232c-1.079,0-1.904,.831-1.736,1.75l.571,3.141c.134,.737,.871,1.281,1.736,1.281h8.349c1.101,0,1.932-.864,1.727-1.797Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M462.08,426.966h-7.503c-1.051,0-1.867,.79-1.746,1.69l.422,3.141c.103,.764,.853,1.341,1.746,1.341h7.653c1.079,0,1.903-.831,1.736-1.75l-.571-3.141c-.134-.737-.871-1.281-1.736-1.281Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M491.585,431.256l-.909-3.141c-.195-.675-.898-1.149-1.705-1.149h-7.898c-1.102,0-1.932,.864-1.727,1.797l.689,3.141c.157,.716,.882,1.234,1.727,1.234h8.118c1.143,0,1.982-.926,1.705-1.882Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M478.237,431.342l-.689-3.142c-.157-.716-.882-1.234-1.727-1.234h-8.516c-1.079,0-1.903,.831-1.736,1.75l.571,3.141c.134,.737,.871,1.281,1.736,1.281h8.634c1.102,0,1.932-.864,1.727-1.797Z"
							style="fill:hsl(210, 100%, 20);"
						/></g
					><g style="opacity:.6;"
						><path
							d="M285.008,422.445l.254-3.532c.055-.76-.645-1.402-1.528-1.402h-9.038c-.786,0-1.445,.514-1.523,1.188l-.412,3.532c-.091,.777,.617,1.452,1.523,1.452h9.196c.809,0,1.478-.542,1.528-1.239Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M289.288,408.5h7.193c.835,0,1.517-.578,1.531-1.298l.053-2.717c.014-.738-.675-1.343-1.531-1.343h-7.051c-.809,0-1.478,.542-1.528,1.239l-.195,2.717c-.055,.76,.645,1.402,1.528,1.402Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M276.055,408.5h8.516c.809,0,1.478-.543,1.528-1.239l.195-2.717c.055-.76-.645-1.402-1.528-1.402h-8.395c-.786,0-1.445,.514-1.523,1.188l-.317,2.717c-.091,.778,.617,1.452,1.523,1.452Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M300.47,408.5h10.748c.454,0,.823-.318,.823-.71v-3.938c0-.392-.368-.71-.823-.71h-10.67c-.449,0-.815,.31-.823,.698l-.077,3.938c-.008,.397,.363,.722,.823,.722Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M342.594,408.5h11.21c.454,0,.823-.318,.823-.71v-3.938c0-.392-.368-.71-.823-.71h-11.21c-.454,0-.823,.318-.823,.71v3.938c0,.392,.368,.71,.823,.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M329.123,408.5h10.179c.454,0,.823-.318,.823-.71v-3.938c0-.392-.368-.71-.823-.71h-10.179c-.454,0-.823,.318-.823,.71v3.938c0,.392,.368,.71,.823,.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M357.096,408.5h11.407c.449,0,.815-.311,.823-.698l.076-3.938c.008-.396-.363-.721-.823-.721h-11.483c-.454,0-.823,.318-.823,.71v3.938c0,.392,.368,.71,.823,.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M314.509,408.5h11.323c.455,0,.823-.318,.823-.71v-3.938c0-.392-.368-.71-.823-.71h-11.323c-.454,0-.823,.318-.823,.71v3.938c0,.392,.368,.71,.823,.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M395.716,417.725h-10.134c-.725,0-1.31,.513-1.298,1.138l.077,3.934c.012,.611,.589,1.101,1.298,1.101h10.221c.735,0,1.324-.526,1.297-1.159l-.164-3.934c-.025-.602-.598-1.079-1.297-1.079Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M411.631,417.725h-11.671c-.735,0-1.324,.526-1.297,1.159l.164,3.934c.025,.602,.598,1.079,1.297,1.079h11.857c.756,0,1.352-.555,1.294-1.205l-.35-3.934c-.052-.583-.616-1.034-1.294-1.034Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M296.253,417.511h-7.802c-.809,0-1.478,.543-1.528,1.239l-.254,3.532c-.055,.76,.645,1.402,1.528,1.402h7.987c.836,0,1.517-.578,1.531-1.298l.069-3.532c.014-.738-.675-1.343-1.531-1.343Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M398.347,411.079l.164,3.934c.025,.602,.598,1.079,1.297,1.079h11.499c.756,0,1.352-.555,1.294-1.205l-.35-3.934c-.052-.583-.616-1.034-1.294-1.034h-11.313c-.735,0-1.324,.526-1.297,1.159Z"
							style="fill:hsl(210, 100%, 20);"
						/><g
							><path
								d="M369.126,418.233c.008-.396-.363-.721-.823-.721h-11.207c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h12.159c-.138-.261-.222-.562-.219-.752l.09-4.699Z"
								style="fill:hsl(210, 100%, 20);"
							/><path
								d="M382.628,418.209c-.007-.387-.374-.698-.823-.698h-10.21c-.449,0-.815,.311-.823,.698l-.091,4.746c-.004,.186-.09,.475-.226,.729h11.443c.46,0,.83-.325,.823-.721l-.092-4.753Z"
								style="fill:hsl(210, 100%, 20);"
							/></g
						><path
							d="M339.302,417.511h-10.179c-.454,0-.823,.318-.823,.71v4.723c0,.392-.368,.71-.823,.71h0c-.454,0-.823-.318-.823-.71v-4.723c0-.392-.368-.71-.823-.71h-11.323c-.454,0-.823,.318-.823,.71v4.723c0,.392-.368,.71-.823,.71h0c-.454,0-.823-.318-.823-.71v-4.723c0-.392-.368-.71-.823-.71h-10.952c-.449,0-.815,.31-.823,.698l-.093,4.753c-.008,.397,.363,.722,.823,.722h39.13c.454,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M353.804,417.511h-11.21c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h11.21c.454,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M284.279,409.92h-8.698c-.786,0-1.445,.514-1.523,1.188l-.412,3.532c-.091,.777,.617,1.452,1.523,1.452h8.856c.809,0,1.478-.542,1.528-1.239l.254-3.532c.055-.76-.645-1.402-1.528-1.402Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M385.362,408.714h9.886c.735,0,1.324-.526,1.297-1.159l-.13-3.119c-.025-.602-.598-1.079-1.297-1.079h-9.817c-.725,0-1.31,.513-1.298,1.138l.061,3.119c.012,.611,.589,1.1,1.298,1.1Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M372.278,408.5h8.841c.725,0,1.31-.513,1.298-1.138l-.061-3.119c-.012-.611-.589-1.101-1.298-1.101h-8.72c-.709,0-1.286,.49-1.298,1.101l-.06,3.119c-.012,.625,.573,1.138,1.298,1.138Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M311.217,409.92h-10.803c-.449,0-.815,.31-.823,.698l-.093,4.753c-.008,.397,.363,.722,.823,.722h10.896c.454,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M288.742,416.092h7.59c.835,0,1.517-.578,1.531-1.298l.069-3.532c.014-.738-.675-1.343-1.531-1.343h-7.405c-.809,0-1.478,.543-1.528,1.239l-.254,3.532c-.055,.76,.645,1.402,1.528,1.402Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M428.049,401.724h16.632c.94,0,1.671-.705,1.565-1.511l-.23-1.751c-.09-.69-.77-1.21-1.575-1.206l-16.653,.091c-.946,.005-1.674,.724-1.552,1.533l.25,1.66c.102,.677,.771,1.184,1.562,1.184Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M425.099,409.92h-9.888c-.756,0-1.352,.555-1.294,1.205l.35,3.934c.052,.583,.616,1.034,1.294,1.034h10.13c.783,0,1.388-.594,1.287-1.263l-.592-3.934c-.084-.558-.635-.975-1.287-.975Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M431.109,423.684h16.762c.775,0,1.377-.581,1.29-1.245l-.516-3.934c-.074-.566-.629-.994-1.29-.994h-16.838c-.783,0-1.388,.594-1.287,1.263l.592,3.934c.084,.558,.635,.975,1.287,.975Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M262.197,416.092h8.24c.786,0,1.445-.514,1.523-1.188l.412-3.532c.091-.777-.617-1.452-1.523-1.452h-8.079c-.764,0-1.411,.485-1.516,1.138l-.572,3.532c-.129,.794,.587,1.503,1.516,1.503Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M368.448,409.92h-11.353c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h11.261c.449,0,.815-.311,.823-.698l.091-4.753c.008-.396-.363-.721-.823-.721Z"
							style="fill:hsl(210, 100%, 20);"
						/><polygon
							points="382.467 409.92 370.931 409.92 370.813 416.092 382.587 416.092 382.467 409.92"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M325.831,409.92h-11.323c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h11.323c.455,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M395.4,410.133h-9.967c-.725,0-1.31,.513-1.298,1.138l.077,3.934c.012,.611,.589,1.101,1.298,1.101h10.053c.735,0,1.324-.526,1.297-1.16l-.164-3.934c-.025-.602-.598-1.079-1.297-1.079Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M339.302,409.92h-10.179c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h10.179c.454,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M353.804,409.92h-11.21c-.454,0-.823,.318-.823,.71v4.753c0,.392,.368,.71,.823,.71h11.21c.454,0,.823-.318,.823-.71v-4.753c0-.392-.368-.71-.823-.71Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M410.354,403.143h-10.992c-.735,0-1.324,.526-1.297,1.159l.13,3.119c.025,.602,.598,1.079,1.297,1.079h11.14c.756,0,1.352-.555,1.294-1.205l-.277-3.119c-.052-.583-.616-1.034-1.294-1.034Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M381.953,425.103h-94.714c-.435,0-.794,.292-.821,.666l-.579,8.054c-.029,.411,.351,.757,.828,.753l95.436-.674c.457-.003,.824-.327,.816-.721l-.144-7.38c-.007-.387-.374-.698-.823-.698Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M396.031,425.317h-10.302c-.725,0-1.31,.513-1.298,1.138l.127,6.534c.012,.614,.596,1.105,1.308,1.1l10.444-.074c.731-.005,1.313-.53,1.287-1.159l-.269-6.46c-.025-.602-.598-1.079-1.297-1.079Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M283.188,425.103h-9.378c-.786,0-1.445,.514-1.523,1.188l-.808,6.929c-.091,.782,.625,1.459,1.536,1.452l9.693-.068c.804-.006,1.466-.547,1.516-1.239l.493-6.86c.055-.76-.645-1.402-1.528-1.402Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M258.96,414.955l.572-3.532c.129-.794-.587-1.503-1.516-1.503h-14.405c-.731,0-1.361,.446-1.502,1.065l-.808,3.532c-.187,.816,.538,1.576,1.502,1.576h14.641c.764,0,1.411-.485,1.516-1.138Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M412.306,425.317h-12.03c-.735,0-1.324,.526-1.297,1.159l.267,6.43c.025,.606,.605,1.084,1.308,1.079l12.327-.087c.752-.005,1.341-.558,1.284-1.205l-.564-6.343c-.052-.583-.616-1.034-1.294-1.034Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M269.79,433.518l.812-6.962c.091-.778-.617-1.452-1.523-1.452h-8.768c-.764,0-1.411,.485-1.516,1.138l-1.138,7.026c-.129,.798,.594,1.51,1.529,1.503l9.095-.064c.781-.006,1.433-.518,1.511-1.188Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M269.964,417.511h-8.424c-.764,0-1.411,.485-1.516,1.138l-.572,3.532c-.129,.794,.586,1.503,1.516,1.503h8.584c.786,0,1.445-.513,1.523-1.188l.412-3.532c.091-.778-.617-1.452-1.523-1.452Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M257.73,422.546l.572-3.532c.129-.794-.587-1.503-1.516-1.503h-14.912c-.731,0-1.361,.446-1.502,1.065l-.808,3.532c-.187,.816,.538,1.576,1.502,1.576h15.148c.764,0,1.411-.485,1.516-1.138Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M255.556,425.103h-15.419c-.731,0-1.361,.446-1.502,1.065l-1.641,7.172c-.188,.82,.545,1.582,1.515,1.576l15.916-.112c.759-.005,1.399-.489,1.504-1.138l1.144-7.06c.129-.794-.586-1.503-1.516-1.503Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M427.383,425.103h-10.823c-.756,0-1.352,.555-1.294,1.205l.561,6.313c.052,.587,.622,1.039,1.305,1.034l11.199-.079c.779-.005,1.377-.597,1.277-1.263l-.938-6.234c-.084-.558-.635-.975-1.287-.975Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M450.439,432.184l-.915-5.979c-.096-.631-.72-1.102-1.458-1.102h-16.406c-.783,0-1.388,.594-1.287,1.263l.933,6.204c.084,.561,.642,.98,1.298,.975l16.556-.117c.77-.006,1.366-.585,1.279-1.245Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M261.288,400.586l.133-.821c.129-.797-.592-1.508-1.526-1.503l-13.644,.074c-.728,.004-1.352,.449-1.492,1.065l-.171,.747c-.187,.816,.538,1.576,1.502,1.576h13.682c.764,0,1.411-.485,1.516-1.138Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M414.591,418.716l.35,3.934c.052,.583,.616,1.034,1.294,1.034h10.597c.783,0,1.388-.594,1.287-1.263l-.592-3.934c-.084-.558-.635-.975-1.287-.975h-10.355c-.756,0-1.352,.555-1.294,1.205Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M429.967,416.092h16.909c.775,0,1.377-.581,1.29-1.245l-.516-3.934c-.074-.566-.629-.994-1.29-.994h-16.985c-.783,0-1.388,.594-1.287,1.263l.592,3.934c.084,.558,.635,.975,1.287,.975Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M428.825,408.5h17.055c.775,0,1.377-.581,1.29-1.245l-.409-3.119c-.074-.566-.629-.994-1.29-.994h-17.116c-.783,0-1.388,.594-1.287,1.263l.469,3.119c.084,.558,.635,.975,1.287,.975Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M314.509,401.724h11.323c.455,0,.823-.318,.823-.709v-2.402c0-.394-.372-.712-.828-.71l-11.323,.062c-.452,.003-.818,.319-.818,.71v2.341c0,.392,.368,.709,.823,.709Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M357.096,401.724h11.537c.449,0,.815-.31,.823-.698l.051-2.636c.008-.398-.366-.724-.828-.721l-11.588,.063c-.452,.003-.818,.319-.818,.71v2.573c0,.392,.368,.709,.823,.709Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M371.925,401.724h9.545c.46,0,.831-.325,.823-.721l-.053-2.705c-.008-.389-.377-.7-.828-.698l-9.442,.051c-.447,.002-.81,.312-.818,.698l-.051,2.654c-.008,.396,.363,.721,.823,.721Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M329.123,401.724h10.179c.454,0,.823-.318,.823-.709v-2.476c0-.394-.372-.712-.828-.71l-10.179,.055c-.452,.002-.818,.319-.818,.71v2.42c0,.392,.368,.709,.823,.709Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M342.594,401.724h11.21c.454,0,.823-.318,.823-.709v-2.555c0-.394-.372-.712-.828-.71l-11.21,.061c-.452,.002-.818,.319-.818,.71v2.494c0,.392,.368,.709,.823,.709Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M412.806,398.626l.183,2.064c.052,.583,.616,1.034,1.294,1.034h9.245c.783,0,1.388-.593,1.287-1.263l-.318-2.113c-.084-.56-.64-.979-1.295-.975l-9.111,.05c-.753,.004-1.344,.558-1.286,1.205Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M385.23,401.937h9.736c.735,0,1.324-.526,1.297-1.159l-.081-1.959c-.025-.605-.603-1.083-1.305-1.079l-9.691,.053c-.722,.004-1.302,.515-1.29,1.138l.037,1.906c.012,.611,.589,1.1,1.298,1.1Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M399.21,401.724h10.819c.756,0,1.352-.555,1.294-1.205l-.181-2.041c-.052-.586-.621-1.038-1.302-1.034l-10.72,.059c-.732,.004-1.315,.529-1.289,1.159l.082,1.982c.025,.602,.598,1.079,1.297,1.079Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M289.775,401.724h6.838c.836,0,1.517-.578,1.531-1.298l.02-1.022c.014-.741-.681-1.347-1.541-1.343l-6.788,.037c-.805,.004-1.469,.546-1.518,1.239l-.071,.985c-.055,.76,.645,1.402,1.528,1.402Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M276.845,401.724h8.213c.809,0,1.478-.542,1.528-1.239l.069-.959c.055-.763-.651-1.407-1.538-1.402l-8.175,.045c-.782,.004-1.435,.517-1.514,1.188l-.107,.914c-.091,.777,.617,1.452,1.523,1.452Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M264.525,401.724h7.587c.786,0,1.445-.513,1.523-1.188l.104-.889c.091-.781-.623-1.457-1.533-1.452l-7.554,.041c-.76,.004-1.401,.488-1.507,1.137l-.137,.847c-.129,.794,.587,1.503,1.516,1.503Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M272.846,407.312l.317-2.717c.091-.778-.617-1.452-1.523-1.452h-7.772c-.764,0-1.411,.485-1.516,1.138l-.44,2.717c-.129,.794,.587,1.503,1.516,1.503h7.895c.786,0,1.445-.514,1.523-1.188Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M244.539,408.5h14.134c.764,0,1.411-.485,1.516-1.138l.44-2.717c.129-.794-.587-1.503-1.516-1.503h-13.953c-.731,0-1.361,.446-1.502,1.065l-.621,2.717c-.187,.816,.538,1.576,1.502,1.576Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M300.602,401.724h10.615c.454,0,.823-.318,.823-.709v-2.323c0-.394-.372-.712-.828-.71l-10.571,.058c-.447,.002-.81,.312-.818,.698l-.044,2.265c-.008,.397,.363,.721,.823,.721Z"
							style="fill:hsl(210, 100%, 20);"
						/><path
							d="M413.314,404.348l.277,3.119c.052,.583,.616,1.034,1.294,1.034h9.662c.783,0,1.388-.594,1.287-1.263l-.469-3.119c-.084-.558-.635-.975-1.287-.975h-9.47c-.756,0-1.352,.555-1.294,1.205Z"
							style="fill:hsl(210, 100%, 20);"
						/></g
					><path
						d="M424.029,393.833h16.126c.911,0,1.62-.493,1.518-1.057l-.223-1.225c-.088-.483-.746-.846-1.527-.843l-16.145,.063c-.918,.004-1.623,.506-1.505,1.072l.242,1.161c.099,.473,.747,.828,1.515,.828Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M262.349,393.038l.129-.574c.125-.558-.574-1.054-1.48-1.051l-13.229,.052c-.706,.003-1.31,.314-1.447,.745l-.166,.522c-.181,.57,.521,1.102,1.456,1.102h13.265c.74,0,1.368-.339,1.47-.796Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M313.948,393.833h10.978c.441,0,.798-.222,.798-.496v-1.68c0-.275-.36-.498-.803-.496l-10.978,.043c-.439,.002-.793,.223-.793,.496v1.637c0,.274,.357,.496,.798,.496Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M355.237,393.833h11.186c.435,0,.791-.217,.798-.488l.049-1.843c.007-.279-.355-.506-.803-.504l-11.235,.044c-.439,.002-.793,.223-.793,.496v1.799c0,.274,.357,.496,.798,.496Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M369.615,393.833h9.254c.446,0,.805-.227,.798-.504l-.051-1.892c-.007-.272-.365-.49-.803-.488l-9.154,.036c-.433,.002-.786,.218-.793,.488l-.049,1.856c-.007,.277,.352,.504,.798,.504Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M328.117,393.833h9.869c.441,0,.798-.222,.798-.496v-1.731c0-.275-.36-.498-.803-.496l-9.869,.039c-.439,.002-.793,.223-.793,.496v1.692c0,.274,.357,.496,.798,.496Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M341.177,393.833h10.868c.441,0,.798-.222,.798-.496v-1.786c0-.275-.36-.498-.803-.496l-10.868,.043c-.439,.002-.793,.223-.793,.496v1.744c0,.274,.357,.496,.798,.496Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M409.25,391.667l.178,1.443c.05,.408,.597,.723,1.255,.723h8.963c.759,0,1.346-.415,1.248-.883l-.308-1.478c-.082-.392-.62-.684-1.256-.682l-8.833,.035c-.73,.003-1.303,.39-1.247,.842Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M382.514,393.982h9.439c.713,0,1.283-.368,1.258-.811l-.079-1.37c-.025-.423-.585-.757-1.266-.755l-9.396,.037c-.7,.003-1.262,.36-1.25,.796l.036,1.333c.011,.427,.571,.77,1.258,.77Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M396.068,393.833h10.49c.733,0,1.311-.388,1.255-.843l-.176-1.427c-.05-.41-.602-.725-1.263-.723l-10.394,.041c-.71,.003-1.275,.37-1.25,.811l.08,1.386c.024,.421,.58,.755,1.258,.755Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M289.968,393.833h6.63c.81,0,1.471-.404,1.484-.908l.019-.714c.014-.518-.66-.942-1.494-.939l-6.581,.026c-.781,.003-1.424,.382-1.472,.866l-.069,.689c-.053,.531,.626,.98,1.482,.98Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M277.431,393.833h7.963c.784,0,1.433-.379,1.482-.866l.067-.671c.053-.534-.631-.984-1.491-.98l-7.926,.031c-.759,.003-1.392,.361-1.468,.831l-.103,.639c-.088,.544,.598,1.016,1.477,1.016Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M265.487,393.833h7.356c.762,0,1.401-.359,1.477-.831l.101-.621c.088-.546-.604-1.019-1.486-1.016l-7.324,.029c-.737,.003-1.359,.342-1.461,.795l-.133,.593c-.125,.555,.569,1.051,1.47,1.051Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M300.465,393.833h10.292c.441,0,.798-.222,.798-.496v-1.624c0-.275-.36-.498-.803-.496l-10.248,.04c-.433,.002-.785,.218-.793,.488l-.043,1.584c-.008,.277,.352,.505,.798,.505Z"
						style="fill:#fff; opacity:.6;"
					/><path
						d="M556.506,438.663c-4.87,1.652-14.438,2.502-25.755,2.231-13.845-.331-55.85-2.546-100.389-1.398-49.142,1.266-193.009,.692-199.828,0-3.706-.376-6.929-1.671-9.172-2.938-.2,.827-.395,1.635-.578,2.401-1.187,4.961,3.195,9.609,9.068,9.621,34.36,.069,135.969,.246,154.47-.024,22.338-.327,70.042-2.612,87.079-1.959,12.634,.484,54.832,1.327,75.8,1.731,6.009,.116,10.527-4.629,9.304-9.665Z"
						style="opacity:.3;"
					/></g
				></g
			>
			<!-- 
			<g id="freepik--Mouse--inject-4"
				><g
					><path
						d="M579.808,404.274s-2.172-7.472,.815-9.877c2.987-2.405,20.004-2.487,28.569-.884,8.564,1.604,16.243,7.298,19.43,14.675,3.187,7.376,5.953,28.265-12.946,29.185-22.007,1.071-32.91-21.433-35.868-33.098Z"
						style="fill: hsl(210, 45%, 8%);
	;"
					/><path
						d="M593.935,392.436s3.611,2.534,5.008,4.408c1.397,1.874,4.539,4.779,7.216,4.03,2.677-.75,1.008-4.386-4.346-8.219,0,0-4.336-1.307-7.878-.219Z"
						style="fill:#407BFF;"
					/></g
				></g
			> -->

			<g id="freepik--Monitor--inject-4"
				><g
					><rect
						x="226.473"
						y="109.675"
						width="336.739"
						height="228.988"
						rx="4.009"
						ry="4.009"
						style="fill: hsl(210, 45%, 8%);
	;"
					/><path
						d="M353.421,332.865l-12.643,39.18c-.767,2.377,1.005,4.811,3.503,4.811h100.977c2.539,0,4.316-2.511,3.471-4.906l-13.795-39.085h-81.513Z"
						style="fill: hsl(210, 45%, 8%);
	;"
					/><rect
						x="234.539"
						y="116.663"
						width="320.607"
						height="187.129"
						style="opacity:.3;"
					/><rect
						x="240.469"
						y="121.461"
						width="308.746"
						height="182.331"
						style="fill:hsl(210, 45%, 4%)
						;"
					/><polygon
						points="351.966 338.663 437.396 338.663 441.158 349.323 348.526 349.323 351.966 338.663"
						style="opacity:.3;"
					/><path
						d="M234.539,201.251s155.814,54.173,167.125,30.956c11.311-23.217-73.223-44.648-27.979-66.079,45.243-21.431,181.461-39.29,181.461-39.29v51.196s-149.314-5.358-146.933,8.93c2.381,14.287,95.845,41.672,33.337,67.865-62.507,26.194-207.011,11.906-207.011,11.906v-65.484Z"
						style="fill:#fff; opacity:.1;"
					/></g
				></g
			>
		</g>
		<foreignObject x="0" y="0">
			<!--
			  In the context of SVG embedded in an HTML document, the XHTML
			  namespace could be omitted, but it is mandatory in the
			  context of an SVG document
			-->
			<div xmlns="http://www.w3.org/1999/xhtml">
				<VideoPlayer />
			</div>
		</foreignObject>
	</svg>
</TranWrapper>

<style>
	foreignObject {
		background: hsl(210, 45%, 4%);
		/* border-radius: 10px !important; */
		transform: translate(240px, 121px);
		height: 53.36%;
		width: 75.2%;
	}

	svg {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		/* display: flex; */
		background: hsla(0, 0%, 94%, 0.111);
		background: hsl(210, 45%, 4%);
		width: 100vw;
		/* border: 1px pink solid; */
		overflow-y: hidden;
		overflow-x: hidden;
		/* margin-top: 22rem; */
		/* transform: translateY(500px); */
		/* padding-bottom: 812rem; */
		/* transform: translate(-70px, 100px); */
	}

	/* Mobile First i.e Smaller to Larger Devices */
	/* X-Small devices (portrait phones, less than 576px) */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		* {
			background: red;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		* {
			background: black;
		}
		svg {
			height: 96vh;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		* {
			background: green;
		}
		svg {
			height: 96vh;
		}
	}
	/* X-Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		* {
			background: blue;
		}
		svg {
			height: 96vh;
		}
	}
	/* XX-Large devices (larger desktops, 1400px and up) */
	@media (min-width: 1400px) {
		* {
			background: pink;
		}
	}
</style>
