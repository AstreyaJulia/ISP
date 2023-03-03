import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton';

const LoadingButton = ({
                         isLoading, className, children, label, loadingLabel, type, size, variant, onClick, ...props
                       }) => (<BasicButton size={size} className={className} variant={variant} onClick={onClick}
                                           type={type} disabled={isLoading} {...props}>
    {!isLoading ? (<>
        {children}
        {children ? <span className='ml-3'>{label}</span> : <span>{label}</span>}

      </>) : (<>
        <svg
          className='w-6 h-6 animate-spin fill-slate-500 dark:fill-slate-600 animate-pulse'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          />
          <path d='M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z' />
        </svg>
        <span className='ml-3'>{loadingLabel}</span>
      </>)}
  </BasicButton>);

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  /** Размер кнопки */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  loadingLabel: PropTypes.string,
  label: PropTypes.string,
  variant: BasicButton.propTypes.variant,
  /** Тип кнопки */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Обработчик клика */
  onClick: PropTypes.func,
};

export default LoadingButton;
