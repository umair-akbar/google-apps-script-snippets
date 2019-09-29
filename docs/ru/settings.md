# Настройки

Совершенно не важно, какую директорию вы укажите для публикации. Например, для публикации черновиков я использую

```sh
$> D=./drafts/sheet_draft && npm run dsw $D
```

Важно, чтобы диретория содержала файлы `appsscript.json` и `config.json`.
Для настройки манифеста обратитесь к справке [G Suite Developer > Apps Script > Guides > Manifests](https://developers.google.com/apps-script/concepts/manifests). Настройка файла конфигурации описана ниже.

## config.json

Файл содержит следующие ключи:

- `type` - тип скрипта. На данный момент описаны типы: `standalone`, `container-bound-sheet`, `container-bound-form`, `container-bound-doc`, `custom`. Адреса проектов для каждого типа вы должны указать вручную см. [Быстрый старт](docs/ru/quickstart)
- `src` - любые внешние файлы, которые должны быть загружены в проект

Пример файла `config.json`

```json
{
  "type": "standalone",
  "src": [
    "./shims/Array.find.js",
    "./shims/Array.findIndex.js"
  ]
}
```
