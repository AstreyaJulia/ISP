import React, { useState } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import { users } from '../../@mock/SampleData';
import { Avatar } from '../../components/Avatar';
import { getInitialsOnly } from '../../utils/getInitials';
import { getAvatarColor } from '../../utils/getAvatarColor';

const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
];

const Profile = () => {
  const breadcrumbs = [{ name: 'Мой профиль', href: '', current: true }];
  const [user, setUser] = useState(users[2]);

  return (
    <BasicPage title='Мой профиль' className='main-content max-w-6xl mx-auto px-5'>
      <PageHeader pages={breadcrumbs} header='Мой профиль' />
      <div
        className='mt-7 max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
        <div className='flex items-center space-x-5'>
          <div className='flex-shrink-0'>
            <div className='relative'>
              <Avatar
                size='16'
                name={getInitialsOnly(user?.fullname)}
                color={user?.fullname ? getAvatarColor(user?.fullname) : 'indigo'}
                avatar={user?.avatar}
                shape='circle'
              />
              <span className='absolute inset-0 shadow-inner rounded-full' aria-hidden='true' />
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>{user.fullname}</h1>
            <p className='text-sm font-medium text-gray-500'>
              {user.profession}
              {user.judge ? <span className='text-indigo-600 ml-1'>
                {user.judge}
              </span> : ''}
            </p>
          </div>
        </div>

        <div
          className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3'>
          <button
            type='button'
            className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
          >
            Сбросить пароль
          </button>
        </div>
      </div>

      <div
        className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
        <div className='space-y-6 lg:col-start-1 lg:col-span-2'>
          <section aria-labelledby='applicant-information-title'>
            <div className='bg-white shadow sm:rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h2 id='applicant-information-title' className='text-lg leading-6 font-medium text-gray-900'>
                  Applicant Information
                </h2>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p>
              </div>
              <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Application for</dt>
                    <dd className='mt-1 text-sm text-gray-900'>Backend Developer</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                    <dd className='mt-1 text-sm text-gray-900'>ricardocooper@example.com</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Salary expectation</dt>
                    <dd className='mt-1 text-sm text-gray-900'>$120,000</dd>
                  </div>
                  <div className='sm:col-span-1'>
                    <dt className='text-sm font-medium text-gray-500'>Phone</dt>
                    <dd className='mt-1 text-sm text-gray-900'>+1 555-555-5555</dd>
                  </div>
                  <div className='sm:col-span-2'>
                    <dt className='text-sm font-medium text-gray-500'>About</dt>
                    <dd className='mt-1 text-sm text-gray-900'>
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                      Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                      proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                  <div className='sm:col-span-2'>
                    <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
                    <dd className='mt-1 text-sm text-gray-900'>
                      <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                        {attachments.map((attachment) => (
                          <li
                            key={attachment.name}
                            className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'
                          >
                            <div className='w-0 flex-1 flex items-center'>
                              <span className='ml-2 flex-1 w-0 truncate'>{attachment.name}</span>
                            </div>
                            <div className='ml-4 flex-shrink-0'>
                              <a href={attachment.href} className='font-medium text-blue-600 hover:text-blue-500'>
                                Download
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <a
                  href='#'
                  className='block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg'
                >
                  Read full application
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </BasicPage>
  );
};

export default Profile;
