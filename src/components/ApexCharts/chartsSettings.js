import tailwindColors from 'tailwindcss/colors';
import { pxToRem } from '../../utils/remUtils';
import useAuth from '../../hooks/useAuth';

export function BaseChartOptions() {
  const { theme } = useAuth();

  return {
    // Цвета графиков
    colors: [
      theme.toString() === '1' ? tailwindColors.indigo['500'] : tailwindColors.indigo['400'],
      theme.toString() === '1' ? tailwindColors.amber['500'] : tailwindColors.amber['400'],
      theme.toString() === '1' ? tailwindColors.emerald['500'] : tailwindColors.emerald['400'],
      theme.toString() === '1' ? tailwindColors.rose['500'] : tailwindColors.rose['400'],
      theme.toString() === '1' ? tailwindColors.violet['500'] : tailwindColors.violet['400'],
      theme.toString() === '1' ? tailwindColors.cyan['500'] : tailwindColors.cyan['400'],
    ],

    // График
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      // animations: { enabled: false },
      foreColor: theme.toString() === '1' ? tailwindColors.neutral['500'] : tailwindColors.neutral['400'],
      fontFamily:
        "'OpenSans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'sans-serif'",
    },

    // Состояния
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Заливка
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Подписи данных
    dataLabels: { enabled: false },

    // Строки
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round',
    },

    // Сетка
    grid: {
      strokeDashArray: 3,
      borderColor: theme.toString() === '1' ? tailwindColors.slate['300'] : tailwindColors.slate['600'],
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false, height: 0 },
      axisTicks: { show: false },
    },

    // Маркеры
    markers: {
      size: 0,
      strokeColors: theme.toString() === '1' ? tailwindColors.white : tailwindColors.neutral['900'],
    },

    // Подсказки
    tooltip: {
      x: {
        show: false,
      },
    },

    // Легенда
    legend: {
      show: true,
      fontSize: String(13),
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors:
          theme === 1 ? tailwindColors.neutral['600'] : tailwindColors.neutral['300'],
      },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '28%',
        borderRadius: 4,
      },
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              offsetY: 8,
              color: tailwindColors.indigo['600'],
              fontSize: pxToRem(24),
              fontWeight: 700,
              lineHeight: 1.5,
            },
            total: {
              show: true,
              label: 'Всего',
              color: tailwindColors.emerald['600'],
              fontSize: pxToRem(14),
              fontWeight: 600,
              lineHeight: 22 / 14,
            },
          },
        },
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          background: tailwindColors.neutral['500'],
        },
        dataLabels: {
          value: {
            offsetY: 8,
            color: tailwindColors.indigo['600'],
            fontSize: pxToRem(24),
            fontWeight: 700,
            lineHeight: 1.5,
          },
          total: {
            show: true,
            label: 'Всего',
            color: tailwindColors.emerald['600'],
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: 22 / 14,
          },
        },
      },
      // Radar
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: tailwindColors.slate['300'],
          connectorColors: tailwindColors.slate['300'],
        },
      },
      // polarArea
      polarArea: {
        rings: {
          strokeColor: tailwindColors.slate['300'],
        },
        spokes: {
          connectorColors: tailwindColors.slate['300'],
        },
      },
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: '640px',
        options: {
          plotOptions: { bar: { columnWidth: '40%' } },
        },
      },
      {
        // md
        breakpoint: '768px',
        options: {
          plotOptions: { bar: { columnWidth: '32%' } },
        },
      },
    ],
  };
}
