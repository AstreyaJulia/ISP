import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

/** Заголовок содержимого страницы, "хлебные крошки"
 * @param pages - объект для навигации:
 * {name: пункт навигации, href: ссылка на элемент, current: флаг текущей страницы (bool)}
 * @param classname - доп. класс/ы
 * @param header - заголовок
 * @param children - содержимое правой части заголовка (кнопки и т.д.)
 * @returns {JSX.Element}
 * @constructor
 */
const PageHeader = ({ pages, classname, header, children }) => {

  return (
    <div className={classname}>
      <nav className="sm:hidden" aria-label="Назад">
        <Link
          to={-1}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <svg className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

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
                <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     fill="currentColor">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <span className="sr-only" title="Главная">Главная</span>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
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
  );
};

export default PageHeader;