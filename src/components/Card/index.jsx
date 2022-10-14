import React from "react";
import { classNames } from "../../utils/classNames";

export const Card = ({ children, classname }) => {
  return (
    <div className={classNames("bg-white dark:bg-slate-900 overflow-hidden shadow rounded-lg", classname || '')}>
      {children}
    </div>
  );
};
