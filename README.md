# Task Nest Backend

REST API для приложения Task Nest — планировщик задач с тайм-блоками и помодоро-таймером.

## Стек

- **NestJS** — фреймворк
- **Prisma 7** — ORM
- **PostgreSQL 17** — база данных
- **Docker** — контейнеризация

## Быстрый старт (Docker)

Самый простой способ — запустить всё через Docker Compose:

```bash
docker compose up --build
```

API будет доступен на `http://localhost:4200/api`, PostgreSQL на порту `5433`.

## Локальная разработка

### Требования

- Node.js 22+
- PostgreSQL 17 (или запустить только БД через Docker)

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка окружения

Создай файл `.env` в корне проекта:

```env
DATABASE_URL="postgresql://tasknest:tasknest_secret@localhost:5433/tasknest"
JWT_SECRET="your_jwt_secret"
```

### 3. Запуск БД

```bash
docker compose up postgres
```

### 4. Применение схемы к БД

```bash
npx prisma db push
```

### 5. Запуск сервера

```bash
# development (watch mode)
npm run start:dev

# production
npm run build && npm run start:prod
```

## Структура модулей

| Модуль | Описание |
|---|---|
| `auth` | Аутентификация (JWT) |
| `user` | Управление пользователями |
| `task` | Задачи с приоритетами |
| `time-block` | Тайм-блоки |
| `timer` | Помодоро-сессии и раунды |

## Скрипты

| Команда | Описание |
|---|---|
| `npm run start:dev` | Запуск в режиме разработки |
| `npm run build` | Сборка проекта |
| `npm run start:prod` | Запуск production-сборки |
| `npm run test` | Запуск тестов |
| `npm run lint` | Линтинг кода |
