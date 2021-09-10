-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 10 2021 г., 16:44
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
  `bysetpos` int(11) DEFAULT NULL,
  `bymonthday` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_calendar`
--

INSERT INTO `sdc_calendar` (`id`, `title`, `description`, `start`, `end`, `allDay`, `calendar`, `url`, `display`, `private`, `user_id`, `tzid`, `freq`, `dtstart`, `until`, `count`, `interval`, `byweekday`, `bymonth`, `bysetpos`, `bymonthday`) VALUES
(210, 'Дежурство на выборы', 'Чернов Р.А. +7(900)225-16-16', '2021-09-18 08:00:00', '2021-09-18 14:00:00', NULL, 'Info', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(211, 'Дежурство на выборы', 'Чернов Р.А. +7(900)225-16-16', '2021-09-19 14:00:00', '2021-09-19 20:00:00', NULL, 'Info', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(212, 'Дежурство на выборы', 'Латышева Ю.А. +7(906)669-69-71', '2021-09-18 14:00:00', '2021-09-18 20:00:00', NULL, 'Info', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(213, 'Дежурство на выборы', 'Латышева Ю.А. +7(906)669-69-71', '2021-09-19 08:00:00', '2021-09-19 14:00:00', NULL, 'Info', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(214, 'Стат. отчетность по форме S09(z16.1)', 'До 15 сентября 2021 отправить на e-mail: MexedovaIV@mail.ru', '2021-09-14 12:00:00', '2021-09-14 13:00:00', NULL, 'Warning', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(215, 'Стат. отчетность по форме z42', 'До 12 октября 2021 отправить на e-mail: MexedovaIV@mail.ru', '2021-10-11 11:19:00', '2021-10-11 12:19:00', NULL, 'Warning', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(216, 'Стат. отчетность по форме z42', 'До 12 января 2022 отправить на e-mail: MexedovaIV@mail.ru', '2022-01-11 00:00:00', '2022-01-11 00:00:00', NULL, 'Warning', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(217, 'Запрос для военкомата', 'до 24 сентября', '2021-09-23 12:00:00', '2021-09-23 13:00:00', NULL, 'Warning', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(219, 'Закрытие суда', 'Чернов Р.А.', '2021-10-18 09:00:00', '2021-10-25 00:00:00', NULL, 'Info', '', '\'auto\'', 0, 0, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(220, 'Название события', '', '2021-10-12 00:00:00', '2021-10-12 00:00:00', NULL, 'Success', '', '\'auto\'', 1, 1, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
