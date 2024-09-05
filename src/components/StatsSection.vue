<template>
  <section class="flex justify-between py-8 border-t border-b border-gray-700 container mx-auto">
    <div v-for="(stat, index) in stats" :key="index" class="text-center">
      <div class="text-3xl font-bold">{{ stat.value }}</div>
      <div class="text-sm text-gray-400">{{ stat.label }}</div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '2.4M', label: 'Users' },
  { value: '7M', label: 'Websites' },
  { value: '7.4%', label: 'Conversion' },
  { value: '49K', label: 'Reviews' },
];
</script>
