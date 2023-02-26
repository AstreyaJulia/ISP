import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

const Card = ({ children, variant, classname }) => {

  const cardColors = {
    default: 'shadow bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
    gray: 'shadow bg-neutral-100 dark:bg-neutral-800 border-neutral-100 dark:border-neutral-800',
    grayShadowless: 'bg-neutral-100 dark:bg-neutral-800 border-neutral-100 dark:border-neutral-800',
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
