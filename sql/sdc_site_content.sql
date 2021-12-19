-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 19 2021 г., 18:01
-- Версия сервера: 10.5.12-MariaDB-0+deb11u1
-- Версия PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `isp`
--

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_site_content`
--

CREATE TABLE `sdc_site_content` (
  `id` int(10) UNSIGNED NOT NULL,
  `menuindex` int(3) UNSIGNED DEFAULT NULL,
  `pagetitle` varchar(191) NOT NULL DEFAULT '',
  `icon` varchar(191) NOT NULL COMMENT 'Использовать запись типа <i class="mdi fs-4 mdi mdi-folder-table-outline"></i>',
  `description` text NOT NULL,
  `alias` varchar(191) DEFAULT '',
  `alias_visible` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `published` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `pub_date` datetime NOT NULL,
  `unpub_date` datetime NOT NULL,
  `parent` int(10) NOT NULL DEFAULT 0,
  `isfolder` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `introtext` text DEFAULT NULL,
  `content` mediumtext DEFAULT NULL,
  `searchable` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `createdby` int(10) NOT NULL DEFAULT 0,
  `class_key` varchar(100) NOT NULL DEFAULT 'Document'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_site_content`
--

INSERT INTO `sdc_site_content` (`id`, `menuindex`, `pagetitle`, `icon`, `description`, `alias`, `alias_visible`, `published`, `pub_date`, `unpub_date`, `parent`, `isfolder`, `introtext`, `content`, `searchable`, `createdby`, `class_key`) VALUES
(1, 1, 'Главная', '<i class=\"mdi fs-4 mdi-apps\"></i>', 'Страница сайта', '/', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 0, NULL, NULL, 1, 0, 'Document'),
(2, 2, 'Каталог ссылок', '<i class=\"mdi fs-4 mdi mdi-folder-table-outline\"></i>', 'Каталог ссылок', '?page=proxylist', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 0, NULL, NULL, 1, 0, 'StaticResource'),
(3, 3, 'Календарь', '<i class=\"mdi fs-4 mdi-calendar\"></i>', 'Календарь', '?page=fullcalendar', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 0, NULL, NULL, 1, 0, 'StaticResource'),
(4, 4, 'Информация', '<i class=\"mdi fs-4 mdi-information-outline\"></i>', 'Информация', NULL, 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 1, NULL, NULL, 1, 0, 'StaticResource'),
(5, 1, 'Телефонный справочник', '<i class=\"mdi fs-4 mdi-phone-classic\"></i>', 'Телефонный справочник', '?page=phonebook', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 4, 0, NULL, NULL, 1, 0, 'StaticResource'),
(6, 1, 'Графики', '<i class=\"mdi fs-4 mdi-chart-arc\"></i>', 'Графики', '?page=stats', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 7, 0, NULL, NULL, 1, 0, 'StaticResource'),
(7, 5, 'Статистика', '<i class=\"mdi fs-4 mdi-chart-arc\"></i>', 'Статистика', NULL, 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 1, NULL, NULL, 1, 0, 'StaticResource'),
(8, 6, 'Помощь', '<i class=\"mdi fs-4 mdi-help-circle-outline\"></i>', 'Помощь', NULL, 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 1, NULL, NULL, 1, 0, 'StaticResource'),
(9, 1, 'База знаний', '<i class=\"mdi fs-4 mdi-lightbulb-on-outline\"></i>', 'База знаний', '?page=faq', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 8, 0, NULL, NULL, 1, 0, 'StaticResource'),
(10, 7, 'Администрирование', '<i class=\"mdi fs-4 mdi-wrench-outline\"></i>', 'Администрирование', NULL, 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 1, NULL, NULL, 1, 0, 'StaticResource'),
(11, 8, 'Разработка', '<i class=\"mdi fs-4 mdi-xml\"></i>', 'Разработка', NULL, 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 0, 1, NULL, NULL, 1, 0, 'StaticResource'),
(12, 1, 'Панель управления', '<i class=\"mdi fs-4 mdi-view-dashboard-outline\"></i>', 'Панель управления', '?page=admin', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 10, 0, NULL, NULL, 1, 0, 'StaticResource'),
(13, 2, 'Рабочие места', '<i class=\"mdi fs-4 mdi-wan\"></i>', 'Рабочие места', '?page=workplaces', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 10, 0, NULL, NULL, 1, 0, 'StaticResource'),
(14, 3, 'Документация', '<i class=\"mdi fs-4 mdi-book-open-variant\"></i>', 'Документация', '?page=documentation', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 10, 0, NULL, NULL, 1, 0, 'StaticResource'),
(15, 1, 'Задачи', '<i class=\"mdi fs-4 mdi-checkbox-marked-outline\"></i>', 'Задачи', '?page=to-do', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 11, 0, NULL, NULL, 1, 0, 'StaticResource'),
(16, 2, 'Тетрис', '<i class=\"mdi fs-4 mdi-gamepad-variant-outline\"></i>', 'Тетрис', '?page=tetris', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 11, 0, NULL, NULL, 1, 0, 'StaticResource'),
(17, 3, 'UI Kit', '<i class=\"mdi fs-4 mdi-flower-outline\"></i>', 'UI Kit', '?page=uikit', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 11, 0, NULL, NULL, 1, 0, 'StaticResource'),
(18, 4, 'Тестовая страница', '<i class=\"mdi fs-4 mdi-file-outline\"></i>', 'Тестовая страница', '?page=test', 1, 1, '2021-12-15 20:35:24', '2021-12-15 20:35:24', 11, 0, NULL, NULL, 1, 0, 'StaticResource');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_site_content`
--
ALTER TABLE `sdc_site_content`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_site_content`
--
ALTER TABLE `sdc_site_content`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
