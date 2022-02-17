/**
 * Apex Charts
 */
import {COLORS} from "../const";

function LineChartBasic(name, data, color, categories) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 350,
      type: 'area',
  };
  this.colors = [COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    curve: 'smooth'
  };
  this.fill = {
    type: 'gradient',
      gradient: {
      inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [COLORS.themeLighter[color], COLORS.theme[color]],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
    }
  };
  this.xaxis = {
    categories: categories
  };
  this.tooltip = {
    x: {show: false}
  };
}

function LineChartWithMarkers(name, data, color, categories, annotations) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 350,
    type: 'area',
  };
  this.annotations = annotations;
  this.colors = [COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    curve: 'smooth'
  };
  this.fill = {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      gradientToColors: [COLORS.themeLighter[color], COLORS.theme[color]],
      opacityFrom: 0.7,
      opacityTo: 0.55,
      stops: [0, 80, 100]
    }
  };
  this.xaxis = {
    categories: categories
  };
  this.tooltip = {
    x: {show: false}
  };
}

function LineChartSimple(name, data, color) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 150,
    type: 'line',
    toolbar: {
      show: false
    }
  };
  this.grid = {
    show: false,
  };
  this.legend = {
    show: false,
  };
  this.colors = [COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    width: 3,
    curve: 'smooth'
  };
  this.noData = {
    text: 'Загрузка...'
  };
  this.yaxis = {
    show: false,
      labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  };
  this.xaxis = {
    show: false,
      labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  }
}


/**
 *
 * @param chartname
 * @returns {{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, annotations: {xaxis: [{fillColor: string, x: number, x2: number, label: {borderColor: string, offsetY: number, style: {color: string, background: string}, text: string}, opacity: number},{x: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}], yaxis: [{borderColor: string, y: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}]}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (*|string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, grid: {show: boolean}, legend: {show: boolean}, series: *[], noData: {text: string}, chart: {toolbar: {show: boolean}, type: string, height: number}, stroke: {curve: string, width: number}, yaxis: {show: boolean, axisBorder: {show: boolean}, labels: {show: boolean}}, colors: string[]}}
 */
const apexChartOptions = {
  safpeopleChart: new LineChartBasic(
    'Население г. Сафоново',
    [43500, 46100, 45273, 44444, 43845, 43477, 43145, 42707, 42147, 41510, 41138, 40537],
    'secondary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
smolOblpeopleChart: new LineChartBasic(
    'Население Смоленской области',
    [993018, 982887, 980482, 975188, 967896, 964791, 958630, 953201, 949348, 942363, 934889, 921127],
    'secondary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
smolOblworkpeopleChart: new LineChartBasic(
    'Трудоспособное население Смоленской области',
    [633809, 596862, 627128, 625958, 593611, 615842, 607983, 586273, 598980, 587725, 587237,],
    'secondary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
smolOblnoworkChart: new LineChartBasic(
    'Количество безработных в Смоленской области, тыс. человек',
    [40.8, 41.5, 30.9, 28.1, 26.9, 32.8, 31.4, 29.8, 26.2, 25.3, 25.3,],
    'secondary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
postoutboxChart: new LineChartBasic(
    'Исходящая почта',
    [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827, 38381],
    'primary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
emailoutboxChart: new LineChartBasic(
    'Исходящая эл. почта',
    [1810, 3170, 3959],
    'primary',
    [2019, 2020, 2021]
  ),
postinboxChart: new LineChartBasic(
    'Входящая почта',
    [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308, 15209],
    'green',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
emailinboxChart: new LineChartBasic(
    'Входящая эл. почта',
    [6489, 8384, 10450],
    'green',
    [2019, 2020, 2021]
  ),
gcaseChart: new LineChartBasic(
    'Гражданские дела',
    [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587, 1893],
    'red',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
gcaseOblChart: new LineChartBasic(
    'Гражданские дела (область)',
    [30095, 28470, 31392, 32393, 34753, 33232, 31409, 21203, 24391, 18543, 23220, 24205],
    'red',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
g1caseChart: new LineChartBasic(
    'Гражданские дела ап. инстанции',
    [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58, 49],
    'orange',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
admcaseChart: new LineChartBasic(
    'Дела об адм. правонарушениях',
    [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382, 1157],
    'blue',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
admcaseOblChart: new LineChartBasic(
    'Дела об адм. правонарушениях (область)',
    [1487, 1334, 1315, 6150, 5856, 5316, 5080, 5352, 5232, 4805, 6768, 12829],
    'blue',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
adm1caseChart: new LineChartBasic(
    'Жалобы по адм. делам',
    [0, 0, 0, 0, 166, 204, 205, 198, 145, 138, 123, 96],
    'teal',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
ucaseChart: new LineChartBasic(
    'Уголовные дела',
    [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240, 297],
    'yellow',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
ucaseOblChart: new LineChartBasic(
    'Уголовные дела (область)',
    [4124, 4038, 3696, 3257, 3799, 3563, 3210, 2217, 3061, 3626, 3713, 3636],
    'yellow',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
u1caseChart: new LineChartBasic(
    'Уголовные дела ап. инстанции',
    [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13, 9],
    'azure',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
  mucaseChart: new LineChartBasic(
    'Материалы в порядке уг. производства, всего',
    [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494, 1157],
    'cyan',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  ),
eosChart: new LineChartBasic(
    'Обращения, без исковых',
    [87, 230, 423, 624],
    'primary',
    [2018, 2019, 2020, 2021]
  ),
eosgcaseChart: new LineChartBasic(
    'Исковые заявления',
    [21, 43, 35, 128],
    'green',
    [2018, 2019, 2020, 2021]
  ),
inflationChart: new LineChartWithMarkers(
    /** https://уровень-инфляции.рф/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B8%D0%BD%D1%84%D0%BB%D1%8F%D1%86%D0%B8%D0%B8 */
    'Уровень инфляции в России',
    [8.78, 6.10, 6.58, 6.45, 11.36, 12.91, 5.38, 2.52, 4.27, 3.05, 4.91, 8.39],
    'primary',
    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    {
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
    }
  ),


/** Рефералы */
successLineChart: new LineChartSimple(
    'Посещения',
    [],
    'success',
  )

}

const apexChartInit = (chart, chartName) => {
  const apexChart = new ApexCharts(chart, apexChartOptions[chartName]);
  apexChart.render();
  apexChart.updateSeries(apexChartOptions[chartName].series);
}

/** Статистика - Графики */
const statCards = document.querySelectorAll('.stat-card');
const statFilters = document.querySelectorAll('.stat-filters .input-filter');

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {
  /** Фильтры в стат графиках */
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
    let apexchartVisits = new ApexCharts(document.querySelector(".apexchart1"), apexChartOptions['successLineChart']);
    apexchartVisits.render();
    fetch('pages/admin/visits.php').then(r => r);
    fetch('api/visits/getVisits.php')
      .then(response => response.json())
      .then((res) => apexchartVisits.updateSeries([{data: res}]));
  }
});
