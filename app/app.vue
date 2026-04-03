<template>
  <TheHeader :name="info?.name" :logo="getImageUrl(siteInfo.logo)" />
  <HeroSection />
  <MenuSection />
  <Contacts />
  <NuxtPage />
</template>

<script setup>
const { getItems } = useDirectusItems();

// Вызываем данные. Называем переменную 'siteData', чтобы не путать с меню
const { data: siteInfo, pending } = await useAsyncData('site_info', () =>
  getItems({
    collection: 'site_info',
    params: {
      fields: ['id', 'name', 'address', 'contacts', 'links', 'logo', 'yandex_maps_iframe', 'schedule'],
    }
  })
);


const info = computed(() => siteInfo.value || null);

const config = useRuntimeConfig();
const getImageUrl = (id) => {
  console.log(siteInfo.value.logo);
  return id ? `${config.public.directus.url}/assets/${id}?quality=10` : null;
}
</script>