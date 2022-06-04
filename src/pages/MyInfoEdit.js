import React, {useRef, useState} from "react";
import {Helmet} from "react-helmet";
import PageHeader from "../components/PageHeader";
import config from "../config";
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {AvatarCircularWithPlaceholderInitials} from "../components/elements/AvatarCircularWithPlaceholderInitials";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";
import moment from "moment";

/** Импорт компонентов */
import BasicButton from "../components/elements/BasicButton";
import DangerButton from "../components/elements/DangerButton";
import PrimaryButton from "../components/elements/PrimaryButton";
import CardWithFooter from "../components/elements/CardWithFooter";
import CardHeader from "../components/elements/CardHeader";
import CardSubHeader from "../components/elements/CardSubHeader";

/** Для образца*/
import {users} from "../@mock/SampleData";

registerLocale("ru", ru);

/** Цвета для аватарок
 * @type {[{name: string, class: string, selectedClass: string},{name: string, class: string, selectedClass: string},{name: string, class: string, selectedClass: string},{name: string, class: string, selectedClass: string},{name: string, class: string, selectedClass: string},null,null,null]}
 */
const colors = [
    {
        name: "indigo",
        class: "bg-indigo-500",
        selectedClass: "ring-indigo-500"
    },
    {
        name: "red",
        class: "bg-red-500",
        selectedClass: "ring-red-500"
    }, {
        name: "orange",
        class: "bg-orange-500",
        selectedClass: "ring-orange-500"
    }, {
        name: "yellow",
        class: "bg-yellow-500",
        selectedClass: "ring-yellow-500"
    }, {
        name: "green",
        class: "bg-green-500",
        selectedClass: "ring-green-500"
    }, {
        name: "cyan",
        class: "bg-cyan-500",
        selectedClass: "ring-cyan-500"
    }, {
        name: "blue",
        class: "bg-blue-500",
        selectedClass: "ring-blue-500"
    }, {
        name: "pink",
        class: "bg-pink-500",
        selectedClass: "ring-pink-500"
    },
]

/** Пол для радио-группы
 * @type {[{name: string, text: string, class: string, value: string, selectedClass: string, desc: string},{name: string, text: string, class: string, value: string, selectedClass: string, desc: string},{name: string, text: string, class: string, value: string, selectedClass: string, desc: string}]}
 */
const genders = [{
    name: "NA",
    class: "bg-gray-200",
    text: "text-gray-800",
    selectedClass: "ring-gray-500",
    value: "NA",
    desc: "Не выбрано"
}, {
    name: "М",
    class: "bg-blue-200",
    text: "text-blue-800",
    selectedClass: "ring-blue-500",
    value: "male",
    desc: "Мужской"
}, {
    name: "Ж",
    class: "bg-pink-200",
    text: "text-pink-800",
    selectedClass: "ring-pink-500",
    value: "female",
    desc: "Женский"
},]

/** Навигация вверху страницы
 * @type {[{current: boolean, name: string, href: string}]}
 */
const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

const MyInfoEdit = () => {
    /** Стейт пользовательских данных */
    const [userData, setUserData] = useState(users[0]);

    /** Хандл, изменяющий стейт, по вводу в инпут,
     * берет имя инпута, в качестве ключа в стейте
     * @param evt
     */
    const handleUserDataChange = evt => {
        const {name, value} = evt.target;
        setUserData(prevState => ({
            ...prevState, [name]: value
        }));
    };

    /** Хандл изменения цвета аватара
     * @param value
     */
    const handleColorChange = (value) => {
        setUserData(prevState => ({
            // eslint-disable-next-line
            ...prevState, ["color"]: value
        }));
    };

    /** Хандл изменения пола
     * @param value
     */
    const handleGenderChange = (value) => {
        setUserData(prevState => ({
            // eslint-disable-next-line
            ...prevState, ["gender"]: value
        }));
    };

    /** Хандл изменения дня рождения
     * @param value
     */
    const handleBirthDayChange = (value) => {
        setUserData(prevState => ({
            // eslint-disable-next-line
            ...prevState, ["birthday"]: value
        }));
    };

    /** Хандл удаления аватара */
    const handleAvatarReset = () => {
        setUserData(prevState => ({
            // eslint-disable-next-line
            ...prevState, ["avatar"]: ""
        }));
    };

    /** Хандл, эмулирующий выбор файла в инпуте аватара */
    const chooseAvatar = () => {
        avatarFile.current.click();
    };

    /** Реф на скрытый инпут выбора аватара
     * @type {React.MutableRefObject<null>}
     */
    const avatarFile = useRef(null);

    return (<React.Fragment>
        {/** Заголовок страницы */}
        <Helmet>
            <title>{config.APP_NAME} - Редактирование моего профиля</title>
        </Helmet>

        <div className="p-4 justify-self-stretch justify-center relative">
            <PageHeader pages={breadcrumbs}/>
            {/* Узкое содержимое */}
            <div className="space-y-6 max-w-7xl mx-auto md:px-8 xl:px-0 lg:p-4 px-0 py-4">
                {/* Узкое содержимое */}
                <form action="#" method="POST">
                    <CardWithFooter>
                        <CardWithFooter.Body>
                            <div>
                                <CardHeader title="Аккаунт"/>
                                <CardSubHeader title="Данные для входа."/>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="company-website"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Имя пользователя
                                    </label>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Редактирование логина доступно только администратору.
                                    </p>
                                    <input
                                        value={userData.login}
                                        readOnly
                                        type="text"
                                        name="login"
                                        id="login"
                                        autoComplete="login"
                                        className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300 text-gray-500 dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300">Аватар</label>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Если не загружен, вместо изображения будет цветной аватар с инициалами.
                                    </p>
                                    <input type="file" id="file" ref={avatarFile} className="hidden"/>
                                    <div className="mt-1 flex items-center">
                    <span className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden h-12 w-12">
                        {userData.avatar ? <img src={userData.avatar} alt="Аватар"/> :
                            <svg className="h-full w-full text-gray-300 dark:text-gray-500" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>}

                    </span>
                                        <BasicButton label="Изменить" onClick={chooseAvatar} size="medium"/>
                                        <DangerButton label="Удалить" onClick={handleAvatarReset} size="medium"/>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300">Цвет
                                        для аватара</label>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Если не загружено изображение для аватара.
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                        <AvatarCircularWithPlaceholderInitials
                                            color={userData.color.toLowerCase()} size="12" item={userData}
                                            classname="mt-1"/>
                                        <RadioGroup value={userData.color} onChange={handleColorChange}
                                                    className="ml-5" name="color">
                                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {colors.map((color) => (<RadioGroup.Option
                                                    key={color.name}
                                                    value={color.name}
                                                    className={({
                                                                    active,
                                                                    checked
                                                                }) => classNames(color.selectedClass, active && checked ? "ring" : "", !active && checked ? "ring-2" : "", "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none")}
                                                >
                                                    <RadioGroup.Label as="p" className="sr-only">
                                                        {color.name}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(color.class, "h-8 w-8 border border-black border-opacity-10 rounded-full")}
                                                    />
                                                </RadioGroup.Option>))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                        </CardWithFooter.Body>
                        <CardWithFooter.Footer>
                            <PrimaryButton label="Сохранить" size="medium" type="submit"/>
                        </CardWithFooter.Footer>
                    </CardWithFooter>
                </form>

                <form action="#" method="POST">
                    <CardWithFooter>
                        <CardWithFooter.Body>
                            <CardHeader title="Персональная Информация"/>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Имя, фамилия, отчество (полностью)
                                    </label>
                                    <input
                                        type="text"
                                        value={userData.name}
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <div className="flex items-center flex-grow justify-between">
                                        <div>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Пол
                                            </label>
                                            <div className="flex items-center flex-wrap">
                                                <RadioGroup value={userData.gender} onChange={handleGenderChange}
                                                            className="mt-1" name="gender">
                                                    <RadioGroup.Label className="sr-only">Choose a
                                                        gender</RadioGroup.Label>
                                                    <div className="flex items-center space-x-3">
                                                        {genders.map((gender) => (<RadioGroup.Option
                                                            key={gender.name}
                                                            value={gender.value}
                                                            className={({
                                                                            active,
                                                                            checked
                                                                        }) => classNames(gender.selectedClass, active && checked ? "ring" : "", !active && checked ? "ring-2" : "", "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none text-sm")}
                                                        >
                                                            <RadioGroup.Label as="p" className="sr-only">
                                                                {gender.name}
                                                            </RadioGroup.Label>
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(gender.class, gender.text, "h-8 w-8 border border-black border-opacity-10 rounded-full flex items-center justify-center")}
                                                            >{gender.name}</span>
                                                        </RadioGroup.Option>))}
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>
                                        <div className="ml-5">
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                День рождения
                                            </label>
                                            <DatePicker selected={moment(userData.birthday).toDate()} locale="ru"
                                                        dateFormat="dd.MM.yyyy"
                                                        onChange={(date) => handleBirthDayChange(date)}
                                                        className="mt-1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardWithFooter.Body>
                        <CardWithFooter.Footer>
                            <PrimaryButton label="Сохранить" size="medium" type="submit"/>
                        </CardWithFooter.Footer>
                    </CardWithFooter>
                </form>

                <form action="#" method="POST">
                    <CardWithFooter>
                        <CardWithFooter.Body>
                            <div>
                                <CardHeader title="Контактная Информация"/>
                                <CardSubHeader
                                    title="Пожалуйста, не делитесь личными данными сотрудников без их согласия."/>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="mobile_phone"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Мобильный телефон
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile_phone"
                                        id="mobile_phone"
                                        autoComplete="mobile_phone"
                                        pattern="[7]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                        value={userData.mobile_phone}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Адрес электронной почты
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        value={userData.email}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="address"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Домашний адрес (город, улица, дом, квартира)
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        autoComplete="address"
                                        value={userData.address}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                            </div>
                        </CardWithFooter.Body>
                        <CardWithFooter.Footer>
                            <PrimaryButton label="Сохранить" size="medium" type="submit"/>
                        </CardWithFooter.Footer>
                    </CardWithFooter>
                </form>

                <form action="#" method="POST">
                    <CardWithFooter>
                        <CardWithFooter.Body>
                            <div>
                                <CardHeader title="Социальные Сети"/>
                                <CardSubHeader
                                    title="Не показываются на других страницах. Для хранения ссылок на Ваши страницы в интернете."/>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="vkontakte"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Вконтакте
                                    </label>
                                    <input
                                        type="url"
                                        name="vkontakte"
                                        id="vkontakte"
                                        autoComplete="vkontakte"
                                        value={userData.vkontakte}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="odnoklassniki"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Одноклассники
                                    </label>
                                    <input
                                        type="url"
                                        name="odnoklassniki"
                                        id="odnoklassniki"
                                        autoComplete="odnoklassniki"
                                        value={userData.odnoklassniki}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>


                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="facebook"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Facebook
                                    </label>
                                    <input
                                        type="url"
                                        name="facebook"
                                        id="facebook"
                                        autoComplete="facebook"
                                        value={userData.facebook}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="instagram"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Instagram
                                    </label>
                                    <input
                                        type="url"
                                        name="instagram"
                                        id="instagram"
                                        autoComplete="instagram"
                                        value={userData.instagram}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>


                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="site1"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Сайт 1
                                    </label>
                                    <input
                                        type="url"
                                        name="site1"
                                        id="site1"
                                        autoComplete="site1"
                                        value={userData.site1}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="site2"
                                           className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Сайт 2
                                    </label>
                                    <input
                                        type="url"
                                        name="site2"
                                        id="site2"
                                        autoComplete="site2"
                                        value={userData.site2}
                                        onChange={handleUserDataChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-600"
                                    />
                                </div>
                            </div>
                        </CardWithFooter.Body>
                        <CardWithFooter.Footer>
                            <PrimaryButton label="Сохранить" size="medium" type="submit"/>
                        </CardWithFooter.Footer>
                    </CardWithFooter>
                </form>
            </div>
        </div>
    </React.Fragment>);
};

export default MyInfoEdit;