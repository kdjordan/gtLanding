<template>
  <section class="bg-gray-900 text-secondary py-12">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div v-for="(stat, index) in stats" :key="index" class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
          <div class="text-sm uppercase">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '100%', label: 'North American Coverage' },
  { value: '100+', label: 'Networks' },
  { value: '24/7', label: 'Support' },
  { value: '5M', label: 'Daily Minutes' },
];
</script>
