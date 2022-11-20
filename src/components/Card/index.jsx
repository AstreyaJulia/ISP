import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

const Card = ({ children, classname }) => (
  <div className={classNames('bg-white dark:bg-slate-900 overflow-hidden shadow rounded-lg overflow-visible', classname || '')}>
    {children}
  </div>
);

Card.propTypes = {
  /** Дочерние элементы  */
  children: PropTypes.node,
  /** Доп. классы */
  classname: PropTypes.string,
};

export default Card;
