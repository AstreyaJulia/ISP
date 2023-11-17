import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const SlideOverStickyFooter = ({ open, setOpen, onSlideOverClose, children, title, buttonRef, size = null }) => {

  const modalSizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl"
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen} initialFocus={buttonRef}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className={classNames(modalSizes[size], "pointer-events-auto w-screen")}>
                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-gray-900 shadow-xl">
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title
                          className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => onSlideOverClose()}
                          >
                            <span className="sr-only">Закрыть</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="w-full">
                        {children}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

SlideOverStickyFooter.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  onSlideOverClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  buttonRef: PropTypes.node,
  size: PropTypes.string
};

SlideOverStickyFooter.defaultProps = {
  setOpen: () => null,
  onSlideOverClose: () => null,
  children: null,
  title: '',
  buttonRef: null,
  size: 'xl'
};

export default SlideOverStickyFooter;