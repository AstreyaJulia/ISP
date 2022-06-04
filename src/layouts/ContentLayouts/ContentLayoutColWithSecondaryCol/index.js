import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import config from "../../../config";

/** Раскладка содержимого пустая
 * @param children - дочерние элементы
 * @param boxed - узкое зодержимое
 * @param title - meta заголовок страницы
 * @param header - заголовок содержимого
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContentLayoutColWithSecondaryCol({children, title, boxed}) {
    return (
        <Fragment>
            {/* Контекст для передачи в дочерние элементы */}
                <Helmet>
                    <title>{config.APP_NAME} - {title}</title>
                </Helmet>
                <div className={["main-content flex-1 flex overflow-hidden", boxed ? "max-w-7xl mx-auto" : ""].join(" ")}>
                    {/* Дочерние компоненты */}
                    {children}
                </div>
        </Fragment>
    )
}

/** Отрисовщик содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const MainCol = (props) => {
    return (
        <>
            <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first p-4"
            >
                {props.children}
            </section>
        </>
    )
}

/** Отрисовщик заголовка содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SecondaryCol = (props) => {
    return (
        <>
            <aside className="hidden lg:block lg:flex-shrink-0 lg:order-last p-4">
                <div className="h-full relative flex flex-col w-96 overflow-y-auto">
                    {props.children}
                </div>
            </aside>
        </>
    )
}

/** Компонент содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutColWithSecondaryCol.MainCol = (props) => MainCol(props);

/** Компонент заголовка содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutColWithSecondaryCol.SecondaryCol = (props) => SecondaryCol(props);