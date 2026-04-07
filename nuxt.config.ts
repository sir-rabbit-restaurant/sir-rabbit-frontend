// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/header.css",
    "~/assets/hero.css",
    "~/assets/menu.css",
    "~/assets/contacts.css",
    "~/assets/buttons.css",
    "~/assets/footer.css",
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
