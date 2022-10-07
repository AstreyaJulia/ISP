import PropTypes from "prop-types";
import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultSettings } from "../config";
import axios from "../utils/axios";

/** Начальные значения настроек
 * @type {{menuCollapsed: boolean, onChangeSkin: initialState.onChangeSkin, skin: string, onChangeMenuCollapsed: initialState.onChangeMenuCollapsed}}
 */
const initialState = {
  ...defaultSettings,
  onChangeSkin: () => {
  },
  onChangeMenuCollapsed: () => {
  }
};

/** Контекст настроек
 * @type {React.Context<{menuCollapsed: boolean, onChangeSkin: onChangeSkin, skin: string, onChangeMenuCollapsed: onChangeMenuCollapsed}>}
 */
const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    skin: initialState.skin,
    menuCollapsed: initialState.menuCollapsed
  });

  /** Установка класса темы для body при монтировании */
  useEffect(() => {
    /** Получаем тег body */
    const element = window.document.body;

    /** Названия классов для тем */
    const classNames = {
      dark: "dark",
      light: "light"
    };

    /** Удаляем классы тем при монтировании */
    element.classList.remove("dark", "light");

    /** Если тема не светлая, добавляем класс темы из store */
    element.classList.add(classNames[settings.skin]);
  }, [settings.skin]);

  /** Смена темы
   * @param theme
   */
  const onChangeSkin = async (theme) => {
    const response = await axios.post("users/login-data", { "theme": theme === "dark" ? "0" : "1" });
    if (response.data.data) {
      setSettings({
        ...settings,
        skin: response.data.data.theme.toString() === "1" ? "light" : "dark"
      });
    }

  };

  /** Смена ширины меню
   * @param sidebar
   */
  const onChangeMenuCollapsed = async (sidebar) => {
    const response = await axios.post("users/login-data", { "sidebar": sidebar === true ? "1" : "0" });
    if (response.data.data) {
      setSettings({
        ...settings,
        menuCollapsed: response.data.data.sidebar.toString() === "1"
      });
    }
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
