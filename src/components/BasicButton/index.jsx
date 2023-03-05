import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

/** Простая кнопка */

const BasicButton = ({ size, onClick, className, children, variant, type, ...props }) => {

  const sizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-1.5 px-3 text-base font-medium',
    large: 'py-2 px-4 text-lg font-medium',
  };

  const variants = {
    basic: 'shadow-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-indigo-500 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:hover:border-gray-200 dark:disabled:hover:border-gray-700 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 disabled:hover:cursor-not-allowed',
    primary: 'shadow-md bg-indigo-600 hover:bg-indigo-700 border-transparent dark:border-transparent text-white focus:ring-offset-2 focus:ring-indigo-500 disabled:text-gray-50 dark:disabled:text-gray-50 disabled:bg-indigo-600/50 dark:disabled:bg-indigo-700/50 disabled:hover:bg-indigo-600/50 dark:disabled:hover:bg-indigo-700/50 disabled:hover:cursor-not-allowed',
    success: 'shadow-md bg-green-600 hover:bg-green-700 border-transparent dark:border-transparent text-white focus:ring-offset-2 focus:ring-green-500 disabled:text-gray-50 dark:disabled:text-gray-50 disabled:bg-green-600/50 dark:disabled:bg-green-700/50 disabled:hover:bg-green-600/50 dark:disabled:hover:bg-green-700/50 disabled:hover:cursor-not-allowed',
    danger: 'shadow-md bg-red-600 hover:bg-red-700 border-transparent dark:border-transparent text-white focus:ring-offset-2 focus:ring-red-500 disabled:text-gray-50 dark:disabled:text-gray-50 disabled:bg-red-600/50 dark:disabled:bg-red-700/50 disabled:hover:bg-red-600/50 dark:disabled:hover:bg-red-700/50 disabled:hover:cursor-not-allowed',
    ghost: 'bg-transparent border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent disabled:hover:cursor-not-allowed',
  }

  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line
      type={type}
      disabled={props.disabled}
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
  variant: PropTypes.oneOf(['basic', 'primary', 'success', 'danger', 'ghost']),
  disabled: PropTypes.bool,
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
  disabled: false,
  children: null,
  variant: 'basic',
  type: 'button'
};

export default BasicButton;
