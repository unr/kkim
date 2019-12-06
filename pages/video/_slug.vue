<template>
	<div>
		<h1 v-text='video.name' />
		<span class='video-meta'>
			<span>
				<strong>Length:</strong>
				{{ video.length }}
			</span>
			<span>
				<strong>Released:</strong>
				{{ video.date }}
			</span>
		</span>
		<p v-text='video.description' />

		<VideoEmbed :url='video.url' />
	</div>
</template>

<script>
import { videos } from '~/data/HomepageVideos';
import VideoEmbed from '~/components/VideoEmbed';

export default {
	name: 'SingleVideo',
	components: {
		VideoEmbed
	},

	asyncData({ error, params }) {
		const video = videos.find(video => video.slug === params.slug);
		if (!video) {
			console.log('no video found');
			return error('could not load video');
		}
		return { video };
	}
};
</script>
