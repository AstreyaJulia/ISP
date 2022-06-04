import {useDispatch, useSelector} from "react-redux";
import {handleLastLayout, handleLayout} from "../../store/layout";

export const useLayout = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.layout);

    const setLayout = value => {
        dispatch(handleLayout(value));
    }

    const setLastLayout = value => {
        dispatch(handleLastLayout(value));
    }

    return {layout: store.layout, setLayout, lastLayout: store.lastLayout, setLastLayout}
}
