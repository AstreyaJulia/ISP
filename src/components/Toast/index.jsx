import React from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const toastStyles =
  'bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 overflow-hidden';

const Toast = ({ t, message, type }) => {
  /** Расшифровка ошибок сервера TODO добавлять ошибки сюда
   * @type {{"Request failed with status code 500": string, "Request failed with status code 401": string}}
   */
  const serverErrors = {
    'Request failed with status code 500': 'Ошибка 500: Отсутствует подключение к серверу.',
    'Request failed with status code 401': 'Ошибка 401: Ошибка авторизации.',
  };

  /** Типы всплывашек TODO добавлять типы всплывашек сюда
   * @type {{success: {icon: JSX.Element}, error: {icon: JSX.Element}}}
   */
  const toastTypes = {
    error: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      ),
    },
    success: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">{toastTypes[type].icon}</div>
      <div className="ml-3 flex-1 pt-0.5">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{serverErrors[message] || message}</p>
      </div>
      <div className="ml-4 flex-shrink-0 flex">
        <button
          type="button"
          className="bg-white dark:bg-gray-900 rounded-md inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => toast.dismiss(t.id)}
        >
          <span className="sr-only">Закрыть</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  /** Сообщение, либо код ошибки из промиса */
  message: PropTypes.string.isRequired,
  /** Тип всплывашки */
  type: PropTypes.oneOf(['error', 'success']).isRequired,
  t: PropTypes.object,
};

export default Toast;
