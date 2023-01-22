import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

export default function ValidationError({ name, error }) {
  return (
    <p className={classNames('mt-2 pl-1 text-sm text-red-600 dark:text-red-400 ', error?.message ? 'min-h-fit' : 'h-5')}
       id={`${name}-error`}>
      {error?.message || ''}
    </p>);
}

ValidationError.propTypes = {
  name: PropTypes.string,
  error: PropTypes.object,
};