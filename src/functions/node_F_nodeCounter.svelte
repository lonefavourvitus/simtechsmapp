<script context="module">
	import { nodeStopper, drugStore } from '../stores';

	export function nodeActiony(node) {
		let noder;

		nodeStopper.subscribe((value) => {
			noder = value;
			console.log('nodeStopper from nodeAction func updated:', noder);
		});
		if (noder.includes(node.textContent)) {
			console.log(`${node.textContent} is already in $nodeStopper array, will not push.`);
			return;
		} else {
			noder.push(node.textContent);
			console.log('Node is: ', node, 'text content pushed:', noder);
		}
		console.log(noder);
		console.log('nodeStopper array is:', noder);

		return {
			destroy() {
				// noder = noder.filter((val) => val !== node.textContent);
				noder = [];

				console.log(noder);
				console.log(
					nodeStopper.subscribe((val) => {
						val = [];
						console.log(val);
					})
				);
			}
		};
	}
</script>
