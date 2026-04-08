<script setup lang="ts">
import type { Slide } from "~/models";
const { getItems } = useDirectusItems();
const config = useRuntimeConfig();

const { data: slides, pending } = await useAsyncData("hero-slides", () =>
    getItems<Slide>({
        collection: "gallery_item",
    }),
);

const activeIndex = ref(0);

const handleNext = () => {
    if (!slides.value) return; // Защита от ошибки, пока данные грузятся
    activeIndex.value = (activeIndex.value + 1) % slides.value.length;
};

const handlePrev = () => {
    if (!slides.value) return;
    activeIndex.value =
        (activeIndex.value - 1 + slides.value.length) % slides.value.length;
};

//для брэнда и основного текста
defineProps<{ name: string }>();
</script>

<template>
    <section class="hero z-1" id="about">
        <div class="-z-1 absolute right-[10%] bottom-[20%] text-[100pt] text-secondary opacity-[0.12] rotate-[15deg] pointer-events-none">   
            ♥
        </div>

        <div class="-z-1 absolute left-[10%] bottom-[50%] text-[100pt] text-secondary opacity-[0.12] rotate-[30deg] pointer-events-none">   
            ♠
            
        </div>       
        
        <div v-if="slides" class="container hero-grid section">
            <div class="hero-gallery reveal">
                <div class="hero-gallery-track">
                    <div
                        v-for="(slide, index) in slides"
                        :key="slide.id"
                        class="hero-gallery-slide"
                        :class="{ 'is-active': index === activeIndex }"
                    >
                        <img :src="getImageUrl(slide.image, { quality: 80 })" />
                    </div>
                </div>

                <!-- Навигация (Стрелки)  -->
                <div class="hero-gallery-nav">
                    <button
                        @click="handlePrev"
                        class="hero-gallery-arrow"
                        type="button"
                    >
                        ‹
                    </button>
                    <button
                        @click="handleNext"
                        class="hero-gallery-arrow"
                        type="button"
                    >
                        ›
                    </button>
                </div>

                <div class="hero-gallery-overlay">
                    <div class="hero-gallery-caption"></div>

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
                <h1>
                    <span class="brand-name">{{ name }}</span> — место для
                    красивых вечеров
                </h1>
                <span class="badge">Ресторан • Бар • Караоке</span>
                <div class="hero-actions reveal delay-2">
                    <NuxtLink  to="/menu" class="btn btn-secondary"
                        >Посмотреть меню  
                        
                        </NuxtLink> 
                    
                                   
    
                    <a
                        href="https://club-cafe.ru/reserve"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        >Забронировать</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>
