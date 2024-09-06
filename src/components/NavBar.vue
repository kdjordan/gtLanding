<template>
  <nav ref="navbar" class="bg-stone-300 text-secondary py-4 sticky top-0 z-50 transition-all duration-300" :class="{ 'translate-y-[-100%]': isHidden }">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="bg-primary rounded-md shadow-lg overflow-hidden">
        <div class="flex items-center px-4 py-2">
          <svg class="h-8 w-8 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="tracking-widest text-black font-display font-bold text-xl uppercase">GLOTELL</span>
        </div>
      </div>
      <!-- Hamburger menu icon -->
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-4 items-center">
        <a v-for="link in links" :key="link.href" :href="link.href" @click.prevent="scrollTo(link.href)" class="text-black font-semibold hover:text-primary transition-colors">
          {{ link.text }}
        </a>
        <a href="mailto:support.wholesale@v-tell.com" target="_blank" rel="noopener noreferrer" class="bg-primary text-secondary px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors inline-block">
          Contact
        </a>
      </div>
    </div>
    <!-- Mobile menu with transition -->
    <transition name="slide-down">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-stone-300 z-50 flex flex-col items-center justify-center">
        <button @click="toggleMenu" class="absolute top-4 right-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="flex flex-col space-y-4 items-center">
          <a v-for="link in links" :key="link.href" :href="link.href" @click.prevent="scrollTo(link.href); toggleMenu();" class="text-black font-semibold hover:text-primary transition-colors text-xl">
            {{ link.text }}
          </a>
          <a href="mailto:support.wholesale@v-tell.com" target="_blank" rel="noopener noreferrer" class="bg-primary text-secondary px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors inline-block text-xl">
            Contact
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { href: '#hero', text: 'Home' },
  { href: '#features', text: 'About' },
  { href: '#testimonials', text: 'Location' },
];

const scrollTo = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const navbar = ref(null);
const isHidden = ref(false);
let lastScrollY = 0;
const scrollThreshold = 50; // Adjust this value to change sensitivity

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY < lastScrollY) {
    // Scrolling up
    isHidden.value = false;
  } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
    // Scrolling down and past the threshold
    isHidden.value = true;
  }
  
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* Add any additional styles here if needed */

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
}
</style>