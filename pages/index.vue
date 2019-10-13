<template>
	<div>
		<p>Brief description about kevin, what he's looking for, and some filler words to crush that SEO Metric.</p>
		<VideoList :videos='videos' />
	</div>
</template>

<script>
import { videos } from '~/data/HomepageVideos';
import VideoList from '~/components/VideoList';

export default {
	components: { VideoList },
	data() {
		return { videos };
	}
};
</script>
