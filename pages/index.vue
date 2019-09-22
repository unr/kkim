<template>
	<div class='container'>
		<Logo/>
		<h1 class='title'>kkim</h1>
		<h2 class='subtitle'>My divine Nuxt.js project</h2>
		<div class='text-overwatch'>OVERWATCH</div>
		<a href='https://nuxtjs.org/' target='_blank' class='text-red'>Documentation</a>
		<a href='https://github.com/nuxt/nuxt.js' target='_blank'>GitHub</a>

		<div class='mt-12'>
			<p>
				<strong>button colors</strong>
			</p>
			<a
				v-for='color in buttonColors'
				:key='color'
				:class='`btn-${color}`'
				class='btn m-4'
			>btn-{{ color }}-outline</a>
		</div>
		<div class='mt-12'>
			<p>
				<strong>outlined button colors</strong>
			</p>
			<a
				v-for='color in buttonColors'
				:key='color'
				:class='`btn-${color}-outline`'
				class='btn m-4'
			>btn-{{ color }}-outline</a>
		</div>
		<div class='mt-4'>
			<p>
				<strong>button sizes</strong>
			</p>
			<a class='btn btn-bloodorange btn-sm m-4'>btn-sm</a>
			<a class='btn btn-bloodorange m-4'>default</a>
			<a class='btn btn-bloodorange btn-lg m-4'>btn-lg</a>
		</div>

		<div class='mt-12'>
			<p>
				<strong>gradients</strong>
			</p>
			<div
				v-for='gradient in gradients'
				:key='gradient'
				:class='gradient'
				class='w-32 h-32 rounded inline-block m-4 shadow'
			/>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
	components: {
		Logo
	},
	data() {
		return {
			buttonColors: [
				'navy-light',
				'navy',
				'navy-dark',
				'orange',
				'bloodorange',
				'bloodorange-dark',
				'yellow',
				'teal-light',
				'teal'
			],
			gradients: [
				'bg-gradient-navy',
				'bg-gradient-orange',
				'bg-gradient-grey',
				'bg-gradient-csgo',
				'bg-gradient-dota-2',
				'bg-gradient-call-of-duty',
				'bg-gradient-hearthstone',
				'bg-gradient-league-of-legends',
				'bg-gradient-overwatch',
				'bg-gradient-starcraft',
				'bg-gradient-rivalry'
			]
		};
	}
};
</script>
