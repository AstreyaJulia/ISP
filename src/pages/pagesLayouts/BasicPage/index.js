import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { forwardRef } from 'react';
import { APP_NAME } from "../../../config";

const BasicPage = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | ${APP_NAME}`}</title>
      {meta}
    </Helmet>

    <div ref={ref} {...other}>
      {children}
    </div>
  </>
));

BasicPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default BasicPage;
