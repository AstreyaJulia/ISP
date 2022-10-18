import React from "react";
import ReactApexChart from 'react-apexcharts';
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import category from "../../@mock/grcategory.json";
import {Card} from "../../components/Card";
import {Avatar} from "../../components/Avatar";
import CardWithLeftIcon from "../../components/CardWithLeftIcon";
import {getAmount} from "../../utils/getAmount";
import {fNumber} from "../../utils/formatNumber";
import {BaseChartOptions} from "../../components/ApexCharts/chartsSettings";
import useAuth from "../../hooks/useAuth";

const CHART_DATA = [4344, 5435, 1443, 4443];

const Stats = () => {

  const breadcrumbs = [{name: "Тестовая страница", href: "", current: true}];

  const chartOptions = {
    ...BaseChartOptions(),

    labels: ['Америка', 'Азия', 'Европа', 'Африка'],
    stroke: {colors: ['#fff']},
    dataLabels: {enabled: true, dropShadow: {enabled: false}},
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
      pie: {donut: {labels: {show: false}}},
    },
  };

  const projects = [{
    name: 'Не рассмотрено', icon: 'mdi-file-sync-outline', href: '#', col: 4, color: 'pink'
  }, {
    name: 'Приостановлено', icon: 'mdi-clock-remove-outline', href: '#', col: 12, color: 'indigo'
  }, {
    name: 'Без движения', icon: 'mdi-file-link-outline', href: '#', col: 16, color: 'yellow'
  }, {name: 'Всего в производстве', icon: 'mdi-file-multiple-outline', href: '#', col: 8, color: 'green'},]

  return (
      <BasicPage title='Тестовая страница' className='main-content max-w-6xl mx-auto px-4'>
        <PageHeader pages={breadcrumbs} header='Тестовая страница'/>
        <CategoryDataTable rows={category}/>
        <div className='grid grid-cols-2 mt-4 gap-4'>
          <Card classname='p-5'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm uppercase font-bold text-gray-500'>Дела в производстве</h3>
            </div>
          </Card>

          <Card classname='p-5'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm uppercase font-bold text-gray-500'>Дела c нарушением срока рассмотрения</h3>
            </div>
            <div className='rounded-full border-3 border-red-300 flex '>
              <span>1</span>
            </div>
          </Card>

          <Card classname='p-4'>
            <div className='flex items-center gap-3'>
              <Avatar size="16" name="Иванов Иван Иванович" shape="circle" classname="mr-5"/>
              <div className="flex flex-col items-start mr-7 w-72">
                <p
                    className="font-medium text-base text-slate-800 dark:text-slate-200 flex flex-wrap justify-start items-center text-left">Иванов
                  Иван Иванович</p>
                <p
                    className="text-sm text-indigo-700 dark:text-indigo-300 flex flex-wrap justify-start items-center text-left">Помощник
                  судьи</p>
                <div className='flex items-center w-full gap-6 mt-2'>
                  <p
                      className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                    </svg>
                    <span className='ml-2'>Кабинет №2</span>
                  </p>
                  <p
                      className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    <span className='ml-2'>5-13-27</span>
                  </p>
                </div>
              </div>

            </div>
          </Card>

          <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">Иванов Иван Иванович</h3>
                  <span
                      className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Админ
                </span>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">Помощник</p>
              </div>
              <Avatar size="10" name="Иванов Иван Иванович" shape="circle" classname="mr-5"/>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                      href={`mailto:`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                    </svg>
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                      href={`tel:`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">Дела в
              производстве</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {projects.map((project) => (
                  <CardWithLeftIcon key={project.name} icon={project.icon} color={project.color} href={project.href}
                                    title={project.name} subtitle={`${project.col} ${getAmount(project.col, {
                    single: "дело", multi: "дела", count: "дел"
                  })}`}/>
              ))}
            </div>
          </div>
        </div>
        <div>
          <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280}/>
        </div>

      </BasicPage>
  )
};

export default Stats;
