-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 23 2021 г., 15:48
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
-- База данных: `dev`
--

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_certificate_work`
--

CREATE TABLE `sdc_certificate_work` (
  `id` int(10) NOT NULL,
  `judges` int(2) NOT NULL COMMENT 'id судьи из таблицы users',
  `year` int(4) NOT NULL,
  `quarter` int(1) NOT NULL,
  `3` int(3) DEFAULT NULL COMMENT 'Окончено дел уголовных дел',
  `4` int(3) DEFAULT NULL COMMENT 'Окончено дел гражданских',
  `5` int(3) DEFAULT NULL COMMENT 'Окончено дел административных',
  `6` int(3) DEFAULT NULL COMMENT 'Рассмотрено дел в ап.  порядке уголовных',
  `7` int(3) DEFAULT NULL COMMENT 'Рассмотрено дел в ап.  порядке гражданских',
  `8` int(3) DEFAULT NULL COMMENT 'Рассмотрено дел в ап.  порядке административных',
  `9` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 108',
  `10` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 109',
  `11` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 125',
  `12` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 165',
  `13` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 397',
  `14` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов ст. 398',
  `16` int(3) DEFAULT NULL COMMENT 'Рассмотрено материалов по которым отказано в принятии заявлений, которые оставлены без движения',
  `17` int(3) DEFAULT NULL COMMENT 'Рассмотрено адм. материалов по жалобам на постановления по делам об адм. правонаруш.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Справка о работе судей по кварталам';

--
-- Дамп данных таблицы `sdc_certificate_work`
--

INSERT INTO `sdc_certificate_work` (`id`, `judges`, `year`, `quarter`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `16`, `17`) VALUES
(1, 3, 2021, 1, 6, 17, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 2),
(2, 38, 2021, 1, 18, NULL, 12, NULL, NULL, NULL, 3, 2, NULL, 3, 9, NULL, NULL, NULL),
(3, 45, 2021, 1, 9, NULL, 9, 1, NULL, NULL, 2, NULL, 3, 4, 9, NULL, NULL, NULL),
(4, 39, 2021, 1, 13, NULL, 12, NULL, NULL, NULL, 1, NULL, 2, 3, 10, NULL, NULL, NULL),
(5, 46, 2021, 1, 15, NULL, 8, 1, NULL, NULL, 1, NULL, NULL, 1, 6, NULL, NULL, NULL),
(6, 40, 2021, 1, NULL, 78, 19, NULL, 2, NULL, 1, NULL, NULL, NULL, 2, NULL, 8, 4),
(7, 41, 2021, 1, NULL, 85, 32, NULL, 3, 1, 1, 1, NULL, 18, 2, NULL, 6, 3),
(8, 42, 2021, 1, NULL, 55, 25, NULL, 2, 1, NULL, 3, NULL, 8, 2, NULL, 15, 2),
(9, 44, 2021, 1, NULL, 80, 46, NULL, 2, NULL, 1, NULL, NULL, 9, 2, NULL, 4, 4),
(10, 43, 2021, 1, NULL, 79, 22, NULL, 1, 2, 1, NULL, NULL, 11, 1, NULL, 9, 1),
(11, 3, 2021, 2, 11, 66, 9, NULL, 1, NULL, 1, 1, NULL, 1, 1, NULL, 5, 1),
(12, 38, 2021, 2, 14, NULL, 7, NULL, NULL, NULL, 1, NULL, 2, 11, 8, NULL, NULL, NULL),
(13, 45, 2021, 2, 21, 3, 9, 2, NULL, NULL, 1, NULL, 1, 8, 12, NULL, NULL, NULL),
(14, 39, 2021, 2, 10, NULL, 8, NULL, NULL, NULL, 3, 1, 2, 2, 9, NULL, NULL, NULL),
(15, 49, 2021, 2, NULL, 7, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 6, NULL),
(16, 46, 2021, 2, 11, NULL, 11, 1, NULL, NULL, 1, NULL, 3, 5, 9, NULL, NULL, NULL),
(17, 40, 2021, 2, NULL, 72, 19, NULL, 2, 1, 3, NULL, NULL, 8, 2, NULL, NULL, 2),
(18, 41, 2021, 2, NULL, 76, 16, NULL, 3, NULL, 3, 4, NULL, 6, 1, NULL, 4, 3),
(19, 42, 2021, 2, NULL, 52, 9, NULL, NULL, 2, NULL, 3, NULL, 1, 2, NULL, 12, 2),
(20, 44, 2021, 2, NULL, 71, 8, NULL, 2, NULL, NULL, 1, NULL, 6, 1, NULL, 13, 4),
(21, 43, 2021, 2, NULL, 73, 14, NULL, 4, 2, 1, NULL, NULL, 9, 2, NULL, 8, 5),
(22, 43, 2021, 3, NULL, 80, 34, NULL, 1, 1, 1, NULL, NULL, 5, 1, NULL, 6, 3),
(23, 44, 2021, 3, NULL, 58, 23, NULL, 1, 1, NULL, 1, NULL, 6, NULL, NULL, 11, 1),
(24, 42, 2021, 3, NULL, 44, 31, NULL, 1, 3, NULL, 2, NULL, 2, NULL, NULL, 7, 1),
(25, 41, 2021, 3, NULL, 78, 28, NULL, NULL, NULL, NULL, 1, NULL, 5, 1, NULL, 12, 4),
(26, 40, 2021, 3, NULL, 80, 40, NULL, 1, 4, NULL, NULL, NULL, 2, 1, NULL, NULL, 1),
(27, 46, 2021, 3, 17, NULL, 7, NULL, NULL, NULL, NULL, 1, 3, 14, 8, NULL, NULL, NULL),
(28, 49, 2021, 3, NULL, 100, 25, NULL, NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, 3, 4),
(29, 39, 2021, 3, 27, NULL, 1, 1, NULL, NULL, 2, NULL, 6, 6, 12, NULL, NULL, NULL),
(30, 3, 2021, 3, 17, 9, 5, NULL, NULL, NULL, NULL, 2, NULL, 16, NULL, NULL, NULL, NULL),
(31, 38, 2021, 3, 8, NULL, 8, 1, NULL, NULL, 4, 1, 3, 3, 6, NULL, NULL, NULL),
(32, 45, 2021, 3, 9, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, 6, 7, NULL, NULL, NULL);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
