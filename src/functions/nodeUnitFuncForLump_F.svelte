<script context="module">
	// @ts-nocheck

	export const nodeUnitFunction = smoothAutoScrollToggler;
	export const scrollBehaviourProperty = { behavior: 'smooth' };

	console.log(scrollBehaviourProperty);

	function smoothAutoScrollToggler(node, options = {}) {
		const nodeId = node.getAttribute('id');
		const scrollOptions = {
			behavior: scrollBehaviourProperty.behavior || 'smooth',
			...options
		};
		console.log(node);
		node.style.scrollMarginTop = '75vh';
		node.scrollIntoView(scrollOptions);
		node.style.backgroundColor = 'hsla(250, 50%, 50%, 1)';
		setTimeout(() => {
			node.style.backgroundColor = '';
		}, 4000);
		console.log('Node', nodeId, 'is mounted');

		return {
			destroy() {
				console.log(
					'Alert!, Node',
					nodeId,
					'just got unmounted, removed from the DOM and destroyed😊'
				);
			}
		};
	}
</script>
