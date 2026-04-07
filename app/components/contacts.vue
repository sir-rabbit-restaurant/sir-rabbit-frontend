<script setup lang="ts">
import { ContactName, type Contact } from "~/models";
import { contactLabel } from "~/utils";

defineProps<{
    address: string;
    schedule: string;
    mapCode: string;
    contacts: Contact[];


}>();

</script>

<template>
    <section class="s-contacts">
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
                    <div v-for="c in contacts" class="contacts-card">
                        <span class="contact-label">
                            {{ contactLabel(c) }}
                        </span>

                        <a
                            v-if="c.name == ContactName.PHONE"
                            :href="'tel:' + c.value"
                            class="contact-value"
                        >
                            <pre>{{ c.value }}</pre>
                        </a>
                        <a
                            v-if="c.name == ContactName.EMAIL"
                            :href="'mailto:' + c.value"
                            class="contact-value"
                        >
                            <pre>{{ c.value }}</pre>
                        </a>
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
