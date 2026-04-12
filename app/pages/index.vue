<template>
    <HeroSection v-if="siteInfo" :name="siteInfo.name" />
    <MenuSection />
    <Contacts
        v-if="siteInfo && contacts"
        :schedule="siteInfo.schedule"
        :address="siteInfo.address"
        :contacts="contacts"
        :map-code="siteInfo.yandex_maps_iframe"
    />
</template>

<script setup lang="ts">
const { $directus, $readItems } = useNuxtApp();
import type { SiteInfo, Contact } from "~/models";

const config = useRuntimeConfig();

const siteUrl = 'https://sir-rabbit.ru';
const pageUrl = `${siteUrl}/`;
const previewImage = `${siteUrl}/og-preview.png`;


const { data: siteInfo } = await useAsyncData("site_info", () =>
    $directus.request<SiteInfo>($readItems("site_info")),
);

const { data: contacts } = await useAsyncData("contacts", () =>
    $directus.request<Contact[]>($readItems("contact")),
);
const seoTitle = computed(
    () => `${siteInfo.value?.name ?? "Sir Rabbit"} — ресторан • бар • караоке`,
);
const seoDescription = computed(
    () =>
        `${siteInfo.value?.name ?? "Sir Rabbit"}: уютный ресторан для красивых вечеров. Бронируйте стол онлайн и смотрите актуальное меню.`,
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
    ogImageAlt: "Open Graph превью ресторана Sir Rabbit",
    twitterCard: "summary_large_image",
    twitterTitle: () => seoTitle.value,
    twitterDescription: () => seoDescription.value,
    twitterImage: previewImage,
});


</script>

