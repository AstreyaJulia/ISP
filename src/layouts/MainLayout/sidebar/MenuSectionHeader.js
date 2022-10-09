import {MoreHorizontal} from "react-feather";
import React from "react";
import { classNames } from "../../../utils/classNames";

/** Заголовок группы меню сайдбара
 * @param item - элемент заголовка
 * @param menuCollapsed - состояние меню узкое/широкое
 * @returns {JSX.Element}
 * @constructor */
const MenuSectionHeader = ({item, sidebar}) => (
    <div className={classNames("text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wide m-3 flex", sidebar?.toString() === '1'
      ? ""
      : "justify-center")}
         key={item.header}>
      {/* Если узкое, название скрывается */}
      {sidebar?.toString() === '1'
        ? <span>{item.header}</span>
        : ""}
      {/* Если узкое, показывается значок из трех точек вместо заголовка */}
      {sidebar?.toString() === '0'
        ? <MoreHorizontal className="feather-more-horizontal"/>
        : ""}
    </div>
  );

export default MenuSectionHeader;
