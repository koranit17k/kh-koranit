<script setup lang="ts">
defineProps<{
  title: string;
  percentage?: number | string;
  description?: string;
}>();
</script>

<template>
  <div
    class="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow h-full"
  >
    <div class="flex justify-between items-center mb-2">
      <h3 class="font-medium text-gray-900 dark:text-gray-100">{{ title }}</h3>
      <span
        v-if="percentage"
        class="text-sm text-gray-500 dark:text-gray-400 font-mono"
        >{{ percentage }}%</span
      >
    </div>
    <div
      v-if="percentage"
      class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
    >
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>

    <p v-if="description" class="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {{ description }}
    </p>
  </div>
</template>
