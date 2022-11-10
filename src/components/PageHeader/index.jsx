import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';
import Typography from "../Typography";

/** Заголовок содержимого страницы, "хлебные крошки"
 * @param pages - объект для навигации:
 * {name: пункт навигации, href: ссылка на элемент, current: флаг текущей страницы (bool)}
 * @param classname - доп. класс/ы
 * @param header - заголовок
 * @param children - содержимое правой части заголовка (кнопки и т.д.)
 * @returns {JSX.Element}
 * @constructor
 */
const PageHeader = ({ pages, classname, header, children }) => (
  <div className={classname}>
    <nav className="sm:hidden mb-4" aria-label="Назад">
      <Link to={-1} className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 p-2">
        <svg
          className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Назад
      </Link>
    </nav>
    {header || children ? (
      <div className={classNames('md:flex md:items-center', header ? 'md:justify-between' : 'md:justify-end')}>
        {header ? (
          <div className="flex-1 min-w-0">
            <Typography variant='h4'>{header}</Typography>
          </div>
        ) : (
          ''
        )}
        <div className="mt-5 justify-end flex-shrink-0 flex md:mt-0 md:ml-4">{children}</div>
      </div>
    ) : (
      ''
    )}
    <nav className={classNames('mt-2 w-full hidden sm:flex')} aria-label="Навигация">
      <ol className="flex items-center space-x-2">
        <li>
          <div>
            <Link to="/home" className="text-sm font-medium text-gray-500 hover:text-gray-700" title="Главная">
              <span title="Главная">Главная</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <span className="mx-2 text-sm font-medium text-gray-300 hover:text-gray-900">/</span>
              <Link
                to={page.href}
                className={classNames(
                  'ml-2 text-sm font-medium ',
                  page.current ? 'text-indigo-500 hover:text-indigo-700' : 'text-gray-500 hover:text-gray-700'
                )}
                aria-current={page.current ? 'page' : undefined}
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

PageHeader.propTypes = {
  pages: PropTypes.array,
  classname: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;
