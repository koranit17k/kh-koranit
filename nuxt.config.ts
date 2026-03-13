// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  extends : "docus",
  modules: ["nuxt-studio"],
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "vercel"
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nuxtjs"],
    },
  },
});
