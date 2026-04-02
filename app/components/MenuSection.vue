<template>
    <section class="s-menu">
        <div class="s-menu-container">

            <!-- Шапка: Заголовок и кнопка -->
            <div class="s-menu-header">
                <div class="s-menu-title-block">
                    <span class="s-menu-label">Меню</span>
                    <h2 class="s-menu-title">Популярные позиции</h2>
                </div>
            </div>

            <!-- Фильтры (Чипсы) -->
            <div class="s-menu-filters">
                <button class="s-menu-chip active">Все</button>
                <button class="s-menu-chip">Закуски</button>
                <button class="s-menu-chip">Горячее</button>
                <button class="s-menu-chip">Десерты</button>
                <button class="s-menu-chip">Бар</button>
            </div>

            <!-- Сетка карточек -->
            <div class="s-menu-grid">

                <!-- Карточка 1 -->
                <div v-for="item in menuItems" :key="item.id" class="s-menu-card">
                    <div class="s-menu-image-wrap">
                        <img :src="item.image" :alt="item.name">
                    </div>
                    <div class="s-menu-info">
                        <div class="s-menu-info-top">
                            <h3>{{ item.name }}</h3>
                            <span class="s-menu-price">{{ item.price }} ₽</span>
                        </div>
                        <p class="s-menu-desc">Свежий лосось, авокадо, цитрусовая заправка и тонкий баланс текстур.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>


</template>

// https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80

<script setup>
const menuItems = [
  { 
    id: 1, 
    name: 'Пицца Маргарита', 
    price: 550, 
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    id: 2, 
    name: 'Паста Карбонара', 
    price: 480, 
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    id: 3, 
    name: 'Салат Цезарь', 
    price: 420, 
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80' 
  }
]
</script>