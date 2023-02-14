import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

/** Простая кнопка, адаптирована под темную тему
 * @param size - размер
 * @param label - лейбл кнопки
 * @param onClick - обработчик клика
 * @param type - тип
 * @param className
 * @param children
 * @param variant
 * @param props - доп. пропсы
 * @returns {JSX.Element}
 * @constructor
 */

const BasicButton = ({ size, onClick, type, className, children, variant, shape, ...props }) => {

  const sizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base font-medium',
    large: 'py-3 px-4 text-lg font-medium',
  };

  const variants = {
    basic: 'shadow-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-indigo-500',
    primary: 'shadow-md bg-indigo-600 hover:bg-indigo-700 border-indigo-600 dark:border-indigo-700 text-white focus:ring-offset-2 focus:ring-indigo-500',
    ghost: 'bg-white dark:bg-gray-900 border-transparent text-indigo-500 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-700 focus:ring-indigo-500'
  }

  const shapes = {
    rounded: 'rounded-lg',
    circle: 'rounded-full'
  }

  return (
    <button
      /* eslint-disable-next-line */
      type={type}
      onClick={onClick}
      className={classNames(
        'inline-flex items-center justify-center border focus:outline-none focus:ring-2',
        sizes[size],
        variants[variant],
        shapes[shape],
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
  /** Форма кнопки */
  shape: PropTypes.oneOf(['rounded', 'circle']),
  /** Доп. класс */
  className: PropTypes.string,
  /** Тип кнопки */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Обработчик клика */
  onClick: PropTypes.func,
  /** Дочерние элементы */
  children: PropTypes.node,
};

/** Дефолтные свойства */
BasicButton.defaultProps = {
  size: 'medium',
  type: 'button',
  className: '',
  onClick: undefined,
  children: null,
  shape: 'rounded'
};

export default BasicButton;
