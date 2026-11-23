# Your planner

Your planner — твой планировщик задач для личного пользования. Здесь можно добавлять задачи и подзадачи, отмечать их выполнение, сохранять важные даты.

Стек:
React, TypeScript, JavaScript, Vite, CSS Modules, ESLint.

## Запуск

```sh
npm install
npm run dev
```

## Структура проекта

Проект организован по структуре FSD(Feature-Sliced Design).

```text
src/
  app/                 # Инициализация и общие стили
  pages/               # Страница планера
  shared/              # Общие функции работы с датами
  widgets/
    |
    calendar/          # Компонент календаря
```

### Полезные команды

- `npm run build` — проверка типов и production-сборка в `dist`.
- `npm run lint` — ESLint: проверка JS/TS, React Hooks.
- `npm run lint:fix` — автоматическое исправление проблем.
- `npm run format` — форматирование проекта через Prettier.
- `npm run format:check` — проверка форматирования без изменения файлов.
- `npm run preview` — локальный просмотр production-сборки.
