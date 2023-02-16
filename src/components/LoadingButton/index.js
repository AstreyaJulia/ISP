import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';
import BasicButton from '../BasicButton';

const LoadingButton = ({ isLoading, className, children, label, type, size, variant, onClick, shape, ...props }) => {

  const sizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base',
    large: 'py-3 px-4 text-lg font-medium',
  };

  return (
    <BasicButton size={size} className={className} variant={variant} onClick={onClick} shape={shape}
                 type={type} disabled={isLoading} {...props}>
      {!isLoading ? (
        <>
          {children}
          <span className="ml-3">{label}</span>
        </>
      ) : (
        <svg
          className="animate-spin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          />
          <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor" />
          <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
        </svg>
      )}
    </BasicButton>
  );

};

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  /** Размер кнопки */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default LoadingButton;
