<template>
	<div class='container antialiased'>
		<div class='flex justify-between items-center py-4'>
			<NuxtLink to='/' class='logo'>
				<img src='~/assets/images/kitb.svg' alt='Kit B Films' />
			</NuxtLink>
			<Navigation />
		</div>
		<Nuxt />
		<div class='mt-8'>
			<a href='https://www.youtube.com/channel/UCcw_OTris0-3fgRq0ted4HQ' target='_blank'>Youtube</a>
		</div>
	</div>
</template>

<script>
import Navigation from '~/components/Navigation';

export default {
	name: 'DefaultLayout',
	components: {
		Navigation
	}
};
</script>

<style lang="postcss">
.logo {
	display: inline-block;
}
</style>
