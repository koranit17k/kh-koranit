<script setup lang="js">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <iframe  v-else
    :src="route.path" 
    style="width: 100%; height: 100vh; border: none;"
    loading="lazy"
  >
    Your browser does not support iframes.
  </iframe>
</template>
