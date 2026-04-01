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
                <div class="s-menu-card">
                    <div class="s-menu-image-wrap">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80" alt="Тар-тар">
            
                    </div>
                    <div class="s-menu-info">
                        <div class="s-menu-info-top">
                            <h3>Тар-тар из лосося</h3>
                            <span class="s-menu-price">790 ₽</span>
                        </div>
                        <p class="s-menu-desc">Свежий лосось, авокадо, цитрусовая заправка и тонкий баланс текстур.</p>
                    </div>
                </div>

                <!-- Карточка 2 -->
                <div class="s-menu-card">
                    <div class="s-menu-image-wrap">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80">
                        
                    </div>
                    <div class="s-menu-info">
                        <div class="s-menu-info-top">
                            <h3>Брускетты с ростбифом</h3>
                            <span class="s-menu-price">640 ₽</span>
                        </div>
                        <p class="s-menu-desc">Хрустящий хлеб, нежный ростбиф, сливочный соус и зелень.</p>
                    </div>
                </div>

                <!-- Карточка 3 -->
                <div class="s-menu-card">
                    <div class="s-menu-image-wrap">
                        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80" alt="Стейк">
                        
                    </div>
                    <div class="s-menu-info">
                        <div class="s-menu-info-top">
                            <h3>Стейк из мраморной говядины</h3>
                            <span class="s-menu-price">1490 ₽</span>
                        </div>
                        <p class="s-menu-desc">Подаётся с соусом demi-glace и запечёнными овощами.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>


</template>