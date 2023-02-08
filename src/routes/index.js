import React, {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/index';
import CourseLayout from '../layouts/CourseLayout/index';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import LoadingScreen from '../components/LoadingScreen';
import {PATH_HOME} from './paths';
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
                    path: 'info/proxy-list',
                    element: <LinksCatalog/>,
                },
                {
                    path: 'over-period',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 3, 6, 7, 9]}>
                            <Finished all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: 'over-period-all',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 4, 5, 6, null]}>
                            <Finished all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'publication',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 3, 6, 7]}>
                            <Publication all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: 'publication-all',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 4, 5, 6, null]}>
                            <Publication all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'process',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 3, 6, 7, 9]}>
                            <Process all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                // Все
                {
                    path: 'process-all',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 4, 5, 6, null]}>
                            <Process all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'no-last-events',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 3, 9]}>
                            <NoLastEvents all='false'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'no-last-events-all',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 6, null]}>
                            <NoLastEvents all='true'/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'calendar',
                    element: <Calendar/>,
                },
                {
                    path: 'phonebook',
                    element: <Phonebook/>,
                },
                {
                    path: 'stats',
                    element: <Stats/>,
                },
                {
                    path: 'grade',
                    element: (
                        <RoleBasedGuard accessibleProfessions={[1, 2, 4, 5, 6, 8, null]}>
                            <Grade/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'faq',
                    element: <Faq/>,
                },
                {
                    path: 'faq/gas',
                    element: <Gas/>,
                },
                {
                    path: 'faq/gas/g-category',
                    element: <Category type='gcases'/>,
                },
                {
                    path: 'faq/gas/m-category',
                    element: <Category type='mcases'/>,
                },
                {
                    path: 'admin',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Admin/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'admin/users',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <UsersAdmin/>
                        </RoleBasedGuard>
                    ),
                }, {
                    path: 'admin/users/:id/view',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <UserView />
                        </RoleBasedGuard>
                    ),
                }, {
                    path: 'admin/users/:id/edit',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <UserEdit/>
                        </RoleBasedGuard>
                    ),
                }, {
                    path: 'admin/users/new',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <UserEdit/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'admin/workplaces',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Workplaces/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'settings',
                    element: <Settings/>,
                },
                {
                    path: 'profile',
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
                // Документация
                {
                    path: 'doc/components/colors',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Colors/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'doc/components/typography',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Typography/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'doc/components/shadows',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Shadows/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'doc/components/grid',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Grid/>
                        </RoleBasedGuard>
                    ),
                },
                {
                    path: 'doc/components/icons',
                    element: (
                        <RoleBasedGuard accessibleRoles={[1]}>
                            <Icons/>
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
                {path: '500', element: <Page500/>},
                {path: '404', element: <NotFound/>},
                {path: '*', element: <Navigate to='/404' replace/>},
            ],
        },
        {path: '*', element: <Navigate to='/404' replace/>},
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

const Admin = Loadable(lazy(() => import('../pages/Admin'))); // Админка дашбоард
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

// Компоненты
const Colors = Loadable(lazy(() => import('../pages/Documentation/Components/Colors')));
const Grid = Loadable(lazy(() => import('../pages/Documentation/Components/Grid')));
const Icons = Loadable(lazy(() => import('../pages/Documentation/Components/Icons')));
const Shadows = Loadable(lazy(() => import('../pages/Documentation/Components/Shadows')));
const Typography = Loadable(lazy(() => import('../pages/Documentation/Components/Typography')));
