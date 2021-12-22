-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 21 2021 г., 22:43
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
-- Структура таблицы `sdc_certificate_work`
--

CREATE TABLE `sdc_certificate_work` (
  `id` int(10) NOT NULL,
  `judges` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `quarter` int(1) NOT NULL,
  `3` int(3) DEFAULT NULL COMMENT 'Окончено дел уголовных дел',
  `4` int(3) DEFAULT NULL COMMENT 'Окончено дел гражданских',
  `5` int(3) DEFAULT NULL COMMENT 'Окончено дел административных'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Справка о работе судей по кварталам';

--
-- Дамп данных таблицы `sdc_certificate_work`
--

INSERT INTO `sdc_certificate_work` (`id`, `judges`, `year`, `quarter`, `3`, `4`, `5`) VALUES
(1, 3, 2021, 1, 6, 17, 2),
(2, 38, 2021, 1, 18, NULL, 12),
(3, 45, 2021, 1, 9, NULL, 9),
(4, 39, 2021, 1, 13, NULL, 12),
(5, 46, 2021, 1, 15, NULL, 8),
(6, 40, 2021, 1, NULL, 78, 19),
(7, 41, 2021, 1, NULL, 85, 32),
(8, 42, 2021, 1, NULL, 55, 25),
(9, 44, 2021, 1, NULL, 80, 46),
(10, 43, 2021, 1, NULL, 79, 22),
(11, 3, 2021, 2, 11, 66, 9),
(12, 38, 2021, 2, 14, NULL, 7),
(13, 45, 2021, 2, 21, 3, 9),
(14, 39, 2021, 2, 10, NULL, 8),
(15, 49, 2021, 2, NULL, 7, NULL),
(16, 46, 2021, 2, 11, NULL, 11),
(17, 40, 2021, 2, NULL, 72, 19),
(18, 41, 2021, 2, NULL, 76, 16),
(19, 42, 2021, 2, NULL, 52, 9),
(20, 44, 2021, 2, NULL, 71, 8),
(21, 43, 2021, 2, NULL, 73, 14);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_certificate_work`
--
ALTER TABLE `sdc_certificate_work`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_certificate_work`
--
ALTER TABLE `sdc_certificate_work`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
