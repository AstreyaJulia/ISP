import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Markdown from 'markdown-to-jsx';
import Card from '../../../Card';
import LoadingButton from '../../../LoadingButton';
import { classNames } from '../../../../utils/classNames';
import { FormProvider, RHFMultiCheckbox, RHFRadioGroup } from '../../../hook-form';

const Quiz = ({ steps, answers }) => {

  const [testResults, setTestResults] = useState(null);

  const mdOptions = {
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
      pre: {
        props: {
          className: 'flex text-white px-4 py-5 bg-slate-800 rounded-md overflow-x-auto',
        },
      },
      code: {
        props: {
          className: 'px-0.5 text-slate-600 py-0.5 px-1 bg-slate-400/10 rounded-sm border border-slate-300',
        },
      },
      blockquote: {
        props: {
          className:
            'px-5 py-6 border-l-8 border-indigo-500 dark:border-indigo-600 bg-indigo-500/20 rounded-md my-5',
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
      p: {
        props: {
          className: 'text-base',
        },
      },
    },
  };

  const questionSchema = Yup.lazy(() => {
    const shapes = {};

    // eslint-disable-next-line
    steps.map((step) => step.type === 'single' ? shapes[step.value] = Yup.string().nullable().required('Выберите ответ') : shapes[step.value] = Yup.array().min(1, 'Выберите хотя бы 1 ответ').required('Выберите ответы'));
    return Yup.object().shape(shapes);
  });

  const methods = useForm({
    resolver: yupResolver(questionSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    setTestResults(null);
    return () => {
      setTestResults(null);
    };
    // eslint-disable-next-line
  }, []);

  /** Рендер результатов ответов
   * @param results
   * @param question
   * @returns {JSX.Element}
   */
  const renderResult = (results, question) => {
    if (Array.isArray(results[question.value])) {
      if (results[question.value].some((a) => a === false)) {
        return <p className='text-red-500 text-base font-medium mt-2'>Неправильный ответ</p>;
      }
      return <p className='text-green-500 text-base font-medium mt-2'>Верный ответ</p>;
    }
    return testResults[question.value] === true ?
      <p className='text-green-500 text-base font-medium mt-2'>Верный ответ</p> :
      <p className='text-red-500 text-base font-medium mt-2'>Неправильный ответ</p>;
  };

  const makeQuestion = (question) =>
    <div key={question.value} className='px-5 py-4 flex flex-col rounded-md bg-slate-100 dark:bg-slate-800'>
      <div className='text-md font-medium text-gray-900'>
        <Markdown
          options={{ ...mdOptions }}
        >
          {question.label}
        </Markdown></div>
      <legend className='sr-only'>{question.label}</legend>

      {question.type === 'single' ?
        <RHFRadioGroup size='6' color='indigo' disabled={testResults !== null} name={question.value}
                       options={question.answers} defaultValue={null} />
        : <RHFMultiCheckbox size='6' color='indigo' disabled={testResults !== null} name={question.value}
                            options={question.answers} defaultValue={[]} />}
      { /* eslint-disable-next-line */}
      {testResults !== null ? renderResult(testResults, question) : ''}
    </div>;

  const resetHandle = () => {
    setTestResults(null);
    reset();
  };

  const checkAnswers = (data) => {
    const keys = Object.keys(answers);
    const resultArray = {};
    keys.forEach((key1) => {
      if (Array.isArray(data[key1])) {
        const subArray = [];
        data[key1].map((item, key2) => subArray.push(answers[key1].includes(data[key1][key2])));
        if (answers[key1].filter(x => !data[key1].includes(x)).length > 0) {
          subArray.push(data[key1].includes(answers[key1].filter(x => !data[key1].includes(x))));
        }
        resultArray[key1] = subArray;
      } else {
        resultArray[key1] = data[key1] === answers[key1];
      }
    });
    return resultArray;
  };

  const onSubmit = (data) => {
    const check = checkAnswers(data);
    setTestResults(check);
  };

  return <Card classname='p-4 mt-5'>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

      <div className='flex flex-col gap-5'>
        {steps.map((question) => makeQuestion(question))}
      </div>

      <div className='flex items-center gap-5'>
        <LoadingButton
          disabled={testResults !== null}
          type='submit'
          isLoading={isSubmitting}
          label={testResults !== null ? 'Готово' : 'Отправить'}
          classes={classNames(
            isSubmitting || testResults !== null
              ? 'bg-slate-600 hover:bg-slate-600 focus:ring-offset-0'
              : 'bg-green-600 hover:bg-green-700 focus:ring-offset-2 focus:ring-green-500',
            'text-sm font-medium mt-5 text-white focus:outline-none',
          )}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
               stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>

        </LoadingButton>
        <button type='button' onClick={resetHandle}
                className='border border-slate-300 mt-5 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2'>{testResults !== null ? 'Заново' : 'Сбросить выбранное'}</button>

      </div>


    </FormProvider>
  </Card>
    ;
};

Quiz.propTypes = {
  /** React Prop Types */
  prop: PropTypes.string,
};

export default Quiz;
