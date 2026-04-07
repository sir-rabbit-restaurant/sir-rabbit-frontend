<template>
    <TheHeader v-if="siteInfo" :logo="getImageUrl(siteInfo.logo)" />
    <HeroSection v-if="siteInfo" :name="siteInfo.name" />
    <MenuSection />
    <Contacts
        v-if="siteInfo && contacts"
        :schedule="siteInfo.schedule"
        :address="siteInfo.address"
        :contacts="contacts"
        :map-code="siteInfo.yandex_maps_iframe"
    />
    <TheFooter v-if="siteInfo && contacts && links"
        :schedule="siteInfo.schedule"
        :address="siteInfo.address"
        :contacts="contacts"
        :links="links"        
        />
    <NuxtPage />
</template>

<script setup lang="ts">
import type { SiteInfo, Link, Contact } from "./models";

const { getItems, getSingletonItem } = useDirectusItems();

// Вызываем данные. Называем переменную 'siteData', чтобы не путать с меню
const { data: siteInfo, pending } = await useAsyncData("site_info", () =>
    getSingletonItem<SiteInfo>({
        collection: "site_info",
    }),
);

const { data: links } = await useAsyncData("links", () =>
    getItems<Link>({ collection: "link" }),
);
const { data: contacts } = await useAsyncData("contacts", () =>
    getItems<Contact>({ collection: "contact" }),
);
</script>
