-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 23 2021 г., 10:34
-- Версия сервера: 10.4.12-MariaDB
-- Версия PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


-- --------------------------------------------------------

--
-- Структура таблицы `sdc_calendar`
--

CREATE TABLE `sdc_calendar` (
  `id` int(10) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `allDay` tinyint(1) DEFAULT NULL,
  `calendar` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `display` varchar(50) NOT NULL DEFAULT '''auto''',
  `private` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` int(10) NOT NULL,
  `tzid` varchar(100) DEFAULT NULL,
  `freq` varchar(50) DEFAULT NULL,
  `dtstart` datetime DEFAULT NULL,
  `until` datetime DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `interval` int(11) DEFAULT NULL,
  `byweekday` varchar(50) DEFAULT NULL,
  `bymonth` varchar(50) DEFAULT NULL,
  `bysetpos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Структура таблицы `sdc_proxy_list`
--

CREATE TABLE `sdc_proxy_list` (
  `id` int(11) UNSIGNED NOT NULL,
  `menuindex` varchar(10) NOT NULL,
  `name_href` varchar(200) NOT NULL,
  `id_group` int(10) NOT NULL DEFAULT 0,
  `href` varchar(200) NOT NULL DEFAULT '',
  `proxy_href` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Структура таблицы `sdc_room`
--

CREATE TABLE `sdc_room` (
  `id` int(10) UNSIGNED NOT NULL,
  `jupiter_tab_num` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ip` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `affiliation` int(10) DEFAULT NULL,
  `alarm_button` int(2) DEFAULT NULL,
  `phone_worck` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sdc_room`
--

INSERT INTO `sdc_room` (`id`, `jupiter_tab_num`, `ip`, `name`, `icon`, `affiliation`, `alarm_button`, `phone_worck`) VALUES
(1, '20', '192.168.2.1', 'серв', 'desktop', 51, NULL, ''),
(2, '21', '192.168.2.2', 'АРМ 2', 'desktop', 82, NULL, '5-13-28'),
(3, '22', '192.168.2.3', 'АРМ 1', 'desktop', 82, NULL, '5-13-28'),
(4, '23', '192.168.2.4', 'АРМ 1', 'desktop', 67, 13, '2-15-10'),
(5, '24', '192.168.2.5', 'АРМ 3', 'desktop', 69, NULL, '5-13-27'),
(6, '25', '192.168.2.6', 'АРМ 4', 'desktop', 57, NULL, '4-17-94'),
(7, '26', '192.168.2.7', 'АРМ 3', 'desktop', 68, NULL, '2-56-16'),
(8, '27', '192.168.2.8', 'АРМ 3', 'desktop', 82, NULL, ''),
(9, '28', '192.168.2.9', 'АРМ 2', 'desktop', 67, NULL, '2-15-10'),
(10, '29', '192.168.2.10', 'АРМ 2', 'desktop', 70, NULL, '4-17-96'),
(11, '2A', '192.168.2.11', 'АРМ 2', 'desktop', 65, NULL, '2-28-78'),
(12, '2B', '192.168.2.12', 'АРМ 2', 'desktop', 66, NULL, '2-15-10'),
(13, '2C', '192.168.2.13', 'АРМ 1', 'desktop', 62, NULL, '4-44-85'),
(14, '2D', '192.168.2.14', 'АРМ 2', 'desktop', 73, NULL, '4-44-85'),
(15, '2E', '192.168.2.15', 'АРМ 1', 'desktop', 73, NULL, '4-44-85'),
(16, '2F', '192.168.2.16', 'АРМ 1', 'desktop', 65, NULL, '2-28-78'),
(17, '2G', '192.168.2.17', 'АРМ 2', 'desktop', 63, NULL, '5-13-25'),
(18, '2H', '192.168.2.18', 'АРМ 1', 'desktop', 72, NULL, '4-17-08'),
(19, '2I', '192.168.2.19', 'АРМ 2', 'desktop', 69, NULL, '5-13-27'),
(20, '2J', '192.168.2.20', 'АРМ 2', 'desktop', 72, NULL, '4-17-08'),
(21, '2K', '192.168.2.21', 'АРМ 2', 'desktop', 71, NULL, '2-59-23'),
(22, '2L', '192.168.2.22', 'АРМ 1', 'desktop', 55, 3, '4-12-02'),
(23, '2M', '192.168.2.23', 'АРМ 1', 'desktop', 71, NULL, '2-59-23'),
(24, '2N', '192.168.2.24', 'АРМ 1', 'desktop', 69, NULL, '5-13-27'),
(25, '2O', '192.168.2.25', 'АРМ 2', 'desktop', 56, NULL, '2-59-23'),
(26, '2P', '192.168.2.26', 'АРМ 1', 'desktop', 56, NULL, '2-59-23'),
(27, '2Q', '192.168.2.27', 'АРМ 2', 'desktop', 60, NULL, '4-25-06'),
(28, '2R', '192.168.2.28', 'АРМ 2', 'desktop', 68, NULL, '2-56-16'),
(29, '2S', '192.168.2.29', 'АРМ 2', 'desktop', 59, NULL, '5-13-26'),
(30, '2T', '192.168.2.30', 'АРМ 1', 'desktop', 57, NULL, '4-17-94'),
(31, '2U', '192.168.2.31', 'АРМ 7', 'desktop', 57, NULL, '4-17-94'),
(32, '2V', '192.168.2.32', 'АРМ 3', 'desktop', 57, NULL, '4-17-94'),
(33, '2W', '192.168.2.33', 'АРМ 2', 'desktop', 57, NULL, '4-17-94'),
(34, '2X', '192.168.2.34', 'АРМ 6', 'desktop', 57, NULL, '4-17-94'),
(35, '2Y', '192.168.2.35', 'АРМ 5', 'desktop', 57, NULL, '4-17-94'),
(36, '', '192.168.2.71', 'АРМ 1', 'desktop', 83, NULL, '4-37-94'),
(37, '2Б', '192.168.2.37', 'АРМ 1', 'desktop', 68, NULL, '2-56-16'),
(38, '2Г', '192.168.2.38', 'АРМ 3', 'desktop', 65, NULL, '2-28-78'),
(39, '', '192.168.2.66', 'АРМ 2', 'desktop', 62, 8, '4-44-85'),
(40, '', '192.168.2.64', 'АРМ 1', 'desktop', 60, 6, '4-25-06'),
(41, '', '192.168.2.72', 'АРМ 1', 'desktop', 61, 7, '4-17-08'),
(42, '', '192.168.2.67', 'АРМ 1', 'desktop', 63, 9, '5-13-25'),
(43, '', '192.168.2.68', 'ARM 1', 'desktop', 64, 10, '2-28-78'),
(44, '', '192.168.2.65', 'АРМ 1', 'desktop', 70, 16, '4-17-96'),
(45, '', '192.168.2.115', 'АРМ 1', 'desktop', 58, 2, '4-41-32'),
(46, '', '192.168.2.63', 'АРМ 1', 'desktop', 59, 5, '5-13-26'),
(47, '2Z', '192.168.2.36', 'АРМ 8', 'desktop', 57, NULL, '4-17-94'),
(48, '', '192.168.2.61', 'АРМ 1', 'desktop', 66, 12, '2-15-10'),
(49, '', '', 'Сафоново', 'building', NULL, NULL, NULL),
(50, '', '', 'Холм-Жирки', 'building', NULL, NULL, NULL),
(51, '', '', 'Первый этаж', 'floor', 49, NULL, NULL),
(52, '', '', 'Второй этаж', 'floor', 49, NULL, NULL),
(53, '', '', 'Первый этаж', 'floor', 50, NULL, NULL),
(54, '', '', 'Второй этаж', 'floor', 50, NULL, NULL),
(55, '', '', 'Кабинет 1', 'door', 52, NULL, NULL),
(56, '', '', 'Кабинет 2', 'door', 52, NULL, NULL),
(57, '', '', 'Кабинет 3', 'door', 52, NULL, NULL),
(58, '', '', 'Кабинет 4', 'door', 52, NULL, NULL),
(59, '', '', 'Кабинет 5', 'door', 52, NULL, NULL),
(60, '', '', 'Кабинет 6', 'door', 52, NULL, NULL),
(61, '', '', 'Кабинет 7', 'door', 52, NULL, NULL),
(62, '', '', 'Кабинет 8', 'door', 51, NULL, NULL),
(63, '', '', 'Кабинет 9', 'door', 51, NULL, NULL),
(64, '', '', 'Кабинет 10', 'door', 51, NULL, NULL),
(65, '', '', 'Кабинет 11', 'door', 51, NULL, NULL),
(66, '', '', 'Кабинет 12', 'door', 51, NULL, NULL),
(67, '', '', 'Кабинет 13', 'door', 51, NULL, NULL),
(68, '', '', 'Кабинет 14', 'door', 51, NULL, NULL),
(69, '', '', 'Кабинет 15', 'door', 51, NULL, NULL),
(70, '', '', 'Кабинет 16', 'door', 51, NULL, NULL),
(71, '', '', 'Проход в кабинет 1', 'door', 55, NULL, NULL),
(72, '', '', 'Проход в кабинет 7', 'door', 61, NULL, NULL),
(73, '', '', 'Проход в кабинет 8', 'door', 62, NULL, NULL),
(74, '', '', 'Зал с.з. №1', 'balance', 52, NULL, NULL),
(75, '', '', 'Зал с.з. №2', 'balance', 52, NULL, NULL),
(76, '', '', 'Зал с.з. №3', 'balance', 52, NULL, NULL),
(77, '', '', 'Зал с.з. №4', 'balance', 51, NULL, NULL),
(78, '', '', 'Зал с.з. №5', 'balance', 51, NULL, NULL),
(79, '', '', 'Совещ. комн. зала № 1', 'door', 74, NULL, NULL),
(80, '', '', 'Совещ. комн. зала № 2', 'door', 75, NULL, NULL),
(81, '', '', 'Совещ. комн. зала № 3', 'door', 76, NULL, NULL),
(82, '', '', 'Совещ. комн. зала № 4', 'door', 77, NULL, NULL),
(83, '', '', 'Совещ. комн. зала № 5', 'door', 78, NULL, NULL);

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
-- Структура таблицы `sdc_users`
--

CREATE TABLE `sdc_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `sudo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `sidebar` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `theme` int(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_users`
--

INSERT INTO `sdc_users` (`id`, `username`, `password`, `active`, `sudo`, `sidebar`, `theme`) VALUES
  (1, 'chainik', '$2y$10$ajAnKFrS/4p4Vc3IWZCfwug2HOVWoN6mf0/IeltVpaT3R7lJq21N2', 1, 1, 0, 0);

--
-- Структура таблицы `sdc_user_attributes`
--

CREATE TABLE `sdc_user_attributes` (
  `id` int(10) UNSIGNED NOT NULL,
  `internalKey` int(10) NOT NULL,
  `fullname` varchar(100) NOT NULL DEFAULT '',
  `gender` int(1) NOT NULL DEFAULT 0,
  `dob` date DEFAULT NULL,
  `email` varchar(100) NOT NULL DEFAULT '',
  `mobilephone` varchar(100) NOT NULL DEFAULT '',
  `zip` varchar(25) NOT NULL DEFAULT '',
  `state` varchar(25) NOT NULL DEFAULT '',
  `city` varchar(191) NOT NULL DEFAULT '',
  `address` text NOT NULL,
  `comment` text NOT NULL,
  `website` varchar(191) NOT NULL DEFAULT '',
  `profession` varchar(2) NOT NULL DEFAULT '',
  `affiliation` varchar(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `room` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_user_attributes`
--

INSERT INTO `sdc_user_attributes` (`id`, `internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES
(1, 1, 'Супер Админ ИСП', 1, '1987-01-31', 'admin@net.ru', '+7(007)', '215500', '67', 'Сафоново', 'серверная в суде', 'Учетная запись супер-пользователя', 'sudrf.ru/superadmin)', '', '', NULL);


--
-- Структура таблицы `sdc_visits`
--

CREATE TABLE `sdc_visits` (
  `id` int(11) NOT NULL,
  `dtime` datetime NOT NULL,
  `UserID` varchar(2) NOT NULL,
  `REMOTE_ADDR` varchar(12) NOT NULL,
  `REQUEST_URI` varchar(200) NOT NULL,
  `HTTP_REFERER` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Структура таблицы `sdc_vocation`
--

CREATE TABLE `sdc_vocation` (
  `id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Таблица с привязкой должностей к группам';

--
-- Дамп данных таблицы `sdc_vocation`
--

INSERT INTO `sdc_vocation` (`id`, `parent_id`, `name`) VALUES
(1, 24, 'Председатель'),
(2, 24, 'Заместитель председателя'),
(3, 24, 'Судья'),
(4, 27, 'Начальник отдела'),
(5, 27, 'Заместитель начальника отдела'),
(6, 25, 'Помощник председателя суда'),
(7, 25, 'Помощник судьи'),
(8, 27, 'Консультант'),
(9, 26, 'Секретарь судебного заседания'),
(10, 27, 'Главный специалист'),
(11, 27, 'Ведущий специалист'),
(12, 27, 'Секретарь суда'),
(13, 27, 'Специалист'),
(14, 27, 'Старший специалист 1 разряда'),
(15, 27, 'Старший специалист 2 разряда'),
(16, 27, 'Старший специалист 3 разряда'),
(17, 27, 'Специалист 1 разряда'),
(18, 27, 'Специалист 2 разряда'),
(19, 27, 'Специалист 3 разряда'),
(20, 27, 'Администратор'),
(21, 27, 'Рабочий, 1 разряд'),
(22, 27, 'Рабочий, 2 разряд'),
(23, 27, 'Рабочий, 3 разряд'),
(24, NULL, 'Судьи'),
(25, NULL, 'Помощники судей'),
(26, NULL, 'Секретари судебного заседания'),
(27, NULL, 'Канцелярия');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  ADD UNIQUE KEY `sdc_calendar_id_uindex` (`id`);

--
-- Индексы таблицы `sdc_proxy_list`
--
ALTER TABLE `sdc_proxy_list`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sdc_room`
--
ALTER TABLE `sdc_room`
  ADD PRIMARY KEY (`id`) USING BTREE;
--
-- Индексы таблицы `sdc_site_content`
--
ALTER TABLE `sdc_site_content`
  ADD PRIMARY KEY (`id`);
--
-- Индексы таблицы `sdc_users`
--
ALTER TABLE `sdc_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Индексы таблицы `sdc_user_attributes`
--
ALTER TABLE `sdc_user_attributes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `internalKey` (`internalKey`),
  ADD UNIQUE KEY `room` (`room`);

--
-- Индексы таблицы `sdc_visits`
--
ALTER TABLE `sdc_visits`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sdc_vocation`
--
ALTER TABLE `sdc_vocation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_proxy_list`
--
ALTER TABLE `sdc_proxy_list`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_room`
--
ALTER TABLE `sdc_room`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT для таблицы `sdc_site_content`
--
ALTER TABLE `sdc_site_content`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `sdc_users`
--
ALTER TABLE `sdc_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `sdc_user_attributes`
--
ALTER TABLE `sdc_user_attributes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `sdc_visits`
--
ALTER TABLE `sdc_visits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_vocation`
--
ALTER TABLE `sdc_vocation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
