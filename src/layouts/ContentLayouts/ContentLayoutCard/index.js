import React, {Fragment, useContext} from "react";
import {Helmet} from "react-helmet";
import config from "../../../config";
import PageHeader from "../../../components/PageHeader";

/** Контекст для передачи в дочерние компоненты
 * @type {React.Context<null>} */
const ContextContainer = React.createContext(null);

/* Пример использования
<ContentLayoutCard boxed={true} title="Заголовок" breadcrumbs={breadcrumbs} header="Заголовок">
    <ContentLayoutCard.Header>
    <Содержимое заголовка>
    </ContentLayoutCard.Header>
    <ContentLayoutCard.Body>
    <Содержимое страницы>
    </ContentLayoutCard.Body>
</ContentLayoutBlank>
*/

/** Раскладка содержимого пустая
 * @param children - дочерние элементы
 * @param boxed - узкое зодержимое
 * @param title - meta заголовок страницы
 * @param breadcrumbs - навигация
 * @param header - заголовок содержимого
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContentLayoutCard({children, boxed, title, breadcrumbs, header}) {
    return (
        <Fragment>
            {/* Контекст для передачи в дочерние элементы */}
            <ContextContainer.Provider value={{boxed, header, breadcrumbs}}>
                <Helmet>
                    <title>{config.APP_NAME} - {title}</title>
                </Helmet>
                <div className="overflow-hidden p-4 h-full">
                    {/* Доочерние компоненты */}
                    {children}
                </div>
            </ContextContainer.Provider>
        </Fragment>
    )
}

/** Отрисовщик содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Body = (props) => {
    const {boxed, header} = useContext(ContextContainer);
    return (
        <>
            <div
                className={["main-content min-h-full flex-1 overflow-hidden mt-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 relative p-4", boxed ? "max-w-7xl mx-auto" : ""].join(" ")}>
                {header
                    ? <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold leading-7 text-gray-700 dark:text-gray-200 sm:text-2xl sm:truncate">
                            {header}
                        </h2>
                    </div>
                    : ""}
                <div
                    className="flex-1 z-0 overflow-y-auto">
                    {props.children}
                </div>
            </div>
        </>
    )
}

/** Отрисовщик заголовка содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {
    const {breadcrumbs} = useContext(ContextContainer);
    return (
        <>
            <PageHeader pages={breadcrumbs} classname="breadcrumbs" >
                {props.children}
            </PageHeader>
        </>
    )
}

/** Компонент содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutCard.Body = (props) => Body(props);

/** Компонент заголовка содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutCard.Header = (props) => Header(props);