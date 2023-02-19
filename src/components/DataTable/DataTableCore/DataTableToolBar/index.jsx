import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../../utils/classNames';
import LoadingSkeleton from '../../../LoadingSkeleton';

const DataTableToolBar = ({ children, className, isLoading, error }) => {
  if (error === null) {
    return (
      <div className={classNames('p-3 bg-gray-100 dark:bg-gray-700 flex items-center gap-2', className || '')}>
        {isLoading === 'true' ? <LoadingSkeleton classnames='h-10' /> : children}
      </div>
    )
  }
  return null
};

DataTableToolBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DataTableToolBar;
