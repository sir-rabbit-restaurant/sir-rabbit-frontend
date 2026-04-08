<template>
    <section class="relative py-14 md:py-24 font-inherit">
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
            <div
                class="flex gap-3 mb-10 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
            >
                <button
                    class="flex border-2 whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300 border-secondary"
                    :class="
                        activeCategory === undefined
                            ? 'bg-secondary'
                            : 'bg-transparent hover:bg-secondary/50'
                    "
                    @click="filterByCategory(undefined)"
                >
                    Все
                </button>
                <button
                    v-for="c in categories"
                    :key="c.id"
                    class="flex whitespace-nowrap w-fit items-center justify-center border-primary px-6 py-2 border-2 rounded-full transition-all duration-300"
                    :class="
                        activeCategory === c.id
                            ? 'bg-primary '
                            : 'bg-transparent hover:bg-primary/50  '
                    "
                    @click="filterByCategory(c.id)"
                >
                    <div class="text-center">
                        {{ c.name }}
                    </div>
                </button>
            </div>
            <!-- Сетка карточек -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
                <div
                    v-for="item in showFullList
                        ? menuItems
                        : menuItems.slice(0, 4)"
                    :key="item.id"
                    class="flex flex-col rounded-[34px] overflow-hidden bg-background-2 shadow-2xl"
                >
                    <div
                        class="relative h-[200px] md:h-[240px] rounded-[34px] overflow-hidden bg-gradient-to-br from-[#f3f3f3] to-[#e2e2e2]"
                    >
                        <!-- <img
                            v-if="item.image"
                            :src="item.image"
                            :alt="item.name"
                            class="w-full h-full object-cover"
                        /> -->
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
            <div class="flex justify-center">
                <NuxtLink
                    class="btn btn-primary"
                    to="/menu"
                    v-if="!showFullList">
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

<script setup lang="ts">
withDefaults(
    defineProps<{
        showFullList?: boolean;
    }>(),
    {
        showFullList: false,
    },
);
const { getItems } = useDirectusItems();

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

const { data: categories } = await useAsyncData("categories", () =>
    getItems<Category>({
        collection: "dish_category",
        params: { fields: ["*", "dishes.*"] },
    }),
);

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
