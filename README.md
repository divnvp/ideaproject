# ideaproject

## Запуск проекта на локальной машине

1. Выгрузить прооект на локальную машину по HTTP/SSH

```bash
# HTTP:
$ git clone https://github.com/divnvp/ideaproject.git

# SSH:
$ git clone git@github.com:divnvp/ideaproject.git
```

2. Перейти в папку с выгруженным проектом через файловый менеджер.
3. Открыть здесь командную строку. Ввести:

```bash
nuxt build & nuxt start
```

или

```bash
nuxt build

nuxt start
```

4. На локальном хосте в браузере по адресу localhost:3000 открыть приложение. Если порт занят
другим приложением, смотреть в командной строке, на каком порту запустилось приложение.

## Версия Node

v16.15.0
