import ContentLayoutWithSidebar from "../layouts/ContentLayouts/ContentLayoutWithSidebar";
import React, {useEffect, useState} from "react";
import BasicButton from "../components/elements/BasicButton";
import {PlusIcon} from "@heroicons/react/solid";
import {useDispatch, useSelector} from "react-redux";
import RightSlideover from "../components/ui/RightSlideover";
import CardHeader from "../components/elements/CardHeader";
import Checkbox from "../components/elements/Checkbox";
import Dot from "../components/elements/Dot";
import {fetchUsers, selectUser, updateAllFilters, updateFilter} from "../store/users";
import {users} from "../@mock/SampleData";
import {ChevronRightIcon, OfficeBuildingIcon, PhoneIcon, UserCircleIcon} from "@heroicons/react/outline";
import {Avatar} from "../components/elements/Avatar";
import Badge from "../components/elements/Badge";
import {getInitials, getLoginFromName} from "../utils";
import {Controller, useForm} from "react-hook-form";
import {Form, Input, Label} from "reactstrap";
import PrimaryButton from "../components/elements/PrimaryButton";

const filters = [
    {label: "Судьи", color: "indigo", className: ""},
    {label: "Помощники судей", color: "green", className: ""},
    {label: "Секретари судебных заседаний", color: "cyan", className: ""},
    {label: "Канцелярия", color: "yellow", className: ""},
];

const breadcrumbs = [{name: "Сотрудники", href: "#", current: true}];

const Phonebook = () => {
    const userdataStore = useSelector((state) => state.userData);
    const loginData = userdataStore.userData;

    const dispatch = useDispatch();
    const store = useSelector(state => state.users);

    const selectedUser = store.selectedUser,
        {
            formState: {errors}
        } = useForm({
            defaultValues: {name: ""}
        });

    const [addSidebarOpen, setAddSidebarOpen] = useState(false);

    /** Открывает сайдбар */
    const handleAddUserSidebar = () => {
        setAddSidebarOpen(!addSidebarOpen);
    };

    /** Сброс полей формы при закрытии */
    const handleResetInputValues = () => {
        dispatch(selectUser({}));
        handleAddUserSidebar();
    };

    /** Хандл, изменяющий стейт, по вводу в инпут,
     * берет имя инпута, в качестве ключа в стейте
     * @param evt
     */
    const handleUserDataChange = evt => {
        const {name, value} = evt.target;
        dispatch(selectUser(prevState => ({
            ...prevState, [name]: value
        })));
    };

    const userClick = (user) => {
        dispatch(selectUser(user))
        console.log(user)
    }

    const generateLoginClick = () => {
        dispatch(selectUser(selectedUser.username = getLoginFromName(selectedUser.fullname)))
    }

    // получаем пользователей при монтировании
    useEffect(() => {
        dispatch(fetchUsers(store.selectedUserGroups))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    /*useEffect(() => {
        if (addSidebarOpen && selectUser) {
            handleAddUserSidebar();
        }
        // eslint-disable-next-line
    }, [addSidebarOpen])*/

    return (
        <ContentLayoutWithSidebar
            boxed={true}
            title="Сотрудники"
            breadcrumbs={breadcrumbs}
            header="Сотрудники"
            sidebarSize="medium"
            fullHeight={true}
        >
            <ContentLayoutWithSidebar.Sidebar>
                <div className="p-4 pt-0.5">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="py-4 h-8">
                            {loginData.sudo === 1
                                ? <BasicButton label="Новый Сотрудник" className="w-full mb-6"
                                               onClick={handleAddUserSidebar}>
                                    <PlusIcon className="w-4 h-4 mr-2"/>
                                </BasicButton>
                                : null}
                            <p className="section-label mb-4">
                                <span
                                    className="font-bold uppercase text-gray-600 dark:text-gray-500 text-sm">Группы</span>
                            </p>
                            <Checkbox
                                size="4"
                                id="view-all"
                                color="gray"
                                onChange={e => dispatch(updateAllFilters(e.target.checked))}
                                checked={store.selectedUserGroups.length === filters.length}
                                label="Все"
                                className="select-all mb-3">
                                <Dot className="mr-2" color="gray" size="4" shape="roundedMD" fill="bordered"/>
                            </Checkbox>
                            <div className="users-filter">
                                {filters.length &&
                                    filters.map(filter => {
                                        return (
                                            <Checkbox
                                                key={`${filter.color}-key`}
                                                size="4"
                                                id={`${filter.color}`}
                                                color="gray"
                                                onChange={() => {
                                                    dispatch(updateFilter(filter.color))
                                                }}
                                                checked={store.selectedUserGroups.includes(filter.color)}
                                                label={filter.label}
                                                className={
                                                    [filter.className, "mb-3"].join(" ")}>
                                                <Dot className="mr-2" color={filter.color} size="4" shape="roundedMD"
                                                     fill="bordered"/>
                                            </Checkbox>
                                        )
                                    })}
                            </div>

                        </div>
                    </div>
                </div>
            </ContentLayoutWithSidebar.Sidebar>
            <ContentLayoutWithSidebar.Body color="gray">
                <div className="p-4 h-full">
                    <div className="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-md">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {users.map((user) => (
                                <li key={user.id} onClick={key => userClick(user)}>
                                    <a href="#" className="block hover:bg-gray-50">
                                        <div className="flex items-center px-4 py-4 sm:px-6">
                                            <div className="min-w-0 flex-1 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Avatar color={user.color} size="12" avatar={user.avatar}
                                                            name={user.fullname} shape="circle"/>
                                                </div>
                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                    <div>
                                                        <p className="text-sm font-medium text-indigo-600 truncate">{getInitials(user.fullname)}</p>
                                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                                            <UserCircleIcon
                                                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                                aria-hidden="true"/>
                                                            <span className="truncate">{user.username}</span>
                                                            {user.sudo === "1" ?
                                                                <Badge color="green" size="small" item="Админ"
                                                                       className="ml-2"/> : null}
                                                        </p>
                                                    </div>
                                                    <div className="hidden md:block">
                                                        <div>
                                                            <p className="text-sm flex items-center text-gray-900">
                                                                <PhoneIcon
                                                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-700"
                                                                    aria-hidden="true"/>
                                                                {user.work_phone}
                                                            </p>
                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                <OfficeBuildingIcon
                                                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"/>
                                                                {user.cabinet}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ContentLayoutWithSidebar.Body>
            <RightSlideover open={addSidebarOpen} onCloseSidebar={handleResetInputValues}
                            onClose={handleResetInputValues}>
                <CardHeader className=""
                            title={selectedUser && selectedUser.fullname && selectedUser.fullname.length ? "Редактирование сотрудника" : "Добавление сотрудника"}/>
                <Form>
                    <div className="grid gap-2">
                        <div className="mb-1">
                            <Label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                for="fullname">
                                Полное имя <span className="text-red-400">*</span>
                            </Label>
                            <Input
                                className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="fullname"
                                name="fullname"
                                value={selectedUser.fullname || ""}
                                placeholder="Введите имя"
                                onChange={handleUserDataChange}
                            />

                        </div>
                        <div className="mb-1">
                            <Label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                for="login">
                                Логин <span className="text-red-400">*</span>
                            </Label>
                            <Input
                                className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="login"
                                name="login"
                                value={selectedUser.username || ""}
                                placeholder="Введите логин или сгенерируйте"
                                onChange={handleUserDataChange}
                            />
                            <PrimaryButton onClick={generateLoginClick} size="medium" label="Сгенерировать" type="button" />
                        </div>
                    </div>
                </Form>
            </RightSlideover>
        </ContentLayoutWithSidebar>

    );
};

export default Phonebook;
