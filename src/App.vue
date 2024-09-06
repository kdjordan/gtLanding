<template>
	<div id="app" class="tracking-wide w-full">
		<NavBar />

		<HeroSection />

		<FeaturesSection />

		<TestimonialsSection />

		<FooterSection />
	</div>
</template>

<script setup>
	import NavBar from './components/NavBar.vue';
	import HeroSection from './components/HeroSection.vue';
	import FeaturesSection from './components/FeaturesSection.vue';
	import TestimonialsSection from './components/TestimonialsSection.vue';
	import FooterSection from './components/FooterSection.vue';
</script>

<style>
	#app {
		width: 100%;
		overflow-x: hidden;
	}

	/* Remove any default styles here */
</style>
