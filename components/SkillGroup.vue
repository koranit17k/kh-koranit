<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="my-6">
    <h3
      v-if="title"
      class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100"
    >
      {{ title }}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <slot />
    </div>
  </div>
</template>
