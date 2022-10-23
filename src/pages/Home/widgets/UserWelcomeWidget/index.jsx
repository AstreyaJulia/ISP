import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets/images/pages/cosmonaut_rocket_flying.svg";

const UserWelcomeWidget = ({ user }) => <div
  className="bg-indigo-700 rounded-md w-full flex justify-between relative shadow">
  <div className="flex flex-col p-5 gap-2">
    <p className="text-white font-medium text-base">{user?.fullname}</p>
    <p className="text-indigo-100 font-medium text-sm">{user?.professionName}</p>
  </div>
  <img src={image} alt="astronaut" className="w-32 shrink-0 absolute bottom-0 right-0" />
  <svg className='animate-pulse absolute w-3 h-3 top-2 left-5'
    version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-2 h-2 top-5 right-5'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-1 h-1 top-4 right-4'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-1 h-1 top-4 left-14'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-2 h-2 top-20 right-1'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='animate-pulse rotate-12 absolute w-4 h-4 top-14 right-5'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-2 h-2 animate-pulse top-10 right-36'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-3 h-3 top-10 right-24'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-1 h-1 top-7 right-24'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
  <svg className='absolute w-3 h-3 top-2 right-32'
       version="1.0" fill="#EECC15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <polygon fill="#EECC15"
               points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	" />
    </g>
  </svg>
</div>;

UserWelcomeWidget.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserWelcomeWidget;