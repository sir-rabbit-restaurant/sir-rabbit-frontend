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
                <button
                    class="s-menu-chip"
                    :class="activeCategory === undefined ? 'active' : ''"
                    @click="filterByCategory(undefined)"
                >
                    Все
                </button>
                <button
                    v-for="c in categories"
                    class="s-menu-chip"
                    :class="activeCategory === c.id ? 'active' : ''"
                    @click="filterByCategory(c.id)"
                >
                    {{ c.name }}
                </button>
            </div>

            <!-- Сетка карточек -->
            <div class="s-menu-grid">
                <!-- Карточка 1 -->
                <div
                    v-for="item in menuItems"
                    :key="item.id"
                    class="s-menu-card"
                >
                    <div class="s-menu-image-wrap">
                        <!-- <img :src="item.image" :alt="item.name" /> -->
                    </div>
                    <div class="s-menu-info">
                        <div class="s-menu-info-top">
                            <h3>{{ item.name }}</h3>
                            <span class="s-menu-price"
                                >{{
                                    new Intl.NumberFormat("ru-RU", {
                                        style: "currency",
                                        currency: "RUB",
                                    }).format(item.price)
                                }}
                            </span>
                        </div>
                        <div
                            class="s-menu-desc"
                            v-html="item.description"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
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
