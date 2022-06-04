import React, {useEffect, useState} from "react";
import Proptypes from "prop-types";
import {ArrowUp} from "react-feather";

const ScrollTop = props => {

    const {showOffset, scrollBehaviour, ...rest} = props

    /** Стейт видимости */
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (window) {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset >= showOffset) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            })
        }
        // eslint-disable-next-line
    }, [])

    const handleScrollToTop = () => {
        window.scroll({top: 0, behavior: scrollBehaviour})
    }

    return (
        visible && (
            <button
                className="flex fixed px-3 py-2 w-12 h-12 rounded-lg z-50 bottom-6 right-6 items-center justify-center hover:bg-indigo-700"
                onClick={handleScrollToTop} {...rest}>
                <ArrowUp size={14}/>
            </button>
        )
    )
}

export default ScrollTop

ScrollTop.propTypes = {
    showOffset: Proptypes.number,
    scrollBehaviour: Proptypes.oneOf(["smooth", "instant", "auto"])
}

ScrollTop.defaultProps = {
    scrollBehaviour: "smooth"
}
