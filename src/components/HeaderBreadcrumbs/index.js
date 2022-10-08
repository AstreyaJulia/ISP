import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

const HeaderBreadcrumbs = ({ pages, classname, header, children }) => {
  return (
    <div className={classname}>
      <nav className="sm:hidden" aria-label="Назад">
        <Link
          to={-1}
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          <svg className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
               height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Назад
        </Link>
      </nav>
      {header || children
        ? <div
          className={classNames("md:flex md:items-center", header ? "md:justify-between" : "md:justify-end")}>
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
      <nav className={classNames("mt-3 w-full hidden sm:flex")} aria-label="Навигация">
        <ol className="flex items-center space-x-3">
          <li>
            <div>
              <Link
                to="/home"
                className="text-gray-600 hover:text-gray-700"
                title="Главная"
              >
                <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" height="24px"
                     viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="sr-only" title="Главная">Главная</span>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" height="24px"
                     viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
                <Link
                  to={page.href}
                  className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
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
    </div>
  );
};

export default HeaderBreadcrumbs;