import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./header";
import { classNames } from "../../utils/classNames";
import useAuth from "../../hooks/useAuth";

const Layout = ({setMenuVisibility}) => {

  const { sidebar } = useAuth();

  return (
    <div
      className={classNames(sidebar === 0 ? "lg:pl-20 pl-0" : "lg:pl-64", "h-screen")}
    >
      {/* Заголовок */}
      <Header
        setMenuVisibility={setMenuVisibility}
      />

      {/* Основное содержимое */}
      <div
        className={classNames(sidebar === 0 ? "lg:left-20" : "lg:left-64", "main-content animate__fadeIn left-0 text-gray-900 dark:text-gray-200 fixed top-16 right-0 bottom-0 overflow-hidden py-7")}
      >
        {/* Содержимое страницы */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;