<template>
	<div v-if='videos.length > 0' class='video-list'>
		<a
			v-for='(video, index) in videos'
			:key='`video-${index}`'
			class='video-list-item block mb-8 cursor-pointer'
		>
			<VideoThumbnail :video='video' />
			<div class='mt-1'>
				<span class='text-lg'>{{ video.name }}</span>
				<span class='text-gray-600' v-text='video.length' />
			</div>
		</a>
	</div>
</template>

<script>
import VideoThumbnail from '~/components/VideoThumbnail';

export default {
	name: 'VideoList',
	props: {
		videos: {
			type: Array,
			default: []
		}
	},
	components: {
		VideoThumbnail
	}
};
</script>

<style lang="postcss">
@media screen and (min-width: 500px) {
	.video-list {
		@apply flex flex-wrap justify-between mt-8;
	}
	.video-list-item {
		flex: 0 calc(50% - 1rem);
	}
}
</style>
