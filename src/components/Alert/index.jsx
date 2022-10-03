import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

/** Алерт (сообщения с заголовком и текстом)
 * @param title - заголовок
 * @param alertType - тип
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Alert = ({ title, alertType, children }) => {

  const alertTypes = {
    error: {
      containerColor: "bg-red-50",
      icon: <svg className="h-5 w-5 fill-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z"
          opacity=".3" />
        <path
          d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>,
      titleColor: "text-red-800",
      textColor: "text-red-700"
    },
    warning: {
      containerColor: "bg-yellow-50",
      icon: <svg className="h-5 w-5 fill-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z" opacity=".3" />
        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
      </svg>,
      titleColor: "text-yellow-800",
      textColor: "text-yellow-700"
    },
    success: {
      containerColor: "bg-green-50",
      icon: <svg className="h-5 w-5 fill-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
          opacity=".3" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
      </svg>,
      titleColor: "text-green-800",
      textColor: "text-green-700"
    }
  };

  return (
    <div className={classNames("rounded-md p-4", alertTypes[alertType].containerColor)}>
      <div className="flex">
        <div className="flex-shrink-0">
          {alertTypes[alertType].icon}
        </div>
        <div className="ml-3">
          <h3 className={classNames("text-sm font-medium", alertTypes[alertType].titleColor)}>{title}</h3>
          <div className={classNames("mt-2 text-sm", alertTypes[alertType].textColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  /**  Заголовок */
  title: PropTypes.string.isRequired,
  /**  Тип */
  alertType: PropTypes.oneOf(["error", "warning", "success"]).isRequired
};

Alert.defaultProps = {
  children: ""
};

export default Alert;