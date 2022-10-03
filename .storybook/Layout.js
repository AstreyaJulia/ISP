import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 antialiased font-sans overflow-hidden h-96 overflow-y-auto w-full">
            {children}
        </div>
    )
}

export default Layout;
