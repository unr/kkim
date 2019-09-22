<template>
	<div v-if='videos.length > 0' class='video-list'>
		<div v-for='(video, index) in videos' :key='`video-${index}`' class='video-list-item'>
			<div class='thumbnail'>
				<img :src='require(`~/assets/images/thumbnails/${video.thumbnail}`)' />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VideoList',
	props: {
		videos: {
			type: Array,
			default: []
		}
	}
};
</script>

<style lang="postcss">
</style>
