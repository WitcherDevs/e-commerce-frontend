// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "RiBuy | Dünya'nın Satış Platformu",
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/icon", "nuxt-swiper"],
});
