import React, {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/index';
import CourseLayout from '../layouts/CourseLayout/index';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import LoadingScreen from '../components/LoadingScreen';
import { PATH_ADMIN, PATH_CASE, PATH_ERRORS, PATH_HOME, PATH_INFO, PATH_PLANING, PATH_STAT, PATH_USERS } from './paths';
import RoleBasedGuard from '../guards/RoleBasedGuard';

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );

export default function Router() {
    return useRoutes([
        {
            path: '/',
            index: true,
            element: <Navigate replace to={PATH_HOME}/>,
        },
        // Вход, регистрация
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: (
                        <GuestGuard>
                            <Login/>
                        </GuestGuard>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <GuestGuard>
                            <Register/>
                        </GuestGuard>
                    ),
                },
                {path: 'login-unprotected', element: <Login/>},
                {path: 'register-unprotected', element: <Register/>},
            ],
        },

        // Основное
        {
            path: 'home',
            element: (
                <AuthGuard>
                    <MainLayout/>
                </AuthGuard>
            ),
            children: [
                {path: '', element: <Home/>},
                {path: 'over-period', element: <Finished/>},
            ],
        },

        {
            path: '/',
            element: (
                <AuthGuard>
                    <MainLayout/>
                </AuthGuard>
            ),
            children: [
                /* FIXME сюда добавлять другие роуты */
                {
                    path: PATH_INFO.proxyList.list.client,
                    element: <LinksCatalog/>,
                },
                {
                    path: PATH_CASE.lists.overPeriod.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.overPeriod.accessibleProfessions}>
                            <Finished all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: PATH_CASE.lists.overPeriodAll.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.overPeriodAll.accessibleProfessions}>
                            <Finished all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_CASE.publication.neededPublication.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.publication.neededPublication.accessibleProfessions}>
                            <Publication all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: PATH_CASE.publication.neededPublicationAll.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.publication.neededPublicationAll.accessibleProfessions}>
                            <Publication all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_CASE.lists.process.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.process.accessibleProfessions}>
                            <Process all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: PATH_CASE.lists.processAll.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.processAll.accessibleProfessions}>
                            <Process all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_CASE.lists.noLastEvents.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.noLastEvents.accessibleProfessions}>
                            <NoLastEvents all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_CASE.lists.noLastEventsAll.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_CASE.lists.noLastEventsAll.accessibleProfessions}>
                            <NoLastEvents all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_PLANING.root.client,
                    element: <Calendar/>,
                },
                {
                    path: PATH_INFO.phoneBook.client,
                    element: <Phonebook/>,
                }, {
                    path: 'phonebook/:id/view',
                    element: (
                      <UserView user />
                    ),
                },
                {
                    path: PATH_STAT.charts.client,
                    element: <Stats/>,
                },
                {
                    path: PATH_STAT.grade.client,
                    element: (
                        <RoleBasedGuard accessibleProfessions={PATH_STAT.grade.accessibleProfessions}>
                            <Grade/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_INFO.faq.client.main,
                    element: <Faq/>,
                },
                {
                    path: PATH_INFO.faq.client.gas,
                    element: <Gas/>,
                },
                {
                    path: PATH_INFO.faq.client.gCategory,
                    element: <Category type='gcases'/>,
                },
                {
                    path: PATH_INFO.faq.client.mCategory,
                    element: <Category type='mcases'/>,
                },
                {
                    path: PATH_ADMIN.users.client.list,
                    element: (
                        <RoleBasedGuard accessibleRoles={PATH_ADMIN.users.accessibleRoles}>
                            <UsersAdmin/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_ADMIN.users.client.view(':id'),
                    element: (
                        <RoleBasedGuard accessibleRoles={PATH_ADMIN.users.accessibleRoles}>
                            <UserView />
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_ADMIN.users.client.edit(':id'),
                    element: (
                        <RoleBasedGuard accessibleRoles={PATH_ADMIN.users.accessibleRoles}>
                            <UserEdit/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_ADMIN.users.client.new,
                    element: (
                        <RoleBasedGuard accessibleRoles={PATH_ADMIN.users.accessibleRoles}>
                            <UserEdit/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_ADMIN.workplaces.client.list,
                    element: (
                        <RoleBasedGuard accessibleRoles={PATH_ADMIN.workplaces.accessibleRoles}>
                            <Workplaces/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: PATH_USERS.user.settings,
                    element: <Settings/>,
                },
                {
                    path: PATH_USERS.user.profile,
                    element: <Profile/>,
                },

                {
                    path: 'test',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Test/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'test2',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Test2/>
                        </RoleBasedGuard>
                    ),
                },
            ],
        },

        // Курсы
        {
            path: '/',
            element: (
                <AuthGuard>
                    <CourseLayout/>
                </AuthGuard>
            ),
            children: [
                /* FIXME сюда добавлять другие курсы */
                {
                    path: 'test3',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Test3/>
                        </RoleBasedGuard>
                    ),
                },
            ],
        },

        // Ошибки
        {
            path: '*',
            element: (
                <AuthGuard>
                    <MainLayout/>
                </AuthGuard>
            ),
            children: [
                {path: PATH_ERRORS['500'], element: <Page500/>},
                {path: PATH_ERRORS['404'], element: <NotFound/>},
                {path: '*', element: <Navigate to={PATH_ERRORS['404']} replace/>},
            ],
        },
        {path: '*', element: <Navigate to={PATH_ERRORS['404']} replace/>},
    ]);
}

// Основные страницы
const Home = Loadable(lazy(() => import('../pages/Home'))); // Главная
const LinksCatalog = Loadable(lazy(() => import('../pages/LinksCatalog'))); // Каталог ссылок
const Finished = Loadable(lazy(() => import('../pages/cases/Finished'))); // Оконченные дела
const Publication = Loadable(lazy(() => import('../pages/cases/Publication'))); // Контроль публикации СА
const Process = Loadable(lazy(() => import('../pages/cases/Process'))); // Каталог ссылок
const NoLastEvents = Loadable(lazy(() => import('../pages/cases/NoLastEvents'))); // Не отмеченные дела

const Calendar = Loadable(lazy(() => import('../pages/Calendar'))); // Дела в производстве
const Phonebook = Loadable(lazy(() => import('../pages/Phonebook'))); // Телефонный справочник
const Stats = Loadable(lazy(() => import('../pages/Stats'))); // Каталог ссылок
const Grade = Loadable(lazy(() => import('../pages/Grade'))); // Графики
const Faq = Loadable(lazy(() => import('../pages/Faq'))); // База знаний
const Gas = Loadable(lazy(() => import('../pages/Faq/Subpages/Gas'))); // База знаний
const Category = Loadable(lazy(() => import('../pages/Faq/Subpages/Gcategory'))); // База знаний

const UsersAdmin = Loadable(lazy(() => import('../pages/Admin/Users'))); // Управление пользователями
const UserEdit = Loadable(lazy(() => import('../pages/Admin/UserEdit'))); // Добавление / редактирование пользователя
const UserView = Loadable(lazy(() => import('../pages/Admin/UserView'))); // Просмотр пользователя
const Workplaces = Loadable(lazy(() => import('../pages/Admin/Workplaces'))); // Рабочие места

const Profile = Loadable(lazy(() => import('../pages/Profile'))); // Профиль
const Settings = Loadable(lazy(() => import('../pages/Settings'))); // Настройки
// Вход, регистрация
const Login = Loadable(lazy(() => import('../pages/auth/Login'))); // Вход
const Register = Loadable(lazy(() => import('../pages/auth/Register'))); // Регистрация
// Ошибки
const Page500 = Loadable(lazy(() => import('../pages/errors/Page500'))); // Ошибка сервера
const NotFound = Loadable(lazy(() => import('../pages/errors/Page404'))); // Страница не найдена
// Тестирование
const Test = Loadable(lazy(() => import('../pages/Test')));
const Test2 = Loadable(lazy(() => import('../pages/Test/test2')));
const Test3 = Loadable(lazy(() => import('../pages/Test/test3')));