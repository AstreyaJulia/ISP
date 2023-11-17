import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar';

/** Значок показывающий тенденцию. Рост, падение или неизменность
 *
 * @param value1 - начальное значение
 * @param value2 - конечное значение
 * @param size - размер
 * @returns {JSX.Element}
 * @constructor
 */
const TrendingIcon = ({ value1, value2, size }) => {

  const getTendency = () => {
    if (value1 < value2) {
      return 'up';
    }
    if (value1 > value2) {
      return 'down';
    }
    return 'flat';
  };

  const iconSize = {
    '6': 'h-4 w-4',
    '8': 'h-6 w-6',
    '10': 'h-8 w-8',
    '12': 'h-10 w-10',
    '14': 'h-12 w-12',
    '16': 'h-14 w-14',
    '20': 'h-16 w-16',
  };

  const icon = {
    'up': <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      className={iconSize[size]}>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z' />
    </svg>, 'down': <svg
      className={iconSize[size]}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z' />
    </svg>, 'flat': <svg
      className={iconSize[size]}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M22 12l-4-4v3H3v2h15v3z' />
    </svg>,
  };

  const color = {
    'up': 'green', 'down': 'red', 'flat': 'blue',
  };

  return <Avatar icon={icon[getTendency()]} name='' shape='circle' size={size} color={color[getTendency()]} />;
};

TrendingIcon.propTypes = {
  /** React Prop Types */
  value1: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['6', '8', '10', '12', '14', '16', '20']).isRequired,
};

export default TrendingIcon;
