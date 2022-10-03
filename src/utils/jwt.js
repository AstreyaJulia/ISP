import jwtDecode from 'jwt-decode';
import axios from './axios';

/** Проверка JWT токена
 * @param accessToken - токен
 * @returns {boolean}
 */
const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  /** Проверка валидности */
  // у нас проверяем aud
  return decoded.aud !== "";
};

/** Проерка, не истек ли срок токена
 * @param exp
 */
const handleTokenExpired = (exp) => {
let expiredTimer;

window.clearTimeout(expiredTimer);
const currentTime = Date.now();
const timeLeft = exp * 1000 - currentTime;
// console.log(timeLeft);
expiredTimer = window.setTimeout(() => {
// console.log('expired');
// Действие, если срок действия токена истек
}, timeLeft);
};

/** Старт сессии
 * @param accessToken - токен
 */
const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('jwt', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // Проверка срока действия токена
    const { exp } = jwtDecode(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('jwt');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
