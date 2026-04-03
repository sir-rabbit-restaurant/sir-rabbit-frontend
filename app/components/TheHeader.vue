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
        <NuxtLink to="/" class="logo">
          <!-- 1. Добавляем v-if, чтобы картинка не грузилась, если ссылки нет -->
          <img v-if="logo" :src="logo" :alt="name" class="logo-image">
          <!-- 2. Пока лого нет, можно вывести просто текст названия -->
          <span v-else class="brand-text">{{ name || 'Загрузка...' }}</span>
        </NuxtLink>

        <nav class="menu">
          <a href="#about">О нас</a>
          <a href="#menu">Меню</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div class="header-actions">
          <a href="https://club-cafe.ru/reserve" target="_blank" rel="noopener noreferrer"
            class="btn btn-primary btn-sm">
            Забронировать
          </a>
        </div>
      </div>
    </header>
  </div>
</template>