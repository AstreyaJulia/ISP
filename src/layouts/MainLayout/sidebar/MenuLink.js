import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../utils/classNames';
import Badge from '../../../components/Badge';

const MenuLink = ({ item, sidebar }) => {
  /** Текущий элемент меню */
  const [activeItem, setActiveItem] = useState(null);

  /** Текущее местоположение в адресной строке */
  const location = useLocation();
  const currentURL = useLocation().pathname;

  useEffect(() => {
    setActiveItem(currentURL);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div key={item.id} className="my-3">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        to={item.alias}
        title={sidebar?.toString() === '0' ? item.pagetitle : null}
        className={classNames(
          item.alias === activeItem || `/${item.alias}` === activeItem
            ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 flex'
            : 'flex text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700',
          'menu-item flex items-center py-3 text-base leading-6 rounded-lg font-medium',
          sidebar?.toString() === '0' ? 'justify-center' : 'px-2'
        )}
        aria-current={activeItem ? 'page' : undefined}
        onClick={(e) => {
          if (item.alias.length === 0 || !item.alias || item.disabled === true) {
            e.preventDefault();
          }
        }}
      >
        {/** Значок элемента, если меню узкое, отступ убирается */}
        <span
          className={classNames(
            sidebar?.toString() === '0' ? '' : 'mr-3',
            'flex-shrink-0 flex items-center text-2xl relative',
              item.alias === activeItem || `/${item.alias}` === activeItem
                  ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-500'
          )}
        >
          {item.icon}
          {item.badgeColor && sidebar?.toString() === '0' ? (
            <span
              className={classNames(
                'absolute top-0.5 right-0 inline-flex items-center w-2 h-2 rounded-full text-xs font-medium bg-red-400',
                sidebar?.toString() === '0' ? '' : 'ml-auto'
              )}
            />
          ) : null}
        </span>
        {/** Название элемента меню, если меню узкое, не отрисовывается */}
        {sidebar?.toString() === '1' ? <span className="text-sm font-medium">{item.pagetitle}</span> : ''}
        {/** Отрисовка бейджа для меню */}
        {item.badgeColor && sidebar?.toString() === '1' ? (
          <Badge
            size="small"
            shape="rounded"
            color={item.badgeColor || 'red'}
            item={item.badgeText}
            className={sidebar?.toString() === '0' ? '' : 'ml-auto'}
          />
        ) : null}
      </Link>
    </div>
  );
};

MenuLink.propTypes = {
  item: PropTypes.object.isRequired,
  sidebar: PropTypes.number.isRequired,
};

export default MenuLink;
