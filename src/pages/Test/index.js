import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import {fNumber} from '../../utils/formatNumber';
import {BaseChartOptions} from '../../components/ApexCharts/chartsSettings';
import WidgetUsersBirthdays from '../../components/WidgetUsersBirthdays';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';
import {testSteps1} from '../../@mock/SampleData';
import {FormProvider} from '../../components/hook-form';
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

  const questionSchema = Yup.lazy((testSteps1) => {
    const shapes = {};

    // eslint-disable-next-line
    Object.keys(testSteps1).map(((parameter) => shapes[parameter] = Yup.string().required('Выберите ответ/ы')));

    return Yup.object().shape(shapes);
  });

  const methods = useForm({
    resolver: yupResolver(questionSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const makeQuestion = (question) =>
    <div key={question.value} className='p-3 flex flex-col rounded-md bg-slate-100'>
      <p className="text-base font-medium text-gray-900">{question.label}</p>
      <legend className="sr-only">{question.label}</legend>
      {question.type === 'single' ?
        <fieldset className="space-y-4 mt-4" id={question.value} >
          {question.answers.map((answer) => (
            <div key={`${question.value}${answer.value}`} className="flex items-center">
              <input className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400'
                     type='radio' id={`${question.value}${answer.value}`}
                     name={question.value} value={answer.value} />
              <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={`${question.value}${answer.value}`}>{answer.label}</label>
            </div>
          ))}
        </fieldset>
        : <fieldset id={question.value} className="space-y-4 mt-4">
          {question.answers.map((answer) =>
            <div key={`${question.value}${answer.value}`} className="flex items-center">
              <input className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded'
                type='checkbox' id={`${question.value}${answer.value}`}
                     name={answer.value} value={answer.value} />
              <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={`${question.value}${answer.value}`}>{answer.label}</label>
            </div>)
          }
        </fieldset>}
    </div>;

  const onSubmit = (data) => {
    console.log(data);
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

          <div className='flex flex-col gap-4'>
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
