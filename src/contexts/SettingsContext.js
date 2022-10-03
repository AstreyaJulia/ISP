import PropTypes from 'prop-types';
import { createContext } from 'react';
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
    skin: initialState.skin,
    menuCollapsed: initialState.menuCollapsed
  });

  /** Смена темы
   * @param event
   */
  const onChangeSkin = (event) => {
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
