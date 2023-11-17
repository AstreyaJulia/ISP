# ISP (Isida). Информационно-справочная система суда.

### Итоговая сборка API v.1

#### Клиентская часть:

1. React.js;
2. Tailwind CSS;
3. Storybook для библиотеки компонентов;

#### Серверная часть:

1. PHP;

### Требования:

Серверной части для запуска нужен работающий веб-сервер на Apache v.2.4 + PHP версии не ниже 7.1, например, Open Server
Panel.

#### Для разработки клиентской части:

* Node.js версии не ниже 16.15.0.
* NPM 8.5.5 (обычно устанавливается с Node.js)
* Пакетный менеджер [Yarn v. 2+](https://yarnpkg.com/)

#### Для работы итоговой сборки клиентской части:

Веб-сервер.

### Установка:

1. Перейти в папку проекта;
2. Установить зависимости командой:

```bash
yarn install
```

### Запуск сервера разработки React (Create React App):

* В корне проекта запустить команду:

```bash
react-scripts start
```

### Сборка готового приложения React (Create React App):

* В корне проекта запустить команду:

```bash
react-scripts build
```

* В корне проекта будет создана папка `build` с файлами, которые нужно поместить в папку веб-сервера;

* Для сборки на хостинге Netlify:

```bash
CI=false && react-scripts build
```

### Настройка:

* Настройка серверной части осуществляется изменением файла `conection.php`;
* Настройка клиентской части - файлом `config.js` из папки `src`;
* Адрес сервера ИСП, к которому будут идти запросы от клиентской части, указывается в файле `.env` в корне проекта:

```dotenv
API_URL=http://my_isp_api_host
```

Образец:

```dotenv
# Если в строке есть пробелы, то ее нужно обернуть в одинарные кавычки

# ISP API-сервер
API_URL=

# PHP подключение к БД ISP
HOST_API='http:// . $_SERVER["SERVER_NAME"]'

# Строка коннекта к API GAS
API_GAS=

HOST=
DBNAME=
USER=
PASSWORD=

# API-ключ Open Weather
OPEN_WEATHER_API_KEY=1234567890
```

В корне билда создать файл '.htaccess' с содержанием:

```text
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```
