<template>
    <HeroSection v-if="siteInfo" :name="siteInfo.name" />
    <MenuSection />
    <ContactsSection
        v-if="siteInfo && contacts"
        :schedule="siteInfo.schedule"
        :address="siteInfo.address"
        :contacts="contacts"
        :map-code="siteInfo.yandex_maps_iframe"
    />
</template>

<script setup lang="ts">
import { DEFAULT_SITE_NAME } from "~/data";
const { $directus, $readItems } = useNuxtApp();
import type { SiteInfo, Contact } from "~/models";

const siteConfig = useSiteConfig();
const pageUrl = `${siteConfig.url}/`;
const previewImage = `${siteConfig.url}/og-preview.png`;

const { data: siteInfo } = await useAsyncData("site_info", () =>
    $directus.request<SiteInfo>($readItems("site_info")),
);

const { data: contacts } = await useAsyncData("contacts", () =>
    $directus.request<Contact[]>($readItems("contact")),
);
const seoTitle = computed(
    () =>
        `${siteInfo.value?.name ?? DEFAULT_SITE_NAME} — ресторан • бар • караоке`,
);
const seoDescription = computed(
    () =>
        `${siteInfo.value?.name ?? DEFAULT_SITE_NAME}: уютный ресторан для красивых вечеров. Бронируйте стол онлайн и смотрите актуальное меню.`,
);

useSeoMeta({
    title: () => seoTitle.value,
    description: () => seoDescription.value,
    ogType: "website",
    ogLocale: "ru_RU",
    ogTitle: () => seoTitle.value,
    ogDescription: () => seoDescription.value,
    ogUrl: pageUrl,
    ogImage: previewImage,
    ogImageAlt: "Open Graph превью ресторана " + DEFAULT_SITE_NAME,
    twitterCard: "summary_large_image",
    twitterTitle: () => seoTitle.value,
    twitterDescription: () => seoDescription.value,
    twitterImage: previewImage,
});

useHead({
    link: [{ rel: "canonical", href: pageUrl }],
});
</script>
