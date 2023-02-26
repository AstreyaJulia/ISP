import { classNames } from '../../utils/classNames';

const Typography = ({ variant, classname, children, ...other }) => {
  const typographySettings = {
    h1: {
      element: (
        <h1
          className={classNames(
            'text-4xl xl:text-5xl font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h1>
      ),
    },
    h2: {
      element: (
        <h2
          className={classNames(
            'text-3xl xl:text-4xl font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h2>
      ),
    },
    h3: {
      element: (
        <h3
          className={classNames(
            'text-2xl xl:text-3xl font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h3>
      ),
    },
    h4: {
      element: (
        <h4
          className={classNames(
            'text-xl xl:text-2xl font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h4>
      ),
    },
    h5: {
      element: (
        <h5
          className={classNames(
            'text-lg xl:text-xl font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h5>
      ),
    },
    h6: {
      element: (
        <h6
          className={classNames(
            'text-base xl:text-lg font-medium text-neutral-800 dark:text-neutral-50',
            classname || ''
          )}
          {...other}
        >
          {children}
        </h6>
      ),
    },
    caption: {
      element: (
        <p className={classNames('text-sm text-neutral-600 dark:text-neutral-300', classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    subtitle1: {
      element: (
        <p
          className={classNames('text-base font-medium text-neutral-800 dark:text-neutral-50', classname || '')}
          {...other}
        >
          {children}
        </p>
      ),
    },
    subtitle2: {
      element: (
        <p className={classNames('text-sm font-medium text-neutral-800 dark:text-neutral-50', classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    body1: {
      element: (
        <p className={classNames('text-base font-medium text-neutral-600 dark:text-neutral-300', classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    body2: {
      element: (
        <p className={classNames('text-sm font-medium text-neutral-600 dark:text-neutral-300', classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    label: {
      element: (
        <p className={classNames('text-base font-medium text-neutral-600 dark:text-neutral-300', classname || '')} {...other}>
          {children}
        </p>
      ),
    },
  };

  return typographySettings[variant].element;
};

export default Typography;
