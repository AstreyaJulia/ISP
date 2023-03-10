import React from 'react';
import courtsConfig from './courtsSettings.json'
import { PATH_ADMIN, PATH_CASE, PATH_HOME, PATH_INFO, PATH_PLANING, PATH_STAT } from './routes/paths';

/** Хост API из .ENV
 * @type {string}
 */
export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

export const APP_NAME = 'ИСП'; /** Название приложения */

/** Бесплатный ключ получить тут https://openweathermap.org/price */
export const OPEN_WEATHER_API_KEY =
  process.env.REACT_APP_OPEN_WEATHER_API_KEY || '439d4b804bc8187953eb36d2a8c26a02'; /** API-ключ Open Weather из .ENV, если не указан - ключ open weather с сайта */

/** Название города для погоды */
export const CITY_NAME = courtsConfig[process.env.REACT_APP_OPEN_WEATHER_COURT_CODE].city_name || '';

/** ID города openweather */
export const CITY_OPEN_WEATHER_ID = courtsConfig[process.env.REACT_APP_OPEN_WEATHER_COURT_CODE].open_weather_city_id || '';

/** Координаты города. Искать кликом на карту https://yandex.ru/maps/ и нажав на название улицы или места, слева в меню будут показаны координаты  */
export const CITY_LAT = courtsConfig[process.env.REACT_APP_OPEN_WEATHER_COURT_CODE].open_weather_court_lat || '';
export const CITY_LON = courtsConfig[process.env.REACT_APP_OPEN_WEATHER_COURT_CODE].open_weather_court_lon || '';

/** Название суда и область */
export const COURT_NAME = courtsConfig[process.env.REACT_APP_OPEN_WEATHER_COURT_CODE].court_name || '';
export const COURT_REGION = 'Смоленская область'; // Не используется

/** Настройки для картотек
 * @type {{ADM1: {color: string}, ADM: {color: string}, G1: {color: string}, U1: {color: string}, M: {color: string}}}
 */
export const caseTypesSettings = {
  ADM1: {
    color: 'indigo',
    name: 'Жалобы по делам об административных правонарушениях',
  },
  ADM: {
    color: 'blue',
    name: 'Дела об административных правонарушениях',
  },
  G1: {
    color: 'green',
    name: 'Гражданские дела первой инстанции',
  },
  M: {
    color: 'orange',
    name: 'Материалы в порядке исполнения решений, ОРМ, досудебные материалы',
  },
  U1: {
    color: 'red',
    name: 'Уголовные дела первой инстанции',
  },
};

/** Цвета для Fullcalendar */
/** Цвета событий, названия менять в разметке, в js менять не надо */
export const calendCat = [
  {
    color: 'indigo',
    name: 'События',
  },
  {
    color: 'green',
    name: 'Отпуск',
  },
  {
    color: 'cyan',
    name: 'Дежурство',
  },
  {
    color: 'yellow',
    name: 'Важно',
  },
  {
    color: 'red',
    name: 'Праздники',
  },
  {
    color: 'pink',
    name: 'Категория 1',
  },
  {
    color: 'blue',
    name: 'Категория 2',
  },
  {
    color: 'orange',
    name: 'Категория 3',
  },
  {
    color: 'teal',
    name: 'Категория 4',
  },
];

/** Стандартные размеры и настройки текста и заголовков, Markdown
 * @type {{h1: string, h2: string, h3: string, h4: string}}
 */
export const typographySettings = {
  h1: 'text-4xl xl:text-5xl font-medium text-gray-800 dark:text-gray-50',
  h2: 'text-3xl xl:text-4xl font-medium text-gray-800 dark:text-gray-50',
  h3: 'text-2xl xl:text-3xl font-medium text-gray-800 dark:text-gray-50',
  h4: 'text-xl xl:text-2xl font-medium text-gray-800 dark:text-gray-50',
  h5: 'text-lg xl:text-xl font-medium text-gray-800 dark:text-gray-50',
  h6: 'text-base xl:text-lg font-medium text-gray-800 dark:text-gray-50',
  caption1: 'text-sm text-gray-600 dark:text-gray-300',
  subtitle1: 'text-base font-medium text-gray-800 dark:text-gray-50',
  subtitle2: 'text-sm font-medium text-gray-800 dark:text-gray-50',
  body1: 'text-base text-gray-600 dark:text-gray-300',
  body2: 'text-sm text-gray-600 dark:text-gray-300',
  label1: 'text-base font-medium text-gray-600 dark:text-gray-300',

  /* Markdown Options */
  pre: 'flex text-white px-4 py-5 bg-gray-800 rounded-md overflow-x-auto',
  code: 'px-0.5 text-gray-600 py-0.5 px-1 bg-gray-400/10 rounded-sm border border-gray-300',
  blockquote: 'px-5 py-6 border-l-8 border-indigo-500 dark:border-indigo-600 bg-indigo-500/20 rounded-md my-5',
  a: 'underline font-medium text-indigo-600 dark:text-indigo-500',
  ul: 'my-5 pl-6 list-disc',
  ol: 'my-5 pl-6',
  li: 'my-2',
  details: 'my-5 p-4 bg-red-600/20 rounded-md',
  summary: 'text-red-700 hover:cursor-pointer',
  caption: 'p-2 text-left',
  table: 'border-2 border-gray-300 dark:border-gray-700',
  td: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
  th: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
  form: 'py-1 px-2',
  label: 'py-1 px-2',
  legend: 'py-1',
  hgroup: 'pl-3 border-l-8 border-cyan-500 dark:border-cyan-600 my-6',
  hr: 'border-gray-300 dark:border-gray-700 my-3',
  mark: 'bg-amber-500 dark:bg-amber-600',
  rt: 'text-xs',
  p: 'text-base',
}

/** Навигация для сайдбара
 * @type {[{header: string, accessibleRoles: number[]},{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleRoles: number[]},{children: [{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleProfessions: number[]},{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleProfessions: number[]},{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleProfessions: number[]}], icon: JSX.Element, id: string, pagetitle: string, accessibleProfessions: number[]},{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleRoles: number[]},{icon: JSX.Element, alias: string, id: string, pagetitle: string, accessibleRoles: number[]},null,null,null,null,null,null,null,null]}
 основной набор значков https://fonts.google.com/icons?selected=Material+Icons&icon.style=Two+tone
 badgeColor: 'red', - цвет бейджа
 badgeText: '+10', - текст бейджа
 */
export const navigation = [
  {
    header: 'Главное меню',
    accessibleRoles: [0, 1],
  },
  {
    id: '1',
    pagetitle: 'Главная',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
        <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3" />
      </svg>
    ),
    alias: PATH_HOME,
    accessibleRoles: [0, 1],
  },
  {
    id: '2',
    pagetitle: 'Делопроизводство',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 20h16V9H4v11zm6-8.5l1-1 4 4-4 4-1-1 3-3-3-3z" opacity=".3" />
        <path d="M11 18.5l4-4-4-4-1 1 3 3-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z" />
      </svg>
    ),
    accessibleProfessions: PATH_CASE.accessibleProfessions,
    children: [
      {
        id: '3',
        pagetitle: 'Дела в производстве',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 8h16v11H4z" opacity=".3" />
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" />
          </svg>
        ),
        alias: PATH_CASE.lists.process.client,
        accessibleProfessions: PATH_CASE.lists.process.accessibleProfessions,
      },
      {
        id: '4',
        pagetitle: 'Сроки рассмотрения',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <path
                  d="M12,20c1.47,0,2.83-0.45,3.95-1.22L6.22,9.05C5.45,10.17,5,11.53,5,13C5,16.87,8.13,20,12,20z"
                  opacity=".3"
                />
                <path
                  d="M12,6c-0.94,0-1.83,0.19-2.65,0.52L11,8.17V8h2v2.17l5.48,5.48C18.81,14.83,19,13.94,19,13 C19,9.13,15.87,6,12,6z"
                  opacity=".3"
                />
                <rect height="2" width="6" x="9" y="1" />
                <path d="M12,6c3.87,0,7,3.13,7,7c0,0.94-0.19,1.83-0.52,2.65l1.5,1.5C20.63,15.91,21,14.5,21,13c0-2.12-0.74-4.07-1.97-5.61 l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-1.5,0-2.91,0.37-4.15,1.02l1.5,1.5 C10.17,6.19,11.06,6,12,6z" />
                <polygon points="11,8 11,8.17 13,10.17 13,8" />
                <path d="M2.81,2.81L1.39,4.22l3.4,3.4C3.67,9.12,3,10.98,3,13c0,4.97,4.02,9,9,9c2.02,0,3.88-0.67,5.38-1.79l2.4,2.4l1.41-1.41 L2.81,2.81z M12,20c-3.87,0-7-3.13-7-7c0-1.47,0.45-2.83,1.22-3.95l9.73,9.73C14.83,19.55,13.47,20,12,20z" />
              </g>
            </g>
          </svg>
        ),
        alias: PATH_CASE.lists.overPeriod.client,
        accessibleProfessions: PATH_CASE.lists.overPeriod.accessibleProfessions,
      },
      {
        id: '5',
        pagetitle: 'Контроль публикации',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 6.5c-3.79 0-7.17 2.13-8.82 5.5 1.65 3.37 5.02 5.5 8.82 5.5s7.17-2.13 8.82-5.5C19.17 8.63 15.79 6.5 12 6.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"
              opacity=".3"
            />
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.63 8.21 6.5 12 6.5s7.17 2.13 8.82 5.5c-1.65 3.37-5.03 5.5-8.82 5.5zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        ),
        alias: PATH_CASE.publication.neededPublication.client,
        accessibleProfessions: PATH_CASE.publication.neededPublication.accessibleProfessions,
      },
      {
        id: '35',
        pagetitle: 'Не отмечен результат',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M5,18.08V19h0.92l5.12-5.12l-0.92-0.92L5,18.08z M14.06,9.02l-1.11,1.11l0.92,0.92l1.11-1.11L14.06,9.02z"
                opacity=".3"
              />
              <g>
                <path d="M14.06,9.02l0.92,0.92l-1.11,1.11l1.41,1.41l2.52-2.52l-3.75-3.75l-2.52,2.52l1.41,1.41L14.06,9.02z M20.71,7.04 c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3s-0.51,0.1-0.7,0.29l-1.83,1.83l3.75,3.75L20.71,7.04z M2.81,2.81L1.39,4.22l7.32,7.32L3,17.25V21h3.75l5.71-5.71l7.32,7.32l1.41-1.41L2.81,2.81z M5.92,19H5v-0.92l5.13-5.13l0.92,0.92 L5.92,19z" />
              </g>
            </g>
          </svg>
        ),
        alias: PATH_CASE.lists.noLastEvents.client,
        accessibleProfessions: PATH_CASE.lists.noLastEvents.accessibleProfessions,
      },
    ],
  },
  {
    id: '6',
    pagetitle: 'Каталог ссылок',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M11.17 8l-2-2H4v12h16V8h-8.83zM15 9l1.19 2.79 3.03.26-2.3 1.99.69 2.96L15 15.47 12.39 17l.69-2.96-2.3-1.99 3.03-.26L15 9z"
          opacity=".3"
        />
        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17 15 15.47 17.61 17l-.69-2.96 2.3-1.99-3.03-.26L15 9l-1.19 2.79-3.03.26z" />
      </svg>
    ),
    alias: PATH_INFO.proxyList.list.client,
    accessibleRoles: PATH_INFO.proxyList.list.accessibleRoles,
  },
  {
    id: '7',
    pagetitle: 'Календарь',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <rect height="2" opacity=".3" width="14" x="5" y="6" />
          <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z" />
        </g>
      </svg>
    ),
    alias: PATH_PLANING.root.client,
    accessibleRoles: PATH_PLANING.root.accessibleRoles,
  },
  {
    id: '8',
    pagetitle: 'Информация',
    accessibleRoles: [0, 1],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z"
          opacity=".3"
        />
        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    children: [
      {
        id: '9',
        pagetitle: 'Сотрудники',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <path
                  d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z"
                  enableBackground="new"
                  opacity=".3"
                />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
                <path d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </g>
            </g>
          </svg>
        ),
        alias: PATH_INFO.phoneBook.client.list,
        accessibleRoles: PATH_INFO.phoneBook.accessibleRoles,
      },
    ],
  },
  {
    id: '10',
    pagetitle: 'Статистика',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93c3.61-.45 6.48-3.32 6.93-6.93H13v6.93zm0-15.86V11h6.93c-.45-3.61-3.32-6.48-6.93-6.93z"
          opacity=".3"
        />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93H13z" />
      </svg>
    ),
    accessibleProfessions: PATH_STAT.charts.accessibleProfessions,
    children: [
      {
        id: '11',
        pagetitle: 'Графики',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93c3.61-.45 6.48-3.32 6.93-6.93H13v6.93zm0-15.86V11h6.93c-.45-3.61-3.32-6.48-6.93-6.93z"
              opacity=".3"
            />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93H13z" />
          </svg>
        ),
        alias: PATH_STAT.charts.client,
      },
      {
        id: '12',
        pagetitle: 'Качество',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <rect fill="none" height="24" width="24" />
            <polygon opacity=".3" points="19,16.95 12,11.5 8,17 5,14.6 5,11 7.44,12.83 12.4,5.88 16.3,9 19,9" />
            <path d="M17,7l-5-4l-5,7L3,7v13h18V7H17z M19,16.95l-7-5.45L8,17l-3-2.4V11l2.44,1.83l4.96-6.95L16.3,9H19V16.95z" />
          </svg>
        ),
        alias: PATH_STAT.grade.client,
        accessibleProfessions: PATH_STAT.grade.accessibleProfessions,
      },
    ],
  },
  {
    id: '13',
    pagetitle: 'Помощь',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path
            d="M5,5v14h14V5H5z M12.01,18c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 c0.71,0,1.25,0.54,1.25,1.25C13.25,17.43,12.72,18,12.01,18z M15.02,10.6c-0.76,1.11-1.48,1.46-1.87,2.17 c-0.16,0.29-0.22,0.48-0.22,1.41h-1.82c0-0.49-0.08-1.29,0.31-1.98c0.49-0.87,1.42-1.39,1.96-2.16c0.57-0.81,0.25-2.33-1.37-2.33 c-1.06,0-1.58,0.8-1.8,1.48L8.56,8.49C9.01,7.15,10.22,6,11.99,6c1.48,0,2.49,0.67,3.01,1.52C15.44,8.24,15.7,9.59,15.02,10.6z"
            opacity=".3"
          />
          <path d="M13.25,16.74c0,0.69-0.53,1.26-1.25,1.26c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 C12.71,15.49,13.25,16.04,13.25,16.74z M11.99,6c-1.77,0-2.98,1.15-3.43,2.49l1.64,0.69c0.22-0.67,0.74-1.48,1.8-1.48 c1.62,0,1.94,1.52,1.37,2.33c-0.54,0.77-1.47,1.29-1.96,2.16c-0.39,0.69-0.31,1.49-0.31,1.98h1.82c0-0.93,0.07-1.12,0.22-1.41 c0.39-0.72,1.11-1.06,1.87-2.17c0.68-1,0.42-2.36-0.02-3.08C14.48,6.67,13.47,6,11.99,6z M19,5H5v14h14V5 M19,3c1.1,0,2,0.9,2,2v14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19L19,3z" />
        </g>
      </svg>
    ),
    children: [
      {
        id: '14',
        pagetitle: 'База знаний',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <g>
                <path
                  d="M12,4C8.97,4,6.5,6.47,6.5,9.5c0,2.47,1.49,3.89,2.35,4.5h6.3 c0.86-0.61,2.35-2.03,2.35-4.5C17.5,6.47,15.03,4,12,4z"
                  enableBackground="new"
                  opacity=".3"
                />
                <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z" />
                <rect height="2" width="8" x="8" y="17" />
                <path d="M12,2C7.86,2,4.5,5.36,4.5,9.5c0,3.82,2.66,5.86,3.77,6.5h7.46c1.11-0.64,3.77-2.68,3.77-6.5C19.5,5.36,16.14,2,12,2z M15.15,14h-6.3C7.99,13.39,6.5,11.97,6.5,9.5C6.5,6.47,8.97,4,12,4s5.5,2.47,5.5,5.5C17.5,11.97,16.01,13.39,15.15,14z" />
              </g>
            </g>
          </svg>
        ),
        alias: PATH_INFO.faq.client.main,
        accessibleRoles: PATH_INFO.faq.accessibleRoles,
      },
    ],
    accessibleRoles: [0, 1],
  },
  {
    header: 'Администрирование',
    accessibleRoles: [1],
  },
  {
    id: '15',
    pagetitle: 'Панель управления',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M5,19V5h6v14H5z M19,19h-6v-7h6V19z M19,10h-6V5h6V10z" opacity=".3" />
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19V5h6v14H5z M19,19h-6v-7h6V19z M19,10h-6V5h6V10z" />
      </svg>
    ),
    children: [
      {
        id: '16',
        pagetitle: 'Пользователи',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <circle cx="9" cy="8.5" opacity=".3" r="1.5" />
            <path d="M4.77 17h4.28c.01-.06.12-.58.29-.99-.11 0-.23-.01-.34-.01-1.53 0-3.25.5-4.23 1z" opacity=".3" />
            <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z" />
          </svg>
        ),
        alias: PATH_ADMIN.users.client.list,
        accessibleRoles: PATH_ADMIN.users.accessibleRoles,
      },
      {
        id: '21',
        pagetitle: 'Рабочие места',
        icon: (
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='currentColor'>
            <g>
              <rect fill='none' height='24' width='24' />
            </g>
            <g>
              <g>
                <path d='M17,11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5,3.57V11z M17,7h2v2h-2V7z' opacity='.3' />
                <polygon points='10,3 10,4.97 10.96,5.66 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3' />
                <polygon opacity='.3' points='3,12 3,19 5,19 5,14 11,14 11,19 13,19 13,12 8,8.5' />
                <rect height='2' width='2' x='17' y='7' />
                <rect height='2' width='2' x='17' y='11' />
                <rect height='2' width='2' x='17' y='15' />
                <path d='M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z' />
              </g>
            </g>
          </svg>
        ),
        alias: PATH_ADMIN.workplaces.client.list,
        accessibleRoles: PATH_ADMIN.workplaces.accessibleRoles,
      },
    ],
    accessibleRoles: [1],
  },

  {
    id: '17',
    pagetitle: 'Тестовые страницы',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
          opacity=".3"
        />
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
    children: [
      {
        id: '18',
        pagetitle: 'Тест 1',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              opacity=".3"
            />
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        ),
        alias: '/test',
        accessibleRoles: [1],
      },
      {
        id: '20',
        pagetitle: 'Тест 3',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              opacity=".3"
            />
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        ),
        alias: '/test3',
        accessibleRoles: [1],
      },
    ],
    accessibleRoles: [1],
  },
];
