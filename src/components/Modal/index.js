import {Dialog, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {classNames} from '../../utils/classNames';
import Typography from "../Typography";

/** Контекст для передачи в дочерние компоненты
 * @type {React.Context<null>} */
const ContextContainer = React.createContext(null);

const Modal = ({open, setOpen, onModalClose = null, children, title, size, buttonRef = null}) => {

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
        <ContextContainer.Provider value={{open, setOpen, onModalClose, title, size, buttonRef}}>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}
                        initialFocus={buttonRef}>
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
                            <Dialog.Overlay className='fixed inset-0 bg-gray-800 bg-opacity-70 transition-opacity'/>
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
                                            <path strokeLinecap='round' strokeLinejoin='round'
                                                  d='M6 18L18 6M6 6l12 12'/>
                                        </svg>
                                    </button>
                                </div>
                                <div className='flex items-start'>
                                    <div className='w-full'>
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

Modal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    onModalClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    size: PropTypes.string,
    buttonRef: PropTypes.node
}

const Body = ({children}) => <div className='w-full'>
    {children}
</div>;

Body.propTypes = {
    children: PropTypes.node
}

const Toolbar = ({children, title = null, subtitle = null, icon = null, titleVariant = 'h5'}) => <div
    className='flex flex-col'>

    <div className='flex items-center gap-2'>
        {children}
    </div>

    <div className='flex items-start gap-2'>

        {icon ? <div
            className="flex-shrink-0 flex items-center justify-center">
            {icon}
        </div> : ''}

        <div className='flex flex-col'>
            {title ? <Typography variant={titleVariant} classname='line-clamp-1 min-w-min pr-8'>{title}</Typography> : ""}
            {subtitle ? <div className='w-full subtitle'>
                {subtitle}
            </div> : ''}
        </div>

    </div>
</div>;

Toolbar.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.node,
    titleVariant: PropTypes.string
}

Modal.Toolbar = (props) => Toolbar(props);
Modal.Body = (props) => Body(props);

export default Modal;