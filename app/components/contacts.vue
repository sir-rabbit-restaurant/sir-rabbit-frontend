<template> 

    <section class="s-contacts ">
  <div class="s-contacts-container">
    
    <!-- Заголовок секции -->
    <div class="s-contacts-head">
      <span class="s-contacts-subtitle">Контакты</span>
      <h2 class="s-contacts-title">Как нас найти</h2>
    </div>

    <div class="s-contacts-grid">
      <!-- ЛЕВАЯ КОЛОНКА: КАРТА -->
      <div class="s-contacts-map-wrap">
        <!-- Сюда потом вставишь скрипт Яндекс.Карт или Google -->
        <div class="map-placeholder">
          <div class="map-pin">📍</div>
          <span>Здесь будет интерактивная карта</span>
        </div>
      </div>

      <!-- ПРАВАЯ КОЛОНКА: ИНФО-КАРТОЧКИ -->
      <div class="s-contacts-details">
        <div class="contacts-card">
          <span class="contact-label">Телефон</span>
          <a href="tel:+79175030099" class="contact-value">+7 (917) 503-00-99</a>
        </div>

        <div class="contacts-card">
          <span class="contact-label">Адрес</span>
          <address class="contact-value">Королёв, ул. Ленина, 10/6</address>
        </div>

        <div class="contacts-card">
          <span class="contact-label">График</span>
          <div class="contact-value">
            Пн–Сб 12:00–05:00 <br>
            Вс 12:00–23:00
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

</template>