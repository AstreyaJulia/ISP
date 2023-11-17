import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

const Card = ({ children, variant, classname }) => {

  const cardColors = {
    default: 'shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800',
    gray: 'shadow bg-gray-100 dark:bg-gray-800 border-gray-100 dark:border-gray-800',
    grayShadowless: 'bg-gray-100 dark:bg-gray-800 border-gray-100 dark:border-gray-800',
  }

  return (
    <div
      className={classNames(
        'overflow-hidden rounded-lg overflow-visible border', cardColors[variant],
        classname || ''
      )}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  /** Дочерние элементы  */
  children: PropTypes.node,
  /** Доп. классы */
  classname: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gray', 'grayShadowless'])
};

Card.defaultProps = {
  classname: '',
  variant: 'default'
};

export default Card;
