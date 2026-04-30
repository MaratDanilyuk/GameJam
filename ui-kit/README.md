# Uchi UI Kit

Библиотека компонентов Uchi.ru — React 18 + TypeScript + Vite + SCSS Modules + Storybook 8 + Style Dictionary.

## Быстрый старт

### Требования

- [Node.js](https://nodejs.org/) >= 22
- [Yarn](https://yarnpkg.com/) (включён через corepack)

### Установка

```bash
corepack enable          # активирует yarn, встроенный в Node.js
git clone <repo-url>
cd ui-kit
yarn install             # установка зависимостей
```

### Запуск Storybook

```bash
yarn tokens              # генерация SCSS-переменных из дизайн-токенов
yarn storybook           # Storybook на http://localhost:6006
```

### Запуск dev-сервера Vite

```bash
yarn dev                 # генерирует токены и запускает Vite на http://localhost:5173
```

## Все команды

| Команда | Описание |
|---|---|
| `yarn tokens` | Генерация SCSS из JSON-токенов (Style Dictionary) |
| `yarn storybook` | Storybook dev-сервер на :6006 |
| `yarn dev` | Vite dev-сервер (генерирует токены автоматически) |
| `yarn build` | Прод-сборка библиотеки |
| `yarn build-storybook` | Статичный билд Storybook |

## Запуск в Docker

### Требования

- [Docker](https://docs.docker.com/get-docker/) установлен и запущен

### Сборка образа

```bash
docker build -t uchi-ui-kit .
```

### Запуск контейнера

```bash
docker run -d -p 8080:80 uchi-ui-kit
```

Storybook будет доступен по адресу: **http://localhost:8080**

### Остановка

```bash
docker ps                    # найти CONTAINER ID
docker stop <CONTAINER_ID>
```

## Структура проекта

```
src/
  tokens/                    # JSON дизайн-токены (экспорт из Figma)
    primitives/
      colors.json
      typography.json
      spacing.json
      radius.json
    shadow/
      shadow.json
    component/
      lightTheme.json        # компонентные токены (ссылаются на примитивы)
  styles/
    _tokens.scss             # базовые SCSS-переменные
    _fonts.scss              # @font-face подключения
    global.scss
    scss/                    # auto-generated Style Dictionary
      primitives-variables.scss
      shadow-variables.scss
    fonts/
      LapsusPro/
      type.today-factor-a-web/
  components/
    Button/
      Button.tsx
      Button.module.scss
      Button.stories.tsx
      Button-vars.scss       # auto-generated компонентные переменные
    ...
  index.ts                   # public API
style-dictionary.config.mjs  # конфиг генерации токенов
Dockerfile
```

## Дизайн-токены

Токены хранятся в `src/tokens/` как JSON. Style Dictionary генерирует из них:

- `src/styles/scss/primitives-variables.scss` — примитивы (цвета, отступы, радиусы, шрифты)
- `src/styles/scss/shadow-variables.scss` — тени
- `src/components/{Name}/{Name}-vars.scss` — переменные для каждого компонента

Для обновления токенов: замените JSON-файлы (экспорт из Figma через Tokens Studio) и запустите `yarn tokens`.

## Компоненты

- **Действия:** Button, CloseButton, LikeButton, LinkButton, HelpButton
- **Формы:** Input, TextArea, Checkbox, Radiobutton, Switch, Dropdown
- **Навигация:** Tabs, TapBar, Sidebar, Header, Footer, PageHeader
- **Обратная связь:** Toast, Tooltip, TooltipPopover, Modal, ModalCongrat, InfoBlock, ProgressBar, ErrorPage
- **Данные:** Card, Message, ChosenMaterial, TextBlock, Promocode
- **Маркеры:** Counter, Sticker, Label, Avatar, Skeleton, Separator, Icon
