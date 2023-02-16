import avatar1 from './avatars/1.png';
import avatar2 from './avatars/2.png';
import avatar3 from './avatars/3.png';
import avatar4 from './avatars/4.png';
import avatar5 from './avatars/5.png';
import {tailwindColorsConfig} from "../utils/getTailwindconfig";

/** Пользователи, для локального тестирования
 * @type {[{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, vkontakte: string, id: string, sudo: string, fullname: string, judge: string, place: string, cabinet: string, email: string, username: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, vkontakte: string, id: string, sudo: string, fullname: string, judge: string, place: string, cabinet: string, email: string, username: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, vkontakte: string, id: string, sudo: string, fullname: string, judge: string, place: string, cabinet: string, email: string, username: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, vkontakte: string, id: string, sudo: string, fullname: string, judge: string, place: string, cabinet: string, email: string, username: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, vkontakte: string, id: string, sudo: string, fullname: string, judge: string, place: string, cabinet: string, email: string, username: string},null]}
 */
export const users = [
  {
    id: '1',
    sudo: '0',
    username: 'Petrov_PP',
    fullname: 'Петров Петр Петрович',
    gender: 'male',
    profession: 'Судья',
    judge: '',
    role: 'User',
    email: 'petrovpp@example.com',
    cabinet: 'Каб. 13',
    place: 'АРМ 3',
    work_phone: '3-13-28',
    mobile_phone: '7-910-123-12-12',
    address: 'Город, улица, дом, квартира',
    birthday: '1970-05-23',
    ip: '192.168.2.1',
    vkontakte: 'https://vk.com/id&=1',
    odnoklassniki: 'https://ok.ru/id&=1',
    facebook: 'https://facebook.com/id&=1',
    instagram: 'https://instagram.com/id&=1',
    site1: '',
    site2: '',
    avatar: avatar1,
  },
  {
    id: '2',
    sudo: '0',
    username: 'Ivanov_NN',
    fullname: 'Иванов Николай Николаевич',
    gender: 'male',
    profession: 'Секретарь судебных заседаний',
    judge: 'Петров Петр Петрович',
    role: 'User',
    email: 'ivanovnn@example.com',
    cabinet: 'Каб. 13',
    place: 'АРМ 2',
    work_phone: '3-13-28',
    mobile_phone: '7-950-123-12-12',
    address: 'Город, улица, дом, квартира',
    birthday: '1980-03-10',
    ip: '192.168.2.2',
    vkontakte: 'https://vk.com/id&=2',
    odnoklassniki: 'https://ok.ru/id&=2',
    facebook: 'https://facebook.com/id&=2',
    instagram: 'https://instagram.com/id&=2',
    site1: '',
    site2: '',
    avatar: avatar2,
  },
  {
    id: '3',
    sudo: '0',
    username: 'Smirnov_II',
    fullname: 'Смирнов Иван Иванович',
    gender: 'male',
    profession: 'Помощник судьи',
    judge: 'Петров Петр Петрович',
    role: 'User',
    email: 'smirnovii@example.com',
    cabinet: 'Каб. 13',
    place: 'АРМ 1',
    work_phone: '3-13-28',
    mobile_phone: '7-909-123-12-12',
    address: 'Город, улица, дом, квартира',
    birthday: '1985-05-12',
    ip: '192.168.2.3',
    vkontakte: 'https://vk.com/id&=3',
    odnoklassniki: 'https://ok.ru/id&=3',
    facebook: 'https://facebook.com/id&=3',
    instagram: 'https://instagram.com/id&=3',
    site1: '',
    site2: '',
    avatar: avatar3,
  },
  {
    id: '4',
    sudo: '0',
    username: 'Vasechkina_MI',
    fullname: 'Васечкина Мария Ивановна',
    gender: 'female',
    profession: 'Секретарь суда',
    judge: '',
    role: 'User',
    email: 'vasechkinami@example.com',
    cabinet: 'Каб. 3',
    place: 'АРМ 1',
    work_phone: '3-13-27',
    mobile_phone: '7-903-123-12-12',
    address: 'Город, улица, дом, квартира',
    birthday: '1994-02-16',
    ip: '192.168.2.4',
    vkontakte: 'https://vk.com/id&=4',
    odnoklassniki: 'https://ok.ru/id&=4',
    facebook: 'https://facebook.com/id&=4',
    instagram: 'https://instagram.com/id&=4',
    site1: '',
    site2: '',
    avatar: avatar4,
  },
  {
    id: '5',
    sudo: '0',
    username: 'Belosheikina_OL',
    fullname: 'Белошейкина Олеся Леонидовна',
    gender: 'female',
    profession: 'Консультант',
    judge: '',
    role: 'User',
    email: 'belosheikinaol@example.com',
    cabinet: 'Каб. 6',
    place: 'АРМ 1',
    work_phone: '6-13-27',
    mobile_phone: '7-903-124-12-12',
    address: 'Город, улица, дом, квартира',
    birthday: '1994-04-01',
    ip: '192.168.2.5',
    vkontakte: 'https://vk.com/id&=5',
    odnoklassniki: 'https://ok.ru/id&=5',
    facebook: 'https://facebook.com/id&=5',
    instagram: 'https://instagram.com/id&=5',
    site1: 'https://site1.com',
    site2: 'https://site2.com',
    avatar: avatar5,
  },
  {
    id: '6',
    sudo: '1',
    username: 'Chainikov_OV',
    fullname: 'Чайников Олег Васильевич',
    gender: 'male',
    profession: 'Администратор',
    judge: '',
    role: 'Admin',
    email: 'chainikovov@example.com',
    cabinet: 'Каб. 2',
    place: 'АРМ 1',
    work_phone: '3-13-97',
    mobile_phone: '7-903-124-12-34',
    address: 'Город, улица, дом, квартира',
    birthday: '1994-08-23',
    ip: '192.168.2.6',
    vkontakte: 'https://vk.com/id&=6',
    odnoklassniki: 'https://ok.ru/id&=6',
    facebook: 'https://facebook.com/id&=6',
    instagram: 'https://instagram.com/id&=6',
    site1: 'https://site1.com',
    site2: 'https://site2.com',
    avatar: '',
  },
];

export const events = [
  {
    id: '1',
    title: 'Длинное событие на несколько дней',
    date: '2022-05-04',
    end: '2022-05-07',
    allDay: true,
    calendar: 'indigo',
    users: [1, 3],
  },
  {
    id: '2',
    title: 'Совещание',
    start: '2022-05-27 11:00:00',
    end: '2022-05-27 11:30:00',
    allDay: false,
    calendar: 'indigo',
  },
  {
    id: '3',
    title: 'Дежурство',
    date: '2022-05-16 00:00:00',
    end: '2022-05-22 23:59:00',
    allDay: true,
    calendar: 'cyan',
    users: [2, 3, 4],
  },
  {
    id: '4',
    title: 'Дежурство',
    date: '2022-05-31 09:00:00',
    end: '2022-05-31 18:00:00',
    allDay: false,
    calendar: 'cyan',
  },
  {
    id: '5',
    title: 'День победы',
    start: '2022-05-09',
    end: '2022-05-09',
    allDay: true,
    calendar: 'red',
  },
  {
    id: '6',
    title: 'Праздник труда',
    start: '2022-05-01',
    end: '2022-05-01',
    allDay: true,
    calendar: 'red',
  },
  {
    id: '7',
    title: 'Отчёт по срокам',
    start: '2022-05-17 09:00:00',
    end: '2022-05-17 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '8',
    title: 'Отчёт по количеству и качеству',
    start: '2022-06-03 09:00:00',
    end: '2022-06-03 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '9',
    title: 'Событие',
    start: '2022-05-01',
    end: '2022-05-02',
    allDay: true,
    calendar: 'pink',
  },
  {
    id: '10',
    title: 'Событие',
    start: '2022-06-01',
    end: '2022-06-02',
    allDay: true,
    calendar: 'pink',
  },
  {
    id: '11',
    title: 'Событие',
    start: '2022-06-21',
    end: '2022-06-22',
    allDay: true,
    calendar: 'teal',
  },
  {
    id: '12',
    title: 'Событие',
    start: '2022-05-21',
    end: '2022-05-22',
    allDay: true,
    calendar: 'teal',
  },
  {
    id: '13',
    title: 'Событие',
    start: '2022-05-03',
    end: '2022-05-04',
    allDay: true,
    calendar: 'orange',
  },
  {
    id: '14',
    title: 'Событие',
    start: '2022-06-03',
    end: '2022-06-04',
    allDay: true,
    calendar: 'orange',
  },
  {
    id: '15',
    title: 'Событие',
    start: '2022-05-14',
    end: '2022-05-15',
    allDay: true,
    calendar: 'blue',
  },
  {
    id: '16',
    title: 'Событие',
    start: '2022-06-14',
    end: '2022-06-15',
    allDay: true,
    calendar: 'blue',
  },
  {
    id: '17',
    title: 'Отпуск',
    start: '2022-06-06',
    end: '2022-06-24',
    allDay: true,
    calendar: 'green',
  },
  {
    id: '18',
    title: 'Выохдной',
    start: '2022-06-11',
    end: '2022-06-11',
    allDay: true,
    calendar: 'green',
  },
  {
    title: '',
    start: '2022-06-04',
    end: '2022-06-04',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-06-05',
    end: '2022-06-05',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-28',
    end: '2022-05-28',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-29',
    end: '2022-05-29',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-22',
    end: '2022-05-22',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-21',
    end: '2022-05-21',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-15',
    end: '2022-05-15',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-14',
    end: '2022-05-14',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-10',
    end: '2022-05-10',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-09',
    end: '2022-05-09',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-08',
    end: '2022-05-08',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-07',
    end: '2022-05-07',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-03',
    end: '2022-05-03',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-02',
    end: '2022-05-02',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  {
    title: '',
    start: '2022-05-01',
    end: '2022-05-01',
    allDay: true,
    calendar: 'red',
    display: 'background',
  },
  { title: '', start: '2022-04-30', end: '2022-04-30', allDay: true, calendar: 'red', display: 'background' },
  {
    title: 'Сокращенный рабочий день',
    start: '2022-04-29',
    end: '2022-04-29',
    allDay: true,
    calendar: 'orange',
    display: 'background',
  },
  {
    title: 'Задача',
    start: '2022-10-29',
    end: '2022-10-29',
    allDay: true,
    calendar: 'orange',
    display: 'task',
  },
  {
    title: 'Задача выполнена',
    start: '2022-10-28',
    end: '2022-10-31',
    allDay: true,
    calendar: 'red',
    display: 'task-completed',
  },
  {
    id: '18',
    title: 'Отчёт',
    start: '2022-06-03 09:00:00',
    end: '2022-06-03 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '81',
    title: 'Отчёт',
    start: '2022-06-03 09:00:00',
    end: '2022-06-03 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '82',
    title: 'Отчёт',
    start: '2022-06-03 09:00:00',
    end: '2022-06-03 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '83',
    title: 'Отчёт',
    start: '2022-06-03 09:00:00',
    end: '2022-06-03 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  { title: '', start: '2023-01-01', end: '2023-01-01', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-02', end: '2023-01-02', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-03', end: '2023-01-03', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-04', end: '2023-01-04', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-05', end: '2023-01-05', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-06', end: '2023-01-06', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-07', end: '2023-01-07', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-08', end: '2023-01-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-14', end: '2023-01-14', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-15', end: '2023-01-15', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-21', end: '2023-01-21', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-22', end: '2023-01-22', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-28', end: '2023-01-28', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-01-29', end: '2023-01-29', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-04', end: '2023-02-04', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-05', end: '2023-02-05', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-11', end: '2023-02-11', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-12', end: '2023-02-12', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-18', end: '2023-02-18', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-19', end: '2023-02-19', allDay: true, calendar: 'red', display: 'background' },
  {
    title: 'Сокращенный рабочий день',
    start: '2023-02-22',
    end: '2023-02-22',
    allDay: true,
    calendar: 'orange',
    display: 'background',
  },
  { title: '', start: '2023-02-23', end: '2023-02-23', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-24', end: '2023-02-24', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-25', end: '2023-02-25', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-02-26', end: '2023-02-26', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-04', end: '2023-03-04', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-05', end: '2023-03-05', allDay: true, calendar: 'red', display: 'background' },
  {
    title: 'Сокращенный рабочий день',
    start: '2023-03-07',
    end: '2023-03-07',
    allDay: true,
    calendar: 'orange',
    display: 'background',
  },
  { title: '', start: '2023-03-08', end: '2023-03-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-11', end: '2023-03-11', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-12', end: '2023-03-12', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-18', end: '2023-03-18', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-19', end: '2023-03-19', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-25', end: '2023-03-25', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-03-26', end: '2023-03-26', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-01', end: '2023-04-01', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-02', end: '2023-04-02', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-08', end: '2023-04-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-09', end: '2023-04-09', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-15', end: '2023-04-15', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-16', end: '2023-04-16', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-22', end: '2023-04-22', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-23', end: '2023-04-23', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-29', end: '2023-04-29', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-04-30', end: '2023-04-30', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-01', end: '2023-05-01', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-06', end: '2023-05-06', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-07', end: '2023-05-07', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-08', end: '2023-05-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-09', end: '2023-05-09', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-13', end: '2023-05-13', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-14', end: '2023-05-14', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-20', end: '2023-05-20', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-21', end: '2023-05-21', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-27', end: '2023-05-27', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-05-28', end: '2023-05-28', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-03', end: '2023-06-03', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-04', end: '2023-06-04', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-10', end: '2023-06-10', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-11', end: '2023-06-11', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-12', end: '2023-06-12', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-17', end: '2023-06-17', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-18', end: '2023-06-18', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-24', end: '2023-06-24', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-06-25', end: '2023-06-25', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-01', end: '2023-07-01', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-02', end: '2023-07-02', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-08', end: '2023-07-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-09', end: '2023-07-09', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-15', end: '2023-07-15', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-16', end: '2023-07-16', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-22', end: '2023-07-22', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-23', end: '2023-07-23', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-29', end: '2023-07-29', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-07-30', end: '2023-07-30', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-05', end: '2023-08-05', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-06', end: '2023-08-06', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-12', end: '2023-08-12', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-13', end: '2023-08-13', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-19', end: '2023-08-19', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-20', end: '2023-08-20', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-26', end: '2023-08-26', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-08-27', end: '2023-08-27', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-02', end: '2023-09-02', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-03', end: '2023-09-03', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-09', end: '2023-09-09', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-10', end: '2023-09-10', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-16', end: '2023-09-16', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-17', end: '2023-09-17', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-23', end: '2023-09-23', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-24', end: '2023-09-24', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-09-30', end: '2023-09-30', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-01', end: '2023-10-01', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-07', end: '2023-10-07', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-08', end: '2023-10-08', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-14', end: '2023-10-14', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-15', end: '2023-10-15', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-21', end: '2023-10-21', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-22', end: '2023-10-22', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-28', end: '2023-10-28', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-10-29', end: '2023-10-29', allDay: true, calendar: 'red', display: 'background' },
  {
    title: 'Сокращенный рабочий день',
    start: '2023-11-03',
    end: '2023-11-03',
    allDay: true,
    calendar: 'orange',
    display: 'background',
  },
  { title: '', start: '2023-11-04', end: '2023-11-04', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-05', end: '2023-11-05', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-06', end: '2023-11-06', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-11', end: '2023-11-11', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-12', end: '2023-11-12', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-18', end: '2023-11-18', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-19', end: '2023-11-19', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-25', end: '2023-11-25', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-11-26', end: '2023-11-26', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-02', end: '2023-12-02', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-03', end: '2023-12-03', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-09', end: '2023-12-09', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-10', end: '2023-12-10', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-16', end: '2023-12-16', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-17', end: '2023-12-17', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-23', end: '2023-12-23', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-24', end: '2023-12-24', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-30', end: '2023-12-30', allDay: true, calendar: 'red', display: 'background' },
  { title: '', start: '2023-12-31', end: '2023-12-31', allDay: true, calendar: 'red', display: 'background' },
  {
    id: '99',
    title: 'Дежурство по закрытию',
    date: '2023-02-20 00:00:00',
    end: '2023-02-23 23:59:00',
    allDay: true,
    calendar: 'cyan',
    users: [18],
  },
  {
    id: '100',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-03-01 09:00:00',
    end: '2023-03-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '101',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-03-31 09:00:00',
    end: '2023-03-31 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '102',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-04-28 09:00:00',
    end: '2023-04-28 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '103',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-06-01 09:00:00',
    end: '2023-06-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '104',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-06-30 09:00:00',
    end: '2023-06-30 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },

  {
    id: '106',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-08-01 09:00:00',
    end: '2023-08-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '107',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-09-01 09:00:00',
    end: '2023-09-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '108',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-09-29 09:00:00',
    end: '2023-09-29 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '110',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-11-01 09:00:00',
    end: '2023-11-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '111',
    title: 'Отчёт ССТУ Чернову А.А. в УСД',
    start: '2023-12-01 09:00:00',
    end: '2023-12-01 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '112',
    title: 'Выгрузка БСР на FTP Судебного департамента',
    start: '2023-06-13 09:00:00',
    end: '2023-06-14 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '113',
    title: 'Выгрузка БСР на FTP Судебного департамента',
    start: '2023-12-13 09:00:00',
    end: '2023-12-14 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '114',
    title: 'Отчет по форме S09 (Z16.1, дискриминация) Мехедовой УСД',
    start: '2023-03-10 09:00:00',
    end: '2023-03-10 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '115',
    title: 'Отчеты КСА, B10.2, B10.4 Чернову УСД',
    start: '2024-01-15 09:00:00',
    end: '2024-01-15 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '116',
    title: 'Отчет по публикациям СА (БСР) Чернову УСД',
    start: '2023-04-14 09:00:00',
    end: '2023-04-14 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '117',
    title: 'Отчет по публикациям СА (БСР) Чернову УСД',
    start: '2023-07-14 09:00:00',
    end: '2023-07-14 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '118',
    title: 'Отчет по публикациям СА (БСР) Чернову УСД',
    start: '2023-10-13 09:00:00',
    end: '2023-10-13 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '119',
    title: 'Отчет по публикациям СА (БСР) Чернову УСД',
    start: '2024-01-15 09:00:00',
    end: '2024-01-15 23:59:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '120',
    title: 'ВКС собрание Совета судей-ветеранов',
    start: '2023-03-01 11:20:00',
    end: '2023-03-01 11:30:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '121',
    title: 'ВКС совещание по итогам работы за 2022',
    start: '2023-02-22 08:55:00',
    end: '2023-02-22 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
  {
    id: '123',
    title: 'Фотосессия для сайта',
    start: '2023-03-07 09:00:00',
    end: '2023-03-07 09:00:00',
    allDay: false,
    calendar: 'pink',
  },
  {
    id: '124',
    title: 'Оперативная отчетность S03, S06',
    start: '2023-04-10 08:55:00',
    end: '2023-04-10 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '126',
    title: 'Оперативная отчетность S03, S06, отчеты',
    start: '2023-07-10 08:55:00',
    end: '2023-07-10 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '127',
    title: 'Распечатать отчеты F1, F2, F3, F4, F6, F7 в 2 экз., подписать, отправить 1 экземпляр в УСД',
    start: '2023-07-21 08:55:00',
    end: '2023-07-21 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '128',
    title: 'Оперативная отчетность S03, S06, отчеты',
    start: '2024-01-10 08:55:00',
    end: '2024-01-10 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '129',
    title: 'Оперативная отчетность S03, S06',
    start: '2023-10-10 08:55:00',
    end: '2023-10-10 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '130',
    title: 'Распечатать отчеты F1, F2, F3, F4, F6, F7 в 2 экз., подписать, отправить 1 экземпляр в УСД',
    start: '2024-01-22 08:55:00',
    end: '2024-01-22 09:00:00',
    allDay: true,
    calendar: 'yellow',
  },
  {
    id: '131',
    title: 'Общая планерка с предст. УФССП',
    start: '2023-02-20 09:00:00',
    end: '2023-02-20 09:00:00',
    allDay: false,
    calendar: 'yellow',
  },
];

export const demoSteps = [
  {
    id: '0',
    title: 'Introduction',
    content:
      '<h1>Introduction</h1>' +
      "<p>Oh, and here's a great quote from this Wikipedia on [salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).</p>" +
      '<blockquote>A salted duck egg is a Chinese preserved food product made by soaking duck' +
      'This is an example step of the course. You can put anything in here from example codes to videos.</blockquote>' +
      '<code>npm -g install @angular/cli</code>' +
      '<b>Bold</b> <i>Italic3</i>' +
      '<del>Deleted</del> <abbr>Abbreviature</abbr>' +
      '<figure>\n' +
      '    <figcaption>Listen to the T-Rex:</figcaption>\n' +
      '    <audio\n' +
      '        controls\n' +
      '        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">\n' +
      '            <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">\n' +
      '                Download audio\n' +
      '            </a>\n' +
      '    </audio>\n' +
      '</figure>' +
      '<table>\n' +
      '    <caption>Superheros and sidekicks</caption>\n' +
      '    <colgroup>\n' +
      '        <col>\n' +
      '        <col span="2" class="batman">\n' +
      '        <col span="2" class="flash">\n' +
      '    </colgroup>\n' +
      '    <tr>\n' +
      '        <td> </td>\n' +
      '        <th scope="col">Batman</th>\n' +
      '        <th scope="col">Robin</th>\n' +
      '        <th scope="col">The Flash</th>\n' +
      '        <th scope="col">Kid Flash</th>\n' +
      '    </tr>\n' +
      '    <tr>\n' +
      '        <th scope="row">Skill</th>\n' +
      '        <td>Smarts</td>\n' +
      '        <td>Dex, acrobat</td>\n' +
      '        <td>Super speed</td>\n' +
      '        <td>Super speed</td>\n' +
      '    </tr>\n' +
      '</table>' +
      '<form>\n' +
      '  <fieldset>\n' +
      '    <legend>Choose your favorite monster</legend>\n' +
      '\n' +
      '    <input type="radio" id="kraken" name="monster" value="K">\n' +
      '    <label for="kraken">Kraken</label><br>\n' +
      '\n' +
      '    <input type="radio" id="sasquatch" name="monster" value="S">\n' +
      '    <label for="sasquatch">Sasquatch</label><br>\n' +
      '\n' +
      '    <input type="radio" id="mothman" name="monster" value="M" />\n' +
      '    <label for="mothman">Mothman</label>\n' +
      '  </fieldset>\n' +
      '</form>' +
      '<hgroup>\n' +
      '\t<h1>Frankenstein</h1>\n' +
      '\t<p>Or: The Modern Prometheus</p>\n' +
      '</hgroup>\n' +
      '<p>Victor Frankenstein, a Swiss scientist, has a great ambition: to create intelligent life. But when his creature first stirs, he realizes he has made a monster. A monster which, abandoned by his master and shunned by everyone who sees it, follows Dr Frankenstein to the very ends of the earth.</p>\n' +
      '<hr>' +
      '<img' +
      '     src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"\n' +
      '     alt="Grapefruit slice atop a pile of other slices">\n' +
      '<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>' +
      '<ruby>\n' +
      '明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>\n' +
      '</ruby>' +
      '<s>There will be a few tickets available at the box office tonight.</s>' +
      '<samp>Keyboard not found <br>Press F1 to continue</samp>' +
      '<video controls width="500">\n' +
      '\n' +
      '    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"\n' +
      '            type="video/webm">\n' +
      '\n' +
      '    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"\n' +
      '            type="video/mp4">\n' +
      '\n' +
      '    Download the\n' +
      '    <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">WEBM</a>\n' +
      '    or\n' +
      '    <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">MP4</a>\n' +
      '    video.\n' +
      '</video>' +
      '<h2>Header 2</h2>' +
      '<h3>Header 3</h3>' +
      '<h4>Header 4</h4>' +
      '<h5>Header 5</h5>' +
      '<h6>Header 6</h6>' +
      '<ul>' +
      '<li>' +
      'List item' +
      '</li>' +
      '<li>' +
      'List item' +
      '</li>' +
      '<li>' +
      'List item' +
      '</li>' +
      '</ul>' +
      '<details>' +
      '<summary>Ответ</summary>' +
      '<p>И это - правильный ответ.</p>' +
      '</details>' +
      '<table>' +
      '<tr><th>стл 1</th><th>стл 2</th><th>стл3</th><tr>' +
      '<tr><td>1</td><td>2</td><td>3</td></tr>' +
      '<tr><td>1</td><td>2</td><td>3</td></tr>' +
      '<tr><td>1</td><td>2</td><td>3</td></tr>' +
      '</table>' +
      '<p>This will install the three packages locally and add them as declared dependencies in your package.js file.</p>',
  },
  {
    id: '1',
    title: 'Get the sample code',
    content:
      '<h1>Step 2 - Get the sample code</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '2',
    title: 'Create a Firebase project and Set up your app',
    content:
      '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '3',
    title: 'Install the Firebase Command Line Interface',
    content:
      '<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '4',
    title: 'Deploy and run the web app',
    content:
      '<h1>Step 5 - Deploy and run the web app</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '5',
    title: 'The Functions Directory',
    content:
      '<h1>Step 6 - The Functions Directory</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '6',
    title: 'Import the Cloud Functions and Firebase Admin modules',
    content:
      '<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '7',
    title: 'Welcome New Users',
    content:
      '<h1>Step 8 - Welcome New Users</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '8',
    title: 'Images moderation',
    content:
      '<h1>Step 9 - Images moderation</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '9',
    title: 'New Message Notifications',
    content:
      '<h1>Step 10 - New Message Notifications</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.' +
      '<br><br>' +
      'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
      'To install or upgrade the CLI run the following <b>npm</b> command:' +
      '<br><br>' +
      '<code>npm -g install @angular/cli</code>' +
      '<br><br>' +
      'To verify that the CLI has been installed correctly, open a console and run:' +
      '<br><br>' +
      '<code>ng version</code>' +
      '<br><br>' +
      '<h2>Install dependencies</h2>' +
      '<br>' +
      "To moderate the images we'll need a few Node.js packages:" +
      '<br><br>' +
      '<ul>' +
      '<li>' +
      'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
      '</li>' +
      '<br>' +
      '<li>' +
      'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
      '</li>' +
      '</ul>' +
      '<br>' +
      'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
      '<br><br>' +
      '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
      '<br><br>' +
      'This will install the three packages locally and add them as declared dependencies in your package.js file.',
  },
  {
    id: '10',
    title: 'Congratulations!',
    content:
      '<h1>Step 11 - Congratulations!</h1>' +
      '<br>' +
      "You've built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!",
  },
];

export const testSteps1 = [
  {
    value: '1',
    label: 'Регулярные выражения чувствительны к регистру?',
    answers: [
      {
        value: '1',
        label: 'Нет',
      },
      {
        value: '2',
        label: 'Да',
      },
    ],
    type: 'single',
  },
  {
    value: '2',
    label: '<p>Как выглядит набор букв для селектора <code>\\w</code>, если переписать его в квадратных скобках?</p>',
    answers: [
      { value: '1', label: '<code>[a-z0-9_]</code>' },
      { value: '2', label: '<code>[a-zA-Z0-9_]</code>' },
      { value: '3', label: '<code>[a-zA-Zа-яА-Я0-9_]</code>' },
    ],
    type: 'single',
  },
  {
    value: '3',
    label: 'Как правильно записать «не число»?',
    answers: [
      { value: '1', label: '<code>\\D</code>' },
      { value: '2', label: '<code>^[0-9]</code>' },
      { value: '3', label: '<code>\\[^0-9]</code>' },
    ],
    type: 'multi',
  },
];

export const testSteps1answers = {
  1: '2',
  2: '2',
  3: ['1', '3'],
};

export const courtTree = [
  {
    id: '1',
    title: 'Сафоново',
    subtitle: '',
    type: 'building',
    icon: 'building',
    order: '0',
    children: [
      {
        id: '12',
        title: 'Этаж 1',
        subtitle: '',
        type: 'floor',
        icon: 'floor',
        order: '0',
        children: [
          {
            id: '121',
            title: 'Каб. №8',
            subtitle: '',
            type: 'room',
            icon: 'door',
            order: '0',
            children: [
              {
                id: '1211',
                title: 'Тамбур',
                subtitle: '',
                type: 'subroom',
                icon: 'door',
                order: '0',
                children: [
                  {
                    id: '12111',
                    title: 'Секретарь судьи Сабанцева М.М.',
                    subtitle: '',
                    type: 'workplace',
                    icon: 'desktop',
                    order: '0',
                  },
                  {
                    id: '12112',
                    title: 'Секретарь судьи Дроздова С.А.',
                    subtitle: '',
                    type: 'workplace',
                    icon: 'desktop',
                    order: '1',
                  },
                ],
              },
              {
                id: '1212',
                title: 'Судья',
                subtitle: '',
                type: 'subroom',
                icon: 'door',
                order: '1',
              },
            ],
          },
          {
            id: '122',
            title: 'Каб. №9',
            subtitle: '',
            type: 'room',
            icon: 'door',
            order: '1',
          },
        ],
      },
      {
        id: '13',
        title: 'Этаж 2',
        subtitle: '',
        type: 'floor',
        icon: 'floor',
        order: '1',
        children: [
          {
            id: '131',
            title: 'Каб. №1',
            subtitle: '',
            type: 'room',
            icon: 'door',
            order: '0',
          },
          {
            id: '132',
            title: 'Каб. №2',
            subtitle: '',
            type: 'room',
            icon: 'door',
            order: '1',
          },
        ],
      },
    ],
  },
];

export const devicesTree = [
  {
    id: '1',
    brand: 'Kraftway',
    model: 'Credo KC-51',
    icon: 'computercase',
    may_parent: 'true',
    children: [
      {
        id: '2',
        brand: 'Kraftway',
        model: 'KWH-77',
        icon: 'motherboard',
        may_parent: 'true',
        children: [
          {
            id: '3',
            brand: 'Intel',
            model: 'Pentium G2020',
            icon: 'processor',
            may_parent: 'true',
            children: [
              {
                id: '4',
                brand: 'CoolerMaster',
                model: '',
                icon: 'cooler',
                may_parent: 'false',
              }
            ],
          },
          {
            id: '5',
            brand: 'Kingston',
            model: 'DDR III',
            icon: 'memory',
            may_parent: 'false',
          },
          {
            id: '6',
            brand: 'Kingston',
            model: 'DDR III',
            icon: 'memory',
            may_parent: 'false',
          },
          {
            id: '7',
            brand: 'WesternDigital',
            model: 'Caviar Blue 500Gb',
            icon: 'drive',
            may_parent: 'false',
          },
          {
            id: '8',
            brand: 'Блок питания',
            model: '',
            icon: 'powersupply',
            may_parent: 'false',
          },
        ],
      },
    ],
  },
];
export const stat = [
  {
    title: 'Население Сафоново',
    data: [
      { name: 'Население Сафоново', data: [43500, 46100, 45273, 44444, 43845, 43477, 43145, 42707, 42147, 41510, 41138, 40537, 39883] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.gray['500'],
    ],
  },

  /* Данные: https://города-россия.рф/sity_id.php?id=394 */
  {
    title: 'Население Смоленской области',
    data: [
      { name: 'Население Смоленской области', data: [993018, 982887, 980482, 975188, 967896, 964791, 958630, 953201, 949348, 942363, 934889, 921127] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.gray['500'],
    ],
  },

  {
    title: 'Трудоспособное население Смоленской области',
    data: [
      { name: 'Трудоспособное население Смоленской области', data: [633809, 596862, 627128, 625958, 593611, 615842, 607983, 586273, 598980, 587725, 587237] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.gray['500'],
    ],
  },

  {
    title: 'Количество безработных в Смоленской области, тыс. человек',
    data: [
      { name: 'Количество безработных в Смоленской области, тыс. человек', data: [40.8, 41.5, 30.9, 28.1, 26.9, 32.8, 31.4, 29.8, 26.2, 25.3, 25.3] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.gray['500'],
    ],
  },

  {
    title: 'Исходящая почта',
    data: [
      { name: 'Исходящая почта', data: [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827, 38381, 36570] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.indigo['500'],
    ],
  },

  {
    title: 'Исходящая эл. почта',
    data: [
      { name: 'Исходящая эл. почта', data: ['', '', '', '', '', '', '', '', '', 1810, 3170, 3959, 3847] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.indigo['500'],
    ],
  },


  {
    title: 'Входящая почта',
    data: [
      { name: 'Входящая почта', data: [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308, 15209, 15592] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.emerald['500'],
    ],
  },

  {
    title: 'Входящая эл. почта',
    data: [
      { name: 'Входящая эл. почта', data: ['', '', '', '', '', '', '', '', '', 6489, 8384, 10450, 10954] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.emerald['500'],
    ],
  },

  {
    title: 'Обращения, без исковых, поданные через Электронное правосудие',
    data: [
      { name: 'Обращения, без исковых', data: ['', '', '', '', '', '', '', '', 87, 230, 423, 624, 628] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.indigo['500'],
    ],
  },

  {
    title: 'Исковые заявления, поданные через Электронное правосудие',
    data: [
      { name: 'Исковые заявления', data: ['', '', '', '', '', '', '', '', 21, 43, 35, 128, 344] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.purple['500'],
    ],
  },

  {
    title: 'Рассмотрено по 1 инстанции уголовных дел',
    data: [
      { name: 'Рассмотрено уголовных дел по 1 инстанции', data: [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240, 297, 302] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.amber['500'],
    ],
  },

  {
    title: 'Рассмотрено по 1 инстанции уголовных дел (область)',
    data: [
      { name: 'Рассмотрено уголовных дел по 1 инстанции (область)', data: [4124, 4038, 3696, 3257, 3799, 3563, 3210, 2217, 3061, 3626, 3713, 3636, 4174] },
    ],    colors: [
      tailwindColorsConfig.theme.colors.amber['500'],
    ],
  },

  {
    title: 'Рассмотрено по апелляционной инстанции инстанции уголовных дел',
    data: [
      { name: 'Рассмотрено уголовных дел по апелляционной инстанции', data: [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13, 9, 12] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.teal['500'],
    ],
  },

  {
    title: 'Рассмотрено по 1 инстанции гражданских дел',
    data: [
      { name: 'Рассмотрено гражданских дел по 1 инстанции', data: [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587, 1893, 1533] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.red['500'],
    ],
  },

  {
    title: 'Рассмотрено по 1 инстанции гражданских дел (область)',
    data: [
      { name: 'Рассмотрено по 1 инстанции гражданских дел (область)', data: [30095, 28470, 31392, 32393, 34753, 33232, 31409, 21203, 24391, 18543, 23220, 24205, 23589 ] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.red['500'],
    ],
  },

  {
    title: 'Рассмотрено по по апелляционной гражданских дел',
    data: [
      { name: 'Рассмотрено гражданских дел по по апелляционной', data: [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58, 49, 25] },
    ],    colors: [
      tailwindColorsConfig.theme.colors.orange['500'],
    ],
  },

  {
    title: 'Рассмотрено дел об административных правонарушениях',
    data: [
      { name: 'Рассмотрено дел об административных правонарушениях', data: [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382, 1157, 1082] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.blue['500'],
    ],
  },

  {
    title: 'Рассмотрено дел об административных правонарушениях (область)',
    data: [
      { name: 'Рассмотрено дел об административных правонарушениях (область)', data: [1487, 1334, 1315, 6150, 5856, 5316, 5080, 5352, 5232, 4805, 6768, 12829, 9947] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.blue['500'],
    ],
  },

  {
    title: 'Рассмотрено жалоб по делам об административных правонарушениях',
    data: [
      { name: 'Рассмотрено жалоб по делам об административных правонарушениях', data: ["", "", "", "", 166, 204, 205, 198, 145, 138, 123, 96, 118] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.teal['500'],
    ],
  },

  {
    title: 'Материалы в порядке уг. производства, всего',
    data: [
      { name: 'Материалы в порядке уг. производства, всего', data: [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494, 1157, 972] },
    ],
    colors: [
      tailwindColorsConfig.theme.colors.cyan['500'],
    ],
  },
]

/* Данные для годовой конференции */
export const yearConferenceStat = {
  year: "2022",
  data: {
    G1_YEAR_START_OSTATOK_ALL: [255, 123]
  }
}