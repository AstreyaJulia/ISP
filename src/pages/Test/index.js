import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import tailwindColors from 'tailwindcss/colors';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import { fNumber } from '../../utils/formatNumber';
import { BaseChartOptions } from '../../components/ApexCharts/chartsSettings';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';
import useAuth from '../../hooks/useAuth';
import { stat } from '../../@mock/SampleData';
import Typography from '../../components/Typography';

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

  return (
    <BasicPage title='Тестовая страница' className='main-content max-w-6xl mx-auto px-5'>
      <PageHeader header='Тестовая страница' />
      <Card classname='px-4 pb-4 mt-4'>
        <TextEditor
          id='compose-mail'
          value={message}
          onChange={handleChangeMessage}
          placeholder='Напишите что-нибудь...'
        />
      </Card>
      <Card classname='px-4 pb-4 mt-4'>
        <ReactApexChart type='pie' series={CHART_DATA} options={chartOptions} height={280} />
      </Card>

      {stat.map((chart, key) => <Card key={key} classname='p-5 mt-4'>
        <Typography classname='mb-5' variant='h6'>{chart.title}</Typography>
        <ReactApexChart type='line' series={chart.data} options={{
          ...chart1Options, colors: chart.colors || [
          tailwindColors.indigo['500'],
          tailwindColors.amber['500'],
          tailwindColors.emerald['500'],
          tailwindColors.rose['500'],
          tailwindColors.violet['500'],
          tailwindColors.cyan['500'],
          ]
        }} height={280} />
      </Card>)}

    </BasicPage>
  );
};

export default Test;
