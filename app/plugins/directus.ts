import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const directus = createDirectus(
    config.public.directus.url || "https://api.sir-rabbit.ru",
  ).with(rest());
  return {
    provide: { directus, readItem, readItems },
  };
});
