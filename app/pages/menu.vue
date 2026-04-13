<template>
    <MenuSection :show-full-list="true" />
</template>

<script setup lang="ts">
const { $directus, $readItems } = useNuxtApp();
import type { SiteInfo } from "~/models";
import { DEFAULT_SITE_NAME } from "~/data";

// Загружаем инфо о сайте (если вы не используете shared state/Pinia)
const { data: siteInfo } = await useAsyncData("site_info", () =>
    $directus.request<SiteInfo>($readItems("site_info")),
);

const siteConfig = useSiteConfig();
const pageUrl = `${siteConfig.url}/menu`; // URL страницы меню

const title = computed(
    () => `Меню ресторана ${siteInfo.value?.name ?? DEFAULT_SITE_NAME}`,
);
const description = computed(
    () =>
        `Ознакомьтесь с актуальным меню ресторана ${siteInfo.value?.name ?? DEFAULT_SITE_NAME}. Изысканные блюда, авторские коктейли и специальные предложения.`,
);

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: pageUrl,
    ogType: "website",
});

useHead({
    link: [{ rel: "canonical", href: pageUrl }],
});
</script>
