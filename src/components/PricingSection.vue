<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Start building for free, then add a plan to go live</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(plan, index) in plans" :key="index" class="bg-gray-800 p-6 rounded-lg text-center">
          <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
          <div class="text-4xl font-bold mb-4">${{ plan.price }}</div>
          <ul class="mb-6">
            <!-- Add plan features here -->
          </ul>
          <button class="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors">
            {{ plan.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  { name: 'Free', price: '0', cta: 'Get started' },
  { name: 'Pro', price: '47', cta: 'Go Pro' },
  { name: 'Enterprise', price: '127', cta: 'Contact us' },
];
</script>