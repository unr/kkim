<template>
	<div class='container'>
		<div class='mt-12'>
			<p>
				<strong>button colors</strong>
			</p>
			<a
				v-for='color in buttonColors'
				:key='color'
				:class='`btn-${color}`'
				class='btn m-4'
			>btn-{{ color }}</a>
			<div class='bg-gradient-navy'>
				<a
					v-for='color in buttonColors'
					:key='color'
					:class='`btn-${color}`'
					class='btn m-4'
				>btn-{{ color }}</a>
			</div>
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
			<div class='bg-gradient-navy'>
				<a
					v-for='color in buttonColors'
					:key='color'
					:class='`btn-${color}-outline`'
					class='btn m-4'
				>btn-{{ color }}-outline</a>
			</div>
		</div>
		<div class='mt-12'>
			<p>
				<strong>text-only button colors</strong>
			</p>
			<a
				v-for='color in buttonColors'
				:key='color'
				:class='`btn-${color}-text`'
				class='btn m-4'
			>btn-{{ color }}-text</a>
			<div class='bg-gradient-navy'>
				<a
					v-for='color in buttonColors'
					:key='color'
					:class='`btn-${color}-text`'
					class='btn m-4'
				>btn-{{ color }}-text</a>
			</div>
		</div>
		<div class='mt-12'>
			<p>
				<strong>gradient buttons</strong>
			</p>
			<a
				v-for='color in gradients'
				:key='color'
				:class='`btn-${color}-gradient`'
				class='btn m-4'
			>btn-{{ color }}-gradient</a>
			<div class='bg-gradient-navy'>
				<a
					v-for='color in gradients'
					:key='color'
					:class='`btn-${color}-gradient`'
					class='btn m-4'
				>btn-{{ color }}-gradient</a>
			</div>
		</div>
		<div class='mt-12'>
			<p>
				<strong>button sizes</strong>
			</p>
			<a class='btn btn-bloodorange btn-sm m-4'>btn-sm</a>
			<a class='btn btn-bloodorange m-4'>default</a>
			<a class='btn btn-bloodorange btn-lg m-4'>btn-lg</a>
			<a class='btn btn-bloodorange btn-fab m-4'>btn-fab</a>
		</div>
		<div class='mt-4'>
			<p>
				<strong>button modifiers</strong>
			</p>
			<a class='btn btn-border btn-black m-4'>black w/ btn-border</a>
		</div>
		<div class='mt-4'>
			<p>
				<strong>button combinations</strong>
			</p>
			<a class='btn btn-green btn-mini m-4'>green btn-mini</a>
			<a class='btn btn-red-outline btn-mini m-4'>red-outline btn-mini</a>
			<a class='btn btn-navy btn-fab m-4'>navy btn-fab</a>
			<a class='btn btn-navy-gradient btn-border btn-fab m-4'>navy-gradient btn-fab</a>
			<a class='btn btn-orange-gradient btn-border btn-fab m-4'>orange-gradient btn-fab</a>
			<div class='bg-gradient-navy'>
				<a class='btn btn-navy-gradient btn-border btn-fab m-4'>navy-gradient btn-fab</a>
				<a class='btn btn-orange-horizontal-gradient btn-border btn-fab m-4'>orange-gradient btn-fab</a>
				<a class='btn btn-white-outline btn-lg m-4'>white-outline btn-lg</a>
			</div>
		</div>

		<div class='mt-12'>
			<p>
				<strong>chips (not buttons)</strong>
			</p>
			<div class='chip m-4'>.chip</div>
			<div v-for='chip in chips' :key='chip' :class='[`chip-${chip}`]' class='chip m-4'>.chip-{{chip}}</div>
		</div>

		<div class='mt-12'>
			<p>
				<strong>gradients</strong>
			</p>
			<div
				v-for='gradient in gradients'
				:key='gradient'
				:class='[ `bg-gradient-${gradient}`, `hover:bg-gradient-${gradient}-hover` ]'
				class='w-32 h-32 rounded inline-block m-4 shadow'
			/>
		</div>

		<div class='mt-12'>
			<p>
				<strong>shadows & elevation</strong>
			</p>
			<div
				v-for='shadow in shadows'
				:key='shadow'
				:class='[ shadow ]'
				class='w-32 h-32 rounded inline-block m-4'
			/>
			<div class='bg-teal'>
				<div class='w-32 h-32 rounded inline-block m-4 shadow-dark'/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonColors: [
				'white',
				'black',
				'navy-light',
				'navy',
				'navy-dark',
				'orange',
				'bloodorange',
				'yellow',
				'teal-light',
				'teal',
				'red',
				'red-light',
				'green',
				'green-light'
			],
			chips: ['teal', 'red', 'red-light', 'green', 'green-light', 'orange'],
			gradients: [
				'navy',
				'orange',
				'orange-horizontal',
				'grey',
				'csgo',
				'dota-2',
				'call-of-duty',
				'hearthstone',
				'league-of-legends',
				'overwatch',
				'starcraft',
				'rivalry'
			],
			shadows: ['shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-fab']
		};
	}
};
</script>
