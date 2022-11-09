import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import Markdown from 'markdown-to-jsx';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import {fNumber} from '../../utils/formatNumber';
import {BaseChartOptions} from '../../components/ApexCharts/chartsSettings';
import WidgetUsersBirthdays from '../../components/WidgetUsersBirthdays';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';
import { testSteps1, testSteps1answers } from '../../@mock/SampleData';
import {FormProvider, RHFMultiCheckbox, RHFRadioGroup} from '../../components/hook-form';
import LoadingButton from '../../components/LoadingButton';
import {classNames} from '../../utils/classNames';

const CHART_DATA = [4344, 5435, 1443, 4443];

const Test = () => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (value) => {
    setMessage(value);
  };

  const breadcrumbs = [{ name: 'Тестовая страница', href: '', current: true }];

  const chartOptions = {
    ...BaseChartOptions(),

    labels: ['Америка', 'Азия', 'Европа', 'Африка'],
    stroke: { colors: ['rgba(255, 255, 255, 0)'] },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  };

  const birthdays = [
    { fullname: 'Иванов Иван Иванович', age: '30' },
    { fullname: 'Смирнова Светлана Сергеевна', age: '41' },
    { fullname: 'Петров Петр Петрович', age: '45' },
  ];

  const questionSchema = Yup.lazy(() => {
    const shapes = {};

    // eslint-disable-next-line
    testSteps1.map((step) => step.type === 'single' ? shapes[step.value] = Yup.string().required('Выберите ответ') : shapes[step.value] = Yup.array().min(1, 'Выберите хотя бы 1 ответ').required('Выберите ответы'));
    return Yup.object().shape(shapes);
  });

  const methods = useForm({
    resolver: yupResolver(questionSchema)
  });

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
          className: 'flex text-base text-white px-4 py-5 bg-slate-800 rounded-md overflow-x-auto',
        },
      },
      code: {
        props: {
          className: 'text-sm px-0.5 text-slate-600 py-0.5 px-1 bg-slate-400/10 rounded-sm border border-slate-300',
        },
      },
      blockquote: {
        props: {
          className:
            'text-base px-5 py-6 border-l-8 border-indigo-500 dark:border-indigo-600 bg-indigo-500/20 rounded-md my-5',
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
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const makeQuestion = (question) =>
    <div key={question.value} className='px-5 py-4 flex flex-col rounded-md bg-slate-100'>
      <div className="text-base font-medium text-gray-900">
        <Markdown
        options={{ ...mdOptions }}
      >
        {question.label}
      </Markdown></div>
      <legend className="sr-only">{question.label}</legend>

      {question.type === 'single' ?
          <RHFRadioGroup name={question.value} options={question.answers} />
        : <RHFMultiCheckbox name={question.value} options={question.answers} defaultValue={[]} />}
    </div>;

  const onSubmit = (data) => {

    console.log(data);
    console.log(testSteps1answers);
    console.log(JSON.stringify(data) === JSON.stringify(testSteps1answers))
  };

  return (
    <BasicPage title='Тестовая страница' className='main-content max-w-6xl mx-auto px-5'>
      <PageHeader pages={breadcrumbs} header='Тестовая страница' />
      <Card classname='px-4 pb-4 overflow-visible mt-4'>
        <TextEditor
          id='compose-mail'
          value={message}
          onChange={handleChangeMessage}
          placeholder='Напишите что-нибудь...'
        />
      </Card>

      <div className='grid grid-cols-2 mt-4 gap-4' />
      <div>
        <ReactApexChart type='pie' series={CHART_DATA} options={chartOptions} height={280} />
      </div>

      <div className='grid grid-cols-2 mt-4 gap-4'>
        <WidgetUsersBirthdays birthdays={birthdays} />
      </div>
      <Card classname='p-4 mt-5'>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >

          <div className='flex flex-col gap-5'>
            {testSteps1.map((question) => makeQuestion(question))}

          </div>

          <LoadingButton
            type="submit"
            isLoading={isSubmitting}
            label="Отправить"
            classes={classNames(
              isSubmitting
                ? 'bg-slate-600 hover:bg-slate-600 focus:ring-offset-0'
                : 'bg-green-600 hover:bg-green-700 focus:ring-offset-2 focus:ring-green-500',
              'text-sm font-medium mt-5 text-white focus:outline-none'
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </LoadingButton>

        </FormProvider>
      </Card>
    </BasicPage>
  );
};

export default Test;
