<script setup>

defineProps({
  address: String,
  phone: String, Array,
  schedule: String,
  mapCode: String
});
</script>



<template>

  <section class="s-contacts ">
    <div class="s-contacts-container">

      
      <div class="s-contacts-head">
        <span class="s-contacts-subtitle">Контакты</span>
        <h2 class="s-contacts-title">Как нас найти</h2>
      </div>

      <div class="s-contacts-grid">
        <!-- ЛЕВАЯ КОЛОНКА: КАРТА -->
        <div class="s-contacts-map-wrap" v-html="mapCode"></div>
       

        <!-- ПРАВАЯ КОЛОНКА: ИНФО-КАРТОЧКИ -->
        <div class="s-contacts-details">
          <div class="contacts-card">
            <span class="contact-label">Телефон</span>

            <div class="contact-value">
              <pre>{{ phone }}</pre>
            </div>
          </div>

        <div class="contacts-card">
          <span class="contact-label">Адрес</span>
          <address class="contact-value">{{ address }}</address>
        </div>

        <div class="contacts-card">
          <span class="contact-label">Режим работы</span>
          <span class="contact-value">
            {{ schedule }}
          </span>
        </div>
      </div>
    </div>

    </div>
  </section>

</template>