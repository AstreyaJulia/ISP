import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../../utils/classNames";

const DataTableToolBar = ({children, className}) => {
  return (
    <div className={classNames("p-3 bg-slate-100 dark:bg-slate-700 flex items-center gap-2", className || '')}>
      {children}
    </div>
  );
};

export default DataTableToolBar;