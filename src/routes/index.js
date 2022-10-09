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
        { path: "", element: <Home /> }
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
        { path: "info/proxy-list", element: <LinksCatalog /> },

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
// Каталог ссылок
const LinksCatalog = Loadable(lazy(() => import("../pages/LinksCatalog"))); // Каталог ссылок

// Вход, регистрация
const Login = Loadable(lazy(() => import("../pages/auth/Login"))); // Вход
const Register = Loadable(lazy(() => import("../pages/auth/Register"))); // Регистрация
// Ошибки
const Page500 = Loadable(lazy(() => import("../pages/errors/Page500"))); // Ошибка сервера
const NotFound = Loadable(lazy(() => import("../pages/errors/Page404"))); // Страница не найдена
