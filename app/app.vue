<template>
    <TheHeader
        v-if="siteInfo"
        :name="siteInfo.name"
        :logo="getImageUrl(siteInfo.logo)"
    />
    <NuxtPage />
    <TheFooter
        v-if="siteInfo && contacts && links"
        :contacts="contacts"
        :links="links"
        :info="siteInfo"
    />
</template>

<script setup lang="ts">
const { $directus, $readItems } = useNuxtApp();
import type { SiteInfo, Link, Contact, Slide } from "./models";

const { data: siteInfo } = await useAsyncData("site_info", () =>
    $directus.request<SiteInfo>($readItems("site_info")),
);
const { data: slides, pending } = await useAsyncData("hero-slides", () =>
    $directus.request<Slide[]>($readItems("gallery_item")),
);

const { data: links } = await useAsyncData("links", () =>
    $directus.request<Link[]>($readItems("link")),
);
const { data: contacts } = await useAsyncData("contacts", () =>
    $directus.request<Contact[]>($readItems("contact")),
);
</script>
