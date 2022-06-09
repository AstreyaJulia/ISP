import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";

const CardWithLeftIcon = ({color, icon, href, title, subtitle}) => {

    const colors = {
        red: {
            bg: "bg-red-500/50",
            text: "text-red-700 dark:text-red-300",
        },
        orange: {
            bg: "bg-orange-500/50",
            text: "text-orange-700 dark:text-orange-300",
        },
        yellow: {
            bg: "bg-yellow-500/50",
            text: "text-yellow-700 dark:text-yellow-300",
        },
        green: {
            bg: "bg-green-500/50",
            text: "text-green-700 dark:text-green-300",
        },
        cyan: {
            bg: "bg-cyan-500/50",
            text: "text-cyan-700 dark:text-cyan-300",
        },
        blue: {
            bg: "bg-blue-500/50",
            text: "text-blue-700 dark:text-blue-300",
        },
        indigo: {
            bg: "bg-indigo-500/50",
            text: "text-indigo-700 dark:text-indigo-300",
        },
        pink: {
            bg: "bg-pink-500/50",
            text: "text-pink-700 dark:text-pink-300",
        },
    }

    return (<div className="relative col-span-1 flex shadow-sm rounded-md">
            <div
                className={classnames(colors[color].bg, 'flex-shrink-0 flex items-center justify-center w-16 text-gray-100 dark:text-gray-800 text-sm font-medium rounded-l-md')}
            >
                <i className={classnames('mdi text-2xl d-flex align-items-center justify-content-center', colors[color].text, icon)}/>
            </div>
            <Link to={href} className="min-w-0 text-gray-900 dark:text-gray-50 hover:text-gray-600 w-full">
                <div
                    className="flex items-center justify-between border-t border-r border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-r-md">
                    <div className="min-w-0 flex flex-col px-4 py-2 text-sm">
                        <span className="truncate">{title}</span>
                        <p className="text-gray-500 truncate">{subtitle}</p>
                    </div>
                </div>
            </Link>
        </div>);
};

export default CardWithLeftIcon;
