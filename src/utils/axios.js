import axios from 'axios';
import { HOST_API } from '../config';

/** Заголовок контента для API-запросов
 * @type {string} */
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] =
  'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data.error) || 'Неизвестная ошибка')
);

export default axiosInstance;
