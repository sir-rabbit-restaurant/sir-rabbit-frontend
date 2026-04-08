# Этап 1: Установка зависимостей и сборка
FROM node:22-slim AS builder

WORKDIR /app

# Кэшируем установку зависимостей
COPY package*.json ./
RUN npm install

# Копируем исходники и собираем проект
COPY . .
RUN npm run build

# Этап 2: Финальный образ (Production)
FROM node:22-slim

WORKDIR /app

# Копируем только результат сборки из этапа builder
COPY --from=builder /app/.output ./.output

# Nuxt по умолчанию слушает 3000 порт
ENV PORT=3000
EXPOSE 3000

# Запускаем скомпилированный сервер (Nitro)
CMD ["node", ".output/server/index.mjs"]