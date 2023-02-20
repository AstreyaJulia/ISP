import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

const Badge = ({ size, color, item, shape, className }) => {
  const BadgeSize = {
    small: 'px-1.5 py-0.5 text-xs',
    large: 'px-3 py-0.5 text-sm',
  };

  const BadgeColor = {
    red: 'bg-red-500/30 text-red-700 dark:text-red-300 border-red-600/50',
    orange: 'bg-orange-500/30 text-orange-700 dark:text-orange-300 border-orange-600/50',
    yellow: 'bg-yellow-500/30 text-yellow-700 dark:text-yellow-300 border-yellow-600/50',
    green: 'bg-green-500/30 text-green-700 dark:text-green-300 border-green-600/50',
    cyan: 'bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border-cyan-600/50',
    blue: 'bg-blue-500/30 text-blue-700 dark:text-blue-300 border-blue-600/50',
    indigo: 'bg-indigo-500/30 text-indigo-700 dark:text-indigo-300 border-indigo-600/50',
    pink: 'bg-pink-500/30 text-pink-700 dark:text-pink-300 border-pink-600/50',
  };

  const BadgeShapes = {
    rounded: 'rounded-md',
    circle: 'rounded-full',
  };

  return (
    <span
      className={classNames(
        'inline-flex items-center justify-center font-medium border',
        BadgeSize[size],
        BadgeColor[color],
        BadgeShapes[shape],
        className
      )}
    >
      {item}
    </span>
  );
};

Badge.propTypes = {
  /**  Данные */
  item: PropTypes.node,
  /**  Размер бейджа */
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  /**  Цвет бейджа */
  color: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'pink']),
  /**  Форма бейджа */
  shape: PropTypes.oneOf(['rounded', 'circle']).isRequired,
  /** Доп. класс/ы для бейджа */
  className: PropTypes.string,
};

Badge.defaultProps = {
  className: '',
  color: 'indigo'
};

export default Badge;
