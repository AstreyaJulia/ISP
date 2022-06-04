import React from "react";
import {ChevronLeftIcon, ChevronRightIcon, HomeIcon} from "@heroicons/react/solid";
import {Link} from "react-router-dom";
import classNames from "classnames";

/** Заголовок содержимого страницы, "хлебные крошки"
 * @param pages - объект для навигации:
 * {name: пункт навигации, href: ссылка на элемент, current: флаг текущей страницы (bool)}
 * @param classname - доп. класс/ы
 * @param header - заголовок
 * @param children - содержимое правой части заголовка (кнопки и т.д.)
 * @returns {JSX.Element}
 * @constructor
 */
const PageHeader = ({pages, classname, header, children}) => {

    return (
        <div className={classname}>
            <nav className="sm:hidden" aria-label="Назад">
                <Link
                    to={-1}
                    className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                    <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"/>
                    Назад
                </Link>
            </nav>
            <nav className={classNames("w-full hidden sm:flex")} aria-label="Навигация">
                <ol className="flex items-center space-x-4">
                    <li>
                        <div>
                            <Link
                                to="/home"
                                className="text-gray-400 hover:text-gray-500"
                                title="Главная"
                            >
                                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true"/>
                                <span className="sr-only" title="Главная">Главная</span>
                            </Link>
                        </div>
                    </li>
                    {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                <Link
                                    to={page.href}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={
                                        page.current
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {page.name}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
            {header || children
                ? <div
                    className={classNames("mt-2 md:flex md:items-center", header ? "md:justify-between" : "md:justify-end")}>
                    {header
                        ? <div className="flex-1 min-w-0">
                            <h2 className="text-xl font-bold leading-7 text-gray-700 dark:text-gray-200 sm:text-2xl sm:truncate">
                                {header}
                            </h2>
                        </div>
                        : ""}
                    <div className="mt-4 justify-end flex-shrink-0 flex md:mt-0 md:ml-4">
                        {children}
                    </div>
                </div>
                : ""}
        </div>
    )
};

export default PageHeader;