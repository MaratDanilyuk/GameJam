# Frontend — Лоскутная реальность

React-приложение игры. SPA на Vite + React 18 + TypeScript + SCSS.

## Зависимость от UI Kit

**Фронтенд нельзя запустить без предварительной установки ui-kit.**

Компоненты импортируются напрямую из исходников кита по относительному пути:

```ts
import { Button } from '../../../ui-kit/src/components/Button/Button';
```

Vite также резолвит алиас `@` в `ui-kit/src`:

```ts
// vite.config.ts
resolve: {
  alias: { '@': path.resolve(__dirname, '../ui-kit/src') },
}
```

Если зависимости ui-kit не установлены или токены не сгенерированы — сборка упадёт.

## Быстрый старт

### 1. Установить ui-kit

```bash
cd ui-kit
npm install
npm run tokens   # генерация SCSS-переменных из дизайн-токенов
```

### 2. Установить и запустить фронтенд

```bash
cd frontend
npm install
npm run dev      # http://127.0.0.1:4200
```

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Dev-сервер на http://127.0.0.1:4200 |
| `npm run build` | Прод-сборка + копирование ассетов |
| `npm run typecheck` | Проверка типов без сборки |
| `npm run preview` | Предпросмотр прод-сборки |

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | React 18 |
| Язык | TypeScript 5 |
| Сборщик | Vite 5 |
| Стили | SCSS (sass-embedded) |
| UI-компоненты | uchi-ui-kit (из `../ui-kit/src`) |

## Структура проекта

```
frontend/
├── assets/              # статика: изображения, аудио, шрифты
├── scripts/
│   └── copy-assets.mjs  # копирует assets/ в dist/ после сборки
└── src/
    ├── components/      # переиспользуемые компоненты (Header, MapLocationCard, ProgressBar10)
    ├── data/            # статические данные (локации, пресеты загрузки)
    ├── modals/          # сцены и модалки (ReadingTask, SoundRecord, Library*, Congrat...)
    ├── pages/           # экраны (LoadingScene, StartScene, WorldMapScene, LocationScene, ParentsScene)
    ├── App.tsx          # корневой компонент, роутинг между сценами
    ├── types.ts         # общие типы (LocationId, SceneName, GameProgress...)
    ├── scenes.tsx       # перечисление сцен
    ├── primitives.tsx   # базовые SVG-иконки (CloseIcon, MicIcon, Sparkle...)
    ├── asset.ts         # хелпер для путей к ассетам
    └── main.tsx         # точка входа
```
