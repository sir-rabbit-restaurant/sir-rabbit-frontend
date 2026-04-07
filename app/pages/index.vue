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
import type { SiteInfo, Contact } from "~/models";

const { getItems, getSingletonItem } = useDirectusItems();

const { data: siteInfo } = await useAsyncData("site_info", () =>
    getSingletonItem<SiteInfo>({
        collection: "site_info",
    }),
);

const { data: contacts } = await useAsyncData("contacts", () =>
    getItems<Contact>({ collection: "contact" }),
);
</script>
