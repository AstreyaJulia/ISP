import Router from "./router";
import {getRoutes} from "./router/allRoutes";
import React, {Suspense, useEffect, useState} from "react";
import {useLayout} from "./utils/Hooks/useLayout";
import "./scss/App.scss";

function App() {
    /** Стейт роутов */
    const [allRoutes, setAllRoutes] = useState([]);

    const {layout} = useLayout();

    /** Получает роуты для раскладки */
    useEffect(() => {
        setAllRoutes(getRoutes(layout));
    }, [layout]);

    return (
        <Suspense fallback={null}>
            <Router allRoutes={allRoutes}/>
        </Suspense>
    );
}

export default App;
