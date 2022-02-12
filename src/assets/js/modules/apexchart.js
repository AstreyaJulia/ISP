/**
 * Apex Charts
 */
import {COLORS} from "../const";

/**
 *
 * @param chartname
 * @returns {{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, annotations: {xaxis: [{fillColor: string, x: number, x2: number, label: {borderColor: string, offsetY: number, style: {color: string, background: string}, text: string}, opacity: number},{x: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}], yaxis: [{borderColor: string, y: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}]}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (*|string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, grid: {show: boolean}, legend: {show: boolean}, series: *[], noData: {text: string}, chart: {toolbar: {show: boolean}, type: string, height: number}, stroke: {curve: string, width: number}, yaxis: {show: boolean, axisBorder: {show: boolean}, labels: {show: boolean}}, colors: string[]}}
 */
const apexChartOptions = (chartname) => {

  const safpeopleChart = {
    series: [{
      name: 'Население г. Сафоново',
      data: [43500, 46100, 45273, 44444, 43845, 43477, 43145, 42707, 42147, 41510, 41138, 40537]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['secondary'], COLORS.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblpeopleChart = {
    series: [{
      name: 'Население Смоленской области',
      data: [993018, 982887, 980482, 975188, 967896, 964791, 958630, 953201, 949348, 942363, 934889, 921127]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['secondary'], COLORS.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblworkpeopleChart = {
    series: [{
      name: 'Трудоспособное население Смоленской области',
      data: [633809, 596862, 627128, 625958, 593611, 615842, 607983, 586273, 598980, 587725, 587237,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['secondary'], COLORS.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblnoworkChart = {
    series: [{
      name: 'Количество безработных в Смоленской области, тыс. человек',
      data: [40.8, 41.5, 30.9, 28.1, 26.9, 32.8, 31.4, 29.8, 26.2, 25.3, 25.3,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['secondary'], COLORS.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const inflationChart = {
    /** https://уровень-инфляции.рф/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B8%D0%BD%D1%84%D0%BB%D1%8F%D1%86%D0%B8%D0%B8 */
    series: [{
      name: 'Уровень инфляции в России',
      data: [8.78, 6.10, 6.58, 6.45, 11.36, 12.91, 5.38, 2.52, 4.27, 3.05, 4.91, 8.39]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    annotations: {
      yaxis: [{
        y: 4,
        borderColor: '#00B795',
        label: {
          borderColor: '#00B795',
          style: {
            color: '#FFFFFF',
            background: '#00B795',
          },
          text: 'Оптимальный уровень',
        }
      }],
      xaxis: [{
        x: 2014,
        x2: 2015,
        fillColor: '#f6bc9a',
        opacity: 0.4,
        label: {
          borderColor: '#f6bc9a',
          style: {
            color: '#fff',
            background: '#ef630a',
          },
          offsetY: -10,
          text: 'Валютный кризис',
        }
      },
        {
          x: 2020,
          label: {
            borderColor: '#ef630a',
            style: {
              color: '#FFFFFF',
              background: '#ef630a',
            },
            text: 'Рецессия COVID-19',
          }
        }
      ],
    },
    colors: [COLORS.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['primary'], COLORS.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const postoutboxChart = {
    series: [{
      name: 'Исходящая почта',
      data: [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827, 38381]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['primary'], COLORS.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const emailoutboxChart = {
    series: [{
      name: 'Исходящая эл. почта',
      data: [1810, 3170, 3959]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['primary'], COLORS.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const postinboxChart = {
    series: [{
      name: 'Входящая почта',
      data: [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308, 15209]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['green'], COLORS.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const emailinboxChart = {
    series: [{
      name: 'Входящая эл. почта',
      data: [6489, 8384, 10450]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['green'], COLORS.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const gcaseChart = {
    series: [{
      name: 'Гражданские дела',
      data: [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587, 1893]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['red']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['red'], COLORS.theme['red']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const gcaseOblChart = {
    series: [{
      name: 'Гражданские дела (область)',
      data: [30095, 28470, 31392, 32393, 34753, 33232, 31409, 21203, 24391, 18543, 23220,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['red']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['red'], COLORS.theme['red']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const g1caseChart = {
    series: [{
      name: 'Гражданские дела ап. инстанции',
      data: [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58, 49]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['orange']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['orange'], COLORS.theme['orange']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const admcaseChart = {
    series: [{
      name: 'Дела об адм. правонарушениях',
      data: [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382, 1157]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['blue']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['blue'], COLORS.theme['blue']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const admcaseOblChart = {
    series: [{
      name: 'Дела об адм. правонарушениях (область)',
      data: [1487, 1334, 1315, 6150, 5856, 5316, 5080, 5352, 5232, 4805, 6768,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['blue']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['blue'], COLORS.theme['blue']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const adm1caseChart = {
    series: [{
      name: 'Жалобы по адм. делам',
      data: [0, 0, 0, 0, 166, 204, 205, 198, 145, 138, 123, 96]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['teal']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['teal'], COLORS.theme['teal']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const ucaseChart = {
    series: [{
      name: 'Уголовные дела',
      data: [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240, 297]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['yellow']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['yellow'], COLORS.theme['yellow']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const ucaseOblChart = {
    series: [{
      name: 'Уголовные дела (область)',
      data: [4124, 4038, 3696, 3257, 3799, 3563, 3210, 2217, 3061, 3626, 3713,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['yellow']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['yellow'], COLORS.theme['yellow']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const u1caseChart = {
    series: [{
      name: 'Уголовные дела ап. инстанции',
      data: [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13, 9]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['azure']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['azure'], COLORS.theme['azure']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const mucaseChart = {
    series: [{
      name: 'Материалы в порядке уг. производства, всего',
      data: [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494, 1157]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['cyan']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['cyan'], COLORS.theme['cyan']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const eosChart = {
    series: [{
      name: 'Обращения, без исковых',
      data: [87, 230, 423, 624]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['primary']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['primary'], COLORS.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const eosgcaseChart = {
    series: [{
      name: 'Исковые заявления',
      data: [21, 43, 35, 128]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [COLORS.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter['green'], COLORS.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
// Рефералы
  const successLineChart = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: true
      }
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    colors: [COLORS.theme['success']],
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    series: [],
    noData: {
      text: 'Loading...'
    },
    /*
        xaxis: {
          categories: array.value.day
        },*/
    yaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
  };

  switch (chartname) {
    case 'safpeopleChart':
      return safpeopleChart;
    case 'postinboxChart':
      return postinboxChart;
    case 'postoutboxChart':
      return postoutboxChart;
    case 'gcaseChart':
      return gcaseChart;
    case 'g1caseChart':
      return g1caseChart;
    case 'admcaseChart':
      return admcaseChart;
    case 'adm1caseChart':
      return adm1caseChart;
    case 'ucaseChart':
      return ucaseChart;
    case 'u1caseChart':
      return u1caseChart;
    case 'mucaseChart':
      return mucaseChart;
    case 'eosChart':
      return eosChart;
    case 'eosgcaseChart':
      return eosgcaseChart;
    case 'successLineChart':
      return successLineChart;
    case 'inflationChart':
      return inflationChart;
    case 'gcaseOblChart':
      return gcaseOblChart;
    case 'ucaseOblChart':
      return ucaseOblChart;
    case 'smolOblpeopleChart':
      return smolOblpeopleChart;
    case 'smolOblnoworkChart':
      return smolOblnoworkChart;
    case 'admcaseOblChart':
      return admcaseOblChart;
    case 'smolOblworkpeopleChart':
      return smolOblworkpeopleChart;
    case 'emailoutboxChart':
      return emailoutboxChart;
    case 'emailinboxChart':
      return emailinboxChart;
  }
}

const apexChartInit = (chart, chartName) => {
  let apexChart = new ApexCharts(chart, apexChartOptions(chartName));
  apexChart.render();
  apexChart.updateSeries(apexChartOptions(chartName).series);
}

/* Статистика - Графики */
const statCards = document.querySelectorAll('.stat-card');
const statFilters = document.querySelectorAll('.stat-filters .input-filter');

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  /* Фильтры в стат графиках */
  if (statCards && statFilters) {

    statFilters.forEach((statFilter) => {
      statFilter.addEventListener('click', () => {
        if (statFilter.checked) {
          for (let i = 0; i < statCards.length; i++) {
            if (statCards[i].classList.contains(statFilter.dataset.value)) {
              statCards[i].classList.remove('d-none');

              const chart = statCards[i].querySelector('.apexchart');
              apexChartInit(chart, chart.dataset.chartName);
            }
          }
        } else {
          for (let i = 0; i < statCards.length; i++) {
            if (statCards[i].classList.contains(statFilter.dataset.value)) {
              statCards[i].classList.add('d-none');
            }
          }
        }
      });
    });
  }
  if (document.querySelector(".apexchart1")) {
    let apexchartVisits = new ApexCharts(document.querySelector(".apexchart1"), apexChartOptions("successLineChart"));
    apexchartVisits.render();
    $.getJSON('api/visits/getVisits.php', function (response) {
      apexchartVisits.updateSeries([{
        name: 'Посещения',
        data: response
      }])
    });
  }
});
