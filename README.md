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

#### Для работы итоговой сборки клиентской части:

Веб-сервер.

### Установка:

1. Перейти в папку проекта;
2. Установить зависимости командой:

```bash
npm install
```

### Запуск сервера разработки React (Create React App):

* В корне проекта запустить команду:

```bash
npm start
```

### Сборка готового приложения React (Create React App):

* В корне проекта запустить команду:

```bash
npm build
```
* В корне проекта будет создана папка `build` с файлами, которые нужно поместить в папку веб-сервера;


### Автоматическая сборка в ветку GitHub:

* Коммиты, попадающие в ветку `development/v1` будут автоматически собраны в отдельную ветку `development/v1-deploy`. Эту
  ветку можно поместить в папку веб-сервера и из нее обновлять итоговый билд;

### Настройка:

* Настройка серверной части осуществляется изменением файла `conection.php`;
* Настройка клиентской части - файлом `config.js` из папки `src`;
* Настройка автоматической сборки GitHub - файлом `main.yml` из папки `.github/workflows`;
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