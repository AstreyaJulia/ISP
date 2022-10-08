import { Button } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const LoadingButton = ({isLoading, classes, children, label, type, ...other}) => {
  return (
    <Button type={type} {...other}
            className={classNames(classes || '', "flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2")}
    >
      {!isLoading ?
        children :
        <svg className='animate-spin' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor"/>
        <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/>
      </svg>}
      <span className='ml-3'>{label}</span>
    </Button>
  )
}

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default LoadingButton;