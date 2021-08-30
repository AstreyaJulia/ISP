-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 30 2021 г., 17:16
-- Версия сервера: 10.4.12-MariaDB
-- Версия PHP: 7.4.14

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
  `user_id` int(10) NOT NULL,
  `tzid` varchar(100) DEFAULT NULL,
  `freq` varchar(50) DEFAULT NULL,
  `dtstart` datetime DEFAULT NULL,
  `until` datetime DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `interval` int(11) DEFAULT NULL,
  `byweekday` varchar(50) DEFAULT NULL,
  `bymonth` varchar(50) DEFAULT NULL,
  `bysetpos` int(11) DEFAULT NULL,
  `bymonthday` varchar(150) DEFAULT NULL,
  `duration` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_calendar`
--

INSERT INTO `sdc_calendar` (`id`, `title`, `description`, `start`, `end`, `allDay`, `calendar`, `url`, `display`, `user_id`, `tzid`, `freq`, `dtstart`, `until`, `count`, `interval`, `byweekday`, `bymonth`, `bysetpos`, `bymonthday`, `duration`) VALUES
(2, 'Посторяющееся ежедневно событие через 3 дня', 'Большое описание события, не имеющее смысла', '2021-08-22 15:44:47', '2021-08-22 15:44:54', 1, 'Warning', 'https://momentjs.com/docs/#/manipulating/local/', 'auto', 1, 'Europe/Moscow', 'DAILY', '2021-08-22 15:44:47', NULL, 4, 3, NULL, NULL, NULL, NULL, NULL),
(3, 'Еженедельно по поднедельникам 5 раз, без интервала', '', '2021-08-02 00:00:00', '2021-08-02 00:00:00', 1, 'Info', 'https://jakubroztocil.github.io/rrule/', 'auto', 0, 'Europe/Moscow', 'WEEKLY', '2021-08-01 15:50:23', NULL, 5, 1, 'MO', NULL, NULL, NULL, NULL),
(4, 'Еженедельно по вторникам 2 раза, интервал 2', '', '2021-08-01 15:50:23', '2021-08-01 15:50:23', 1, 'Success', 'https://jakubroztocil.github.io/rrule/', 'auto', 0, 'Europe/Moscow', 'WEEKLY', '2021-08-01 15:50:23', NULL, 2, 2, 'TU', NULL, NULL, NULL, NULL),
(5, 'Ежемесячно до конца года', '', '2021-08-01 15:50:23', '2021-08-01 15:50:23', 1, 'Warning', 'https://jakubroztocil.github.io/rrule/', 'auto', 0, 'Europe/Moscow', 'MONTHLY', '2021-08-01 15:50:23', '2021-12-31 15:50:23', NULL, 2, NULL, NULL, NULL, NULL, NULL),
(6, '', '', '2021-07-31 00:00:00', '2021-07-31 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, '', '', '2021-08-01 00:00:00', '2021-08-01 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, '', '', '2021-08-07 00:00:00', '2021-08-07 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, '', '', '2021-08-08 00:00:00', '2021-08-08 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, '', '', '2021-08-14 00:00:00', '2021-08-14 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, '', '', '2021-08-15 00:00:00', '2021-08-15 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, '', '', '2021-08-21 00:00:00', '2021-08-21 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, '', '', '2021-08-22 00:00:00', '2021-08-22 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, '', '', '2021-08-28 00:00:00', '2021-08-28 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, '', '', '2021-08-29 00:00:00', '2021-08-29 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, '', '', '2021-09-04 00:00:00', '2021-09-04 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, '', '', '2021-09-05 00:00:00', '2021-09-05 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, '', '', '2021-09-11 00:00:00', '2021-09-11 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, '', '', '2021-09-12 00:00:00', '2021-09-12 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, '', '', '2021-09-18 00:00:00', '2021-09-18 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, '', '', '2021-09-19 00:00:00', '2021-09-19 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, '', '', '2021-09-25 00:00:00', '2021-09-25 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, '', '', '2021-09-26 00:00:00', '2021-09-26 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, '', '', '2021-10-02 00:00:00', '2021-10-02 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, '', '', '2021-10-03 00:00:00', '2021-10-03 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, '', '', '2021-10-09 00:00:00', '2021-10-09 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, '', '', '2021-10-10 00:00:00', '2021-10-10 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, '', '', '2021-10-16 00:00:00', '2021-10-16 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, '', '', '2021-10-17 00:00:00', '2021-10-17 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, '', '', '2021-10-23 00:00:00', '2021-10-23 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, '', '', '2021-10-24 00:00:00', '2021-10-24 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, '', '', '2021-10-30 00:00:00', '2021-10-30 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, '', '', '2021-10-31 00:00:00', '2021-10-31 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'Сокращенный рабочий день', '', '2021-11-03 00:00:00', '2021-11-03 23:59:59', 1, 'Warning', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, '', '', '2021-11-04 00:00:00', '2021-11-04 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, '', '', '2021-11-05 00:00:00', '2021-11-05 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, '', '', '2021-11-06 00:00:00', '2021-11-06 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, '', '', '2021-11-07 00:00:00', '2021-11-07 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(39, '', '', '2021-11-13 00:00:00', '2021-11-13 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, '', '', '2021-11-14 00:00:00', '2021-11-14 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, '', '', '2021-11-20 00:00:00', '2021-11-20 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, '', '', '2021-11-21 00:00:00', '2021-11-21 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, '', '', '2021-11-27 00:00:00', '2021-11-27 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, '', '', '2021-11-28 00:00:00', '2021-11-28 23:59:59', 1, 'Danger', '', 'background', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(45, '', '', '2021-08-26 00:00:00', '2021-08-26 00:00:00', NULL, 'Primary', '', 'auto', 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'Название события', '', '2021-08-04 00:00:00', '2021-08-04 00:00:00', NULL, 'Primary', '', '\'auto\'', 1, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'Название события 3', 'Описание события', '2021-08-05 00:00:00', '2021-08-05 23:59:00', 1, 'Success', '', '\'auto\'', 1, 'Europe/Moscow', 'WEEKLY', '2021-08-05 00:00:00', '2021-12-31 12:00:00', NULL, 1, 'MO, TU, WE, TH, FR, SA, SU', NULL, -1, NULL, NULL),
(49, 'Ежедневно', '', '2021-08-11 00:00:00', '2021-08-11 00:00:00', NULL, 'Primary', '', '\'auto\'', 1, 'Europe/Moscow', 'DAILY', '2021-08-11 00:00:00', '2021-12-31 12:00:00', NULL, 1, NULL, NULL, NULL, NULL, '00:00:00'),
(50, 'Каждый первый рабочий день', '', '2021-08-05 00:00:00', '2021-08-05 23:59:00', 1, 'Warning', '', '\'auto\'', 1, 'Europe/Moscow', 'MONTHLY', '2021-08-05 00:00:00', '2021-12-31 12:00:00', NULL, 1, 'MO, TU, WE, TH, FR', NULL, 1, NULL, '00:14:39'),
(55, 'Название события', '', '2021-08-03 12:00:00', '2021-08-03 12:30:00', NULL, 'Primary', '', '\'auto\'', 999999999, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 'Название события', '', '2021-08-05 00:00:00', '2021-08-05 00:00:00', NULL, 'Primary', '', '\'auto\'', 1, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '00:00:00'),
(65, 'Название события', '', '2021-08-03 00:00:00', '2021-08-03 00:00:00', NULL, 'Primary', '', '\'auto\'', 1, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  ADD UNIQUE KEY `sdc_calendar_id_uindex` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
