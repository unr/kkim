<template>
	<div class='embed-container'>
		<iframe src='https://www.youtube.com/embed/05_3QHtVMKk' frameborder='0' allowfullscreen />
	</div>
</template>

<script>
export default {
	name: 'VideoEmbed',
	props: {
		url: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="postcss">
.embed-container {
	@apply relative h-0 overflow-hidden max-w-full;
	padding-bottom: 56.25%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
	@apply absolute top-0 left-0 w-full h-full;
}
</style>
