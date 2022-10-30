import React from 'react';

/** Спиннер на всю страницу
 * @returns {JSX.Element}
 * @constructor
 */

const LoadingScreen = () => (
  <div className="page-spinner h-full flex items-center justify-center h-screen flex-col">
    <div className="page-spinner-wrapper mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className="w-3/5 h-auto animate-spin fill-indigo-600 "
      >
        <circle cx="25" cy="10" r="2" />
        <circle opacity=".3" cx="25" cy="40" r="2" />
        <circle opacity=".3" cx="32.5" cy="12" r="2" />
        <circle opacity=".3" cx="17.5" cy="38" r="2" />
        <circle opacity=".93" cx="17.5" cy="12" r="2" />
        <circle opacity=".3" cx="32.5" cy="38" r="2" />
        <circle opacity=".65" cx="10" cy="25" r="2" />
        <circle opacity=".3" cx="40" cy="25" r="2" />
        <circle opacity=".86" cx="12" cy="17.5" r="2" />
        <circle opacity=".3" cx="38" cy="32.5" r="2" />
        <circle opacity=".44" cx="12" cy="32.5" r="2" />
        <circle opacity=".3" cx="38" cy="17.5" r="2" />
      </svg>
    </div>
  </div>
);

export default LoadingScreen;
