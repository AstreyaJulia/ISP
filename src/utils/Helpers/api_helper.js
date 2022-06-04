import axios from "axios";
import config from "../../config";

/** URL сервера API
 * @type {string} */
axios.defaults.baseURL = config.API_URL;

/** Заголовок контента для API-запросов
 * @type {string} */
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

/** Сбор ошибок */
axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }
        return Promise.reject(message);
    }
);

/** Устанавливает дефолтную авторизацию
 * @param token - токен
 */
const setAuthorization = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
};

/** API-клиент */
class APIClient {

    /** GET, получает данные с сервера
     * @param url - url
     * @param params - параметры запроса, объект
     * @returns {Promise<Response<any>>}
     */
    get = (url, params) => {
        let response;
        let paramKeys = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + "=" + params[key])
                return paramKeys;
            });

            const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }
        return response;
    }

    /** POST, создает данные
     * @param url - url
     * @param data - отправляемые данные
     * @returns {Promise<Response<any>>}
     */
    create = (url, data) => {
        return axios.post(url, data);
    };

    /** PUT, обновляет данные
     * @param url - url
     * @param data - отправляемые данные
     * @returns {Promise<Response<any>>}
     */
    update = (url, data) => {
        return axios.put(url, data);
    };

    /** DELETE, удаляет данные
     * @param url - url
     * @param config - отправляемые данные
     * @returns {Promise<Response<any>>}
     */
    delete = (url, config) => {
        return axios.delete(url, {...config});
    };
}

const fetch = new APIClient();

export {APIClient, setAuthorization, fetch};