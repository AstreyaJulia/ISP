import React, {Fragment, useContext} from "react";
import {Helmet} from "react-helmet";
import config from "../../../config";
import PageHeader from "../../../components/PageHeader";

/** Контекст для передачи в дочерние компоненты
 * @type {React.Context<null>} */
const ContextContainer = React.createContext(null);

/* Пример использования
<ContentLayoutBlank boxed={true} title="Заголовок" breadcrumbs={breadcrumbs} header="Заголовок">
    <ContentLayoutBlank.Header>
    <Содержимое заголовка>
    </ContentLayoutBlank.Header>
    <ContentLayoutBlank.Body>
    <Содержимое страницы>
    </ContentLayoutBlank.Body>
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
export default function ContentLayoutBlank({children, boxed, title, breadcrumbs, header}) {
    return (
        <Fragment>
            {/* Контекст для передачи в дочерние элементы */}
            <ContextContainer.Provider value={{boxed, header, breadcrumbs}}>
                <Helmet>
                    <title>{config.APP_NAME} - {title}</title>
                </Helmet>
                <div className="overflow-hidden">
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
    const {boxed} = useContext(ContextContainer);
    return (
        <>
            <div
                className={["main-content min-h-full flex overflow-hidden relative p-4 pt-0 xl:pt-4", boxed ? "max-w-7xl mx-auto" : ""].join(" ")}>
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
    const {breadcrumbs, header} = useContext(ContextContainer);
    return (
        <>
            <PageHeader pages={breadcrumbs} classname="breadcrumbs p-4 pb-4 xl:pb-0" header={header}>
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
ContentLayoutBlank.Body = (props) => Body(props);

/** Компонент заголовка содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutBlank.Header = (props) => Header(props);