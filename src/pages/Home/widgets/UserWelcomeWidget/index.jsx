import React from "react";
import PropTypes from "prop-types";
import image from "../../../../assets/images/pages/cosmonaut_rocket_flying.svg";

const UserWelcomeWidget = ({ user }) => <div
  className="bg-indigo-900 rounded-md w-full flex justify-between relative shadow">
  <div className="flex flex-col p-6 gap-3">
    <p className="text-white font-medium text-xl">{user?.fullname}</p>
    <p className="text-indigo-100 font-medium text-sm">{user?.professionName}</p>
  </div>
  <img src={image} alt="astronaut" className="w-32 mr-4 shrink-0" />
</div>;

UserWelcomeWidget.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserWelcomeWidget;