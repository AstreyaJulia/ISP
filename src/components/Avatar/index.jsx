import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

/** Аватар в различных исполнениях: изображение, инициалы, со значком. В разных размерах. 2 формы - скругленная и круглая */
export const Avatar = ({ size, classname, name, avatar, color, icon, shape, isLoading }) => {

  /** Размеры аватаров
   * @type {{"12": {nameFont: string, size: string}, "14": {nameFont: string, size: string}, "6": {nameFont: string, size: string}, "8": {nameFont: string, size: string}, "10": {nameFont: string, size: string}}}
   */
  const AvatarGroupSize = {
    6: {
      nameFont: 'text-xs',
      size: 'h-6 w-6',
    },
    8: {
      nameFont: 'text-sm',
      size: 'h-8 w-8',
    },
    10: {
      nameFont: 'text-base',
      size: 'h-10 w-10',
    },
    12: {
      nameFont: 'text-xl',
      size: 'h-12 w-12',
    },
    14: {
      nameFont: 'text-2xl',
      size: 'h-14 w-14',
    },
    16: {
      nameFont: 'text-3xl',
      size: 'h-16 w-16',
    },
    20: {
      nameFont: 'text-4xl',
      size: 'h-20 w-20',
    },
  };

  /** Цвета аватаров
   * @type {{red: {bg: string, text: string}, orange: {bg: string, text: string}, pink: {bg: string, text: string}, green: {bg: string, text: string}, blue: {bg: string, text: string}, yellow: {bg: string, text: string}, indigo: {bg: string, text: string}, cyan: {bg: string, text: string}}}
   */
  const AvatarColor = {
    red: {
      bg: 'bg-red-500/25',
      text: 'text-red-700 fill-red-700 dark:text-red-300',
    },
    orange: {
      bg: 'bg-orange-500/25',
      text: 'text-orange-700 fill-orange-700 dark:text-orange-300',
    },
    yellow: {
      bg: 'bg-yellow-500/25',
      text: 'text-yellow-700 fill-yellow-700 dark:text-yellow-300',
    },
    green: {
      bg: 'bg-green-500/25',
      text: 'text-green-700 fill-green-700 dark:text-green-300',
    },
    cyan: {
      bg: 'bg-cyan-500/25',
      text: 'text-cyan-700 fill-cyan-700 dark:text-cyan-300',
    },
    blue: {
      bg: 'bg-blue-500/25',
      text: 'text-blue-700 fill-blue-700 dark:text-blue-300',
    },
    indigo: {
      bg: 'bg-indigo-500/25',
      text: 'text-indigo-700 fill-indigo-700 dark:text-indigo-300',
    },
    pink: {
      bg: 'bg-pink-500/25',
      text: 'text-pink-700 fill-pink-700 dark:text-pink-300',
    },
  };

  const AvatarShape = {
    rounded: 'rounded-md',
    circle: 'rounded-full',
  };

  return (
    isLoading ? <span
      className={classNames('flex-shrink-0 inline-flex items-center justify-center bg-gray-500/25 animate-pulse',
        AvatarShape[shape],
        AvatarGroupSize[size].size,
        classname || '')}
    >
        <span
          className={classNames('font-medium leading-none d-flex items-center justify-center text-gray-700 fill-gray-700 dark:text-gray-300',
            AvatarGroupSize[size].nameFont)}
        />
      </span> : <>
      {
        avatar ? <img
            className={classNames('flex-shrink-0 flex inline-block', AvatarShape[shape], AvatarGroupSize[size].size, classname)}
            src={avatar}
            alt={name}
          /> :
          <span
            className={classNames('flex-shrink-0 inline-flex items-center justify-center',
              AvatarShape[shape],
              AvatarGroupSize[size].size,
              AvatarColor[color || 'indigo'].bg,
              classname || '')}
          >
        <span
          className={classNames('font-medium leading-none d-flex items-center justify-center',
            AvatarGroupSize[size].nameFont,
            AvatarColor[color || 'indigo'].text,
          )}
        >
          {name}
          {icon && icon}
        </span>
      </span>
      }
    </>
  );
};

Avatar.propTypes = {
  /** Данные */
  name: PropTypes.string.isRequired,
  /** Изображение аватара */
  avatar: PropTypes.string,
  /** Состояние загрузки. Показивает скелетон */
  isLoading: PropTypes.bool,
  /**  Цвет аватара */
  color: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'pink']),
  /**  Форма аватара */
  shape: PropTypes.oneOf(['rounded', 'circle']).isRequired,
  /** Размер аватара */
  size: PropTypes.oneOf(['6', '8', '10', '12', '14', '16', '20']).isRequired,
  /** Доп. класс для аватара */
  classname: PropTypes.string,
  /** Значок вместо букв */
  icon: PropTypes.object,
};

Avatar.defaultProps = {
  classname: '',
  color: 'indigo',
  isLoading: false,
};
