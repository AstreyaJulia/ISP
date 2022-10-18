import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../../components/Avatar";
import { getAmount } from "../../../../utils/getAmount";

const CasesOverPeriodWidget = ({ rows, isLoading }) => {
  return (
    rows?.length > 0 ?
      <div
        className="rounded-lg relative group bg-white dark:bg-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 shadow">
        <Link to={isLoading === "true" ? "": "/over-period"} className="w-full focus:outline-none min-w-0">
          <div className="flex items-center p-3">
            {isLoading === "true" ?
              <>
                <Avatar name="" size="14" color="red"
                        icon={
                          <svg className="w-12 h-12 animate-spin fill-red-600 dark:fill-red-300 "
                               viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd"
                                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                            <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" />
                          </svg>} shape="roundedLG" classname="flex-shrink-0" />
                <div
                  className="min-w-0 flex flex-col ml-4 text-sm h-6 w-10 bg-gray-200 rounded-full animate-pulse w-full" />
              </>
              :
              <>
                <Avatar name={rows?.length} size="14" color="red" shape="roundedLG" classname="flex-shrink-0" />
                <div className="min-w-0 flex flex-col ml-4 text-sm">
                  <span className="line-clamp-3">{`${getAmount(rows?.length, {
                    single: "Дело",
                    multi: "Дела",
                    count: "Дел"
                  })}`} с нарушением срока</span>
                </div>
              </>
            }
          </div>
        </Link>
      </div>
      : ""
  );
};

export default CasesOverPeriodWidget;