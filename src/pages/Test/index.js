import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import { fNumber } from '../../utils/formatNumber';
import { BaseChartOptions } from '../../components/ApexCharts/chartsSettings';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';
import useAuth from '../../hooks/useAuth';
import Quiz from '../../components/Courses/Course/Quiz';
import { testSteps1, testSteps1answers } from '../../@mock/SampleData';
import { FormProvider } from '../../components/hook-form';
import ReactSelect from '../../components/ReactSelect';
import { makeOptionsFromArray } from '../../components/ReactSelect/makeOptions';

const CHART_DATA = [4344, 5435, 1443, 4443];

const Test = () => {
  const [message, setMessage] = useState('');

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

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

  /* icon - текст или svg */
  const options = [
    { value: 'apple', label: 'Apple', icon: '🍎', selectID: 'select' },
    { value: 'strawberry', label: 'Strawberry', icon: '🍓', selectID: 'select' },
    { value: 'cherry', label: 'Cherry', icon: '🍒', selectID: 'select' },
  ];

  const optionsTest = ['apple', 'strawberry', 'cherry'];

  const TestSchema = Yup.object().shape({
    login: Yup.string().required('Логин обязателен для заполнения'),
  });

  const methods = useForm({
    resolver: yupResolver(TestSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  const onChange = (data) => {
    console.log(data);
  };

  return (
    <BasicPage title="Тестовая страница" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Тестовая страница" />
      <Card classname="p-4 mt-4">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <ReactSelect options={makeOptionsFromArray(optionsTest, ['Яблоко', 'Клубника', 'Вишня'], 'select', ['🍎', '🍓', '🍒'])} defaultValue="null" onChange={(evt) => onChange(evt)} />
        </FormProvider>
      </Card>
      <Card classname="px-4 pb-4 mt-4">
        <TextEditor
          id="compose-mail"
          value={message}
          onChange={handleChangeMessage}
          placeholder="Напишите что-нибудь..."
        />
      </Card>

      <div className="grid grid-cols-2 mt-4 gap-4" />
      <div>
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </div>

      <Quiz answers={testSteps1answers} steps={testSteps1} />
    </BasicPage>
  );
};

export default Test;
