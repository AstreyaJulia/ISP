import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";

/** Пустая раскладка без меню и заголовка
 * @returns {JSX.Element|null}
 * @constructor
 */
const BlankLayout = () => {
    /** Стейты */
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="w-full h-screen bg-white dark:bg-gray-900">
            <Outlet/>
        </div>
    );
};

export default BlankLayout;
