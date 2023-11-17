import { classNames } from '../../utils/classNames';
import { typographySettings } from '../../config';

const Typography = ({ variant, classname, children, ...other }) => {

  const settings = {
    h1: {
      element: (
        <h1
          className={classNames(
            typographySettings.h1,
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
            typographySettings.h2,
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
            typographySettings.h3,
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
            typographySettings.h4,
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
            typographySettings.h5,
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
            typographySettings.h6,
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
        <p className={classNames(typographySettings.caption1, classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    subtitle1: {
      element: (
        <p
          className={classNames(typographySettings.subtitle1, classname || '')}
          {...other}
        >
          {children}
        </p>
      ),
    },
    subtitle2: {
      element: (
        <p className={classNames(typographySettings.subtitle2, classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    body1: {
      element: (
        <p className={classNames(typographySettings.body1, classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    body2: {
      element: (
        <p className={classNames(typographySettings.body2, classname || '')} {...other}>
          {children}
        </p>
      ),
    },
    label: {
      element: (
        <p className={classNames(typographySettings.label1, classname || '')} {...other}>
          {children}
        </p>
      ),
    },
  };

  return settings[variant].element;
};

export default Typography;
