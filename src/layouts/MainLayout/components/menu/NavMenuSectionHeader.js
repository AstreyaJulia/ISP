import {MoreHorizontal} from "react-feather";
import React from "react";
import classnames from "classnames";

/** Заголовок группы меню сайдбара
 * @param item - элемент заголовка
 * @param menuCollapsed - состояние меню узкое/широкое
 * @returns {JSX.Element}
 * @constructor */
const NavMenuSectionHeader = ({item, menuCollapsed}) => {
    return (
        <div className={classnames("text-gray-400 text-xs font-medium uppercase tracking-wide my-3 flex", !menuCollapsed
            ? ""
            : "justify-center")}
             key={item.header}>
            {/* Если узкое, название скрывается */}
            {!menuCollapsed
                ? <span>{item.header}</span>
                : ""}
            {/* Если узкое, показывается значк из трех точек вместо заголовка */}
            {menuCollapsed
                ? <MoreHorizontal className="feather-more-horizontal"/>
                : ""}
        </div>
    );
};

export default NavMenuSectionHeader;
