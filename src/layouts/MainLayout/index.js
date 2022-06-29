import React, {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleChangeMenuCollapsed, handleMenuCollapsed, handleSkin} from "../../store/layout";
import ScrollToTop from "./components/scrolltop";
import classNames from "classnames";
import Sidebar from "./components/menu";
import NavBar from "./components/navbar";
import Skeleton from "react-loading-skeleton";
import {makeArrayFromObj} from "../../utils";
import {fetch, setAuthorization} from "../../utils/Helpers/api_helper";
import {fetchUserData} from "../../store/userData";
import {handleLogout} from "../../store/authentication";
import toast from "react-hot-toast";
import Toast, {toastStyles} from "../../components/ui/Toast";

/** Основная раскладка с меню и заголовком
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const MainLayout = (props) => {

    /** Пропсы */
    const {children} = props;

    /** Стейты */
    const [isMounted, setIsMounted] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState(false);

    /** Для серверной навигации */
    const [menuData, setMenuData] = useState([]);

    /** Переменные */
    const dispatch = useDispatch();
    const layoutStore = useSelector((state) => state.layout);

    const userdataStore = useSelector((state) => state.userData);
    const jwtdataStore = useSelector((state) => state["jwt"]);
    const loginData = userdataStore.userData;

    /** Состояние меню - узкое/широкое*/
    const menuCollapsed = layoutStore.menuCollapsed;

    /** Включает сворачивание меню */
    const setMenuCollapsed = (val) => dispatch(handleChangeMenuCollapsed(val));

    const navigate = useNavigate();

    useEffect(() => {
        /*setMenuData(navigation);*/
        /*setUserData(users[0]);*/

        /* Получаем данные вошедшего пользователя */
        if (localStorage.getItem("jwt") || jwtdataStore) {
            setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString() || jwtdataStore.replace(/['"]+/g, '').toString())
        }
        dispatch(fetchUserData())
            .then(res => {
                if (res.payload.id) {
                    let skin;
                    let sidebar;
                    if (JSON.stringify(res.payload.theme) === "0") {
                        skin = "dark"
                    } else if (JSON.stringify(res.payload.theme) === "1") {
                        skin = "light"
                    }
                    if (JSON.stringify(res.payload.sidebar) === "0") {
                        sidebar = false
                    } else if (JSON.stringify(res.payload.sidebar) === "1") {
                        sidebar = true
                    }
                    dispatch(handleSkin(skin))
                    dispatch(handleMenuCollapsed(sidebar))
                    /* Для серверной навигации - боковое меню */
                    if (localStorage.getItem("jwt")) {
                        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
                    }
                    fetch.get("/sidebar", "")
                        .then(response => {
                            if (response.data || response.data !== []) {
                                setMenuData(makeArrayFromObj(response.data))
                            }
                        })
                        .catch(err =>
                            toast(t => <Toast t={t} message={err} type="error"/>, {className: toastStyles})
                        )
                }
            })
            .catch(err => {
                /* Показываем всплывашку с ошибкой */
                //toast(t => <Toast t={t} message={err} type="error"/>, {className: toastStyles})
                /** Если получили ошибку 401 - токен невалиден, выкидваем на страницу входа */
                if (err === "Request failed with status code 401") {
                    dispatch(handleLogout());
                    navigate("/auth")
                }
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    /** ComponentDidMount */
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (<>
        <div className="h-full">
            {/* Сайдбар меню */}
            {menuData !== [] ? <Sidebar
                menuVisibility={menuVisibility}
                menuData={menuData}
                setMenuVisibility={setMenuVisibility}
                menuCollapsed={menuCollapsed}
                setMenuCollapsed={setMenuCollapsed}
            /> : <Skeleton count="5"
                           className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"/>}

            <div
                className={classNames(menuCollapsed ? "lg:pl-20 pl-0" : "lg:pl-64", "h-screen")}
            >
                {/* Заголовок */}
                <NavBar
                    user={loginData}
                    menuCollapsed={menuCollapsed}
                    setMenuVisibility={setMenuVisibility}
                    setMenuCollapsed={setMenuCollapsed}
                />

                {/* Основное содержимое */}
                <div
                    className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "main-content animate__fadeIn left-0 text-gray-900 dark:text-gray-200 fixed top-16 right-0 bottom-0 overflow-hidden")}
                >
                    {/* Содержимое страницы */}
                    <Outlet/>
                    {children}
                </div>
            </div>
            {/* Кнопка назад наверх */}
            <ScrollToTop showOffset={300}/>
        </div>
    </>);
};

export default MainLayout;
