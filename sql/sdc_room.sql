-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Ноя 13 2021 г., 12:27
-- Версия сервера: 10.5.12-MariaDB-0+deb11u1
-- Версия PHP: 7.4.25

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
(36, '2Z', '192.168.2.36', 'АРМ 1', 'desktop', 83, NULL, '4-37-94'),
(37, '2Б', '192.168.2.37', 'АРМ 1', 'desktop', 68, NULL, '2-56-16'),
(38, '2Г', '192.168.2.38', 'АРМ 3', 'desktop', 65, NULL, '2-28-78'),
(39, '', '192.168.2.66', 'АРМ 2', 'desktop', 62, 8, '4-44-85'),
(40, '', '192.168.2.64', 'АРМ 1', 'desktop', 60, 6, '4-25-06'),
(41, '', '192.168.2.72', 'АРМ 1', 'desktop', 61, 7, '4-17-08'),
(42, '', '192.168.2.67', 'АРМ 1', 'desktop', 63, 9, '5-13-25'),
(43, '', '192.168.2.68', 'к10_1', 'desktop', 64, 10, '2-28-78'),
(44, '', '192.168.2.65', 'АРМ 1', 'desktop', 70, 16, '4-17-96'),
(45, '', '192.168.2.115', 'АРМ 1', 'desktop', 58, 2, '4-41-32'),
(46, '', '192.168.2.63', 'АРМ 1', 'desktop', 59, 5, '5-13-26'),
(47, '', '192.168.2.71', 'АРМ 8', 'desktop', 57, NULL, '4-17-94'),
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
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_room`
--
ALTER TABLE `sdc_room`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_room`
--
ALTER TABLE `sdc_room`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;