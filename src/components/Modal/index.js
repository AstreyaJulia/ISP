import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { classNames } from '../../utils/classNames';

/** Контекст для передачи в дочерние компоненты
 * @type {React.Context<null>} */
const ContextContainer = React.createContext(null);

const Modal = ({ open, setOpen, onModalClose = null, children, title, size, buttonRef = null }) => {

  const modalSizes = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
  };

  return (
    <ContextContainer.Provider value={{ open, setOpen, onModalClose, title, size, buttonRef }}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen} initialFocus={buttonRef}>
          <div className='min-h-screen text-center block p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-800 bg-opacity-70 transition-opacity' />
            </Transition.Child>

            <span className='inline-block align-middle h-screen' aria-hidden='true'>
          &#8203;
        </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-0 scale-95'
              enterTo='opacity-100 translate-y-0 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 scale-100'
              leaveTo='opacity-0 translate-y-0 scale-95'
            >
              <div
                className={classNames(modalSizes[size], 'relative inline-block bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle w-full p-6')}>
                <div className='block absolute top-0 right-0 pt-4 pr-4'>
                  <button
                    type='button'
                    className='bg-transparent rounded-md text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    onClick={() => onModalClose()}
                  >
                    <span className='sr-only'>Закрыть</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-start'>
                  <div className='text-center w-full'>
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </ContextContainer.Provider>
  );
};

const Body = ({ children }) => <div className='w-full'>
  {children}
</div>;

const Toolbar = ({ children, title }) => <div className='flex items-center justify-between'>
  <Dialog.Title as='h3'
                className='text-lg xl:text-xl font-medium text-gray-800 dark:text-gray-50 flex'>
    {title}
  </Dialog.Title>
  <div className='flex items-center gap-2'>
    {children}
  </div>
</div>;

Modal.Toolbar = (props) => Toolbar(props);
Modal.Body = (props) => Body(props);

export default Modal;