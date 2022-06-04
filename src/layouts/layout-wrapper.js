import {Fragment, memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {handleMenuCollapsed} from "../store/layout";

const LayoutWrapper = props => {

    /** Пропсы */
    const {children, routeMeta} = props;

    /** Хранилище */
    const dispatch = useDispatch();
    const layoutStored = "main";

    /** Переменные */
    const appLayoutCondition =
        (layoutStored.layout !== "main" && !routeMeta) ||
        (layoutStored.layout !== "main" && routeMeta && !routeMeta.appLayout);

    const Tag = appLayoutCondition ? "div" : Fragment;

    /** Ф-я очистки */
    const cleanUp = () => {
        if (routeMeta) {
            if (routeMeta.menuCollapsed) {
                dispatch(handleMenuCollapsed(!routeMeta.menuCollapsed));
            }
        }
    }

    /** ComponentDidMount */
    useEffect(() => {
        if (routeMeta) {
            if (routeMeta.menuCollapsed) {
                dispatch(handleMenuCollapsed(routeMeta.menuCollapsed));
            }
        }
        return () => cleanUp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routeMeta]);

    return (
        <Tag {...(appLayoutCondition ? {className: "content-body overflow-y-scroll h-full"} : {})}>{children}</Tag>
    )
}

export default memo(LayoutWrapper)
