import React, { lazy, Suspense } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/index";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
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

    // Main Routes
    {
      path: "home",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "", element: <Home /> },
      ]
    },

    // General Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);
}

// Auth
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));

// Home
const Home = Loadable(lazy(() => import("../pages/Home")));

// General
const Page500 = Loadable(lazy(() => import("../pages/errors/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/errors/Page404")));
