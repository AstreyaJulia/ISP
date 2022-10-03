import React, {useEffect, useState} from "react";
import Proptypes from "prop-types";

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-arrow-up">
                    <line x1="12" y1="19" x2="12" y2="5"/>
                    <polyline points="5 12 12 5 19 12"/>
                </svg>
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
