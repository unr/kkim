<template>
	<ul class='navigation'>
		<li>
			<NuxtLink to='/' class='nav-item'>Videos</NuxtLink>
		</li>
		<li>
			<NuxtLink to='/about' class='nav-item'>About</NuxtLink>
		</li>
		<li>
			<NuxtLink to='/contact' class='nav-item'>Contact</NuxtLink>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Navigation'
};
</script>

<style lang="postcss">
.navigation {
	@apply p-0 m-0 list-none;
	& li {
		@apply inline;
		& + li {
			@apply ml-4;
		}
	}
}
.nav-item {
	@apply inline-block p-2;
	@apply leading-none text-sm uppercase font-display text-gray-700;
	@apply border-b-2 border-transparent;
	&.nuxt-exact-link-active {
		@apply border-b-2 border-gray-700;
	}
	&:hover {
		@apply text-gray-900 border-b-2 border-gray-900;
	}
}
</style>
