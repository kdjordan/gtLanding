<template>
  <nav class="bg-primary-900 text-secondary">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <!-- Replace with your actual logo -->
        <svg class="h-8 w-8 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span class="font-display font-bold text-xl uppercase">Glotell</span>
      </div>
      <div class="hidden md:flex space-x-4">
        <a href="#" class="hover:text-primary transition-colors">Coverage</a>
        <a href="#" class="hover:text-primary transition-colors">About</a>
        <a href="#" class="hover:text-primary transition-colors">Help</a>
        <a href="#" class="hover:text-primary transition-colors">For Business</a>
      </div>
      <div>
        <a href="#" class="bg-primary text-secondary px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors inline-block">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Add any necessary imports and logic here
</script>