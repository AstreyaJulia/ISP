/** Навигация для сайдбара, для локального тестирования
 * @type {[{header: string},{icon: string, alias: string, id: string, pagetitle: string},{icon: string, alias: string, id: string, pagetitle: string},{badgeColor: string, icon: string, alias: string, id: string, pagetitle: string},{children: [{icon: string, alias: string, id: string, pagetitle: string}], icon: string, id: string, pagetitle: string},null,null,null,null]}
 */
export const navigation = [{header: "Главное меню"}, {
    id: "1", pagetitle: "Главная", icon: "mdi-apps", alias: "/home",
}, {
    id: "2", pagetitle: "Каталог ссылок", icon: "mdi-folder-table-outline", alias: "/proxylist",
}, {
    id: "3", pagetitle: "Календарь", icon: "mdi-calendar", alias: "/calendar", badgeColor: "bg-red-500"
}, {
    id: "4", pagetitle: "Информация", icon: "mdi-information-outline", children: [{
        id: "5", pagetitle: "Телефонный справочник", icon: "mdi-phone-classic", alias: "/phonebook",
    }]
}, {
    id: "6", pagetitle: "Статистика", icon: "mdi-chart-arc", children: [{
        id: "7", pagetitle: "Графики", icon: "mdi-chart-arc", alias: "/stats",
    }, {
        id: "8", pagetitle: "Качество", icon: "mdi-finance", alias: "/grade",
    }]
}, {
    id: "9", pagetitle: "Помощь", icon: "mdi-help-circle-outline", children: [{
        id: "10", pagetitle: "База знаний", icon: "mdi-lightbulb-on-outline", alias: "/faq",
    }]
}, {header: "Администрирование"}, {
    id: "12", pagetitle: "Панель управления", icon: "mdi-view-dashboard-outline", alias: "/admin",
}]

/** Пользователи, для локального тестирования
 * @type {[{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, username: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, username: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, username: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string},{profession: string, birthday: string, role: string, address: string, color: string, gender: string, ip: string, facebook: string, work_phone: string, instagram: string, avatar: string, username: string, site1: string, site2: string, odnoklassniki: string, mobile_phone: string, name: string, vkontakte: string, id: string, sudo: string, judge: string, place: string, cabinet: string, email: string}]}
 */
export const users = [{
    id: "1",
    sudo: "0",
    username: "Petrov_PP",
    fullname: "Петров Петр Петрович",
    color: "green",
    gender: "male",
    profession: "Судья",
    judge: "",
    role: "User",
    email: "petrovpp@example.com",
    cabinet: "Каб. 13",
    place: "АРМ 3",
    work_phone: "3-13-28",
    mobile_phone: "7-910-123-12-12",
    address: "Город, улица, дом, квартира",
    birthday: "1970-05-23",
    ip: "192.168.2.1",
    vkontakte: "https://vk.com/id&=1",
    odnoklassniki: "https://ok.ru/id&=1",
    facebook: "https://facebook.com/id&=1",
    instagram: "https://instagram.com/id&=1",
    site1: "",
    site2: "",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}, {
    id: "2",
    sudo: "0",
    username: "Ivanov_NN",
    fullname: "Иванов Николай Николаевич",
    color: "blue",
    gender: "male",
    profession: "Секретарь судебных заседаний",
    judge: "Петров Петр Петрович",
    role: "User",
    email: "ivanovnn@example.com",
    cabinet: "Каб. 13",
    place: "АРМ 2",
    work_phone: "3-13-28",
    mobile_phone: "7-950-123-12-12",
    address: "Город, улица, дом, квартира",
    birthday: "1980-03-10",
    ip: "192.168.2.2",
    vkontakte: "https://vk.com/id&=2",
    odnoklassniki: "https://ok.ru/id&=2",
    facebook: "https://facebook.com/id&=2",
    instagram: "https://instagram.com/id&=2",
    site1: "",
    site2: "",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}, {
    id: "3",
    sudo: "0",
    username: "Smirnov_II",
    fullname: "Смирнов Иван Иванович",
    color: "indigo",
    gender: "male",
    profession: "Помощник судьи",
    judge: "Петров Петр Петрович",
    role: "User",
    email: "smirnovii@example.com",
    cabinet: "Каб. 13",
    place: "АРМ 1",
    work_phone: "3-13-28",
    mobile_phone: "7-909-123-12-12",
    address: "Город, улица, дом, квартира",
    birthday: "1985-05-12",
    ip: "192.168.2.3",
    vkontakte: "https://vk.com/id&=3",
    odnoklassniki: "https://ok.ru/id&=3",
    facebook: "https://facebook.com/id&=3",
    instagram: "https://instagram.com/id&=3",
    site1: "",
    site2: "",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}, {
    id: "4",
    sudo: "0",
    username: "Vasechkina_MI",
    fullname: "Васечкина Мария Ивановна",
    color: "rose",
    gender: "female",
    profession: "Секретарь суда",
    judge: "",
    role: "User",
    email: "vasechkinami@example.com",
    cabinet: "Каб. 3",
    place: "АРМ 1",
    work_phone: "3-13-27",
    mobile_phone: "7-903-123-12-12",
    address: "Город, улица, дом, квартира",
    birthday: "1994-02-16",
    ip: "192.168.2.4",
    vkontakte: "https://vk.com/id&=4",
    odnoklassniki: "https://ok.ru/id&=4",
    facebook: "https://facebook.com/id&=4",
    instagram: "https://instagram.com/id&=4",
    site1: "",
    site2: "",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
}, {
    id: "5",
    sudo: "0",
    username: "Belosheikina_OL",
    fullname: "Белошейкина Олеся Леонидовна",
    color: "orange",
    gender: "female",
    profession: "Консультант",
    judge: "",
    role: "User",
    email: "belosheikinaol@example.com",
    cabinet: "Каб. 6",
    place: "АРМ 1",
    work_phone: "6-13-27",
    mobile_phone: "7-903-124-12-12",
    address: "Город, улица, дом, квартира",
    birthday: "1994-04-01",
    ip: "192.168.2.5",
    vkontakte: "https://vk.com/id&=5",
    odnoklassniki: "https://ok.ru/id&=5",
    facebook: "https://facebook.com/id&=5",
    instagram: "https://instagram.com/id&=5",
    site1: "https://site1.com",
    site2: "https://site2.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, {
    id: "6",
    sudo: "1",
    username: "Chainikov_OV",
    fullname: "Чайников Олег Васильевич",
    color: "blue",
    gender: "male",
    profession: "Администратор",
    judge: "",
    role: "Admin",
    email: "chainikovov@example.com",
    cabinet: "Каб. 2",
    place: "АРМ 1",
    work_phone: "3-13-97",
    mobile_phone: "7-903-124-12-34",
    address: "Город, улица, дом, квартира",
    birthday: "1994-08-23",
    ip: "192.168.2.6",
    vkontakte: "https://vk.com/id&=6",
    odnoklassniki: "https://ok.ru/id&=6",
    facebook: "https://facebook.com/id&=6",
    instagram: "https://instagram.com/id&=6",
    site1: "https://site1.com",
    site2: "https://site2.com",
    avatar: ""
}
]

export const messages = [{
    id: "1",
    user: users[5],
    time: "2022-05-21 11:05:00",
    message: "Hey John, I am looking for the best admin template. Could you please help me to find it out?"
}]

export const birthdaysToday = [{user: users[5], age: "36"}, {user: users[3], age: "24"}]

export const events = [{
    id: "1",
    title: "Длинное событие на несколько дней",
    date: "2022-05-04",
    end: "2022-05-07",
    allDay: true,
    calendar: "indigo",
    users: [1, 3]
}, {
    id: "2",
    title: "Совещание",
    start: "2022-05-27 11:00:00",
    end: "2022-05-27 11:30:00",
    allDay: false,
    calendar: "indigo"
}, {
    id: "3",
    title: "Дежурство",
    date: "2022-05-16 00:00:00",
    end: "2022-05-22 23:59:00",
    allDay: true,
    calendar: "cyan",
    users: [2, 3, 4]
}, {
    id: "4",
    title: "Дежурство",
    date: "2022-05-31 09:00:00",
    end: "2022-05-31 18:00:00",
    allDay: false,
    calendar: "cyan"
}, {
    id: "5",
    title: "День победы",
    start: "2022-05-09",
    end: "2022-05-09",
    allDay: true,
    calendar: "red"
}, {
    id: "6",
    title: "Праздник труда",
    start: "2022-05-01",
    end: "2022-05-01",
    allDay: true,
    calendar: "red"
}, {
    id: "7",
    title: "Отчёт по срокам",
    start: "2022-05-17 09:00:00",
    end: "2022-05-17 09:00:00",
    allDay: false,
    calendar: "yellow"
}, {
    id: "8",
    title: "Отчёт по количеству и качеству",
    start: "2022-06-03 09:00:00",
    end: "2022-06-03 09:00:00",
    allDay: false,
    calendar: "yellow"
}, {
    id: "9",
    title: "Событие",
    start: "2022-05-01",
    end: "2022-05-02",
    allDay: true,
    calendar: "pink"
}, {
    id: "10",
    title: "Событие",
    start: "2022-06-01",
    end: "2022-06-02",
    allDay: false,
    calendar: "pink"
}, {
    id: "11",
    title: "Событие",
    start: "2022-06-21",
    end: "2022-06-22",
    allDay: true,
    calendar: "teal"
}, {
    id: "12",
    title: "Событие",
    start: "2022-05-21",
    end: "2022-05-22",
    allDay: false,
    calendar: "teal"
}, {
    id: "13",
    title: "Событие",
    start: "2022-05-03",
    end: "2022-05-04",
    allDay: true,
    calendar: "orange"
}, {
    id: "14",
    title: "Событие",
    start: "2022-06-03",
    end: "2022-06-04",
    allDay: false,
    calendar: "orange"
}, {
    id: "15",
    title: "Событие",
    start: "2022-05-14",
    end: "2022-05-15",
    allDay: true,
    calendar: "blue"
}, {
    id: "16",
    title: "Событие",
    start: "2022-06-14",
    end: "2022-06-15",
    allDay: false,
    calendar: "blue"
}, {
    id: "17",
    title: "Отпуск",
    start: "2022-06-06",
    end: "2022-06-24",
    allDay: true,
    calendar: "green"
}, {
    id: "18",
    title: "Выохдной",
    start: "2022-06-11",
    end: "2022-06-11",
    allDay: false,
    calendar: "green"
}, {
    title: "",
    start: "2022-06-04",
    end: "2022-06-04",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-06-05",
    end: "2022-06-05",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-28",
    end: "2022-05-28",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-29",
    end: "2022-05-29",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-22",
    end: "2022-05-22",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-21",
    end: "2022-05-21",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-15",
    end: "2022-05-15",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-14",
    end: "2022-05-14",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-10",
    end: "2022-05-10",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-09",
    end: "2022-05-09",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-08",
    end: "2022-05-08",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-07",
    end: "2022-05-07",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-03",
    end: "2022-05-03",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-02",
    end: "2022-05-02",
    allDay: true,
    calendar: "red",
    display: "background"
}, {
    title: "",
    start: "2022-05-01",
    end: "2022-05-01",
    allDay: true,
    calendar: "red",
    display: "background"
}, {title: "", start: "2022-04-30", end: "2022-04-30", allDay: true, calendar: "red", display: "background"}, {
    title: "Сокращенный рабочий день",
    start: "2022-04-29",
    end: "2022-04-29",
    allDay: true,
    calendar: "orange",
    display: "background"
}];

/** Группы каталога ссылок
 * @type {{"0": {name: string, id: string}, "1": {name: string, id: string}, "2": {name: string, id: string}}}
 */
export const proxyListGroups = {
    0: {id: "1", name: "Сервисы"},
    1: {id: "2", name: "Судебная система, госслужба, адвокаты, нотариусы"},
    2: {id: "3", name: "Органы государственной власти"}
}

/** Элементы групп каталога ссылок
 * @type {{"0": {children: {"0": {name: string, link: string, id: number}, "1": {name: string, link: string, id: number}}, groupID: string}, "1": {children: {"0": {name: string, link: string, id: number}, "1": {name: string, link: string, id: number}}, groupID: string}, "2": {children: {"0": {name: string, link: string, id: number}, "1": {name: string, link: string, id: number}}, groupID: string}}}
 */
export const proxyListLinks = {
    0: {
        groupID: "1", children: {
            0: {id: 1, name: "Почта - кабинет отправителя", link: "https://otpravka.pochta.ru/"},
            1: {id: 2, name: "Отслеживание почтовых отправлений", link: "https://www.pochta.ru/tracking"}
        }
    },
    1: {
        groupID: "2", children: {
            0: {id: 1, name: "Смоленский областной суд", link: "https://oblsud.sml.sudrf.ru/"},
            1: {id: 2, name: "Второй кассационный суд", link: "https://2kas.sudrf.ru/"}
        }
    },
    2: {
        groupID: "3", children: {
            0: {id: 1, name: "МВД", link: "https://xn--b1aew.xn--p1ai/"},
            1: {id: 2, name: "Муниципальное образование Сафоново", link: "https://safonovo-admin.ru/"}
        }
    }
}

/** Объект с пользователями
 * @type {[{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},{label: string, avatar: *, value: string},null]}
 */
export const usersOptions = [
    {
        label: 'Судьи',
        options: [
            {value: 1, label: users[0].fullname, avatar: users[0].avatar, color: users[0].color}
        ]
    },
    {
        label: 'Помощники',
        options: [
            {value: 3, label: users[2].fullname, avatar: users[2].avatar, color: users[2].color}
        ]
    },
    {
        label: 'Секретари судебного заседания',
        options: [
            {value: 2, label: users[1].fullname, avatar: users[1].avatar, color: users[1].color}
        ]
    },
    {
        label: 'Канцелярия',
        options: [
            {value: 4, label: users[3].fullname, avatar: users[3].avatar, color: users[3].color},
            {value: 5, label: users[4].fullname, avatar: users[4].avatar, color: users[4].color},
            {value: 6, label: users[5].fullname, avatar: users[5].avatar, color: users[5].color}
        ]
    }
]

/** Цвета для Fullcalendar */
/** Цвета событий, названия менять в разметке, в js менять не надо */
export const calendCat = [
    {
        color: "indigo",
        name: "События"
    },
    {
        color: "green",
        name: "Отпуск"
    },
    {
        color: "cyan",
        name: "Дежурство"
    },
    {
        color: "yellow",
        name: "Важно"
    },
    {
        color: "red",
        name: "Праздники"
    },
    {
        color: "pink",
        name: "Категория 1"
    },
    {
        color: "blue",
        name: "Категория 2"
    },
    {
        color: "orange",
        name: "Категория 3"
    },
    {
        color: "teal",
        name: "Категория 4"
    }
]