-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 10 2021 г., 19:26
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
CREATE DATABASE IF NOT EXISTS `isp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `isp`;

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_calendar`
--

CREATE TABLE `sdc_calendar` (
  `id` int(10) NOT NULL,
  `title` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `allDay` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `calendar` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sdc_calendar`
--

INSERT INTO `sdc_calendar` (`id`, `title`, `description`, `start`, `end`, `allDay`, `calendar`, `url`, `user_id`) VALUES
(2, 'Справка к совещанию судей', '', '2021-08-06 00:00:00', '2021-08-06 00:00:00', '0', 'Primary', '', 0),
(3, 'Закрытие суда', 'Чернов Роман Александрович', '2021-08-01 00:00:00', '2021-08-08 00:00:00', '0', 'Primary', '', 0),
(4, 'Консультант +', 'Отправить статистику Консультант+', '2021-08-20 12:00:00', '2021-08-20 12:30:00', '0', 'Primary', 'sobyitiya/konsultant', 0),
(5, 'Справка к совещанию председателей', 'Подготовить справку отправить на Смоленский областной суд; \'gk_smoloblsud@mail.ru\'; \'uk_smoloblsud@mail.ru\'; \'adm_smoloblsud@mail.ru\'; \'ok_smoloblsud@mail.ru\'; \'smoloblsud@mail.ru \'', '2021-08-16 00:00:00', '2021-08-16 00:00:00', '', 'Primary', '', 0),
(6, 'Статистическая отчетность', 'До 10 июля', '2021-08-09 00:00:00', '2021-08-09 00:00:00', '', 'Primary', 'sobyitiya/polugodovaya-otchetnost', 0),
(7, 'Справка', 'Отправить подготовленные спраки', '2021-08-21 00:00:00', '2021-08-21 00:00:00', '', 'Primary', 'sobyitiya/spravka-k-soveshhaniyu-predsedatelej', 0),
(8, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием председателей в 14:00', '2021-08-09 00:00:00', '2021-08-09 00:00:00', '', 'Primary', '', 0),
(9, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием председателей в 14:00', '2021-08-16 00:00:00', '2021-08-16 00:00:00', '', 'Primary', '', 0),
(10, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием по СМИ в 14:00', '2021-08-27 00:00:00', '2021-08-27 00:00:00', '', 'Primary', '', 0),
(65, '222222222222', '', '2021-08-24 12:00:00', '2021-08-24 12:00:00', '', 'Primary', '', 0),
(64, '111111111111', '', '2021-08-23 12:00:00', '2021-08-23 12:00:00', '', 'Primary', '', 0);

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

--
-- Дамп данных таблицы `sdc_proxy_list`
--

INSERT INTO `sdc_proxy_list` (`id`, `menuindex`, `name_href`, `id_group`, `href`, `proxy_href`) VALUES
(1, '1', 'Сервисы', 0, '', ''),
(2, '2', 'Судебная система, госслужба, адвокаты, нотариусы', 0, '', 'sudrf.ru;*.sudrf.ru;arbitr.ru;*.arbitr.ru;*msudrf.ru;*.ssrf.ru;mos-gorsud.ru;'),
(3, '3', 'Органы государственной власти', 0, '', 'gov.ru;*.gov.ru;'),
(4, '4', 'Библиотека', 0, '', ''),
(5, '5', 'Разное', 0, '', ''),
(7, '0', 'Почта - кабинет отправителя', 1, 'https://otpravka.pochta.ru/', '*.pochta.ru;*googleapis.com;*recaptcha.net;*gstatic.com;ocsp.pki.goog;91.215.37.248;*.1e100.net;googletagmanager.com;*google.com;'),
(8, '0', 'Отслеживание почтовых отправлений', 1, 'https://www.pochta.ru/tracking', ''),
(9, '0', 'Журнал ВКС', 1, 'https://vks.sudrf.ru', ''),
(10, '0', 'Индексы и телефонные коды', 1, 'http://ruspostindex.ru/', 'ruspostindex.ru;'),
(11, '0', 'Справочник ВКС', 1, 'http://10.10.1.100/', '10.10.1.100;'),
(12, '0', 'Заявка на назначение адвоката', 1, 'https://smolensk.majc.ru/', 'sysadvpcmol.fparf.ru;smolensk.majc.ru;'),
(13, '0', 'Получение сведений из ЕГРЮЛ / ЕГРИП', 1, 'https://egrul.nalog.ru/', ''),
(14, '0', 'Российский союз автостраховщиков', 1, 'https://rsa.org.ru/', 'rsa.org.ru;*.autoins.ru;'),
(15, '0', 'Универсальный сервис проверки ограничения доступа к сайтам Роскомнадзор', 1, 'https://blocklist.rkn.gov.ru/', ''),
(16, '1', 'Смоленский областной суд', 2, 'http://oblsud.sml.sudrf.ru/', ''),
(17, '2', 'Второй кассационный суд', 2, 'https://2kas.sudrf.ru/', ''),
(18, '3', 'Сафоновский районный суд', 2, 'http://safonovo.sml.sudrf.ru/', ''),
(19, '4', 'Суды общей юрисдикции г. Москва', 2, 'https://www.mos-gorsud.ru/', 'www.mos-gorsud.ru;'),
(20, '0', 'МВД', 3, 'https://мвд.рф', 'xn--b1aew.xn--p1ai;*..xn--b1aew.xn--p1ai;мвд.рф;'),
(21, '5', 'Судебный департамент', 2, 'http://www.cdep.ru/', 'www.cdep.ru;releases.flowplayer.org;cdep.ru;'),
(22, '7', 'Портал госслужбы', 2, 'https://gossluzhba.gov.ru/', ''),
(23, '8', 'ГАС \"Правосудие\"', 2, 'https://sudrf.ru/', ''),
(24, '9', 'Адвокаты Российской Федерации', 2, 'http://lawyers.minjust.ru/Lawyers', ''),
(25, '10', 'Федеральная нотариальная палата', 2, 'https://notariat.ru/ru-ru/', '*notariat.ru;'),
(26, '0', 'Муниципальное бразование ', 3, 'http://safonovo-admin.ru/', 'safonovo-admin.ru;'),
(27, '0', 'Президент России', 3, 'http://kremlin.ru/', ''),
(28, '0', 'Роскомнадзор', 3, 'https://rkn.gov.ru/', ''),
(29, '0', 'Государственная дума', 3, 'http://duma.gov.ru/', ''),
(30, '0', 'Смоленская областная дума', 3, 'http://smoloblduma.ru/', 'smoloblduma.ru;'),
(31, '0', 'Федеральная служба Судебных приставов', 3, 'http://fssprus.ru/', 'fssprus.ru;*.fssprus.ru;'),
(32, '0', 'Федеральная налоговая служба', 3, 'https://www.nalog.ru/', '*.nalog.ru;nalog.ru;'),
(33, '0', 'Росреестр', 3, 'https://rosreestr.ru/', 'rosreestr.ru;'),
(34, '0', 'ФСИН России', 3, 'http://fsin.su/', 'fsin.su;'),
(35, '0', 'Министерство Юстиции РФ', 3, 'https://minjust.ru/', '*.minjust.ru;'),
(36, '0', 'Федеральное казначейство', 3, 'http://roskazna.ru/', 'roskazna.ru;'),
(37, '0', 'Право.ru', 4, 'https://pravo.ru/', '*.pravo.ru;pravo.ru;'),
(38, '0', 'Российская газета', 4, 'https://rg.ru/', 'rg.ru;'),
(39, '0', 'Судебные и нормативные акты РФ (sudact.ru)', 4, 'https://sudact.ru/', 'sudact.ru;'),
(40, '0', 'Собрание законодательства Российской Федерации', 4, 'http://www.szrf.ru/', 'www.szrf.ru;'),
(41, '0', 'Федеральный портал проектов нормативных правовых актов', 4, 'https://regulation.gov.ru/', ''),
(42, '0', 'Изменения законодательства на сайте Президента России', 4, 'http://kremlin.ru/acts/news', ''),
(43, '0', 'Госуслуги', 5, 'https://www.gosuslugi.ru/', 'gosuslugi.ru;*.gosuslugi.ru;gu-st.ru;'),
(44, '0', 'Сбер Банк', 5, 'https://www.sberbank.ru/', ''),
(45, '0', 'Департамент Смоленской области по социальному развитию', 3, 'https://socrazvitie67.ru/', 'socrazvitie67.ru;'),
(46, '0', 'Консультант+', 4, 'http://www.consultant.ru/', 'consultant.ru;*.consultant.ru;glavkniga.ru;'),
(51, '0', 'СПО ПТК ВИВ', 1, 'http://10.224.0.36:8080/ptkviv/', ''),
(52, '6', 'Управление Судебного департамента в Смоленской области', 2, 'http://usd.sml.sudrf.ru/', '');

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

-- --------------------------------------------------------

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

--
-- Дамп данных таблицы `sdc_users`
--

INSERT INTO `sdc_users` (`id`, `username`, `password`, `active`, `primary_group`, `sudo`) VALUES
(1, 'chainik', '$2y$10$ajAnKFrS/4p4Vc3IWZCfwug2HOVWoN6mf0/IeltVpaT3R7lJq21N2', 1, 3, 1),
(2, 'Chernov_RA', '$2y$10$VX.uExBp28.KAyFKp.zCTObim7q75QGkIF2uAWDVM6Uqt4w9Rj5gK', 1, 4, 0),
(3, 'Soloviev_VG', '$2y$10$mcb9gaI1VxbIRVQ9.IEsxugA2EITW8oxURZnofHHs4pxnjy64nMVa', 1, 1, 0),
(4, 'Agibalova_TV', '$2y$10$lCuZeK7ehlrEuP3WlIWTyu0wF5lHvuG.g2alh74GGVe.rE25PHHN6', 0, 0, 0),
(5, 'Alekseeva_NY', '$2y$10$aUefFQA8OGfjErP97/1MxOMciDXoX24pHZA4t8AoaFXMWOiB13Vkm', 1, 2, 0),
(6, 'Ashurova_DM', '$2y$10$rF4rtgGsUowpAVEsdm.niOErc8HSVe8J7VXvD9/CnI1wh8//rB/v2', 1, 3, 0),
(7, 'Berezovskaya_NV', '$2y$10$IOmR/5wIJVdM5e.4ESYq4.DyXhuafyH7eEiDww6pzVWj2yKXLLdh.', 1, 4, 0),
(8, 'Birukova_EV', '$2y$10$ECy34bEXHHLyNsazcICnZ.40hME1F8SCvdexWVNQie0NXaBXQ0vVO', 1, 2, 0),
(9, 'Voropaeva_TV', '$2y$10$mVbC614PVDH1.J8yEJN16ewvADY0q1hZVILen9DPVGMy3PDR8fEke', 1, 2, 0),
(10, 'Gerasimova_NV', '$2y$10$R1BWMGedlWASZc1mPx8cBeri2AaaIrwBUwWuPAImQI.lTFz193he2', 1, 2, 0),
(11, 'Gorbacheva_AV', '$2y$10$.47igL6XVhGLhsnPzxRhYerNemJZOl35gQpyMGv8OgXrXN.icMkGa', 1, 3, 0),
(12, 'Zueva_EV', '$2y$10$JCm/o8IhnTnZxWC6vnxKuOPLSBL.MFJn48js1Z.i0EfZTPSUwE/Qm', 1, 3, 0),
(13, 'Kaichenkova_EA', '$2y$10$sf4P34oJDREj1LaFKVPK9uW2t43gqZAQwOdQ/UxQAT/xJHmyJPDdi', 1, 3, 0),
(14, 'Kasyanova_SV', '$2y$10$mQLTYe3Ki.grJGfYes7ivu38fauLWqMA3XFqnyzUS8OX6lhE3g0DK', 1, 4, 0),
(15, 'Kovrigina_EN', '$2y$10$EGJD0mjXhxxdSjl8TreFm.X/sV1.tRIt7h/4ivHZA1Wc5RclN6rHm', 0, 0, 0),
(16, 'Lobanova_EV', '$2y$10$ZsthJ.UhoDX1cFo4IOLSF.iKor6jZgutMw5TZkyHvBB3cQOj94uMq', 1, 3, 0),
(17, 'Krivas_IV', '$2y$10$0SyGrjTQx8.J2swolMWXN.2zpQu6Qw9Eo0ymxTlG0ahwsmVwmpgW.', 1, 2, 0),
(18, 'Latysheva_YA', '$2y$10$ajAnKFrS/4p4Vc3IWZCfwug2HOVWoN6mf0/IeltVpaT3R7lJq21N2', 1, 4, 0),
(19, 'Maluchkova_EN', '$2y$10$/mRC0IB8.79b3mlCcljV8.hAFaNlT9TyhBwrqQ1zFPdNKvi6uq2wO', 1, 4, 0),
(20, 'Meshkova_VO', '$2y$10$oLBknYphzMnzTrLMfkgz/Oc7ZmJLLKjG6EixbzCwjx8pR9Cb2pgi6', 1, 4, 0),
(21, 'Mirenkova_YN', '$2y$10$LHkaqpoPp6JwlLO36YvEM.UukqHIKjavLudJmBA176yjfnIeHqNz2', 1, 2, 0),
(22, 'Nikolaeva_II', '$2y$10$lE59HlshSsCVVCsP8CGtQuwwqfQKKP8MSPIgbZ1aeYlEpzvjFp9/q', 1, 4, 0),
(23, 'Novichkova_AS', '$2y$10$xkDh5G56YC9ITEZCypC1qOJVTV6.G5qpi3UW7BD7sv6hpZxlG8FnC', 1, 2, 0),
(24, 'Osipova_AV', '$2y$10$ikjKvUxOhVECj7kyPNW/vOEv62TsV/uQ2ZOb9Jn5v/wALxl46Mv56', 1, 4, 0),
(25, 'Poluektova_SA', '$2y$10$aWHonV8b2TEJokgeBgoqVOvoBMx/zPDpw8oeTuvdJvhN5THif5Z2e', 1, 3, 0),
(26, 'Prokofieva_MV', '$2y$10$.rmjyDew8MTRLkMuL5PGQeOVyy52Vo.RAUa5i6NL/T9BhaFgaXQR6', 1, 4, 0),
(27, 'Pshenichnikova_AV', '$2y$10$GrAQV9dSs0IFhUsytIGInON1S3DeomuSDVmgVlVWDpS05Y.fnXhne', 1, 3, 0),
(28, 'Rakcheeva_OV', '$2y$10$YcDgR6DQTAwefkriMqLAT.ilNvo0hnW2C0qZctWy5F1Yuxi6zDPGm', 1, 2, 0),
(29, 'Salnikova_EG', '$2y$10$kfSrYxyL/r1gZfYrsZMc/uPyL00xSYa61DwhUsjMyYaPsEjkCtY5W', 1, 3, 0),
(30, 'Tarakanova_EV', '$2y$10$kcCRqaEcF4Vx6zigfaooKOsJgINDDtppdqcVXPY0MSOY/jtJ/zRd2', 0, 0, 0),
(31, 'Timofeeva_II', '$2y$10$ecTQzL/29X5FvQ0fx8rHHuXggEWp.90BU/9wUrPfkILmiIjpc41.e', 1, 3, 0),
(32, 'Umerenkova_EV', '$2y$10$n31SxamR93TjPEFyJk0v0ucFTzxMWcH39cz6O7EE84KIJ36/U6GrS', 1, 4, 0),
(33, 'Franc_SK', '$2y$10$AVFpDoENR4uA.G8dDA/LCepDaRlAFzFiI0oUhxPTjW6WuYv.KTPv2', 0, 0, 0),
(34, 'Homenkova_YA', '$2y$10$6wF3sjxJRJUAwnZWeGK.MuNcQW.5/aHjBqwnNjFa0Y5Xy5rKCGBQ6', 1, 4, 0),
(35, 'Cherkashina_SA', '$2y$10$y2/uWSB03PPrBItowSs2NeKKiueJwSwc3jJBJGz5Lz4rJK26vN37i', 1, 3, 0),
(36, 'Bogachev_SS', '$2y$10$ZJ63755M4n2OLAg4pjmYtu6P3DY6gVF/kXi8W6HYFFsZqTTxEC1Ei', 1, 4, 0),
(37, 'Kozlov_AA', '', 0, 0, 0),
(38, 'Tarasova_MA', '$2y$10$EgCHCDOzpuVwQf4/K.xvBOswHojpHThSpPlq44lQajuuVywa.hCj6', 1, 1, 0),
(39, 'Sabantsev_MM', '$2y$10$EQuMuxqFnUeFfu0sYuM29uSBmn/0evDuoNSLcsnwsFmL.4MUwUeYe', 1, 1, 0),
(40, 'Melnichuk_EV', '$2y$10$DR9OiVSYk4rdgD7uNw9lre9y3HdJusQ37lp1T1z4wbmqAZiJc3Dny', 1, 1, 0),
(41, 'Krivchuk_VA', '$2y$10$XxdvxdGwE8zJNbpYZWkWkuzuBFV5e6kBtLOwusCuM9.GtmMDBbVZq', 1, 1, 0),
(42, 'Drozdov_SA', '$2y$10$ztihkcLlA1CDkhddmRfhzO5K/Je3iSgYw3cnES29voyWPQf/fMRZS', 1, 1, 0),
(43, 'Aseev_MS', '$2y$10$sED/gnFLEIudBbMWm3bHM.2r324VyzfjVarkmEgygWhel6oKHBYVO', 1, 1, 0),
(44, 'Basurova_EE', '$2y$10$dGo1BvE2gXd.uTNosqXaTuOiFetFx.rPR/075pEtX6eAaN2rLYdvG', 1, 1, 0),
(45, 'Shtukina_SE', '$2y$10$tZw7z9Xuo.KsbZvnHXCwL.Oo66QA7TenjJpl9YmWRDyiDQ7GOXjzC', 1, 1, 0),
(46, 'Milchenko_EA', '$2y$10$cXHRCLbzRYfx/M/IUpyI0uHLMXXXTqUk.bQpe3fXksKLJeIg3GBg.', 1, 1, 0),
(47, 'Sevrikova_VN', '', 1, 2, 0),
(48, 'Kovechenkova_YN', '', 1, 2, 0),
(49, 'Pavlova_OO', '', 1, 1, 0),
(51, 'Kostenkova_NA', '', 1, 3, 0),
(52, 'Semenova_MN', '', 1, 2, 0);

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

INSERT INTO `sdc_user_attributes` (`id`, `internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `photo`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES
(1, 1, 'Супер Админ ИСП', 1, '1987-03-17', 'admin@net.ru', '+7(007)', '215500', '67', 'Сафоново', 'серверная в суде', 'assets/img/avatars/default.svg', 'Учетная запись супер-пользователя', 'sudrf.ru/superadmin)', '', '', NULL),
(2, 2, 'Чернов Роман Александрович', 1, '1987-03-17', 'Chernov_RA@mail.ru', '+7(900) 225-16-16', '215500', '67', 'Сафоново', 'ул. Строителей д. 32', 'assets/img/avatars/default.svg', 'скромный но пьющий сотрудник', 'vk.com/нет)', '8', '', 3),
(3, 3, 'Соловьёв Вадим Геннадьевич', 1, '1977-01-24', 'Soloviev_VG@net.ru', '', '', '22', '', '', 'assets/img/avatars/default.svg', '', '', '1', '', 22),
(4, 4, 'Агибалова Татьяна В', 2, '2021-04-01', '', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '46', NULL),
(5, 5, 'Алексеева Наталья Юрьевна', 2, '1971-06-03', 'Alekseeva_NY@net.sud', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '7', '39', 29),
(6, 6, 'Ашурова Дина Михайловна', 2, '1989-07-06', 'Ashurova_DM@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '9', '', 24),
(7, 7, 'Березовская Наталья Васильевна', 2, '1966-05-24', 'net@mail.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '10', '', 30),
(8, 8, 'Бирюкова Елена Владимировна', 2, '1983-09-17', 'Birukova_EV@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '38', 7),
(9, 9, 'Воропаева Татьяна Викторовна', 2, '1971-11-16', 'Voropaeva_TV@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '41', 18),
(10, 10, 'Герасимова Наталья Владимировна', 2, '1984-09-24', 'Gerasimova_NV@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '40', 27),
(11, 11, 'Горбачева Анна Викторовна', 2, '1990-03-20', 'Demidovich_AV@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '3', 21),
(12, 12, 'Зуева Елена Вячеславовна', 2, '1985-08-16', 'Zueva_EV@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '44', 16),
(13, 13, 'Кайченкова Елена Анатольевна', 2, '1983-05-22', 'Kaichenkova_EA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '42', 14),
(14, 14, 'Касьянова Светлана Викторовна', 2, '1988-05-22', 'Kasyanova_SV@net.gov', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '22', '', 47),
(15, 15, 'Ковригина Е Н', 0, '2021-04-01', '', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '43', NULL),
(16, 16, 'Лобанова Екатерина Владимировна', 2, '1980-03-09', 'Lobanova_EV@net.ru', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '38', 28),
(17, 17, 'Кривас Ирина Владимировна', 2, '1979-10-25', 'Krivas_IV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '44', 11),
(18, 18, 'Латышева Юлия Александровна', 2, '1985-09-11', 'Latysheva_YA@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '8', '', 2),
(19, 19, 'Малючкова Евгения Николаевна', 2, '1981-08-17', 'Maluchkova_EN@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '4', '', 25),
(20, 20, 'Мешкова Виктория Олеговна', 2, '1985-10-19', 'Meshkova_VO@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '16', '', 6),
(21, 21, 'Миренкова Юлия Николаевна', 2, '1987-11-14', 'Mirenkova_YN@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '43', 17),
(22, 22, 'Николаева Инга Игоревна', 2, '1985-07-21', 'Nikolaeva_II@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '15', '', 32),
(23, 23, 'Новичкова Анна Сергеевна', 2, '1983-04-24', 'Novichkova_AS@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '6', '3', 23),
(24, 24, 'Осипова Анна Валерьевна', 2, '1986-11-27', 'Osipova_AV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '8', '', 26),
(25, 25, 'Полуэктова Светлана Анатольевна', 2, '1984-03-28', 'Poluektova_SA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '41', 20),
(26, 26, 'Прокофьева Марина Викторовна', 2, '1965-10-07', 'Prokofieva_MV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '11', '', 33),
(27, 27, 'Пшеничникова Анастасия Вячеславовна', 2, '1994-11-24', 'Pshenichnikova_AV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '40', 5),
(28, 28, 'Ракчеева Ольга Викторовна', 2, '1980-06-06', 'Rakcheeva_OV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '45', 10),
(29, 29, 'Сальникова Екатерина Геннадьевна', 2, '1989-07-11', 'Salnikova_EG@net.ru', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '43', 19),
(30, 30, 'Тараканова Елизавета Васильевна', 2, '1988-07-16', 'net@mail.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '9', '38', NULL),
(31, 31, 'Тимофеева Ирина Ивановна', 2, '1982-02-03', 'Timofeeva_II@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '45', 38),
(32, 32, 'Умеренкова Елена Владимировна', 2, '1983-08-30', 'Umerenkova_EV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '5', '', 35),
(33, 33, 'Франц Светлана Константиновна', 2, '1996-09-11', 'Franc_SK@net.ru', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '7', '46', NULL),
(34, 34, 'Хоменкова Юлия Анатольевна', 2, '1978-09-30', 'Homenkova_YA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '16', '', 31),
(35, 35, 'Черкашина Светлана Анатольевна', 2, '1968-07-21', 'Cherkashina_SA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '9', '39', 15),
(36, 36, 'Богачёв Сергей Станиславович', 1, '1979-11-12', 'Bogachev_SS@gov.net', '+7(904)369-14-92', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '20', '', 36),
(37, 37, 'Козлов Андрей Альевич', 1, '1970-06-27', 'Kozlov_AA@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '2', '', NULL),
(38, 38, 'Тарасова Майя Александровна', 2, '1973-05-05', 'Tarasova_MA@net.gov', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 45),
(39, 39, 'Сабанцев Михаил Михайлович', 1, '1955-07-24', 'Sabantsev_MM@gov.net', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '3', '', 46),
(40, 40, 'Мельничук Елена Владимировна', 2, '1974-09-02', 'Melnichuk_EV@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 40),
(41, 41, 'Кривчук Вера Алексеевна', 2, '1977-12-22', 'Krivchuk_VA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 41),
(42, 42, 'Дроздов Сергей Алексеевич', 1, '1970-12-11', 'Drozdov_SA@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 39),
(43, 43, 'Асеев Максим Сергеевич', 1, '1975-05-01', 'Aseev_MS@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 42),
(44, 44, 'Басурова Елена Евгеньевна', 2, '1978-01-30', 'Basurova_EE@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 43),
(45, 45, 'Штукина Светлана Евгеньевна', 2, '1972-11-04', 'Shtukina_SE@gov.net', '', '', '67', '', '', 'assets/img/avatars/default.svg', '', '', '3', '', 44),
(46, 46, 'Мильченко Евгения Александровна', 2, '1982-07-27', 'Milchenko_EA@gov.net', '', '', '67', 'Ярцево', '', 'assets/img/avatars/default.svg', '', '', '3', '', 4),
(47, 47, 'Севрикова Валентина Николаевна', 2, '1983-04-24', 'Sevrikova_VB@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '7', '46', 9),
(48, 48, 'Ковеченкова Юлия Николаевна', 2, '1982-06-16', 'Kovechenkova_YN@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '7', '', 12),
(49, 49, 'Павлова Ольга Олеговна', 2, '1979-12-03', 'Pavlova_OO@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '3', '', 48),
(50, 51, 'Костенкова Наталья Александровна', 2, '1975-06-17', 'Kostenkova_NA@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '9', '46', 37),
(51, 52, 'Семенова Марина Николаевна', 2, '1976-07-25', 'Semenova_MN@net.ru', '', '', '67', 'Сафоново', '', 'assets/img/avatars/default.svg', '', '', '7', '42', 13);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  ADD UNIQUE KEY `id` (`id`);

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT для таблицы `sdc_proxy_list`
--
ALTER TABLE `sdc_proxy_list`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `sdc_room`
--
ALTER TABLE `sdc_room`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT для таблицы `sdc_users`
--
ALTER TABLE `sdc_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `sdc_user_attributes`
--
ALTER TABLE `sdc_user_attributes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
