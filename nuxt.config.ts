// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@directus/sdk"],
    },
  },
  css: [
    "~/assets/main.css",
    "~/assets/header.css",
    "~/assets/hero.css",
    "~/assets/menu.css",
    "~/assets/contacts.css",
    "~/assets/buttons.css",
    "~/assets/footer.css",
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://sir-rabbit.ru",
      directus: {
        url: process.env.DIRECTUS_URL,
      },
    },
  },

  app: {
    head: {
      title: "Sir Rabbit - Ресторан в центре Москвы",
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
