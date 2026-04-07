<template>
    <TheHeader v-if="siteInfo" :logo="getImageUrl(siteInfo.logo)" />
    <NuxtPage />
    <TheFooter
        v-if="siteInfo && contacts && links"
        :schedule="siteInfo.schedule"
        :address="siteInfo.address"
        :contacts="contacts"
        :links="links"
    />
</template>

<script setup lang="ts">
import type { SiteInfo, Link, Contact } from "./models";

const { getItems, getSingletonItem } = useDirectusItems();

// Вызываем данные. Называем переменную 'siteData', чтобы не путать с меню
const { data: siteInfo } = await useAsyncData("site_info", () =>
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
