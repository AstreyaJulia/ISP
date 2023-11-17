import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { demoSteps } from '../../@mock/SampleData';
import useAuth from '../../hooks/useAuth';

const Faq = () => {
  const [activeStep, setActiveStep] = useState(3);

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const getStepIcon = (stepId, currentStepId) => {
    if (parseInt(currentStepId, 10) > parseInt(stepId, 10)) {
      return (
        <span className="shrink-0 bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
          <svg xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 24 24'
               fill='currentColor'
               className='h-5 w-5'
          ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </span>
      );
    }
    if (parseInt(currentStepId, 10) < parseInt(stepId, 10)) {
      return (
        <span className="shrink-0 bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center text-gray-700">
       {parseInt(stepId, 10) + 1}
        </span>
      );
    }
    return (
      <span className="shrink-0 bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
       {parseInt(stepId, 10) + 1}
      </span>
    );
  };

  const sidebarLink = (item, key) => (
    <li key={item.id}>
      <div className="relative pb-8">
        {key !== demoSteps.length - 1 ? (
          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
        ) : null}
        <div className="relative flex space-x-3">
          <button
            type="button"
            onClick={() => setStepHandler(key)}
            className="gap-3 min-w-0 flex flex text-left bg-transparent border-0 text-sm text-gray-700 dark:text-gray-300 font-medium"
          >
            {getStepIcon(key, activeStep)}
            {item.title}
          </button>
        </div>
      </div>
    </li>
  );

  const getCourseStep = (id) => demoSteps.find((x) => x.id === id.toString());

  const setStepHandler = (id) => {
    setActiveStep(id);
  };

  const nextStepHandler = () => {
    if (activeStep < demoSteps.length - 1) setActiveStep(activeStep + 1);
  };

  const prevStepHandler = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <main className="flex-1 flex overflow-hidden">
      {/* Primary column */}
      <section
        aria-labelledby="primary-heading"
        className="relative min-w-0 flex-1 full-height-course flex flex-col lg:order-last mb-14 "
      >
        <div className="rounded-lg p-6 bg-white dark:bg-gray-900 shadow m-6 min-w-0 flex-1 flex flex-col overflow-y-auto lg:order-last 2xl:max-w-5xl 2xl:mx-auto">
          <PerfectScrollbar className="main-course-content ps__show" options={{ wheelPropagation: false }}>
            <div className="h-full main-content">
              <Markdown
                options={{
                  wrapper: 'article',
                  overrides: {
                    h1: {
                      props: {
                        className: 'text-4xl xl:text-5xl font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    h2: {
                      props: {
                        className: 'text-3xl xl:text-4xl font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    h3: {
                      props: {
                        className: 'text-2xl xl:text-3xl font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    h4: {
                      props: {
                        className: 'text-xl xl:text-2xl font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    h5: {
                      props: {
                        className: 'text-lg xl:text-xl font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    h6: {
                      props: {
                        className: 'text-base xl:text-lg font-medium text-gray-800 dark:text-gray-50',
                      },
                    },
                    code: {
                      props: {
                        className: 'flex text-base my-5 text-white px-4 py-5 bg-gray-800 rounded-md overflow-x-auto',
                      },
                    },
                    blockquote: {
                      props: {
                        className:
                          'text-base px-5 py-6 border-l-8 border-indigo-500 dark:border-indigo-600 bg-indigo-500/20 rounded-md my-5',
                      },
                    },
                    p: {
                      props: {
                        className: 'my-4',
                      },
                    },
                    a: {
                      props: {
                        className: 'underline font-medium text-indigo-600 dark:text-indigo-500',
                      },
                    },
                    ul: {
                      props: {
                        className: 'my-5 pl-6 list-disc',
                      },
                    },
                    ol: {
                      props: {
                        className: 'my-5 pl-6',
                      },
                    },
                    li: {
                      props: {
                        className: 'my-2',
                      },
                    },
                    details: {
                      props: {
                        className: 'my-5 p-4 bg-red-600/20 rounded-md',
                      },
                    },
                    summary: {
                      props: {
                        className: 'text-red-700 hover:cursor-pointer',
                      },
                    },
                    caption: {
                      props: {
                        className: 'p-2 text-left',
                      },
                    },
                    table: {
                      props: {
                        className: 'border-2 border-gray-300 dark:border-gray-700',
                      },
                    },
                    td: {
                      props: {
                        className: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
                      },
                    },
                    th: {
                      props: {
                        className: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
                      },
                    },
                    form: {
                      props: {
                        className: 'py-1 px-2',
                      },
                    },
                    label: {
                      props: {
                        className: 'py-1 px-2',
                      },
                    },
                    legend: {
                      props: {
                        className: 'py-1',
                      },
                    },
                    hgroup: {
                      props: {
                        className: 'pl-3 border-l-8 border-cyan-500 dark:border-cyan-600 my-6',
                      },
                    },
                    hr: {
                      props: {
                        className: 'border-gray-300 dark:border-gray-700 my-3',
                      },
                    },
                    mark: {
                      props: {
                        className: 'bg-amber-500 dark:bg-amber-600',
                      },
                    },
                    rt: {
                      props: {
                        className: 'text-xs',
                      },
                    },
                  },
                }}
              >

                {getCourseStep(activeStep).content}

              </Markdown>
            </div>
          </PerfectScrollbar>
        </div>

        <div className="w-full absolute -bottom-8 right-0 flex items-center justify-center">
          <div className="flex items-center mx-auto justify-center">
            <button
              type="button"
              onClick={prevStepHandler}
              className="rounded-l-lg bg-indigo-600 text-white h-10 py-2 px-4"
            >
              Назад
            </button>
            <span className="bg-indigo-600 text-white h-10 min-w-10 flex items-center justify-center py-2 px-4">
              {parseInt(activeStep, 10) + 1} / {demoSteps.length}
            </span>
            <button
              type="button"
              onClick={nextStepHandler}
              className="rounded-r-lg bg-indigo-600 text-white h-10 py-2 px-4"
            >
              Вперед
            </button>
          </div>
        </div>

      </section>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
        <div className="h-full relative flex flex-col w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto">
          <nav className="p-2 mt-3 ml-3" aria-label="Назад">
            <Link to={-1} className="flex items-center text-base font-medium text-gray-600 dark:text-gray-300">
              <svg
                className="flex-shrink-0 -ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Назад
            </Link>
          </nav>
          <p className="px-4 pt-3 flex text-xl text-gray-800 dark:text-gray-200 font-medium">Содержание:</p>
          <PerfectScrollbar className="main-course-content ps__show" options={{ wheelPropagation: false }}>
          <ul className="-mb-8 px-4 py-6">{demoSteps.map((item, key) => sidebarLink(item, key, 0))}</ul>
          </PerfectScrollbar>
        </div>
      </aside>
    </main>
  );
};

export default Faq;