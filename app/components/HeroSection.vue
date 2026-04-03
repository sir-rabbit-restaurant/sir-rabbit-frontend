<template>  
<section class="hero">
    <div class="container hero-grid section">
      <div class="hero-gallery reveal">
        <div class="hero-gallery-track">
          <div 
            v-for="(slide, index) in slidesData" 
            :key="slide.id"
            class="hero-gallery-slide"
            :class="{ 'is-active': index === currentIndex }"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
        </div>

        <!-- Навигация (Стрелки)  -->
        <div class="hero-gallery-nav">
          <button @click="handlePrev" class="hero-gallery-arrow" type="button">‹</button>
          <button @click="handleNext" class="hero-gallery-arrow" type="button">›</button>
        </div>

        
        <div class="hero-gallery-overlay">
          <div class="hero-gallery-caption">
          </div>
          
          <div class="hero-gallery-dots">
            <span 
              v-for="(slide, index) in slidesData" 
              :key="'dot-' + index"
              :class="{ 'is-active': index === currentIndex }"
              @click="currentIndex = index"
            ></span>
          </div>
        </div>
      </div> 


      <div class="hero-info reveal delay-1">
        <div class="badge">Ресторан • Бар • Караоке</div>
        <h1><span class="brand-name">Сэр Кролик</span> — место для красивых вечеров</h1>
        <div class="hero-actions reveal delay-2">
          <a href="#menu" class="btn btn-secondary">Посмотреть меню</a>
          <a href="https://club-cafe.ru/reserve" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Забронировать</a>
        </div>
      </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue'

// Данные
const slidesData = ref([
  { id: 1, image: '/imagerabbit/1.webp' },
  { id: 2, image: '/imagerabbit/2.webp' },
  { id: 3, image: '/imagerabbit/3.webp' }
]) // сюда добавляться новые слайды, если нужно

const currentIndex = ref(0)

// Функции переключения (убрал лишний onMounted для простоты)
const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % slidesData.value.length
}

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + slidesData.value.length) % slidesData.value.length
}
</script>
