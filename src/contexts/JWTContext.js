import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { jwt } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      jwt
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("jwt");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get("/users/login-data");
          const { fullname, id, sidebar, sudo, theme, username } = response.data.data;

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              // FIXME запись данных пользователя в контекст
              user: {
                id, // ид пользователя в базе
                username, // Логин
                fullname, // полное имя
                role: sudo === 1 ? "Администратор" : "Пользователь", // Роль, текстовое значение
                sudo, // Права суперпользователя, 0 - пользователь, 1 - администратор
                sidebar, // Сайдбар, 1 - закреплен, 0 - не закреплен
                theme // Тема 0 - темная, 1 - светлая
              }
            }
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (login, password) => {
    const response = await axios.post("/authorization", {
      login,
      password
    });
    const { jwt } = response.data.data;

    setSession(jwt);

    dispatch({
      type: "LOGIN",
      payload: {
        jwt
      }
    });

    const res = await axios.get("/users/login-data");
    const { fullname, id, sidebar, sudo, theme, username } = res.data.data;

    dispatch({
      type: "INITIALIZE",
      payload: {
        isAuthenticated: true,
        // FIXME запись данных пользователя в контекст
        user: {
          id, // ид пользователя в базе
          username, // Логин
          fullname, // полное имя
          role: sudo === 1 ? "Администратор" : "Пользователь", // Роль, текстовое значение
          sudo, // Права суперпользователя, 0 - пользователь, 1 - администратор
          sidebar, // Сайдбар, 1 - закреплен, 0 - не закреплен
          theme // Тема 0 - темная, 1 - светлая
        }
      }
    });
  };

  /** Регистрация (установка пароля)
   * @param login - логин
   * @param password - пароль
   * @param passrep - подтверждение пароля
   * @returns {Promise<void>}
   */
  const register = async (login, password, passrep) => {
    const response = await axios.post("/registration", {
      login,
      password,
      passrep
    });

    // Получаем JWT токен из ответа
    const { jwt } = response.data.data;

    if (jwt) {
      // Записываем токен в localStorage, и в заголовок для всех http запросов
      // Без этого не пройдет следующий запрос получения данных пользователя
      setSession(jwt);

      dispatch({
        type: "REGISTER",
        payload: {
          jwt
        }
      });

      // Получаем данные пользователя
      const res = await axios.get("/users/login-data");

      // Получаем данные пользователя из ответа
      const { fullname, id, sidebar, sudo, theme, username } = res.data.data;

      dispatch({
        type: "INITIALIZE",
        payload: {
          isAuthenticated: true,
          // FIXME запись данных пользователя в контекст
          user: {
            id, // ид пользователя в базе
            username, // Логин
            fullname, // полное имя
            role: sudo === 1 ? "Администратор" : "Пользователь", // Роль, текстовое значение
            sudo, // Права суперпользователя, 0 - пользователь, 1 - администратор
            sidebar, // Сайдбар, 1 (true) - закреплен, 0 (false) - не закреплен
            theme // Тема 0 - темная, 1 - светлая
          }
        }
      });
    }
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
