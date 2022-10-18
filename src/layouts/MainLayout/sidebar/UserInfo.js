import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import React from "react";

import { PATH_PROFILE } from "../../../routes/paths";
import useAuth from "../../../hooks/useAuth";
import { Avatar } from "../../../components/Avatar";
import { classNames } from "../../../utils/classNames";
import { getInitials } from "../../../utils/getInitials";

const UserInfo = () => {
  /** Хуки */
  const { user, sidebar } = useAuth();

  return (
    <div className="p-3 mt-3">
      <Link to={PATH_PROFILE} title="Мой профиль"
            className={classNames("flex items-center rounded-md py-3", sidebar?.toString() === "1" ? "bg-slate-100 dark:bg-slate-800 px-3" : "justify-center")}>
        {user?.fullname ?
          <Avatar size="10" name={user?.fullname} avatar={user?.avatar} shape="circle" /> :
          <Skeleton
            className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10" />}
        {sidebar?.toString() === "1" ?
          <div className="flex flex-col ml-3 text-gray-800 dark:text-gray-200 text-sm">
            <p className="font-bold">{getInitials(user?.fullname)}</p>
            <p className="font-medium text-gray-600 dark:text-gray-400">{user?.role}</p>
          </div>
          : ""}
      </Link>
    </div>
  );
};

export default UserInfo;