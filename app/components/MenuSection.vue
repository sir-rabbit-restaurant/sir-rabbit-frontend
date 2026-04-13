<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const { $directus, $readItems } = useNuxtApp();
withDefaults(
    defineProps<{
        showFullList?: boolean;
    }>(),
    {
        showFullList: false,
    },
);

type Dish = {
    id: number;
    name: string;
    description: string;
    price: number;
    weight: number;
};
type Category = {
    id: string;
    name: string;
    dishes: Dish[];
};

const { data: categories, error } = await useAsyncData("categories", () =>
    $directus.request<Category[]>(
        $readItems("dish_category", {
            fields: ["*", "dishes.*"],
        }),
    ),
);

if (error.value) {
    console.log("Failed fetching categories", error.value);
}

const activeCategory = ref<string | undefined>(undefined);

const filterByCategory = (categoryId: string | undefined) => {
    activeCategory.value = categoryId;
};

const menuItems = computed(() => {
    if (activeCategory.value) {
        return (
            categories.value?.find((c) => c.id === activeCategory.value)
                ?.dishes ?? []
        );
    }
    return categories.value?.flatMap((c) => c.dishes) ?? [];
});
</script>
<template>
    <section class="relative py-14 md:py-24 font-inherit z-1" id="menu">
        <div
            class="-z-1 absolute right-[10%] bottom-[20%] text-[100pt] text-secondary opacity-[0.12] rotate-[-20deg] pointer-events-none"
        >
            ♦
        </div>

        <div
            class="-z-1 absolute left-[10%] bottom-[50%] text-[100pt] text-secondary opacity-[0.12] rotate-[-50deg] pointer-events-none"
        >
            ♣
        </div>

        <div class="max-w-347 mx-auto px-4 md:px-0">
            <!-- Шапка -->
            <div
                class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4"
            >
                <div class="s-menu-title-block">
                    <span class="block text-base mb-2">Меню</span>
                    <h2
                        class="text-3xl md:text-[2rem] m-0 font-semibold text-white"
                    >
                        Популярные позиции
                    </h2>
                </div>
            </div>

            <!-- Фильтры (Чипсы) -->
            <div class="flex gap-3 mb-10 no-scrollbar py-2 md:mx-0 md:px-0">
                <Swiper
                    slidesPerView="auto"
                    class="flex gap-3 overflow-x-auto"
                    spaceBetween="10"
                    :direction="'horizontal'"
                    :mousewheel="true"
                    :grabCursor="true"
                >
                    <SwiperSlide class="w-auto!">
                        <button
                            class="flex border-2 m-1 whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300 border-secondary"
                            :class="
                                activeCategory === undefined
                                    ? 'bg-secondary'
                                    : 'bg-transparent hover:bg-secondary/50 focus:outline-secondary focus:outline-2'
                            "
                            @click="filterByCategory(undefined)"
                        >
                            Все
                        </button>
                    </SwiperSlide>
                    <SwiperSlide
                        v-for="c in categories"
                        :key="c.id"
                        class="w-auto!"
                    >
                        <button
                            class="flex m-1 whitespace-nowrap w-fit items-center justify-center border-primary/50 px-6 py-2 border-2 rounded-full transition-all duration-300"
                            :class="
                                activeCategory === c.id
                                    ? 'bg-primary '
                                    : 'bg-transparent hover:bg-primary/50  active:bg-primary/80  focus:outline-primary focus:outline-4'
                            "
                            @click="filterByCategory(c.id)"
                        >
                            <div class="text-center">
                                {{ c.name }}
                            </div>
                        </button>
                    </SwiperSlide>
                </Swiper>
            </div>
            <!-- Сетка карточек -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
                <div
                    v-for="item in showFullList
                        ? menuItems
                        : menuItems.slice(0, 4)"
                    :key="item.id"
                    class="flex flex-col rounded-[34px] overflow-hidden bg-white/5 border border-white/10 transition-all"
                >
                    <div
                        class="relative h-50 md:h-60 rounded-[34px] overflow-hidden bg-linear-to-br from-[#f3f3f3] to-[#e2e2e2]"
                    >
                        <img
                            src="/placeholder.png"
                            alt="Изображение блюда"
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        class="p-5 md:p-[0_20px_20px] pt-5 md:pt-5 flex flex-col"
                    >
                        <div class="flex justify-between items-baseline mb-3">
                            <h3 class="text-lg font-medium m-0">
                                {{ item.name }}
                            </h3>
                            <span class="text-base font-semibold text-primary">
                                {{
                                    new Intl.NumberFormat("ru-RU", {
                                        style: "currency",
                                        currency: "RUB",
                                        maximumFractionDigits: 0,
                                    }).format(item.price)
                                }}
                            </span>
                        </div>
                        <div
                            class="text-sm leading-relaxed m-0 text-text-2"
                            v-html="item.description"
                        ></div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center pt-10">
                <NuxtLink
                    class="btn btn-primary"
                    to="/menu"
                    v-if="!showFullList"
                >
                    Смотреть все
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Скрытие скроллбара для фильтров */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
