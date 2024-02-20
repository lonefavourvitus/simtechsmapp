<script>
	export let label = '';
	export let value = '';
	export let placeholder = '';

	function handleChange(event) {
		value = event.target.value;
	}
</script>

<label>
	{{ label }}
	<input type="text" bind:value on:input={handleChange} {placeholder} />
</label>
