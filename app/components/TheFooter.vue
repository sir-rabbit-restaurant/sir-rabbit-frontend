<script setup lang="ts">
import { ContactName, type Contact, type Link, type SiteInfo } from "~/models";

defineProps<{
    contacts: Contact[];
    links: Link[];
    info: SiteInfo;
}>();
</script>

<template>
    <footer class="footer">
        <div class="container footer-content">
            <!-- Левый блок: Контакты -->
            <div class="footer-col left">
                <div v-for="c in contacts" class="contacts-cardfoter">
                    <a
                        v-if="c.name == ContactName.PHONE"
                        :href="'tel:' + c.value"
                        class="contact-value"
                    >
                        {{ c.value }}
                    </a>
                    <a
                        v-if="c.name == ContactName.EMAIL"
                        :href="'mailto:' + c.value"
                        class="contact-value"
                    >
                        {{ c.value }}
                    </a>
                </div>
            </div>

            <!-- Центр: Соцсети и Юр. инфо -->
            <div class="footer-col center">
                <div class="socials">
                    <a
                        v-for="link in links"
                        :href="link.url"
                        class="social-icon"
                    >
                        <div v-if="link.name === 'vk'">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/vk-circled--v1.png"
                                alt="vk"
                            />
                        </div>
                        <div v-else-if="link.name === 'instagram'">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/fluency/48/instagram-new.png"
                                alt="instagram"
                            />
                        </div>
                        <div v-else-if="link.name === 'facebook'">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/facebook-new--v1.png"
                                alt="facebook"
                            />
                        </div>
                        <div v-else-if="link.name === 'telegram'">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/telegram-app--v1.png"
                                alt="telegram"
                            />
                        </div>
                        <div v-else-if="link.name === 'youtube'">
                            <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/fluency/48/youtube-play.png"
                                alt="youtube"
                            />
                        </div>
                    </a>
                </div>
                <div class="legal-info" v-if="info.company_name">
                    <p>{{ info.company_name }}</p>
                    <p>
                        ИНН: {{ info.company_inn }} / КПП:
                        {{ info.company_kpp }}
                    </p>
                </div>
            </div>

            <!-- Правый блок: Расписание и Кнопка -->
            <div class="footer-col right">
                <div class="footer-schedule">
                    {{ info.schedule }}
                </div>
                <address class="footer-address">{{ info.address }}</address>
            </div>
        </div>

        <p class="copyright-disclaimer">
            Made by
            <a href="https://github.com/yugh78" target="_blank" rel="noopener"
                >Yugh78</a
            >.
        </p>
    </footer>
</template>
