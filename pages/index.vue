<template>
	<div>
		Gonna put video list in here?
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
