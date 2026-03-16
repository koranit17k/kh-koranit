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
      exclude: ["@nuxtjs/mdc"],
    },
  },
   studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'koranit.17k',
      repo: 'kh-koranit',
      branch: 'master' // ถ้า repo ใช้ master ก็เปลี่ยนเป็น master
    }
  }
});
