<script setup>
// Принимаем пропсы от app.vue
defineProps({
  name: String,
  logo: String // Тут уже придет готовая ссылка https://...
});
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="container nav">
        <div class="header-left">
        <NuxtLink to="/" class="logo">
          <!-- 1. Добавляем v-if, чтобы картинка не грузилась, если ссылки нет -->
          <img v-if="logo" :src="logo" :alt="name" class="logo-image">
        
          <span v-else class="brand-text">{{ name || 'Загрузка...' }}</span>
        </NuxtLink>
        </div>

        <nav class="menu">
          <NuxtLink to="/#about">О нас</NuxtLink>
          <NuxtLink to="/#menu">Меню</NuxtLink>
          <NuxtLink to="/#contacts">Контакты</NuxtLink>
        </nav>

        <div class="header-actions">
          <a href="#" target="_blank" rel="noopener noreferrer"
            class="btn btn-primary btn-sm">
            Забронировать
          </a>
        </div>
      </div>
    </header>
  </div>
</template>