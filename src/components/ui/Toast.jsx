import React from "react";
import PropTypes from "prop-types";
import {CheckCircleIcon, ExclamationCircleIcon, XIcon} from "@heroicons/react/outline";
import toast from "react-hot-toast";

export const toastStyles = "bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 overflow-hidden";

const Toast = ({t, message, type}) => {
    /** Расшифровка ошибок сервера TODO добавлять ошибки сюда
     * @type {{"Request failed with status code 500": string, "Request failed with status code 401": string}}
     */
    const serverErrors = {
        "Request failed with status code 500": "Ошибка 500: Отсутствует подключение к серверу.",
        "Request failed with status code 401": "Ошибка 401: Ошибка авторизации."
    }

    /** Типы всплывашек TODO добавлять типы всплывашек сюда
     * @type {{success: {icon: JSX.Element}, error: {icon: JSX.Element}}}
     */
    const toastTypes = {
        "error": {
            icon: <ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true"/>
        },
        "success": {
            icon: <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true"/>
        }
    }

    return (
        <div className="flex items-start">
            <div className="flex-shrink-0">
                {toastTypes[type].icon}
            </div>
            <div className="ml-3 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{serverErrors[message] || message}</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
                <button
                    className="bg-white dark:bg-gray-900 rounded-md inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => toast.dismiss(t.id)}
                >
                    <span className="sr-only">Закрыть</span>
                    <XIcon className="h-5 w-5" aria-hidden="true"/>
                </button>
            </div>
        </div>
    )
};

Toast.propTypes = {
    /** Сообщение, либо код ошибки из промиса */
    message: PropTypes.string.isRequired,
    /** Тип всплывашки */
    type: PropTypes.oneOf(["error", "success"]).isRequired
};

Toast.defaultProps = {
    message: "Внимание",
    type: "error"
};

export default Toast;