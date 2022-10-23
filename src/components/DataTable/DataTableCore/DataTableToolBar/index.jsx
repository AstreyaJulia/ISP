import React from "react";
import PropTypes from "prop-types";
import { getInitials } from "../../../../utils/getInitials";

const DataTableToolBar = ({children}) => {
  return (
    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-md mt-3 mx-4 flex items-center gap-2">
      {children}
    </div>
  );
};

export default DataTableToolBar;