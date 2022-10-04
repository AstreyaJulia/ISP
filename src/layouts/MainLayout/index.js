import React, {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ScrollToTop from "./scrolltop";
import Sidebar from "./sidebar";
import Header from "./header";
import useSettings from "../../hooks/useSettings";
import { navigation } from "../../@mock/SampleData";
import { classNames } from "../../utils/classNames";

/** Основная раскладка с меню и заголовком
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const MainLayout = (props) => {

  const { skin, menuCollapsed, onChangeSkin, onChangeMenuCollapsed } = useSettings();

  /** Пропсы */
  const {children} = props;

  /** Стейты */
  const [isMounted, setIsMounted] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  /** Для серверной навигации */
  const [menuData, setMenuData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setMenuData(navigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        setMenuCollapsed={onChangeMenuCollapsed}
      /> : <Skeleton count="5"
                     className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"/>}

      <div
        className={classNames(menuCollapsed ? "lg:pl-20 pl-0" : "lg:pl-64", "h-screen")}
      >
        {/* Заголовок */}
        <Header
          user={}
          menuCollapsed={menuCollapsed}
          setMenuVisibility={setMenuVisibility}
          setMenuCollapsed={onChangeMenuCollapsed}
          skin={skin}
          changeSkin={onChangeSkin}
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
