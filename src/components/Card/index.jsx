import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Card = ({ children, classname }) => (
  <div className={classNames("bg-white dark:bg-slate-900 overflow-hidden shadow rounded-lg", classname || "")}>
    {children}
  </div>
);

Card.propTypes = {
  /** Дочерние элементы  */
  children: PropTypes.object,
  /** Доп. классы */
  classname: PropTypes.string
};

export default Card;