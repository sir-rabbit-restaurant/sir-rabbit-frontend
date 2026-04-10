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

const { data: siteInfo } = await useAsyncData("site_info", () =>
    $directus.request<SiteInfo>($readItems("site_info")),
);

const { data: contacts } = await useAsyncData("contacts", () =>
    $directus.request<Contact[]>($readItems("contact")),
);
</script>
