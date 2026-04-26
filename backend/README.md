# Patchwork Reality — Backend

REST API для фиджитал-игры «Лоскутная реальность». Написан на FastAPI + PostgreSQL, паттерн Repository.

## Стек

| Слой | Технология |
|---|---|
| Runtime | Python 3.14 |
| Framework | FastAPI |
| БД | PostgreSQL (async через asyncpg) |
| ORM | SQLAlchemy 2.x (async) |
| Миграции | Alembic |
| Аутентификация | JWT (PyJWT) + bcrypt |
| Контейнеризация | Docker + Docker Compose |

## Быстрый старт

```bash
cd backend
cp .env.example .env        # настрой переменные при необходимости
docker compose up --build
```

API поднимается на `http://localhost:8000`.  
Swagger UI: `http://localhost:8000/docs`.

При первом старте таблицы создаются автоматически через `create_all`.

## Переменные окружения

| Переменная | По умолчанию (docker) | Описание |
|---|---|---|
| `DATABASE_URL` | `postgresql+asyncpg://postgres:postgres@db:5432/patchwork` | Строка подключения к БД |
| `SECRET_KEY` | `dev-secret-key-change-in-production` | Секрет для подписи JWT |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `60` | Время жизни токена |
| `UPLOAD_DIR` | `/app/uploads` | Директория для загруженных фото |

## Структура проекта

```
backend/
├── app/
│   ├── main.py              # точка входа, CORS, lifespan
│   ├── config.py            # настройки через pydantic-settings
│   ├── database.py          # async engine, Base, get_db
│   ├── dependencies.py      # get_current_user (JWT Bearer)
│   ├── models/              # SQLAlchemy-модели
│   │   ├── user.py
│   │   ├── child.py
│   │   ├── fragment_progress.py
│   │   ├── photo.py
│   │   └── event_log.py
│   ├── repositories/        # паттерн Repository — весь доступ к БД здесь
│   │   ├── user_repository.py
│   │   ├── child_repository.py
│   │   ├── progress_repository.py
│   │   ├── photo_repository.py
│   │   └── event_log_repository.py
│   ├── schemas/             # Pydantic-схемы запросов/ответов
│   │   ├── auth.py
│   │   ├── child.py
│   │   ├── progress.py
│   │   ├── photo.py
│   │   └── stats.py
│   ├── routers/             # FastAPI-роутеры
│   │   ├── auth.py
│   │   ├── children.py
│   │   ├── progress.py
│   │   ├── world.py
│   │   ├── photos.py
│   │   └── parent.py
│   └── services/
│       ├── auth_service.py      # хэширование паролей, JWT
│       └── guardian_service.py  # расчёт стадии Хранителя
└── alembic/                 # миграции (для production)
```

## API

Все защищённые эндпоинты требуют заголовок:
```
Authorization: Bearer <token>
```

### Аутентификация

| Метод | URL | Описание |
|---|---|---|
| `POST` | `/auth/register` | Регистрация родителя |
| `POST` | `/auth/login` | Логин, возвращает JWT |

### Профили детей

| Метод | URL | Описание |
|---|---|---|
| `POST` | `/children` | Создать профиль ребёнка |
| `GET` | `/children` | Список детей текущего родителя |

### Прогресс и мир

| Метод | URL | Описание |
|---|---|---|
| `POST` | `/progress` | Записать полученный фрагмент |
| `GET` | `/world-state/{child_id}` | Стадия Хранителя + счётчики фрагментов |

### Фото

| Метод | URL | Описание |
|---|---|---|
| `POST` | `/photos` | Загрузить фото (multipart/form-data) |

Принимает: `JPEG`, `PNG`, `WebP`, макс. **10 MB**.  
Локации: `workshop` (Стёртая Мастерская), `objects_world` (Мир Пропавших Объектов).  
Загруженные файлы доступны по `GET /uploads/{location}/{filename}`.

### Родительский дашборд

| Метод | URL | Описание |
|---|---|---|
| `GET` | `/parent/stats?days=7` | Статистика по типам заданий за период |
| `GET` | `/parent/events?limit=50` | Лента ключевых событий |

### Система

| Метод | URL | Описание |
|---|---|---|
| `GET` | `/health` | Healthcheck |

## Доменная модель

### Типы фрагментов

| Значение | Локация |
|---|---|
| `knowledge` | Разорванная Библиотека (чтение) |
| `color` | Стёртая Мастерская (рисование) |
| `movement` | Замерший Город (физактивность) |
| `sound` | Тихая Долина (звук) |
| `shape` | Мир Пропавших Объектов (поиск) |

### Стадии Хранителя

| Стадия | Порог (фрагментов) |
|---|---|
| 0 | 0+ |
| 1 | 20+ |
| 2 | 50+ |
| 3 | 100+ |
| 4 | 200+ |

При переходе на новую стадию автоматически пишется событие `guardian_stage_changed`.  
При загрузке фото пишется событие `location_restored`.

## Миграции (production)

В dev-режиме таблицы создаются автоматически. Для production используй Alembic:

```bash
# сгенерировать миграцию после изменения моделей
docker compose exec api alembic revision --autogenerate -m "describe change"

# применить миграции
docker compose exec api alembic upgrade head
```
