import React from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import category from "../../@mock/grcategory.json";
import Card from "../../components/Card";
import { Avatar } from "../../components/Avatar";
import CardWithLeftIcon from "../../components/CardWithLeftIcon";
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

  const projects = [{
    name: "Не рассмотрено", icon: "mdi-file-sync-outline", href: "#", col: 4, color: "pink"
  }, {
    name: "Приостановлено", icon: "mdi-clock-remove-outline", href: "#", col: 12, color: "indigo"
  }, {
    name: "Без движения", icon: "mdi-file-link-outline", href: "#", col: 16, color: "yellow"
  }, { name: "Всего в производстве", icon: "mdi-file-multiple-outline", href: "#", col: 8, color: "green" }];

  const birthdays = [
    { fullname: "Иванов Иван Иванович", age: "30" },
    { fullname: "Смирнова Светлана Сергеевна", age: "41" },
    { fullname: "Петров Петр Петрович", age: "45" }
  ];


  return (
    <BasicPage title="Тестовая страница" className="main-content max-w-6xl mx-auto px-4">
      <PageHeader pages={breadcrumbs} header="Тестовая страница" />
      <CategoryDataTable rows={category} />
      <div className="grid grid-cols-2 mt-4 gap-4">

        <Card classname="p-4">
          <div className="flex items-center gap-3">
            <Avatar size="16" name={getInitialsOnly("Иванов Иван Иванович")}
                    color={getAvatarColor("Иванов Иван Иванович")} shape="circle" classname="mr-5" />
            <div className="flex flex-col items-start mr-7 w-72">
              <p
                className="font-medium text-base text-slate-800 dark:text-slate-200 flex flex-wrap justify-start items-center text-left">Иванов
                Иван Иванович</p>
              <p
                className="text-sm text-indigo-700 dark:text-indigo-300 flex flex-wrap justify-start items-center text-left">Помощник
                судьи</p>
              <div className="flex items-center w-full gap-6 mt-2">
                <p
                  className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  <span className="ml-2">Кабинет №2</span>
                </p>
                <p
                  className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="ml-2">5-13-27</span>
                </p>
              </div>
            </div>

          </div>
        </Card>

        <div>
          <h2 className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">Дела в
            производстве</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <CardWithLeftIcon key={project.name} icon={project.icon} color={project.color} href={project.href}
                                title={project.name} subtitle={`${project.col} ${getAmount(project.col, {
                single: "дело", multi: "дела", count: "дел"
              })}`} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </div>
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div
          className="mt-3 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                "relative group bg-white dark:bg-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <Link to={action.href} className="w-full focus:outline-none min-w-0">
                <div className="flex items-center p-3">
                  <Avatar name="" size="14" color={action.color}
                          icon={<i className={["text-2xl mdi", action.icon].join(" ")} />} shape="roundedLG"
                          classname="flex-shrink-0" />
                  <div className="min-w-0 flex flex-col ml-3 text-sm">
                    <span className="line-clamp-3">{action.title}</span>
                    <p className="text-gray-500 truncate">{action.col} {`${getAmount(action.col, {
                      single: "дело",
                      multi: "дела",
                      count: "дел"
                    })}`}</p>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
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
