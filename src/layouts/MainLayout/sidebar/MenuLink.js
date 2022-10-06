import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import React, {useEffect, useState} from "react";

const MenuLink = ({item, menuCollapsed}) => {
  /** Текущий элемент меню */
  const [activeItem, setActiveItem] = useState(null)

  /** Текущее местоположение в адресной строке
   * @type {Location<LocationState>}
   */
  const location = useLocation();
  const currentURL = useLocation().pathname;

  useEffect(() => {
    setActiveItem(currentURL)
    // eslint-disable-next-line
  }, [location])

  return (
    <div
      key={item.id}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        to={item.alias}
        className={classNames(item.alias === activeItem || `/${  item.alias}` === activeItem
            ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex"
            : "flex text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700",
          "group flex items-center py-2 text-base leading-6 rounded-lg",
          menuCollapsed
            ? "justify-center"
            : "px-2"
        )}

        aria-current={
          activeItem ? "page" : undefined
        }
        onClick={(e) => {
          if (
            item.alias.length === 0 ||
            item.alias === "#" ||
            item.disabled === true
          ) {
            e.preventDefault();
          }
        }}
      >
        {/** Значок элемента, если меню узкое, отступ убирается */}
        <i className={classNames(
          menuCollapsed
            ? ""
            : "mr-3",
          "flex-shrink-0 flex items-center text-2xl mdi relative text-gray-500",
          item.icon)
        }
        >
          {item.badgeColor
            ? (
              <span className={classNames(
                "absolute top-0.5 right-0 inline-flex items-center w-2 h-2 rounded-full text-xs font-medium",
                item.badgeColor,
                menuCollapsed
                  ? ""
                  : "ml-auto"
              )
              } />
            )
            : null
          }
        </i>
        {/** Название элемента меню, если меню узкое, не отрисовывается */}
        {!menuCollapsed
          ? <span className="text-gray-800 dark:text-gray-300 text-sm">{item.pagetitle}</span>
          : ""}
        {/** Отрисовка бейджа для меню */}

      </Link>
    </div>
  );
};

export default MenuLink;
