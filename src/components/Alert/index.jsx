import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

/** Алерт (сообщения с заголовком и текстом)
 * @param title - заголовок
 * @param alertType - тип
 * @param children
 * @param containerClassName
 * @returns {JSX.Element}
 * @constructor
 */
const Alert = ({ title, alertType, children, containerClassName }) => {
  const alertTypes = {
    error: {
      containerColor: 'bg-red-200 dark:bg-red-600/30',
      icon: (
        <svg
          className="h-5 w-5 fill-red-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z"
            opacity=".3"
          />
          <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
      titleColor: 'text-red-800 dark:text-red-200',
      textColor: 'text-red-700 dark:text-red-300',
    },
    warning: {
      containerColor: 'bg-yellow-200 dark:bg-yellow-600/30',
      icon: (
        <svg
          className="h-5 w-5 fill-yellow-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3" />
          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
        </svg>
      ),
      titleColor: 'text-yellow-800 dark:text-yellow-200',
      textColor: 'text-yellow-700 dark:text-yellow-300',
    },
    success: {
      containerColor: 'bg-green-200 dark:bg-green-600/30',
      icon: (
        <svg
          className="h-5 w-5 fill-green-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
            opacity=".3"
          />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
        </svg>
      ),
      titleColor: 'text-green-800 dark:text-green-200',
      textColor: 'text-green-700 dark:text-green-300',
    },
    info: {
      containerColor: 'bg-blue-200 dark:bg-blue-600/30',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      titleColor: 'text-blue-800 dark:text-blue-200',
      textColor: 'text-blue-700 dark:text-blue-300',
    },
  };

  return (
    <div className={classNames('rounded-md p-4', alertTypes[alertType].containerColor, containerClassName ?? '')}>
      <div className="flex">
        <div className="flex-shrink-0">{alertTypes[alertType].icon}</div>
        <div className="ml-3">
          {title ? (
            <h3 className={classNames('text-sm font-medium', title ? alertTypes[alertType].titleColor : '')}>
              {title}
            </h3>
          ) : (
            ''
          )}
          <div className={classNames(title ? 'mt-2' : '', 'text-sm', alertTypes[alertType].textColor)}>{children}</div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  /**  Заголовок */
  title: PropTypes.string,
  /**  Тип */
  alertType: PropTypes.oneOf(['error', 'warning', 'success', 'info']).isRequired,
  children: PropTypes.object,
  containerClassName: PropTypes.string,
};

Alert.defaultProps = {
  children: '',
};

export default Alert;
