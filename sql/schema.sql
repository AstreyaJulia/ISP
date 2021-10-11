-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 11 2021 г., 10:43
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


-- --------------------------------------------------------

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


-- --------------------------------------------------------

--
-- Структура таблицы `sdc_room`
--

CREATE TABLE `sdc_room` (
  `id` int(10) UNSIGNED NOT NULL,
  `jupiter_tab_num` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ip` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `position` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alarm_button` int(2) DEFAULT NULL,
  `phone_worck` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_number` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Структура таблицы `sdc_users`
--

CREATE TABLE `sdc_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `primary_group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sudo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

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
  `photo` varchar(191) NOT NULL DEFAULT '',
  `comment` text NOT NULL,
  `website` varchar(191) NOT NULL DEFAULT '',
  `profession` varchar(2) NOT NULL DEFAULT '',
  `affiliation` varchar(2) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `room` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_user_attributes`
--

--
-- Структура таблицы `sdc_visits`
--

CREATE TABLE `sdc_visits` (
  `id` int(11) NOT NULL,
  `dtime` datetime NOT NULL,
  `UserID` int(11) NOT NULL,
  `REMOTE_ADDR` varchar(12) NOT NULL,
  `REQUEST_URI` varchar(200) NOT NULL,
  `HTTP_REFERER` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_visits`
--

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_users`
--
ALTER TABLE `sdc_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_user_attributes`
--
ALTER TABLE `sdc_user_attributes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT для таблицы `sdc_visits`
--
ALTER TABLE `sdc_visits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
