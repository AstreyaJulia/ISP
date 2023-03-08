import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import { makeArrayFromObj } from '../../../utils/makeArrayFromObj';
import { classNames } from '../../../utils/classNames';

/** Проверяет, есть ли у потомков элемента текущий url
 * @param item - элемент
 * @param currentUrl - текущий url
 * @returns {boolean}
 */
export const hasActiveChild = (item, currentUrl) => {
  const { children } = item;

  if (!children) {
    return false;
  }
  // eslint-disable-next-line
  for (const child of makeArrayFromObj(children)) {
    if (child.children) {
      if (hasActiveChild(child, currentUrl)) {
        return true;
      }
    }

    /** Проверяет, если ли у потомка ссылка, и активна ли она */
    if (child && child.alias && currentUrl && (child.alias === currentUrl || currentUrl.includes(child.alias))) {
      return true;
    }
  }
  return false;
};

/** Проверяет, является ли элемент потомком
 * заданного элемента
 * @param children - потомок
 * @param openGroup - группа
 * @param currentActiveGroup - текущая активная группа
 */
export const removeChildren = (children, openGroup, currentActiveGroup) => {
  makeArrayFromObj(children).forEach((child) => {
    if (!currentActiveGroup.includes(child.id)) {
      const index = openGroup.indexOf(child.id);
      if (index > -1) openGroup.splice(index, 1);
      if (child.children) removeChildren(child.children, openGroup, currentActiveGroup);
    }
  });
};

const MenuGroup = ({
  item,
  groupOpen,
  activeItem,
  parentItem,
  groupActive,
  setGroupOpen,
  sidebar,
  setGroupActive,
  currentActiveGroup,
  setCurrentActiveGroup,
  ...rest
}) => {
  const location = useLocation();
  const currentURL = useLocation().pathname;

  /** Переключает открытие группы
   * @param item - элемент
   * @param parent - родитель
   */
  const toggleOpenGroup = (item, parent) => {
    let openGroup = groupOpen;
    const activeGroup = groupActive;

    /** Если группа открыта и нажата, закрыть группу */
    if (openGroup.includes(item.id)) {
      openGroup.splice(openGroup.indexOf(item.id), 1);

      /** Если у нажатой группы есть открытые потомки, удалить их, чтобы закрыть группу */
      if (item.children) {
        removeChildren(item.children, openGroup, groupActive);
      }
    } else if (activeGroup.includes(item.id) || currentActiveGroup.includes(item.id)) {
      /** Если нажатая группа активна */

      /** Если активная группа закрыта и нажата снова, нужно открыть активную группу, иначе закрыть активную группу */
      if (!activeGroup.includes(item.id) && currentActiveGroup.includes(item.id)) {
        activeGroup.push(item.id);
      } else {
        activeGroup.splice(activeGroup.indexOf(item.id), 1);
      }

      /** Обновить активную группу */
      setGroupActive([...activeGroup]);
    } else if (parent) {
      /** Если нажатая группа - потомок открытой группы, вначале удалить все открытые группы в этом родителе */
      if (parent.children) {
        removeChildren(parent.children, openGroup, groupActive);
      }

      /** После удаления всех открытых групп под этим родителем, добавить нажатую группу в массив открытых групп */
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id);
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch

      // ** Empty Open Group array
      openGroup = [];

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id);
      }
    }
    setGroupOpen([...openGroup]);
  };

  /** Клик на группу */
  const onCollapseClick = (e, item) => {
    toggleOpenGroup(item, parentItem);
    e.preventDefault();
  };

  /** Проверяет url и обновляет активный элемент */
  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.id)) groupActive.push(item.id);
    } else {
      const index = groupActive.indexOf(item.id);
      if (index > -1) groupActive.splice(index, 1);
    }
    setGroupActive([...groupActive]);
    setCurrentActiveGroup([...groupActive]);
    setGroupOpen([]);
    // eslint-disable-next-line
  }, [location]);

  /** Возвращает состояние открытой группы */
  const openClassCondition = (id) => {
    if (sidebar || sidebar?.toString() === '0') {
      if (groupActive.includes(id) || groupOpen.includes(id)) {
        return true;
      }
      // eslint-disable-next-line
    } else if (groupActive.includes(id) && sidebar) {
      return false;
    }
    return null;
  };

  return (
    <div key={item.id} className="my-3 w-full">
      <>
        <div className="w-full">
          <a
            href="#"
            title={sidebar?.toString() === '0' ? item.pagetitle : null}
            className={classNames(
              openClassCondition(item.id),
              groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
                ? 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex'
                : 'flex text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700',
              'group flex items-center py-3 text-base leading-6 rounded-md  w-full hover:cursor-pointer',
              sidebar?.toString() === '0' ? 'justify-end' : 'px-2 justify-between'
            )}
            aria-current={
              groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
                ? 'page'
                : undefined
            }
            onClick={(e) => onCollapseClick(e, item)}
          >
            <div className="flex items-center truncate mr-1">
              <span
                className={classNames(
                  sidebar?.toString() === '0' ? '' : 'mr-3',
                  'flex-shrink-0 flex items-center text-2xl text-gray-500'
                )}
              >
                {item.icon}
              </span>
              {sidebar?.toString() === '1' ? (
                <span className="text-gray-600 dark:text-gray-400 truncate text-sm font-medium">{item.pagetitle}</span>
              ) : (
                ''
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classNames(
                groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
                  ? 'text-gray-500 rotate-90'
                  : 'text-gray-500',
                sidebar?.toString() === '0' ? 'w-3' : 'w-5',
                'flex-shrink-0 h-4 transform group-hover:text-gray-500 transition-colors ease-in-out duration-150'
              )}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div
          className={classNames(
            groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
              ? 'pb-3'
              : '',
            'my-1',
            sidebar?.toString() === '0' ? '' : 'px-2'
          )}
        >
          {groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id) ? (
            <MenuItems
              {...rest}
              items={makeArrayFromObj(item.children)}
              groupActive={groupActive}
              setGroupActive={setGroupActive}
              currentActiveGroup={currentActiveGroup}
              setCurrentActiveGroup={setCurrentActiveGroup}
              groupOpen={groupOpen}
              setGroupOpen={setGroupOpen}
              parentItem={item}
              sidebar={sidebar}
              activeItem={activeItem}
            />
          ) : (
            ''
          )}
        </div>
      </>
    </div>
  );
};

MenuGroup.propTypes = {
  item: PropTypes.object.isRequired,
  groupOpen: PropTypes.array.isRequired,
  activeItem: PropTypes.object,
  parentItem: PropTypes.object,
  groupActive: PropTypes.array.isRequired,
  setGroupOpen: PropTypes.func.isRequired,
  sidebar: PropTypes.number.isRequired,
  setGroupActive: PropTypes.func,
  currentActiveGroup: PropTypes.array.isRequired,
  setCurrentActiveGroup: PropTypes.func.isRequired,
};

export default MenuGroup;
