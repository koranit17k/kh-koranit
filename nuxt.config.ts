// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content", "@nuxt/ui"],
  css: ["@/assets/main.css"],
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "vercel"
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nuxtjs/mdc"],
    },
  },
});
