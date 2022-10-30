import { MoreHorizontal } from 'react-feather';
import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../utils/classNames';

/** Заголовок группы меню сайдбара
 * @param item - элемент заголовка
 * @param menuCollapsed - состояние меню узкое/широкое
 * @returns {JSX.Element}
 * @constructor */
const MenuSectionHeader = ({ item, sidebar }) => (
  <span
    className={classNames(
      'text-gray-400 dark:text-gray-600 text-xs font-bold uppercase tracking-wide mb-3 mt-7 flex',
      sidebar?.toString() === '1' ? '' : 'justify-center'
    )}
    key={item.header}
  >
    {/* Если узкое, название скрывается
     Если узкое, показывается значок из трех точек вместо заголовка */}
    {sidebar?.toString() === '1' ? item.header : <MoreHorizontal className="feather-more-horizontal" />}
  </span>
);
MenuSectionHeader.propTypes = {
  item: PropTypes.object.isRequired,
  sidebar: PropTypes.number.isRequired,
};

export default MenuSectionHeader;
