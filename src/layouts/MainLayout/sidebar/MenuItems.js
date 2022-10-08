import React from "react";
import MenuLink from "./MenuLink";
import MenuGroup from "./MenuGroup";
import MenuSectionHeader from "./MenuSectionHeader";

/** Возвращает заголовок, если указан header, группу, если children, иначе ссылку
 * @param item - элемент
 * @returns {string}
 */
export const resolveNavItemComponent = (item) => {
  if (item.header) return "MenuSectionHeader";
  if (item.children) return "MenuGroup";
  return "MenuLink";
};

const MenuItems = (props) => {

  /** Объект компонентов
   * @type {{MenuLink: ((function({item: *, menuCollapsed: *}): *)|*), MenuSectionHeader: ((function({item: *, menuCollapsed: *}): JSX.Element)|*), MenuGroup: ((function({item: *, groupOpen: *, activeItem: *, parentItem: *, groupActive: *, setGroupOpen: *, menuCollapsed: *, setGroupActive: *, currentActiveGroup: *, setCurrentActiveGroup: *, [p: string]: *}): *)|*)}}
   */
  const Components = {
    MenuLink,
    MenuGroup,
    MenuSectionHeader,
  };

  /** Рендер элементов меню */
  return props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)];
    if (item.children) {
      return (
        <TagName key={item.id || item.header} item={item} index={index}
                 sidebar={props.sidebar} {...props} />
      );
    }
    return <TagName key={item.id || item.header} item={item} sidebar={props.sidebar} {...props} />;
  });
};

export default MenuItems;
