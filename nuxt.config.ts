// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { url } from "node:inspector";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "@directus/sdk",
        "swiper/vue",
      ],
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
      directus: {
        url: process.env.DIRECTUS_URL,
      },
    },
  },

  app: {
    head: {
      title: "Сэр Кролик",
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

  site: {
    url: "https://sir-rabbit.ru",
    name: "Сэр Кролик",
  },

  modules: ["@nuxtjs/seo"],
});
