import React, {Fragment, lazy} from "react";
import {Navigate} from "react-router-dom";
import LayoutWrapper from "../layouts/layout-wrapper";

/** Раскладки */
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";

/** Роутинг */
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {isObjEmpty} from "../utils";

const getLayout = {
    blank: <BlankLayout/>,
    main: <MainLayout/>
}

/** Дефолтный роут */
const DefaultRoute = () => {
    const user = localStorage.getItem("jwt");
    if (user) {
        return "/home"
    } else {
        return "/auth"
    }
};

/** Импорт страниц */
const Home = lazy(() => import("../pages/Home"));
const MyInfo = lazy(() => import("../pages/MyInfo"));
const MyInfoEdit = lazy(() => import("../pages/MyInfoEdit"));
const Staff = lazy(() => import("../pages/Staff"));
const Admin = lazy(() => import("../pages/Admin"));
const Faq = lazy(() => import("../pages/Faq"));
const Grade = lazy(() => import("../pages/Grade"));
const Phonebook = lazy(() => import("../pages/Phonebook"));
const Proxylist = lazy(() => import("../pages/Proxylist"));
const Stat = lazy(() => import("../pages/Stat"));
const Test = lazy(() => import("../pages/Test"));
const Calendar = lazy(() => import("../pages/apps/Calendar"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Error404 = lazy(() => import("../pages/misc/Error404"));

/** Сборка роутов
 * FIXME добавлять роуты сюда
 * */
const Routes = [
    {
        path: "/",
        index: true,
        element: <Navigate replace to={DefaultRoute()}/>
    },
    {
        path: "/home",
        element: <Home/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/admin",
        element: <Admin/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/faq",
        element: <Faq/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/grade",
        element: <Grade/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/phonebook",
        element: <Phonebook/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/proxylist",
        element: <Proxylist/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/stats",
        element: <Stat/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/test",
        element: <Test/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/staff",
        element: <Staff/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/myprofile",
        element: <MyInfo/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/myprofile/edit",
        element: <MyInfoEdit/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/calendar",
        element: <Calendar/>,
        meta: {
            publicRoute: false
        }
    },
    {
        path: "/auth",
        element: <Login/>,
        meta: {
            layout: "blank",
            publicRoute: true,
            restricted: true
        }
    },
    {
        path: "/reg",
        element: <Register/>,
        meta: {
            layout: "blank",
            publicRoute: true,
            restricted: true
        }
    },
    {
        path: "*",
        element: <Error404/>,
        children: [{path: "*", element: <Error404/>}],
        meta: {
            publicRoute: false
        }
    }
]

const getRouteMeta = route => {
    if (isObjEmpty(route.element.props)) {
        if (route.meta) {
            return {routeMeta: route.meta};
        } else {
            return {};
        }
    }
};

/** Возвращает отфильтрованный объект роутов и путей */
const MergeLayoutRoutes = (layout, defaultLayout) => {
    const LayoutRoutes = [];

    if (Routes) {
        Routes.filter(route => {
            let isBlank = false;
            /** Проверяет, раскладку роута или дефолтную раскладку на соответствие текущей раскладки */
            if (
                (route.meta && route.meta.layout && route.meta.layout === layout) ||
                ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
            ) {
                let RouteTag = PublicRoute;

                /** Проверяет, приватный или общий роут */
                if (route.meta) {
                    route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false)
                    RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute
                }

                if (route.element) {
                    const Wrapper =
                        // eslint-disable-next-line multiline-ternary
                        isObjEmpty(route.element.props) && isBlank === false
                            ? // eslint-disable-next-line multiline-ternary
                            LayoutWrapper
                            : Fragment;

                    route.element = (
                        <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                            <RouteTag route={route}>{route.element}</RouteTag>
                        </Wrapper>
                    )
                }

                /** Запись роута в LayoutRoutes */
                LayoutRoutes.push(route);
            }
            return LayoutRoutes;
        })
    }
    return LayoutRoutes;
};

const getRoutes = layout => {
    const defaultLayout = layout || "main";
    const layouts = ["main", "blank"];

    const AllRoutes = [];

    layouts.forEach(layoutItem => {
        const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

        AllRoutes.push({
            path: "/",
            element: getLayout[layoutItem] || getLayout[defaultLayout],
            children: LayoutRoutes
        })
    })
    return AllRoutes;
}

export {DefaultRoute, Routes, getRoutes};
