import NavMenuLink from "./NavMenuLink";
import NavMenuGroup from "./NavMenuGroup";
import NavMenuSectionHeader from "./NavMenuSectionHeader";
import React from "react";

/** Возвращает заголовок, если указан header, группу, если children, иначе ссылку
 * @param item - элемент
 * @returns {string}
 */
export const resolveNavItemComponent = (item) => {
    if (item.header) return "NavMenuSectionHeader";
    if (item.children) return "NavMenuGroup";
    return "NavMenuLink";
};

const MenuNavItems = (props) => {

    /** Объект компонентов
     * @type {{NavMenuSectionHeader: (function({item: *, menuCollapsed?: *}): JSX.Element), NavMenuLink: (function({item: *, menuCollapsed?: *}): JSX.Element), NavMenuGroup: (function({item?: *, groupOpen: *, activeItem: *, parentItem?: *, groupActive?: *, setGroupOpen: *, menuCollapsed?: *, setGroupActive: *, currentActiveGroup: *, setCurrentActiveGroup: *, [p: string]: *}): JSX.Element)}}
     */
    const Components = {
        NavMenuLink: NavMenuLink,
        NavMenuGroup: NavMenuGroup,
        NavMenuSectionHeader: NavMenuSectionHeader,
    };

    /** Рендер элементов меню */
    return props.items.map((item, index) => {
        const TagName = Components[resolveNavItemComponent(item)];
        if (item.children) {
            return (
                <TagName key={item.id || item.header} item={item} index={index}
                         menuCollapsed={props.menuCollapsed} {...props} />
            );
        }
        return <TagName key={item.id || item.header} item={item} menuCollapsed={props.menuCollapsed} {...props} />;
    });
};

export default MenuNavItems;
