import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import { fNumber } from '../../utils/formatNumber';
import { BaseChartOptions } from '../../components/ApexCharts/chartsSettings';
import WidgetUsersBirthdays from '../../components/WidgetUsersBirthdays';
import TextEditor from '../../components/TextEditor';
import Card from '../../components/Card';

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

  return (
    <BasicPage title="Тестовая страница" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Тестовая страница" />
      <Card classname='px-4 pb-4 overflow-visible mt-4'>
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

      <div className="grid grid-cols-2 mt-4 gap-4">
        <WidgetUsersBirthdays birthdays={birthdays} />
      </div>
    </BasicPage>
  );
};

export default Test;
