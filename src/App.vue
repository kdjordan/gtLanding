<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <PricingSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import StatsSection from './components/StatsSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import PricingSection from './components/PricingSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<style>
/* Remove any default styles here */
</style>
