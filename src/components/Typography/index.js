import { classNames } from '../../utils/classNames';

const Typography = ({ variant, classname, children, ...other }) => {

  const typographySettings = {
    caption: {
      element: (<p
        className={classNames('text-sm text-gray-500 dark:text-gray-600', classname || '')} {...other}>{children}</p>),
    },
    subtitle2: {
      element: (<p
        className={classNames('text-sm font-medium text-gray-900 dark:text-gray-white', classname || '')} {...other}>{children}</p>),
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