import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import useLocalStorage from '../hooks/useLocalStorage';
import Toast, { toastStyles } from '../components/Toast';
import apiErrorHelper from "../utils/apiErrorHelper";

const initialState = {
  theme: 1,
  sidebar: 1,
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  onChangeSkin: () => Promise.resolve(),
  onChangeMenuCollapsed: () => Promise.resolve(),
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user, theme, sidebar } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      theme,
      sidebar,
    };
  },
  LOGIN: (state, action) => {
    const { jwt } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      jwt,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    theme: 1,
    sidebar: 1,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  THEME: (state, action) => {
    const { theme } = action.payload;

    return {
      ...state,
      theme,
    };
  },
  SIDEBAR: (state, action) => {
    const { sidebar } = action.payload;

    return {
      ...state,
      sidebar,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  initialize: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [settings, setSettings] = useLocalStorage('settings', {
    theme: state.theme,
    sidebar: state.sidebar,
  });

  const getUserData = async () => axios
      .get('/users/login-data')
      .then((res) => {

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user: {
              id: res?.data?.data?.id, // ид пользователя в базе
              username: res?.data?.data?.username, // Логин
              fullname: res?.data?.data?.fullname, // полное имя
              professionID: res?.data?.data?.professionID, // ID профессии, может быть null
              professionName:
                res?.data?.data?.professionName === null || res?.data?.data?.professionName === ''
                  ? 'Администратор системы'
                  : res?.data?.data?.professionName,
              role: res?.data?.data?.sudo === 1 ? 'Администратор' : 'Пользователь', // Роль, текстовое значение
              sudo: res?.data?.data?.sudo, // Права суперпользователя, 0 - пользователь, 1 - администратор
            },
            theme: res?.data?.data?.theme, // Тема 0 - темная, 1 - светлая
            sidebar: res?.data?.data?.sidebar, // Сайдбар, 1 - широкий, 0 - узкий
          },
        });
      })
      .catch((err) => apiErrorHelper(err));

  const initialize = async () => {
    try {
      const accessToken = window.localStorage.getItem('jwt');

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        // Получаем данные пользователя
        await getUserData();
      } else {
        setSession(null);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  /** Установка класса темы для body при монтировании */
  useEffect(() => {
    /** Получаем тег body */
    const element = window.document.body;

    /** Названия классов для тем */
    const classNames = {
      0: 'dark',
      1: 'light',
    };

    /** Удаляем классы тем при монтировании */
    element.classList.remove('dark', 'light', 'undefined');

    /** Если тема не светлая, добавляем класс темы из store */
    element.classList.add(classNames[state?.theme]);
  }, [state.theme]);

  /** Смена темы
   * @param data
   */
  const onChangeSkin = async (data) => axios.post('users/login-data', { theme: data }).then((response) => {
      if (response.data.data) {
        dispatch({
          type: 'THEME',
          payload: {
            theme: response?.data?.data?.theme,
          },
        });
        setSettings({
          ...settings,
          theme: response?.data?.data?.theme,
        });
      }
    });

  /** Смена ширины меню
   * @param data
   */
  const onChangeMenuCollapsed = async (data) => {
    const response = await axios.post('users/login-data', { sidebar: data });

    if (response.data.data) {
      dispatch({
        type: 'SIDEBAR',
        payload: {
          sidebar: response.data.data.sidebar,
        },
      });
      setSettings({
        ...settings,
        sidebar: response.data.data.sidebar,
      });
    }
  };

  /** Логин
   * @param login
   * @param password
   * @returns {Promise<void>}
   */
  const login = async (login, password) => {
    await axios
      .post('/authorization', {
        login,
        password,
      })
      .then((res) => {
        if (res.data.data !== [] && res.data.data.jwt) {
          const { jwt } = res.data.data;
          setSession(jwt);

          dispatch({
            type: 'LOGIN',
            payload: {
              jwt,
            },
          });
          toast((t) => <Toast t={t} message="Вы успешно вошли в систему." type="success" />, {
            className: toastStyles,
          });
          // Получаем данные пользователя
          getUserData();
        } else {
          const error = res.data.error.message ? res : res.toString();
          toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
        }
      })
      .catch((err) => apiErrorHelper(err));
  };

  /** Регистрация (установка пароля)
   * @param login - логин
   * @param password - пароль
   * @param passrep - подтверждение пароля
   * @returns {Promise<void>}
   */
  const register = async (login, password, passrep) => {
    await axios
      .post('/registration', {
        login,
        password,
        passrep,
      })
      .then((res) => {
        // Получаем JWT токен из ответа
        const { jwt } = res.data.data;
        if (jwt) {
          // Записываем токен в localStorage, и в заголовок для всех http запросов
          // Без этого не пройдет следующий запрос получения данных пользователя
          setSession(jwt);

          dispatch({
            type: 'REGISTER',
            payload: {
              jwt,
            },
          });

          toast((t) => <Toast t={t} message="Пароль успешно установлен." type="success" />, {
            className: toastStyles,
          });

          // Получаем данные пользователя
          getUserData();
        }
      })
      .catch((err) => apiErrorHelper(err));
  };

  /** Выход
   * @returns {Promise<void>}
   */
  const logout = async () => {
    localStorage.removeItem('settings');
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        ...settings,
        method: 'jwt',
        initialize,
        login,
        logout,
        register,
        onChangeSkin,
        onChangeMenuCollapsed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
