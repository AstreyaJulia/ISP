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

--
-- Дамп данных таблицы `sdc_users`
--


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
  `position` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alarm_button` int(2) DEFAULT NULL,
  `phone_worck` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_number` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sdc_room`
--

INSERT INTO `sdc_room` (`id`, `jupiter_tab_num`, `ip`, `position`, `alarm_button`, `phone_worck`, `building_number`) VALUES
(1, '20', '192.168.2.1', 'серв', NULL, '', 1),
(2, '21', '192.168.2.2', 'с4_2', NULL, '5-13-28', 1),
(3, '22', '192.168.2.3', 'с4_1', NULL, '5-13-28', 1),
(4, '23', '192.168.2.4', 'к13_1', 13, '2-15-10', 1),
(5, '24', '192.168.2.5', 'к15_3', NULL, '5-13-27', 1),
(6, '25', '192.168.2.6', 'к3_4', NULL, '4-17-94', 1),
(7, '26', '192.168.2.7', 'к14_3', NULL, '2-56-16', 1),
(8, '27', '192.168.2.8', 'с4_3', NULL, '', 1),
(9, '28', '192.168.2.9', 'к13_2', NULL, '2-15-10', 1),
(10, '29', '192.168.2.10', 'к16_2', NULL, '4-17-96', 1),
(11, '2A', '192.168.2.11', 'к11_2', NULL, '2-28-78', 1),
(12, '2B', '192.168.2.12', 'к12_2', NULL, '2-15-10', 1),
(13, '2C', '192.168.2.13', 'к8_1', NULL, '4-44-85', 1),
(14, '2D', '192.168.2.14', 'п8_2', NULL, '4-44-85', 1),
(15, '2E', '192.168.2.15', 'п8_1', NULL, '4-44-85', 1),
(16, '2F', '192.168.2.16', 'к11_1', NULL, '2-28-78', 1),
(17, '2G', '192.168.2.17', 'к9_2', NULL, '5-13-25', 1),
(18, '2H', '192.168.2.18', 'п7_1', NULL, '4-17-08', 1),
(19, '2I', '192.168.2.19', 'к15_2', NULL, '5-13-27', 1),
(20, '2J', '192.168.2.20', 'п7_2', NULL, '4-17-08', 1),
(21, '2K', '192.168.2.21', 'п1_2', NULL, '2-59-23', 1),
(22, '2L', '192.168.2.22', 'к1_1', 3, '4-12-02', 1),
(23, '2M', '192.168.2.23', 'п1_1', NULL, '2-59-23', 1),
(24, '2N', '192.168.2.24', 'к15_1', NULL, '5-13-27', 1),
(25, '2O', '192.168.2.25', 'к2_2', NULL, '2-59-23', 1),
(26, '2P', '192.168.2.26', 'к2_1', NULL, '2-59-23', 1),
(27, '2Q', '192.168.2.27', 'к6_2', NULL, '4-25-06', 1),
(28, '2R', '192.168.2.28', 'к14_2', NULL, '2-56-16', 1),
(29, '2S', '192.168.2.29', 'к5_2', NULL, '5-13-26', 1),
(30, '2T', '192.168.2.30', 'к3_1', NULL, '4-17-94', 1),
(31, '2U', '192.168.2.31', 'к3_7', NULL, '4-17-94', 1),
(32, '2V', '192.168.2.32', 'к3_3', NULL, '4-17-94', 1),
(33, '2W', '192.168.2.33', 'к3_2', NULL, '4-17-94', 1),
(34, '2X', '192.168.2.34', 'к3_6', NULL, '4-17-94', 1),
(35, '2Y', '192.168.2.35', 'к3_5', NULL, '4-17-94', 1),
(36, '2Z', '192.168.2.36', 'с5_1', NULL, '4-37-94', 1),
(37, '2Б', '192.168.2.37', 'к14_1', NULL, '2-56-16', 1),
(38, '2Г', '192.168.2.38', 'к11_3', NULL, '2-28-78', 1),
(39, '', '192.168.2.66', 'к8_2', 8, '4-44-85', 1),
(40, '', '192.168.2.64', 'к6_1', 6, '4-25-06', 1),
(41, '', '192.168.2.72', 'к7_1', 7, '4-17-08', 1),
(42, '', '192.168.2.67', 'к9_1', 9, '5-13-25', 1),
(43, '', '192.168.2.68', 'к10_1', 10, '2-28-78', 1),
(44, '', '192.168.2.65', 'к16_1', 16, '4-17-96', 1),
(45, '', '192.168.2.115', 'к4_1', 2, '4-41-32', 1),
(46, '', '192.168.2.63', 'к5_1', 5, '5-13-26', 1),
(47, '', '192.168.2.71', 'к3_8', NULL, '4-17-94', 1),
(48, '', '192.168.2.61', 'к12_1', 12, '2-15-10', 1);

--
-- Структура таблицы `sdc_users`
--

CREATE TABLE `sdc_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `primary_group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sudo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `sidebar` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `theme` int(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `sdc_users` (`id`, `username`, `password`, `active`, `primary_group`, `sudo`, `sidebar`, `theme`) VALUES
  (1, 'chainik', '$2y$10$ajAnKFrS/4p4Vc3IWZCfwug2HOVWoN6mf0/IeltVpaT3R7lJq21N2', 1, 3, 1, 0, 0);

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

INSERT INTO `sdc_user_attributes` (`id`, `internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `photo`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES
(1, 1, 'Супер Админ ИСП', 1, '1987-01-31', 'admin@net.ru', '+7(007)', '215500', '67', 'Сафоново', 'серверная в суде', 'assets/img/avatars/default.svg', 'Учетная запись супер-пользователя', 'sudrf.ru/superadmin)', '', '', NULL);


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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
