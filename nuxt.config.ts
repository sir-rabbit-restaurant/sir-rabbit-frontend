// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: [
    "~/assets/main.css",
    "~/assets/header.css",
    "~/assets/hero.css",
    "~/assets/menu.css",
    "~/assets/contacts.css",
    "~/assets/buttons.css",
  ],
  modules: ["nuxt-directus"],
  directus: {
    url: process.env.DIRECTUS_URL,
  },
  runtimeConfig: {
    public: {
      directus: {
        // token: process.env.DIRECTUS_TOKEN // Nuxt подхватит это из .env
      },
    },
  },
});
