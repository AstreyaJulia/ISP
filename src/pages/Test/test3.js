import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { demoSteps } from '../../@mock/SampleData';

const Faq = () => {
  const [activeStep, setActiveStep] = useState(3);

  const getStepIcon = (stepId, currentStepId) => {
    if (parseInt(currentStepId, 10) > parseInt(stepId, 10)) {
      return (
        <span className="shrink-0 bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
      );
    }
    if (parseInt(currentStepId, 10) < parseInt(stepId, 10)) {
      return (
        <span className="shrink-0 bg-slate-400 h-8 w-8 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </span>
      );
    }
    return (
      <span className="shrink-0 bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
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
        <div className="bg-white dark:bg-slate-900 m-6 min-w-0 flex-1 flex flex-col overflow-y-auto lg:order-last 2xl:max-w-5xl 2xl:mx-auto">
          <PerfectScrollbar className="main-course-content ps__show" options={{ wheelPropagation: false }}>
            <div className="h-full p-6">
              <Markdown
                options={{
                  wrapper: 'article',
                  overrides: {
                    h1: {
                      props: {
                        className: 'xl:text-5xl lg:text-4xl sm:text-3xl font-bold',
                      },
                    },
                    h2: {
                      props: {
                        className: 'xl:text-4xl lg:text-3xl sm:text-2xl font-bold',
                      },
                    },
                    h3: {
                      props: {
                        className: 'xl:text-3xl lg:text-2xl sm:text-xl font-bold',
                      },
                    },
                    h4: {
                      props: {
                        className: 'xl:text-2xl lg:text-xl sm:text-lg font-bold',
                      },
                    },
                    h5: {
                      props: {
                        className: 'xl:text-xl lg:text-lg sm:text-base font-bold',
                      },
                    },
                    h6: {
                      props: {
                        className: 'xl:text-lg lg:text-base sm:text-base font-bold',
                      },
                    },
                    code: {
                      props: {
                        className: 'flex text-base my-5 text-white px-4 py-5 bg-slate-800 rounded-md overflow-x-auto',
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
      <aside className="ml-5 hidden lg:block lg:flex-shrink-0 lg:order-first">
        <div className="h-full relative flex flex-col w-80 border-x border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-y-auto">
          <nav className="ml-2 mt-1" aria-label="Назад">
            <Link to={-1} className="flex items-center text-sm font-medium text-indigo-500 dark:text-indigo-400 p-2">
              <svg
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
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
          <ul className="-mb-8 px-4 py-6">{demoSteps.map((item, key) => sidebarLink(item, key, 0))}</ul>
        </div>
      </aside>
    </main>
  );
};

export default Faq;
