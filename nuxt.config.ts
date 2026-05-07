// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends : "docus",
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "vercel"
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nuxtjs/mdc"],
    },
  }
});
