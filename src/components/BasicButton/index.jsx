import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

/** Простая кнопка */

const BasicButton = ({ size, onClick, className, children, variant, type, ...props }) => {

  const sizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base font-medium',
    large: 'py-3 px-4 text-lg font-medium',
  };

  const variants = {
    basic: 'shadow-sm bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:ring-indigo-500',
    primary: 'shadow-md bg-indigo-600 hover:bg-indigo-700 border-indigo-600 dark:border-indigo-700 text-white focus:ring-offset-2 focus:ring-indigo-500',
    ghost: 'bg-transparent border-transparent text-indigo-500 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-700 focus:ring-indigo-500'
  }

  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line
      type={type}
      className={classNames(
        'inline-flex rounded-lg items-center justify-center border focus:outline-none focus:ring-2',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

/** Типы свойств */
BasicButton.propTypes = {
  /** Размер кнопки */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Доп. класс */
  className: PropTypes.string,
  /** Цвет */
  variant: PropTypes.oneOf(['basic', 'primary', 'ghost']),
  /** Обработчик клика */
  onClick: PropTypes.func,
  /** Дочерние элементы */
  children: PropTypes.node,
  /** Тип кнопки */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

/** Дефолтные свойства */
BasicButton.defaultProps = {
  size: 'medium',
  className: '',
  onClick: undefined,
  children: null,
  variant: 'basic',
  type: 'button'
};

export default BasicButton;
