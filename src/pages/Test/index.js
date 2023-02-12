import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import addNotification from 'react-push-notification';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import { fNumber } from '../../utils/formatNumber';
import { BaseChartOptions } from '../../components/ApexCharts/chartsSettings';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';
import useAuth from '../../hooks/useAuth';
import Quiz from '../../components/Courses/Course/Quiz';
import { testSteps1, testSteps1answers, stat, yearConferenceStat } from '../../@mock/SampleData';
import Typography from '../../components/Typography';
import BasicButton from '../../components/BasicButton';
import {tailwindColorsConfig} from "../../utils/getTailwindconfig";

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
  const chart1Options = {
    ...BaseChartOptions(),
    legend: { position: 'top', horizontalAlign: 'right' },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    },
  };

  const notificationTest = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
    });
  }

  return (
    <BasicPage title='Тестовая страница' className='main-content max-w-6xl mx-auto px-5'>
      <PageHeader pages={breadcrumbs} header='Тестовая страница' />
      <Card classname='px-4 pb-4 mt-4'>
        <TextEditor
          id='compose-mail'
          value={message}
          onChange={handleChangeMessage}
          placeholder='Напишите что-нибудь...'
        />
        <BasicButton size='medium' onClick={notificationTest} variant='basic'>Уведомление</BasicButton>
      </Card>
      <Card classname='px-4 pb-4 mt-4'>
        <ReactApexChart type='pie' series={CHART_DATA} options={chartOptions} height={280} />
      </Card>

      {stat.map((chart, key) => <Card key={key} classname='p-5 mt-4'>
        <Typography classname='mb-5' variant='h6'>{chart.title}</Typography>
        <ReactApexChart type='line' series={chart.data} options={{
          ...chart1Options, colors: chart.colors || [
          tailwindColorsConfig.theme.colors.indigo['500'],
          tailwindColorsConfig.theme.colors.amber['500'],
          tailwindColorsConfig.theme.colors.emerald['500'],
          tailwindColorsConfig.theme.colors.rose['500'],
          tailwindColorsConfig.theme.colors.violet['500'],
          tailwindColorsConfig.theme.colors.cyan['500'],
          ]
        }} height={280} />
      </Card>)}

      <Quiz answers={testSteps1answers} steps={testSteps1} />
    </BasicPage>
  );
};

export default Test;
