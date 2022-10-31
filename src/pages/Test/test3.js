import React, {useState} from 'react';
import Markdown from 'markdown-to-jsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {demoSteps} from '../../@mock/SampleData';
import Card from '../../components/Card';

const Faq = () => {
    const breadcrumbs = [{name: 'База знаний', href: '', current: true}];

    const [activeStep, setActiveStep] = useState(3);

    const getStepIcon = (stepId, currentStepId) => {
        if (parseInt(currentStepId, 10) > parseInt(stepId, 10)) {
            return <span
                className='shrink-0 bg-green-500 h-8 w-8 rounded-full flex items-center justify-center'
            >
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
             className='h-5 w-5 text-white'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5'/>
        </svg>
      </span>;
        }
        if (parseInt(currentStepId, 10) < parseInt(stepId, 10)) {
            return <span
                className='shrink-0 bg-slate-400 h-8 w-8 rounded-full flex items-center justify-center'
            >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className='h-5 w-5 text-white'>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
</svg>
      </span>;
        }
        return <span
            className='shrink-0 bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center'
        >
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
             className='h-5 w-5 text-white'>
  <path strokeLinecap='round' strokeLinejoin='round'
        d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'/>
</svg>
      </span>
    };

    const sidebarLink = (item, key) => <li key={item.id}>
        <div className='relative pb-8'>
            {key !== demoSteps.length - 1 ? (
                <span className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true'/>
            ) : null}
            <div className='relative flex space-x-3'>
                <button type='button' onClick={() => setStepHandler(key)}
                        className='gap-3 min-w-0 flex flex text-left bg-transparent border-0 text-sm text-gray-700 font-medium'>
                    {getStepIcon(key, activeStep)}
                    {item.title}
                </button>
            </div>
        </div>
    </li>;

    const getCourseStep = (id) => demoSteps.find(x => x.id === id.toString());

    const setStepHandler = (id) => {
        setActiveStep(id);
    }

    const nextStepHandler = () => {
        if (activeStep < demoSteps.length - 1) setActiveStep(activeStep + 1);
    }

    const prevStepHandler = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1);
    }

    return (
        <main className="flex-1 flex overflow-hidden">
            {/* Primary column */}
            <section
                aria-labelledby="primary-heading"
                className="relative min-w-0 flex-1 full-height-course flex flex-col lg:order-last mb-14 "
            >
              <div className="bg-white m-6 min-w-0 flex-1 flex flex-col overflow-y-auto lg:order-last ">
                <PerfectScrollbar className='main-course-content ps__show' options={{wheelPropagation: false}}>

                  <div className='h-full p-6'>
                    <Markdown
                        options={{
                          wrapper: 'article',
                          overrides: {
                            h1: {
                              props: {
                                className: 'flex text-4xl my-4 text-gray-800 font-medium',
                              },
                            }, h2: {
                              props: {
                                className: 'flex text-3xl my-4 text-gray-800 font-medium',
                              },
                            }, h3: {
                              props: {
                                className: 'flex text-2xl my-4 text-gray-800 font-medium',
                              },
                            }, h4: {
                              props: {
                                className: 'flex text-xl my-4 text-gray-800 font-medium',
                              },
                            }, h5: {
                              props: {
                                className: 'flex text-base my-4 text-gray-800 font-medium uppercase',
                              },
                            }, h6: {
                              props: {
                                className: 'flex text-sm my-4 text-gray-800 font-medium uppercase',
                              },
                            },
                            code: {
                              props: {
                                className: 'flex text-base my-5 text-white font-monospace px-4 py-5 bg-slate-800 rounded-md',
                              },
                            },
                              blockquote: {
                              props: {
                                className: 'flex text-base px-5 py-6 border-l-8 border-indigo-500 bg-indigo-500/20 rounded-md my-5',
                              },
                            },
                            p: {
                              props: {
                                className: 'flex text-base text-gray-800 my-4',
                              },
                            },
                            a: {
                              props: {
                                className: 'flex text-base underline ml-1 font-medium text-indigo-600',
                              },
                            },
                            ul: {
                              props: {
                                className: 'text-base text-gray-800 my-5 pl-6 list-disc',
                              },
                            },
                            li: {
                              props: {
                                className: 'my-2',
                              },
                            },
                              details: {
                                  props: {
                                      className: 'my-5 p-4 bg-red-600/20 rounded-md font-medium',
                                  },
                              },
                              summary: {
                                  props: {
                                      className: 'text-red-700',
                                  },
                              }
                          },
                        }}
                    >
                      {getCourseStep(activeStep).content}
                    </Markdown>
                  </div>

                </PerfectScrollbar>
              </div>
                <div className='w-full absolute -bottom-8 right-0 flex items-center justify-center'>
                    <div className='flex items-center mx-auto justify-center'>
                        <button type='button' onClick={prevStepHandler}
                                className='rounded-l-lg bg-indigo-600 text-white h-10 py-2 px-4'>Назад
                        </button>
                        <span
                            className='bg-indigo-600 text-white h-10 min-w-10 flex items-center justify-center py-2 px-4'>{parseInt(activeStep, 10) + 1} / {demoSteps.length}</span>
                        <button type='button' onClick={nextStepHandler}
                                className='rounded-r-lg bg-indigo-600 text-white h-10 py-2 px-4'>Вперед
                        </button>

                    </div>
                </div>
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <aside className="ml-5 hidden lg:block lg:flex-shrink-0 lg:order-first">
                <div className="h-full relative flex flex-col w-80 border-x border-gray-200 bg-white overflow-y-auto">
                  <p className='px-4 pt-3 flex text-xl text-gray-800 font-medium'>Содержание:</p>
                  <ul className='-mb-8 px-4 py-6'>{demoSteps.map((item, key) => sidebarLink(item, key, 0))}</ul>
                </div>
            </aside>
        </main>
    );
};

export default Faq;
