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
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>
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
                            <path d='M0 0h24v24H0V0z' fill='none'/>
                            <path d='M5 18.08V19h.92l9.06-9.06-.92-.92z' opacity='.3'/>
                            <path
                              d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'/>
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
                            <path d='M0 0h24v24H0V0z' fill='none'/>
                            <path d='M8 9h8v10H8z' opacity='.3'/>
                            <path
                              d='M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z'/>
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
                          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
                        </svg>
                      </button>
                    </div>

                    <Dialog.Title as='div' className='flex gap-2'>
                      <div className='flex justify-center w-10 shrink-0 pt-1'>
                        <span className='rounded-md bg-red-500 w-4 h-4 flex items-center shrink-0'/>
                      </div>
                      <p className='text-xl leading-6 font-medium text-gray-800'>Какой-то праздник</p>
                    </Dialog.Title>
                    <div className='mt-3 ml-4 flex items-center gap-1 text-gray-500'>
                      <div className='flex justify-center w-10 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4'
                             fill="currentColor">
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path
                            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"/>
                          <path d="M4 5.01h16V8H4z" opacity=".3"/>
                        </svg>
                      </div>
                      <p className='text-base flex'>Праздники</p>
                    </div>

                    <div className='mt-3 ml-4 flex items-center gap-1 text-gray-500'>
                      <div className='flex justify-center w-10 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4'
                             viewBox="0 0 24 24" fill="currentColor">
                          <rect fill="none" height="24" width="24"/>
                          <g opacity=".3">
                            <path
                              d="M8.07,16c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69 H8.07z M12,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8"/>
                          </g>
                          <g>
                            <path
                              d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/>
                          </g>
                        </svg>
                      </div>
                      <p className='text-base flex'>3 сотрудника</p>
                    </div>

                    <div className='mt-3 ml-4 flex items-center gap-1 text-gray-500'>
                      <div className='flex justify-center w-10 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                             className='w-4 h-4'>
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"/>
                          <circle cx="12" cy="8" opacity=".3" r="2"/>
                          <path
                            d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                        </svg>
                      </div>
                      <p className='text-base flex'>Только я</p>
                    </div>

                    <div className='mt-3 ml-4 flex items-center gap-1 text-gray-500'>
                      <div className='flex justify-center w-10 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                             className='w-4 h-4'><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M16.2,16.2 L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z" opacity=".3"/><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"/></g></g></svg>
                      </div>
                      <p className='text-base flex'>09:00 17 ноября 2022, четверг</p>
                    </div>

                    <div className='mt-3 ml-4 flex items-center gap-1 text-gray-500'>
                      <div className='flex justify-center w-10 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                             className='w-4 h-4'><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M16.2,16.2 L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z" opacity=".3"/><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"/></g></g></svg>
                      </div>
                      <p className='text-base flex'>17 ноября 2022, четверг - 18 ноября 2022, пятница</p>
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
