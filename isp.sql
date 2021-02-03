-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 03 2021 г., 22:51
-- Версия сервера: 10.3.27-MariaDB-0+deb10u1
-- Версия PHP: 7.4.10

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
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `allDay` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `freq` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tzid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Europe/Moscow',
  `count` tinyint(4) DEFAULT NULL,
  `interval` tinyint(4) DEFAULT NULL,
  `byweekday` varchar(13) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bymonth` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `user_id` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sdc_calendar`
--

INSERT INTO `sdc_calendar` (`id`, `title`, `description`, `start`, `end`, `allDay`, `properties`, `freq`, `tzid`, `count`, `interval`, `byweekday`, `bymonth`, `duration`, `color`, `url`, `user_id`) VALUES
(2, 'Справка к совещанию судей', '', '2020-03-06 09:30:00', '2020-03-06 10:00:00', 0, NULL, '', 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, '#B22222', '', 0),
(3, 'Закрытие суда', 'Чернов Роман Александрович', '2020-06-01 18:00:00', '2020-06-08 08:30:00', 0, NULL, '', 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, '#FFD700', '', 0),
(4, 'Консультант +', 'Отправить статистику Консультант+', '2020-05-20 12:00:00', '2020-05-20 12:30:00', 0, NULL, 'WEEKLY', 'Europe/Moscow', 33, 1, '3', NULL, '02:15:00', '#29ab87', 'sobyitiya/konsultant', 0),
(5, 'Справка к совещанию председателей', 'Подготовить справку отправить на Смоленский областной суд; \'gk_smoloblsud@mail.ru\'; \'uk_smoloblsud@mail.ru\'; \'adm_smoloblsud@mail.ru\'; \'ok_smoloblsud@mail.ru\'; \'smoloblsud@mail.ru \'', '2020-06-16 12:09:00', NULL, 0, NULL, 'DAILY', 'Europe/Moscow', 1, NULL, NULL, NULL, '00:30:00', '#B22222', '', 0),
(6, 'Статистическая отчетность', 'До 10 июля', '2020-07-09 12:09:00', NULL, 0, NULL, 'YEARLY', 'Europe/Moscow', 3, NULL, NULL, NULL, '01:30:00', '#B22222', 'sobyitiya/polugodovaya-otchetnost', 0),
(7, 'Справка', 'Отправить подготовленные спраки', '2020-07-21 12:10:00', NULL, 0, NULL, 'MONTHLY', 'Europe/Moscow', 2, NULL, NULL, NULL, '00:30:00', '#B22222', 'sobyitiya/spravka-k-soveshhaniyu-predsedatelej', 0),
(8, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием председателей в 14:00', '2020-07-09 13:30:00', NULL, 0, NULL, 'DAILY', 'Europe/Moscow', 1, NULL, NULL, NULL, '00:30:00', '#c4bd97', '', 0),
(9, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием председателей в 14:00', '2020-07-16 13:30:00', NULL, 0, NULL, 'DAILY', 'Europe/Moscow', 1, NULL, NULL, NULL, '02:30:00', '#c4bd97', '', 0),
(10, 'Видеоконференц-связь', 'Проведение тестового сеанса ВКС перед совещанием по СМИ в 14:00', '2020-07-27 13:30:00', NULL, 0, NULL, 'DAILY', 'Europe/Moscow', 1, NULL, NULL, NULL, '02:30:00', '#c4bd97', '', 0),
(11, 'test title', 'test description', '2021-02-02 22:37:02', '2021-02-03 22:37:02', 0, NULL, NULL, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, '', 1),
(12, 'test title', 'test description', '2021-02-02 22:37:02', '2021-02-03 22:37:02', 0, NULL, NULL, 'Europe/Moscow', NULL, NULL, NULL, NULL, NULL, NULL, '', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_pages`
--

CREATE TABLE `sdc_pages` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `url` varchar(256) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_pages`
--

INSERT INTO `sdc_pages` (`id`, `title`, `url`, `text`) VALUES
(1, 'index_title', '/', 'index_text'),
(2, 'about_title', 'about', 'about_text'),
(3, 'title_404', '404', '404_text'),
(4, 'Каталог ссылок', 'proxylist', 'page2page2page2'),
(6, 'Ежедневник', 'diary', 'Очень круто сюда вывести календарь'),
(7, 'edit', 'qqqqqqqqqqqq', 'ikzgfass'),
(8, 'qq', 'qq', 'qqq'),
(20, '1', '1', '1'),
(21, '2', '2', '2'),
(22, '', '', ''),
(23, '\"111111111\"', '111111111111', '\"1111111111111\"');

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_proxy_list`
--

CREATE TABLE `sdc_proxy_list` (
  `id` int(11) UNSIGNED NOT NULL,
  `menuindex` int(10) DEFAULT NULL,
  `name_href` varchar(200) NOT NULL,
  `id_group` int(10) NOT NULL DEFAULT 0,
  `href` varchar(200) NOT NULL,
  `proxy_href` text NOT NULL,
  `created_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_proxy_list`
--

INSERT INTO `sdc_proxy_list` (`id`, `menuindex`, `name_href`, `id_group`, `href`, `proxy_href`, `created_by`) VALUES
(1, 0, 'Сервисы', 0, '', '', 1),
(2, 0, 'Судебная система, госслужба, адвокаты, нотариусы', 0, '', 'sudrf.ru;*.sudrf.ru;arbitr.ru;*.arbitr.ru;*msudrf.ru;*.ssrf.ru;mos-gorsud.ru;', 1),
(3, 0, 'Органы государственной власти', 0, '', 'gov.ru;*.gov.ru;', 1),
(4, 0, 'Библиотека', 0, '', '', 1),
(5, 0, 'Разное', 0, '', '', 1),
(6, 0, 'blacklist', 0, '', '', 1),
(7, NULL, 'Почта - кабинет отправителя', 1, 'https://otpravka.pochta.ru/', '*.pochta.ru;*googleapis.com;*recaptcha.net;*gstatic.com;ocsp.pki.goog;91.215.37.248;*.1e100.net;googletagmanager.com;*google.com;', 1),
(8, NULL, 'Отслеживание почтовых отправлений', 1, 'https://www.pochta.ru/tracking', '', 1),
(9, NULL, 'Журнал ВКС', 1, 'https://vks.sudrf.ru', '', 1),
(10, NULL, 'Индексы и телефонные коды', 1, 'http://ruspostindex.ru/', 'ruspostindex.ru;', 1),
(11, NULL, 'Справочник ВКС', 1, 'http://10.10.1.100/', '10.10.1.100;', 1),
(12, NULL, 'Заявка на назначение адвоката', 1, 'https://sysadvpcmol.fparf.ru/', 'sysadvpcmol.fparf.ru;smolensk.majc.ru;', 1),
(13, NULL, 'Получение сведений из ЕГРЮЛ / ЕГРИП', 1, 'https://egrul.nalog.ru/', '', 1),
(14, NULL, 'Российский союз автостраховщиков', 1, 'https://rsa.org.ru/', 'rsa.org.ru;*.autoins.ru;', 1),
(15, NULL, 'Универсальный сервис проверки ограничения доступа к сайтам Роскомнадзор', 1, 'https://blocklist.rkn.gov.ru/', '', 1),
(16, NULL, 'Смоленский областной суд', 2, 'http://oblsud.sml.sudrf.ru/', '', 1),
(17, NULL, 'Второй кассационный суд', 2, 'https://2kas.sudrf.ru/', '', 1),
(18, NULL, 'Сафоновский районный суд', 2, 'http://safonovo.sml.sudrf.ru/', '', 1),
(19, NULL, 'Суды общей юрисдикции г. Москва', 2, 'https://www.mos-gorsud.ru/', 'www.mos-gorsud.ru;', 1),
(20, NULL, 'МВД', 3, 'https://мвд.рф', 'xn--b1aew.xn--p1ai;*..xn--b1aew.xn--p1ai;мвд.рф;', 1),
(21, NULL, 'Судебный департамент', 2, 'http://www.cdep.ru/', 'www.cdep.ru;releases.flowplayer.org;cdep.ru;', 1),
(22, NULL, 'Портал госслужбы', 2, 'https://gossluzhba.gov.ru/', '', 1),
(23, NULL, 'ГАС \"Правосудие\"', 2, 'https://sudrf.ru/', '', 1),
(24, NULL, 'Адвокаты Российской Федерации', 2, 'http://lawyers.minjust.ru/Lawyers', '', 1),
(25, NULL, 'Федеральная нотариальная палата', 2, 'https://notariat.ru/ru-ru/', '*notariat.ru;', 1),
(26, NULL, 'Муниципальное бразование ', 3, 'http://safonovo-admin.ru/', 'safonovo-admin.ru;', 1),
(27, NULL, 'Президент России', 3, 'http://kremlin.ru/', '', 1),
(28, NULL, 'Роскомнадзор', 3, 'https://rkn.gov.ru/', '', 1),
(29, NULL, 'Государственная дума', 3, 'http://duma.gov.ru/', '', 1),
(30, NULL, 'Смоленская областная дума', 3, 'http://smoloblduma.ru/', 'smoloblduma.ru;', 1),
(31, NULL, 'Федеральная служба Судебных приставов', 3, 'http://fssprus.ru/', 'fssprus.ru;*.fssprus.ru;', 1),
(32, NULL, 'Федеральная налоговая служба', 3, 'https://www.nalog.ru/', '*.nalog.ru;nalog.ru;', 1),
(33, NULL, 'Росреестр', 3, 'https://rosreestr.ru/', 'rosreestr.ru;', 1),
(34, NULL, 'ФСИН России', 3, 'http://fsin.su/', 'fsin.su;', 1),
(35, NULL, 'Министерство Юстиции РФ', 3, 'https://minjust.ru/', '*.minjust.ru;', 1),
(36, NULL, 'Федеральное казначейство', 3, 'http://roskazna.ru/', 'roskazna.ru;', 1),
(37, NULL, 'Право.ru', 4, 'https://pravo.ru/', '*.pravo.ru;pravo.ru;', 1),
(38, NULL, 'Российская газета', 4, 'https://rg.ru/', 'rg.ru;', 1),
(39, NULL, 'Судебные и нормативные акты РФ (sudact.ru)', 4, 'https://sudact.ru/', 'sudact.ru;', 1),
(40, NULL, 'Собрание законодательства Российской Федерации', 4, 'http://www.szrf.ru/', 'www.szrf.ru;', 1),
(41, NULL, 'Федеральный портал проектов нормативных правовых актов', 4, 'https://regulation.gov.ru/', '', 1),
(42, NULL, 'Изменения законодательства на сайте Президента России', 4, 'http://kremlin.ru/acts/news', '', 1),
(43, NULL, 'Госуслуги', 5, 'https://www.gosuslugi.ru/', 'gosuslugi.ru;*.gosuslugi.ru;gu-st.ru;', 1),
(44, NULL, 'Сбер Банк', 5, 'https://www.sberbank.ru/', '', 1),
(45, NULL, 'Департамент Смоленской области по социальному развитию', 3, 'https://socrazvitie67.ru/', 'socrazvitie67.ru;', 1),
(46, NULL, 'Консультант+', 4, 'http://www.consultant.ru/', 'consultant.ru;*.consultant.ru;glavkniga.ru;', 1);

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
(1, 'chainik', '$2y$10$L/OG4zk9X.X6JNaataSp5u/aaeENOTUrcofec1dRvbmT6JQPftnLm', 1, 1, 1),
(2, 'Chernov_RA', 'qwer', 1, 0, 0),
(3, 'Testin_TT', '$2y$10$mcb9gaI1VxbIRVQ9.IEsxugA2EITW8oxURZnofHHs4pxnjy64nMVa', 1, 0, 0),
(4, 'Agibalova_TV', '$2y$10$lCuZeK7ehlrEuP3WlIWTyu0wF5lHvuG.g2alh74GGVe.rE25PHHN6', 1, 10, 0),
(5, 'Alekseeva_NY', '$2y$10$aUefFQA8OGfjErP97/1MxOMciDXoX24pHZA4t8AoaFXMWOiB13Vkm', 1, 11, 0),
(6, 'Ashurova_DM', '$2y$10$rF4rtgGsUowpAVEsdm.niOErc8HSVe8J7VXvD9/CnI1wh8//rB/v2', 1, 8, 0),
(7, 'Berezovskaya_NV', '$2y$10$IOmR/5wIJVdM5e.4ESYq4.DyXhuafyH7eEiDww6pzVWj2yKXLLdh.', 1, 1000, 0),
(8, 'Birukova_EV', '$2y$10$ECy34bEXHHLyNsazcICnZ.40hME1F8SCvdexWVNQie0NXaBXQ0vVO', 1, 12, 0),
(9, 'Voropaeva_TV', '$2y$10$mVbC614PVDH1.J8yEJN16ewvADY0q1hZVILen9DPVGMy3PDR8fEke', 1, 3, 0),
(10, 'Gerasimova_NV', '$2y$10$R1BWMGedlWASZc1mPx8cBeri2AaaIrwBUwWuPAImQI.lTFz193he2', 1, 9, 0),
(11, 'Demidovich_AV', '$2y$10$.47igL6XVhGLhsnPzxRhYerNemJZOl35gQpyMGv8OgXrXN.icMkGa', 0, 0, 0),
(12, 'Zueva_EV', '$2y$10$JCm/o8IhnTnZxWC6vnxKuOPLSBL.MFJn48js1Z.i0EfZTPSUwE/Qm', 1, 6, 0),
(13, 'Kaichenkova_EA', '$2y$10$sf4P34oJDREj1LaFKVPK9uW2t43gqZAQwOdQ/UxQAT/xJHmyJPDdi', 1, 7, 0),
(14, 'Kasyanova_SV', '$2y$10$mQLTYe3Ki.grJGfYes7ivu38fauLWqMA3XFqnyzUS8OX6lhE3g0DK', 1, 1000, 0),
(15, 'Kovrigina_EN', '$2y$10$EGJD0mjXhxxdSjl8TreFm.X/sV1.tRIt7h/4ivHZA1Wc5RclN6rHm', 1, 5, 0),
(16, 'Lobanova_EV', '$2y$10$ZsthJ.UhoDX1cFo4IOLSF.iKor6jZgutMw5TZkyHvBB3cQOj94uMq', 1, 12, 0),
(17, 'Krivas_IV', '$2y$10$0SyGrjTQx8.J2swolMWXN.2zpQu6Qw9Eo0ymxTlG0ahwsmVwmpgW.', 1, 6, 0),
(18, 'Latysheva_YA', '$2y$10$oFPs1vF4F95XZuZxYUdGBeIp0jMzgkh27j5EPzkgMgka5rtrUix5G', 1, 1000, 0),
(19, 'Maluchkova_EN', '$2y$10$/mRC0IB8.79b3mlCcljV8.hAFaNlT9TyhBwrqQ1zFPdNKvi6uq2wO', 1, 1000, 0),
(20, 'Meshkova_VO', '$2y$10$oLBknYphzMnzTrLMfkgz/Oc7ZmJLLKjG6EixbzCwjx8pR9Cb2pgi6', 1, 1000, 0),
(21, 'Mirenkova_YN', '$2y$10$LHkaqpoPp6JwlLO36YvEM.UukqHIKjavLudJmBA176yjfnIeHqNz2', 1, 5, 0),
(22, 'Nikolaeva_II', '$2y$10$lE59HlshSsCVVCsP8CGtQuwwqfQKKP8MSPIgbZ1aeYlEpzvjFp9/q', 1, 1000, 0),
(23, 'Novichkova_AS', '$2y$10$xkDh5G56YC9ITEZCypC1qOJVTV6.G5qpi3UW7BD7sv6hpZxlG8FnC', 1, 7, 0),
(24, 'Osipova_AV', '$2y$10$ikjKvUxOhVECj7kyPNW/vOEv62TsV/uQ2ZOb9Jn5v/wALxl46Mv56', 1, 1000, 0),
(25, 'Poluektova_SA', '$2y$10$aWHonV8b2TEJokgeBgoqVOvoBMx/zPDpw8oeTuvdJvhN5THif5Z2e', 1, 8, 0),
(26, 'Prokofieva_MV', '$2y$10$.rmjyDew8MTRLkMuL5PGQeOVyy52Vo.RAUa5i6NL/T9BhaFgaXQR6', 1, 1000, 0),
(27, 'Pshenichnikova_AV', '$2y$10$GrAQV9dSs0IFhUsytIGInON1S3DeomuSDVmgVlVWDpS05Y.fnXhne', 1, 9, 0),
(28, 'Rakcheeva_OV', '$2y$10$YcDgR6DQTAwefkriMqLAT.ilNvo0hnW2C0qZctWy5F1Yuxi6zDPGm', 1, 13, 0),
(29, 'Salnikova_EG', '$2y$10$kfSrYxyL/r1gZfYrsZMc/uPyL00xSYa61DwhUsjMyYaPsEjkCtY5W', 1, 3, 0),
(30, 'Tarakanova_EV', '$2y$10$kcCRqaEcF4Vx6zigfaooKOsJgINDDtppdqcVXPY0MSOY/jtJ/zRd2', 0, 0, 0),
(31, 'Timofeeva_II', '$2y$10$ecTQzL/29X5FvQ0fx8rHHuXggEWp.90BU/9wUrPfkILmiIjpc41.e', 1, 13, 0),
(32, 'Umerenkova_EV', '$2y$10$n31SxamR93TjPEFyJk0v0ucFTzxMWcH39cz6O7EE84KIJ36/U6GrS', 1, 1000, 0),
(33, 'Franc_SK', '$2y$10$AVFpDoENR4uA.G8dDA/LCepDaRlAFzFiI0oUhxPTjW6WuYv.KTPv2', 1, 10, 0),
(34, 'Homenkova_YA', '$2y$10$6wF3sjxJRJUAwnZWeGK.MuNcQW.5/aHjBqwnNjFa0Y5Xy5rKCGBQ6', 1, 1000, 0),
(35, 'Cherkashina_SA', '$2y$10$y2/uWSB03PPrBItowSs2NeKKiueJwSwc3jJBJGz5Lz4rJK26vN37i', 1, 11, 0),
(36, 'Bogachev_SS', '$2y$10$ZJ63755M4n2OLAg4pjmYtu6P3DY6gVF/kXi8W6HYFFsZqTTxEC1Ei', 1, 0, 0),
(37, 'Kozlov_AA', '$2y$10$tW8R2K/rvwnBC/8TzlfQ8OyUvZVN7uO1lkXJ4nzH.ic17mxlvp8Fa', 1, 3, 0),
(38, 'Tarasova_MA', '$2y$10$EgCHCDOzpuVwQf4/K.xvBOswHojpHThSpPlq44lQajuuVywa.hCj6', 1, 12, 0),
(39, 'Sabantsev_MM', '$2y$10$EQuMuxqFnUeFfu0sYuM29uSBmn/0evDuoNSLcsnwsFmL.4MUwUeYe', 1, 11, 0),
(40, 'Melnichuk_EV', '$2y$10$DR9OiVSYk4rdgD7uNw9lre9y3HdJusQ37lp1T1z4wbmqAZiJc3Dny', 1, 9, 0),
(41, 'Krivchuk_VA', '$2y$10$XxdvxdGwE8zJNbpYZWkWkuzuBFV5e6kBtLOwusCuM9.GtmMDBbVZq', 1, 8, 0),
(42, 'Drozdov_SA', '$2y$10$ztihkcLlA1CDkhddmRfhzO5K/Je3iSgYw3cnES29voyWPQf/fMRZS', 1, 7, 0),
(43, 'Aseev_MS', '$2y$10$sED/gnFLEIudBbMWm3bHM.2r324VyzfjVarkmEgygWhel6oKHBYVO', 1, 5, 0),
(44, 'Basurova_EE', '$2y$10$dGo1BvE2gXd.uTNosqXaTuOiFetFx.rPR/075pEtX6eAaN2rLYdvG', 1, 6, 0),
(45, 'Shtukina_SE', '$2y$10$tZw7z9Xuo.KsbZvnHXCwL.Oo66QA7TenjJpl9YmWRDyiDQ7GOXjzC', 1, 13, 0),
(46, 'Milchenko_EA', '$2y$10$cXHRCLbzRYfx/M/IUpyI0uHLMXXXTqUk.bQpe3fXksKLJeIg3GBg.', 1, 10, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `sdc_user_attributes`
--

CREATE TABLE `sdc_user_attributes` (
  `id` int(10) UNSIGNED NOT NULL,
  `internalKey` int(10) NOT NULL,
  `fullname` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `phone` varchar(100) NOT NULL DEFAULT '',
  `mobilephone` varchar(100) NOT NULL DEFAULT '',
  `dob` int(10) NOT NULL DEFAULT 0,
  `gender` int(1) NOT NULL DEFAULT 0,
  `address` text NOT NULL,
  `country` varchar(191) NOT NULL DEFAULT '',
  `city` varchar(191) NOT NULL DEFAULT '',
  `state` varchar(25) NOT NULL DEFAULT '',
  `zip` varchar(25) NOT NULL DEFAULT '',
  `photo` varchar(191) NOT NULL DEFAULT '',
  `comment` text NOT NULL,
  `website` varchar(191) NOT NULL DEFAULT '',
  `position` varchar(2) NOT NULL,
  `room` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sdc_user_attributes`
--

INSERT INTO `sdc_user_attributes` (`id`, `internalKey`, `fullname`, `email`, `phone`, `mobilephone`, `dob`, `gender`, `address`, `country`, `city`, `state`, `zip`, `photo`, `comment`, `website`, `position`, `room`) VALUES
(1, 1, 'Администратор по умолчанию', 'chainik@test.modx', '', '', 0, 0, '', '', '', '', '', '', '', '', '', ''),
(2, 2, 'Чернов Роман Александрович', 'Chernov_RA', '5-13-28', '+7(900) 225-16-16', 542851200, 1, 'ул. Строителей д. 32', 'RU', 'Сафоново', '67', '215500', '', '', '', '18', 'б/н'),
(3, 3, 'Тестин Тест Тестович', 'Testin_TT', '', '', -302929200, 3, '', 'RU', 'Сафоново', '67', '', '', '', '', '0', ''),
(4, 4, 'Агибалова Татьяна Владимировна', 'Agibalova_TV', '2-56-16', '', 468892800, 2, '', '', '', '', '', '', '', '', '6', '14'),
(5, 5, 'Алексеева Наталья Юрьевна', 'Alekseeva_NY', '5-13-26', '', 44744400, 2, '', '', '', '', '', '', '', '', '5', '5'),
(6, 6, 'Ашурова Дина Михайловна', 'Ashurova_DM', '4-17-08', '', 615672000, 2, '', '', '', '', '', '', '', '', '5', '7'),
(7, 7, 'Березовская Наталья Васильевна', 'Berezovskaya_NV', '4-17-94', '', -113886000, 2, '', '', '', '', '', '', '', '', '10', '3'),
(8, 8, 'Бирюкова Елена Владимировна', 'Birukova_EV', '2-56-16', '', 432590400, 2, '', '', '', '', '', '', '', '', '5', '14'),
(9, 9, 'Воропаева Татьяна Викторовна', 'Voropaeva_TV', '2-59-23', '', 59086800, 2, '', '', '', '', '', '', '', '', '5', '1'),
(10, 10, 'Герасимова Наталья Владимировна', 'Gerasimova_NV', '4-25-06', '', 464817600, 2, '', '', '', '', '', '', '', '', '5', '6'),
(11, 11, 'Демидович Анна Викторовна', 'Demidovich_AV', '2-59-23', '', 637880400, 2, '', '', '', '', '', '', '', '', '6', '1'),
(12, 12, 'Зуева Елена Вячеславовна', 'Zueva_EV', '2-28-78', '', 492984000, 2, '', '', '', '', '', '', '', '', '6', '11'),
(13, 13, 'Кайченкова Елена Анатольевна', 'Kaichenkova_EA', '4-44-85', '', 422395200, 2, '', '', '', '', '', '', '', '', '6', '8'),
(14, 14, 'Касьянова Светлана Викторовна', 'Kasyanova_SV', '4-17-94', '', 580248000, 2, '', '', '', '', '', '', '', '', '17', '3'),
(15, 15, 'Ковригина Елена Николаевна', 'Kovrigina_EN', '5-13-27', '', 341010000, 2, '', '', '', '', '', '', '', '', '6', '15'),
(16, 16, 'Лобанова Екатерина Владимировна', 'Lobanova_EV', '2-56-16', '', 321397200, 2, '', '', '', '', '', '', '', '', '6', '14'),
(17, 17, 'Кривас Ирина Владимировна', 'Krivas_IV', '2-28-78', '', 309646800, 2, '', '', '', '', '', '', '', '', '5', '11'),
(18, 18, 'Латышева Юлия Александровна', 'Latysheva_YA', '5-13-28', '', 495230400, 2, '', '', '', '', '', '', '', '', '19', 'б/н'),
(19, 19, 'Малючкова Евгения Николаевна', 'Maluchkova_EN', '2-59-23', '', 366840000, 2, '', '', '', '', '', '', '', '', '8', '2'),
(20, 20, 'Мешкова Виктория Олеговна', 'Meshkova_VO', '4-17-94', '', 498517200, 2, '', '', '', '', '', '', '', '', '16', '3'),
(21, 21, 'Миренкова Юлия Николаевна', 'Mirenkova_YN', '5-13-25', '', 563835600, 2, '', '', '', '', '', '', '', '', '5', '9'),
(22, 22, 'Николаева Инга Игоревна', 'Nikolaeva_II', '4-17-94', '', 490737600, 2, '', '', '', '', '', '', '', '', '15', '3'),
(23, 23, 'Новичкова Анна Сергеевна', 'Novichkova_AS', '4-44-85', '', 419976000, 2, '', '', '', '', '', '', '', '', '5', '8'),
(24, 24, 'Осипова Анна Валерьевна', 'Osipova_AV', '2-59-23', '', 533422800, 2, '', '', '', '', '', '', '', '', '18', '2'),
(25, 25, 'Полуэктова Светлана Анатольевна', 'Poluektova_SA', '4-17-08', '', 449269200, 2, '', '', '', '', '', '', '', '', '6', '7'),
(26, 26, 'Прокофьева Марина Викторовна', 'Prokofieva_MV', '4-17-94', '', -133671600, 2, '', '', '', '', '', '', '', '', '11', '3'),
(27, 27, 'Пшеничникова Анастасия Вячеславовна', 'Pshenichnikova_AV', '5-13-27', '', 785624400, 2, '', '', '', '', '', '', '', '', '6', '15'),
(28, 28, 'Ракчеева Ольга Викторовна', 'Rakcheeva_OV', '2-15-10', '', 329086800, 2, '', '', '', '', '', '', '', '', '5', '12'),
(29, 29, 'Сальникова Екатерина Геннадьевна', 'Salnikova_EG', '2-59-23', '', 616104000, 2, '', '', '', '', '', '', '', '', '6', '1'),
(30, 30, 'Тараканова Елизавета Васильевна', 'Tarakanova_EV', '', '', 585000000, 2, '', '', '', '', '', '', '', '', '0', ''),
(31, 31, 'Тимофеева Ирина Ивановна', 'Timofeeva_II', '2-28-78', '', 381531600, 2, '', '', '', '', '', '', '', '', '6', '11'),
(32, 32, 'Умеренкова Елена Владимировна', 'Umerenkova_EV', '4-17-94', '', 431035200, 2, '', '', '', '', '', '', '', '', '9', '3'),
(33, 33, 'Франц Светлана Константиновна', 'Franc_SK', '2-15-10', '', 842385600, 2, '', '', '', '', '', '', '', '', '5', '13'),
(34, 34, 'Хоменкова Юлия Анатольевна', 'Homenkova_YA', '4-17-94', '', 275950800, 2, '', '', '', '', '', '', '', '', '16', '3'),
(35, 35, 'Черкашина Светлана Анатольевна', 'Cherkashina_SA', '4-44-85', '', -45716400, 2, '', '', '', '', '', '', '', '', '6', '8'),
(36, 36, 'Богачёв Сергей Станиславович', 'Bogachev_SS', '4-37-94', '+7(904)369-14-92', 311202000, 0, '', '', '', '', '', '', '', '', '7', ''),
(37, 37, 'Козлов Андрей Альевич', 'Kozlov_AA', '4-17-96', '', 15282000, 1, '', '', '', '', '', '', '', '', '2', '16'),
(38, 38, 'Тарасова Майя Александровна', 'Tarasova_MA', '4-41-32', '', 105397200, 2, '', '', '', '', '', '', '', '', '4', '4'),
(39, 39, 'Сабанцев Михаил Михайлович', 'Sabantsev_MM', '5-13-26', '', -455770800, 1, '', '', '', '', '', '', '', '', '4', '5'),
(40, 40, 'Мельничук Елена Владимировна', 'Melnichuk_EV', '4-25-06', '', 147301200, 2, '', '', '', '', '', '', '', '', '4', '6'),
(41, 41, 'Кривчук Вера Алексеевна', 'Krivchuk_VA', '4-17-08', '', 251586000, 2, '', '', '', '', '', '', '', '', '4', '7'),
(42, 42, 'Дроздов Сергей Алексеевич', 'Drozdov_SA', '4-44-85', '', 29710800, 1, '', '', '', '', '', '', '', '', '4', '8'),
(43, 43, 'Асеев Максим Сергеевич', 'Aseev_MS', '5-13-25', '', 168123600, 1, '', '', '', '', '', '', '', '', '4', '9'),
(44, 44, 'Басурова Елена Евгеньевна', 'Basurova_EE', '2-28-78', '', 254955600, 2, '', '', '', '', '', '', '', '', '4', '10'),
(45, 45, 'Штукина Светлана Евгеньевна', 'Shtukina_SE', '2-15-10', '', 89672400, 2, '', '', '', '', '', '', '', '', '4', '12'),
(46, 46, 'Мильченко Евгения Александровна', 'Milchenko_EA', '2-15-10', '', 396561600, 2, '', '', '', '', '', '', '', '', '4', '13');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sdc_pages`
--
ALTER TABLE `sdc_pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sdc_proxy_list`
--
ALTER TABLE `sdc_proxy_list`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sdc_users`
--
ALTER TABLE `sdc_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `primary_group` (`primary_group`);

--
-- Индексы таблицы `sdc_user_attributes`
--
ALTER TABLE `sdc_user_attributes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `internalKey` (`internalKey`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `sdc_calendar`
--
ALTER TABLE `sdc_calendar`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `sdc_pages`
--
ALTER TABLE `sdc_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
