import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/index";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import LoadingScreen from "../components/LoadingScreen";
import { PATH_HOME } from "./paths";
import RoleBasedGuard from "../guards/RoleBasedGuard";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default function Router() {
  return useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={PATH_HOME} />
    },
    // Вход, регистрация
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> }
      ]
    },

    // Основное
    {
      path: "home",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "over-period", element: <Finished /> }
      ]
    },

    // Каталог ссылок
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        /* FIXME сюда добавлять другие роуты */
        {
          path: "info/proxy-list",
          element: <LinksCatalog />
        },
        {
          path: "over-period",
          element: <Finished />
        },
        {
          path: "publication",
          element: <Publication />
        },
        {
          path: "process",
          element: <Process />
        },
        {
          path: "calendar",
          element: <Calendar />
        },
        {
          path: "phonebook",
          element: <Phonebook />
        },
        {
          path: "stats",
          element: <Stats />
        },
        {
          path: "grade",
          element: <Grade />
        },
        {
          path: "faq",
          element: <Faq />
        },
        {
          path: "admin",
          element:
            <RoleBasedGuard accessibleRoles={[1]}>
              <Admin />
            </RoleBasedGuard>
        },
        {
          path: "settings",
          element: <Settings />
        },
        {
          path: "profile",
          element: <Profile />
        },

        {
          path: "test",
          element:
            <RoleBasedGuard accessibleRoles={[1]}>
              <Test />
            </RoleBasedGuard>
        }

      ]
    },

    // Ошибки
    {
      path: "*",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);
}

// Основные страницы
const Home = Loadable(lazy(() => import("../pages/Home"))); // Главная
const LinksCatalog = Loadable(lazy(() => import("../pages/LinksCatalog"))); // Каталог ссылок
const Finished = Loadable(lazy(() => import("../pages/cases/Finished"))); // Оконченные дела
const Publication = Loadable(lazy(() => import("../pages/Publication"))); // Контроль публикации СА
const Process = Loadable(lazy(() => import("../pages/Process"))); // Каталог ссылок
const Calendar = Loadable(lazy(() => import("../pages/Calendar"))); // Дела в производстве
const Phonebook = Loadable(lazy(() => import("../pages/Phonebook"))); // Телефонный справочник
const Stats = Loadable(lazy(() => import("../pages/Stats"))); // Каталог ссылок
const Grade = Loadable(lazy(() => import("../pages/Grade"))); // Графики
const Faq = Loadable(lazy(() => import("../pages/Faq"))); // База знаний
const Admin = Loadable(lazy(() => import("../pages/Admin"))); // Админка

const Profile = Loadable(lazy(() => import("../pages/Profile"))); // Профиль
const Settings = Loadable(lazy(() => import("../pages/Settings"))); // Настройки
// Вход, регистрация
const Login = Loadable(lazy(() => import("../pages/auth/Login"))); // Вход
const Register = Loadable(lazy(() => import("../pages/auth/Register"))); // Регистрация
// Ошибки
const Page500 = Loadable(lazy(() => import("../pages/errors/Page500"))); // Ошибка сервера
const NotFound = Loadable(lazy(() => import("../pages/errors/Page404"))); // Страница не найдена
// Тестирование
const Test = Loadable(lazy(() => import("../pages/Test")));
