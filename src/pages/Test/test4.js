import React from 'react';
import { Disclosure } from '@headlessui/react';
import { classNames } from '../../utils/classNames';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import { courtTree } from '../../@mock/SampleData';
import building from '../../assets/images/icons/building.png'
import floor from '../../assets/images/icons/floor.png'
import door from '../../assets/images/icons/door.png'
import desktop from '../../assets/images/icons/desktop.png'

const Faq = () => {
  const breadcrumbs = [{ name: 'Инвентаризация', href: '', current: true }];

  const icons = {
    building,
    floor,
    door,
    desktop
  }

  const sidebarLink = (item, key, count) => {
    count += 1;

    return item.children?.length > 0 ? (
      <Disclosure key={key}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                'pl-2 py-1 w-full flex items-center rounded-md shrink-0 w-full my-1',
                open
                  ? 'text-indigo-800 dark:text-indigo-200'
                  : 'text-slate-800 dark:text-slate-200'
              )}
            >
              <div className="flex grow items-center">
                <div className="flex flex-col items-start">
                  <p className="text-sm flex justify-start text-left mb-1 gap-2">
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                     :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    <span className='border-t border-gray-400 w-1 h-1 mt-3'/>
                    <img src={icons[item.icon]} alt='Значок' className='h-4 w-4 mt-1'/>
                    <span className="flex flex-wrap items-center">{item.title}</span>
                  </p>
                </div>
              </div>

            </Disclosure.Button>
            <Disclosure.Panel className={classNames(`ml-${count + 1}`, 'text-gray-500 my-1')}>
              {item.children?.length > 0 ? (
                item.children.map((item, key) => sidebarLink(item, key, count))
              ) : (
                <p className="text-sm pl-2 w-full flex rounded-md shrink-0 w-full gap-2">
                  <img src={icons[item.icon]} alt='Значок' className='h-4 w-4 mt-1'/>
                  <span>{item.title}</span>
                </p>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ) : (
      <p
        title={item.subtitle !== '' ? `${item.title} ${item.subtitle}` : item.title}
        key={key}
        className="text-sm py-1 flex justify-start text-left mb-1 text-slate-800 dark:text-slate-200 gap-2"
      >
        <img src={icons[item.icon]} alt='Значок' className='h-4 w-4 mt-1'/>
        <span>{item.title} {item.subtitle}</span>
      </p>
    );
  };

  return (
    <ContentLayoutWithSidebar
      boxed="true"
      title="База знаний"
      breadcrumbs={breadcrumbs}
      header="База знаний"
      sidebarSize="medium"
      fullHeight="true"
    >
      <ContentLayoutWithSidebar.Sidebar>
        <div className="p-3">{courtTree.map((item, key) => sidebarLink(item, key, 0))}</div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color="white" />
    </ContentLayoutWithSidebar>
  );
};

export default Faq;
