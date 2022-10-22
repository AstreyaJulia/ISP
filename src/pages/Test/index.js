import React from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import category from "../../@mock/grcategory.json";
import Card from "../../components/Card";
import { Avatar } from "../../components/Avatar";
import { getAmount } from "../../utils/getAmount";
import { fNumber } from "../../utils/formatNumber";
import { BaseChartOptions } from "../../components/ApexCharts/chartsSettings";
import { classNames } from "../../utils/classNames";
import { getInitialsOnly } from "../../utils/getInitials";
import { getAvatarColor } from "../../utils/getAvatarColor";

const CHART_DATA = [4344, 5435, 1443, 4443];
const actions = [
  {
    title: "Дел с нарушением срока",
    href: "#",
    icon: "mdi-clock-outline",
    col: 1,
    color: "red"
  },
  {
    title: "Не отмечен результат события",
    href: "#",
    icon: "mdi-check-circle-outline",
    col: 1,
    color: "indigo"
  },
  {
    title: "Не сдано в канцелярию",
    href: "#",
    icon: "mdi-flag-remove-outline",
    col: 1,
    color: "blue"
  }
];


const Stats = () => {

  const breadcrumbs = [{ name: "Тестовая страница", href: "", current: true }];

  const chartOptions = {
    ...BaseChartOptions(),

    labels: ["Америка", "Азия", "Европа", "Африка"],
    stroke: { colors: ["rgba(255, 255, 255, 0)"] },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  };



  const birthdays = [
    { fullname: "Иванов Иван Иванович", age: "30" },
    { fullname: "Смирнова Светлана Сергеевна", age: "41" },
    { fullname: "Петров Петр Петрович", age: "45" }
  ];


  return (
    <BasicPage title="Тестовая страница" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Тестовая страница" />
      <CategoryDataTable rows={category} />
      <div className="grid grid-cols-2 mt-4 gap-4"/>

      <div>
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </div>

      <div className="grid grid-cols-2 mt-4 gap-4">
        <Card classname="p-4 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase text-gray-500 dark:text-gray-600 mb-3">Дни рождения сегодня</p>
          {birthdays.map((item, key) =>
            <div key={key} className="flex border-l-4 border-indigo-500 dark:border-indigo-600 px-3 py-2 items-center">
              <Avatar size="10" shape="circle" name={getInitialsOnly(item.fullname)}
                      color={getAvatarColor(item.fullname)} />
              <div className="flex flex-col ml-4">
                <p className="text-base font-medium text-gray-800 dark:text-gray-300 mb-1">{item.fullname}</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                  </svg>
                  <span className="ml-1">{item.age}</span>
                  <span>{getAmount(item.age, { single: "год", multi: "года", count: "лет" })}</span></p>
              </div>
            </div>
          )
          }
        </Card>
      </div>

    </BasicPage>
  );
};

export default Stats;
