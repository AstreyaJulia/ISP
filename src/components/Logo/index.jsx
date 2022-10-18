import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

Logo.propTypes = {
  disabledLink: PropTypes.bool
};

export default function Logo({ disabledLink = false }) {

  const logo = (
    <div className="w-10 h-10">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512">
        <g transform="matrix(0.8124997871764943, 0, 0, 0.8124997871764943, 48.00005463998038, 48.000055744536866)">
          <path fill="#ef4444" opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M380.1,78.9c-29.9,0-54.1,24.2-54.1,54.1c0,46.4-23.2,69.6-69.6,69.6
		c-46.4,0-69.6-23.2-69.6-69.6c0-29.9-24.2-54.1-54.1-54.1S78.6,103.1,78.6,133c0,29.9,24.2,54.1,54.1,54.1
		c46.4,0,69.6,23.2,69.6,69.6c0,29.9,24.2,54.1,54.1,54.1c29.9,0,54.2-24.2,54.2-54.1c0-46.4,23.2-69.6,69.6-69.6
		c29.9,0,54.2-24.2,54.2-54.1C434.3,103.1,410.1,78.9,380.1,78.9z" />
          <path fillRule="evenodd" clipRule="evenodd" opacity="0.7"
                fill="#6366f1"
                d="
		M502.4,202.5c-29.9,0-54.1,24.2-54.1,54.1c0,46.4-23.2,69.6-69.6,69.6c-46.4,0-69.6-23.2-69.6-69.6c0-29.9-24.2-54.1-54.1-54.1
		c-29.9,0-54.1,24.2-54.1,54.1c0,29.9,24.2,54.1,54.1,54.1c46.4,0,69.6,23.2,69.6,69.6c0,29.9,24.2,54.1,54.1,54.1
		c29.9,0,54.2-24.2,54.2-54.1c0-46.4,23.2-69.6,69.6-69.6c29.9,0,54.2-24.2,54.2-54.1C556.6,226.7,532.3,202.5,502.4,202.5z" />
          <path fillRule="evenodd" clipRule="evenodd" opacity="0.7"
                fill="#14b8a6"
                d="
		M187.4,379.1c0-29.9-24.2-54.1-54.1-54.1c-46.4,0-69.6-23.2-69.6-69.6c0-46.4,23.2-69.6,69.6-69.6c29.9,0,54.1-24.2,54.1-54.1
		s-24.2-54.1-54.1-54.1c-29.9,0-54.1,24.2-54.1,54.1c0,46.4-23.2,69.6-69.6,69.6c-29.9,0-54.1,24.2-54.1,54.1
		c0,29.9,24.2,54.2,54.1,54.2c46.4,0,69.6,23.2,69.6,69.6c0,29.9,24.2,54.2,54.1,54.2C163.2,433.2,187.4,409,187.4,379.1z" />
        </g>
      </svg>
    </div>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}