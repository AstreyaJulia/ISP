-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 17 2021 г., 16:22
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
-- Индексы таблицы `sdc_vocation`
--
ALTER TABLE `sdc_vocation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_vocation`
--
ALTER TABLE `sdc_vocation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
