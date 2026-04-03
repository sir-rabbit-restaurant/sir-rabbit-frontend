
<script setup>
const { getItems } = useDirectusItems();
const config = useRuntimeConfig();

const { data: slides, pending } = await useAsyncData('hero-slides', () => 
  getItems({
    collection: 'gallery_item', 
    params: {
      fields: ['image'],
      // sort: 'sort'
    }
  })
);

onMounted(() => {
  console.log('Слайды для галереи:', slides.value);
  console.log('Слайды для галереи:', slides.value.images);
});

const activeIndex = ref(0);
const getImageUrl = (id) => `${config.public.directus.url}/assets/${id}?quality=80`;


const handleNext = () => {
  if (!slides.value) return; // Защита от ошибки, пока данные грузятся
  activeIndex.value = (activeIndex.value + 1) % slides.value.length;
};

const handlePrev = () => {
  if (!slides.value) return;
  activeIndex.value = (activeIndex.value - 1 + slides.value.length) % slides.value.length;
};


//для брэнда и основного текста
defineProps({
  name: String
});
</script>

<template>  
<section class="hero">
    <div v-if="!pending && slides" class="container hero-grid section">
      <div class="hero-gallery reveal">
        <div class="hero-gallery-track">
          <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          class="hero-gallery-slide"
          :class="{ 'is-active': index === activeIndex}"

        >
      
      <img :src="getImageUrl(slide.image)">
      </div>
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
              v-for="(slide, index) in slides" 
              :key="'dot-' + index"
              :class="{ 'is-active': index === activeIndex }"
              @click="activeIndex = index"
            ></span>
          </div>
        </div>
      </div> 


      <div class="hero-info reveal delay-1">
        <h1><span class="brand-name">{{ name }}</span> — место для красивых вечеров</h1>
        <span class="badge">Ресторан • Бар • Караоке</span>
        <div class="hero-actions reveal delay-2">
          <a href="#menu" class="btn btn-secondary">Посмотреть меню</a>
          <a href="https://club-cafe.ru/reserve" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Забронировать</a>
        </div>
      </div>
    </div>
</section>
</template>
