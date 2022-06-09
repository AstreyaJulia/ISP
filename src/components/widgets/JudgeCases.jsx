import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {getAmount} from "../../utils";

const JudgeCases = ({className}) => {
    const projects = [
        { name: 'Не рассмотрено', icon: 'mdi-file-sync-outline', href: '#', col: 4, bgColor: 'bg-pink-600' },
        { name: 'Приостановлено', icon: 'mdi-clock-remove-outline', href: '#', col: 12, bgColor: 'bg-purple-600' },
        { name: 'Без движения', icon: 'mdi-file-link-outline', href: '#', col: 16, bgColor: 'bg-yellow-500' },
        { name: 'Всего в производстве', icon: 'mdi-file-multiple-outline', href: '#', col: 8, bgColor: 'bg-green-500' },
    ]

    return (
        <div className={className || ""}>
            <h2 className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">Дела в производстве</h2>
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
                        <div
                            className={classnames(
                                project.bgColor,
                                'flex-shrink-0 flex items-center justify-center w-16 text-gray-100 dark:text-gray-800 text-sm font-medium rounded-l-md'
                            )}
                        >
                            <i className={classnames('mdi text-3xl d-flex align-items-center justify-content-center', project.icon)}/>
                        </div>
                        <Link to={project.href} className="text-gray-900 dark:text-gray-50 font-medium hover:text-gray-600 w-full">

                            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-r-md truncate">
                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                    {project.name}
                                    <p className="text-gray-500">{project.col} {`${getAmount(project.col, {single: "дело", multi: "дела", count: "дел"})}`}</p>
                                </div>
                                <div className="flex-shrink-0 pr-2">
                                    <button
                                        type="button"
                                        className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Open options</span>
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JudgeCases;
