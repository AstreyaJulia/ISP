import React from "react";

/** Спиннер на всю страницу
 * @returns {JSX.Element}
 * @constructor
 */
const PageLoadingSpinner = () => {
    return (
        <div className="page-spinner h-full flex items-center justify-center h-screen flex-col">
            <div className="page-spinner-wrapper mt-1 w-16 h-16 rounded-full border border-4 border-indigo-500">
                <div
                    className="page-spinner-1 effects w-16 h-16 absolute rounded-full border border-l-4 border-indigo-500"/>
                <div
                    className="page-spinner-2 effects w-16 h-16 absolute rounded-full border border-l-4 border-indigo-500"/>
                <div className="page-spinner-3 effects w-16 h-16 rounded-full border border-l-4 border-indigo-500"/>
            </div>
        </div>
    )
}

export default PageLoadingSpinner;
