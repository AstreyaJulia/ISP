import PropTypes from 'prop-types';
import { createContext , useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { defaultSettings } from '../config';

/** Начальные значения настроек
 * @type {{menuCollapsed: boolean, onChangeSkin: initialState.onChangeSkin, skin: string, onChangeMenuCollapsed: initialState.onChangeMenuCollapsed}}
 */
const initialState = {
  ...defaultSettings,
  onChangeSkin: () => {},
  onChangeMenuCollapsed: () => {},
};

/** Контекст настроек
 * @type {React.Context<{menuCollapsed: boolean, onChangeSkin: onChangeSkin, skin: string, onChangeMenuCollapsed: onChangeMenuCollapsed}>}
 */
const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    skin: initialState.skin
  });

  /** Установка класса темы для body при монтировании */
  useEffect(() => {
    /** Получаем тег body */
    const element = window.document.body;

    /** Названия классов для тем */
    const classNames = {
      dark: "dark",
      light: "light"
    }

    /** Удаляем классы тем при монтировании */
    element.classList.remove("dark", "light");

    /** Если тема не светлая, добавляем класс темы из store */
    element.classList.add(classNames[settings.skin])
  }, [settings.skin]);

  /** Смена темы
   * @param event
   */
  const onChangeSkin = (event) => {
    console.log(settings)
    setSettings({
      ...settings,
      skin: event.target.value,
    });
  };

  /** Смена ширины меню
   * @param event
   */
  const onChangeMenuCollapsed = (event) => {
    setSettings({
      ...settings,
      menuCollapsed: event.target.value,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeSkin,
        onChangeMenuCollapsed
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
