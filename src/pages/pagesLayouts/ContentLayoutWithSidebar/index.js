import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../../config";
import PageHeader from "../../../components/PageHeader";
import { classNames } from "../../../utils/classNames";

/** Контекст для передачи в дочерние компоненты
 * @type {React.Context<null>} */
const ContextContainer = React.createContext(null);

/* Пример использования
<ContentLayoutWithSidebar boxed={true}>
    <ContentLayoutWithSidebar.Sidebar>
    <Содержимое меню>
    </ContentLayoutWithSidebar.Sidebar>
    <ContentLayoutWithSidebar.Body>
    <Содержимое страницы>
    </ContentLayoutWithSidebar.Body>
</ContentLayoutWithSidebar>
*/

/** Раскладка содержимого с сайдбаром
 * @param children
 * @param boxed - (bool) узкое содержимое / на всю ширину
 * @param title
 * @param breadcrumbs
 * @param header
 * @param sidebarSize
 * @param fullHeight
 * @param meta
 * @returns {JSX.Element}
 * @constructor */
export default function ContentLayoutWithSidebar({
                                                   children,
                                                   boxed,
                                                   title,
                                                   breadcrumbs,
                                                   header,
                                                   sidebarSize,
                                                   fullHeight, meta
                                                 }) {

  /** Стейт сайдбара */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Контекст для передачи в дочерние элементы */}
      <ContextContainer.Provider value={{ sidebarOpen, setSidebarOpen, boxed, header, sidebarSize, meta }}>
        <Helmet>
          <title>{`${title} | ${APP_NAME}`}</title>
          {meta}
        </Helmet>
        <div
          className={fullHeight ? "main-content max-w-6xl mx-auto px-3 full-height-page flex flex-col" : "min-h-full"}>
          <PageHeader pages={breadcrumbs} header={header}>
            {/* Сюда можно тоже вставить разметку, например, кнопки */}
          </PageHeader>
          <div
            className={classNames(" flex-grow w-full flex overflow-y-auto relative rounded-lg mt-5", boxed ? "max-w-6xl mx-auto" : "")}>
            {/* Дочерние компоненты */}
            {children}
          </div>
        </div>
      </ContextContainer.Provider>
    </>
  );
}

/** Отрисовщик содержимого
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Body = (props) => {
  const { setSidebarOpen } = useContext(ContextContainer);
  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col flex-1">
          <div className="z-10 lg:hidden p-1 bg-gray-100 dark:bg-gray-800">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Открыть меню</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div
            className={classNames("flex-1 z-0 border border-gray-200 dark:border-gray-600 rounded-lg lg:rounded-l-none lg:border-l-0", props.color === "white" ? "bg-white dark:bg-gray-900" : "bg-gray-100 dark:bg-gray-800")}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

/** Отрисовщик сайдбара
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = (props) => {
  const { sidebarOpen, setSidebarOpen, boxed, header, sidebarSize } = useContext(ContextContainer);

  const sidebarSizes = {
    small: {
      mobile: "max-w-xs",
      desktop: "lg:w-60"
    },
    medium: {
      mobile: "max-w-sm",
      desktop: "lg:w-72"
    },
    large: {
      mobile: "max-w-md",
      desktop: "lg:w-96"
    }
  };

  return (
    <>
      {/** Мобильное меню */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed top-16 left-0 bottom-0 right-0 flex z-40 xl:hidden"
                onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className={["relative flex-1 flex flex-col w-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg", sidebarSizes[sidebarSize].mobile].join(" ")}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Закрыть меню</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-6 w-6 text-gray-700 dark:text-gray-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 overflow-y-auto">
                {props.children}
              </div>
            </div>
          </Transition.Child>
          <div
            className="flex-shrink-0 w-14">{/** Заглушка, не позволяющая меню схлопываться, чтобы вместить кнопку меню */}</div>
        </Dialog>
      </Transition.Root>

      {/** Десктопное меню */}
      <div className={["hidden lg:flex lg:flex-col", sidebarSizes[sidebarSize].desktop].join(" ")}>
        <div
          className={["flex-1 flex flex-col min-h-0 border-t border-b border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 border-l rounded-l-lg", boxed ? "" : ""].join(" ")}>
          <div className="flex-1 flex flex-col">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

/** Компонент меню/сайдбара, в разметке первый
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutWithSidebar.Sidebar = (props) => Sidebar(props);

/** Компонент содержимого страницы
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
ContentLayoutWithSidebar.Body = (props) => Body(props);
