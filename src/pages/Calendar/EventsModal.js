import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const EventsModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
              <div className='bg-white px-3 pt-2 pb-5'>
                <div className='sm:flex sm:items-start w-full'>
                  <div className='mt-3 sm:mt-0 sm:ml-3 sm:text-left w-full'>
                    <div className='flex items-center justify-end mb-3 gap-5'>

                      <div className='flex items-center justify-end gap-3'>
                        <button
                          type='button'
                          title='Редактировать'
                          className='p-2 bg-white rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                          onClick={setOpen}
                        >
                          <span className='sr-only'>Редактировать</span>
                          <svg xmlns='http://www.w3.org/2000/svg'
                               viewBox='0 0 24 24'
                               className='w-5 h-5'
                               fill='currentColor'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M5 18.08V19h.92l9.06-9.06-.92-.92z' opacity='.3' />
                            <path
                              d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z' />
                          </svg>

                        </button>

                        <button
                          type='button'
                          title='Удалить'
                          className='p-2 bg-white rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                          onClick={setOpen}
                        >
                          <span className='sr-only'>Удалить</span>
                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5'
                               fill='currentColor'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M8 9h8v10H8z' opacity='.3' />
                            <path
                              d='M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z' />
                          </svg>

                        </button>
                      </div>

                      <button
                        type='button'
                        title='Закрыть'
                        className='p-2 bg-white rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        onClick={setOpen}
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

                    <Dialog.Title as='div' className='flex gap-2'>
                      <div className='flex justify-center w-10 shrink-0 pt-1'>
                        <span className='rounded-md bg-red-500 w-4 h-4 flex items-center shrink-0' />
                      </div>
                      <p className='text-xl leading-6 font-medium text-gray-800'>Какой-то праздник</p>
                    </Dialog.Title>
                    <div className='mt-6 flex gap-3'>
                      <div className='flex justify-center w-10 shrink-0 pt-1'>
                        <span className='rounded-full bg-red-600 w-4 h-4 flex items-center shrink-0' />
                      </div>
                      <p className='text-sm text-gray-500 flex'>Праздники</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

EventsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default EventsModal;
