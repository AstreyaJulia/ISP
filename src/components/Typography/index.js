import { classNames } from '../../utils/classNames';

const Typography = ({ variant, classname, children, ...other }) => {

  const typographySettings = {
    h1: {
      element: (<h1
        className={classNames('xl:text-5xl lg:text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h1>),
    },
    h2: {
      element: (<h2
        className={classNames('xl:text-4xl lg:text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h2>),
    },
    h3: {
      element: (<h3
        className={classNames('xl:text-3xl lg:text-2xl sm:text-xl font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h3>),
    },
    h4: {
      element: (<h4
        className={classNames('xl:text-2xl lg:text-xl sm:text-lg font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h4>),
    },
    h5: {
      element: (<h5
        className={classNames('xl:text-xl lg:text-lg sm:text-base font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h5>),
    },
    h6: {
      element: (<h6
        className={classNames('xl:text-lg lg:text-base sm:text-base font-bold text-gray-900 dark:text-white', classname || '')} {...other}>{children}</h6>),
    },
    caption: {
      element: (<p
        className={classNames('text-sm text-gray-500 dark:text-gray-600', classname || '')} {...other}>{children}</p>),
    },
    subtitle1: {
      element: (<p
        className={classNames('text-base font-medium text-gray-900 dark:text-gray-white', classname || '')} {...other}>{children}</p>),
    },
    subtitle2: {
      element: (<p
        className={classNames('text-sm font-medium text-gray-900 dark:text-gray-white', classname || '')} {...other}>{children}</p>),
    },
    body1: {
      element: (<p
        className={classNames('text-base font-medium text-gray-500 dark:text-gray-600', classname || '')} {...other}>{children}</p>),
    },
    body2: {
      element: (<p
        className={classNames('text-sm font-medium text-gray-500 dark:text-gray-600', classname || '')} {...other}>{children}</p>),
    },
    label: {
      element: (<p
        className={classNames('text-sm font-medium text-gray-700 dark:text-gray-200', classname || '')} {...other}>{children}</p>),
    },
  };

  return typographySettings[variant].element;

};

export default Typography;