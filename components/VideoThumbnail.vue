<template>
	<NuxtLink :to='`/video/${video.slug}`' class='video-thumbnail'>
		<div
			:style='style'
			class='absolute inset-0 bg-cover bg-center flex items-center justify-center flex-col text-white text-center'
		/>
	</NuxtLink>
</template>

<script>
export default {
	name: 'VideoThumbnail',
	props: {
		video: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			thumbnail: require(`~/assets/images/thumbnails/${this.video.thumbnail}`)
		};
	},
	computed: {
		style() {
			return {
				backgroundImage: `url(${this.thumbnail})`
			};
		}
	}
};
</script>

<style lang="postcss">
.video-thumbnail {
	@apply relative block;
	font-size: 48px;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	color: transparent;
	&::before {
		display: block;
		content: '';
		width: 100%;
		padding-top: 56.25%; /* 16:9 */
	}
	&::after {
		@apply absolute inset-0;
		background: rgba(0, 0, 0, 0.3) url('~assets/images/play.svg') no-repeat
			center center;
		content: '';
		opacity: 0;
		will-change: opacity;
		transition: opacity 0.3s ease-in;
	}
	&:hover {
		@apply cursor-pointer;
		&::after {
			opacity: 1;
		}
	}
}

/* hover parent link */
a:hover .video-thumbnail div {
	background-size: 130%;
}
</style>
