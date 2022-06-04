import {Suspense} from "react";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children, route}) => {
    const user = JSON.parse(localStorage.getItem("jwt"));

    if (route) {

        let restrictedRoute = false;

        if (route.meta) {
            restrictedRoute = route.meta.restricted;
        }

        if (user && restrictedRoute) {
            return <Navigate to="/"/>
        }
    }

    return <Suspense fallback={null}>{children}</Suspense>
}

export default PublicRoute
