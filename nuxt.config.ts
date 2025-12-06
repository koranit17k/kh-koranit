// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  css: ["@/assets/main.css"],
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    }
  },
  vite: {
    optimizeDeps: {
      include: ['@nuxtjs/mdc']
    }
  }
})
