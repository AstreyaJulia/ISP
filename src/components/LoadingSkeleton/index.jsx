import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

const LoadingSkeleton = ({classnames, ...props }) => <p
    {...props}
    className={classNames('flex grow bg-gray-400/30 rounded-xl animate-pulse text-transparent', classnames)} ><span className='h-6'/></p>;

LoadingSkeleton.propTypes = {
  /** React Prop Types */
  classnames: PropTypes.string,
};

export default LoadingSkeleton;
