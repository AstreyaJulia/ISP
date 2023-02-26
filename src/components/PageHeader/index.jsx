import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';
import Typography from '../Typography';
import { PATH_HOME } from '../../routes/paths';

/** Заголовок содержимого страницы, "хлебные крошки"
 * @param pages - объект для навигации:
 * {name: пункт навигации, href: ссылка на элемент, current: флаг текущей страницы (bool)}
 * @param classname - доп. класс/ы
 * @param header - заголовок
 * @param children - содержимое правой части заголовка (кнопки и т.д.)
 * @returns {JSX.Element}
 * @constructor
 */
const PageHeader = ({ classname, header, children, backLinkTitle, backLinkUrl }) => (
  <div className={classNames('flex flex-col gap-2 mb-6', classname)}>
    <nav className="w-full sm:flex" aria-label={backLinkTitle || "Назад"}>
      <Link to={backLinkUrl || -1} className="flex items-center text-base font-medium text-neutral-600 dark:text-neutral-300">
        <svg
          className="flex-shrink-0 -ml-1 mr-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        {backLinkTitle || 'Назад'}
      </Link>
    </nav>
    {header || children ? (
      <div className={classNames('md:flex md:items-center', header ? 'md:justify-between' : 'md:justify-end')}>
        {header ? (
          <div className="flex-1 min-w-0">
            <Typography variant="h3">{header}</Typography>
          </div>
        ) : (
          ''
        )}
        <div className="mt-5 justify-end flex-shrink-0 flex md:mt-0 md:ml-4">{children}</div>
      </div>
    ) : (
      ''
    )}
  </div>
);

PageHeader.propTypes = {
  pages: PropTypes.array,
  classname: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;
