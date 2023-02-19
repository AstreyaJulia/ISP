import React from 'react';

/** Спиннер на всю страницу
 * @returns {JSX.Element}
 * @constructor
 */

const LoadingScreen = () => (
  <div className='page-spinner h-full flex items-center justify-center h-screen flex-col'>
    <div className='page-spinner-wrapper mt-1'>
      <svg version='1.1' id='L3' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
           viewBox='0 0 100 100' enableBackground='new 0 0 0 0' className="w-3/5 h-auto animate-pulse">
        <circle fill='none' className='stroke-gray-600/50' stroke='currentColor' strokeWidth='4' cx='50' cy='50' r='44' />
        <circle fill="currentColor" className='stroke-gray-100 dark:stroke-gray-800 fill-gray-500 dark:fill-gray-400' strokeWidth='3' cx='8' cy='54' r='6'>
          <animateTransform
            attributeName='transform'
            dur='2s'
            type='rotate'
            from='0 50 48'
            to='360 50 52'
            repeatCount='indefinite' />
        </circle>
      </svg>
    </div>
  </div>
);

export default LoadingScreen;
