import { tailwindColorsConfig } from "../../utils/getTailwindconfig";
import { pxToRem } from "../../utils/remUtils";

export const baseChartOptions = {

// Цвета графиков
  colors: [
    tailwindColorsConfig.theme.colors.indigo["500"],
    tailwindColorsConfig.theme.colors.amber["500"],
    tailwindColorsConfig.theme.colors.emerald["500"],
    tailwindColorsConfig.theme.colors.rose["500"],
    tailwindColorsConfig.theme.colors.violet["500"],
    tailwindColorsConfig.theme.colors.cyan["500"]
  ],

  // График
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    // animations: { enabled: false },
    foreColor: tailwindColorsConfig.theme.colors.gray["600"],
    fontFamily: "'OpenSans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'sans-serif'"
  },

  // Состояния
  states: {
    hover: {
      filter: {
        type: "lighten",
        value: 0.04
      }
    },
    active: {
      filter: {
        type: "darken",
        value: 0.88
      }
    }
  },

  // Заливка
  fill: {
    opacity: 1,
    gradient: {
      type: "vertical",
      shadeIntensity: 0,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100]
    }
  },

  // Подписи данных
  dataLabels: { enabled: false },

  // Строки
  stroke: {
    width: 3,
    curve: "smooth",
    lineCap: "round"
  },

  // Сетка
  grid: {
    strokeDashArray: 3,
    borderColor: tailwindColorsConfig.theme.colors.slate["300"]
  },

  // Xaxis
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false }
  },

// Маркеры
  markers: {
    size: 0,
    strokeColors: tailwindColorsConfig.theme.colors.white
  },

  // Подсказки
  tooltip: {
    x: {
      show: false
    }
  },

  // Легенда
  legend: {
    show: true,
    fontSize: String(13),
    position: "top",
    horizontalAlign: "right",
    markers: {
      radius: 12
    },
    fontWeight: 500,
    itemMargin: { horizontal: 12 },
    labels: {
      colors: tailwindColorsConfig.theme.colors.gray["600"]
    }
  },

  // plotOptions
  plotOptions: {
    // Bar
    bar: {
      columnWidth: "28%",
      borderRadius: 4
    },
    // Pie + Donut
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            offsetY: 8,
            color: tailwindColorsConfig.theme.colors.indigo["600"],
            fontSize: pxToRem(24),
            fontWeight: 700,
            lineHeight: 1.5
          },
          total: {
            show: true,
            label: "Всего",
            color: tailwindColorsConfig.theme.colors.emerald["600"],
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: 22 / 14
          }
        }
      }
    },
    // Radialbar
    radialBar: {
      track: {
        strokeWidth: "100%",
        background: tailwindColorsConfig.theme.colors.gray["500"]
      },
      dataLabels: {
        value: {
          offsetY: 8,
          color: tailwindColorsConfig.theme.colors.indigo["600"],
          fontSize: pxToRem(24),
          fontWeight: 700,
          lineHeight: 1.5
        },
        total: {
          show: true,
          label: "Всего",
          color: tailwindColorsConfig.theme.colors.emerald["600"],
          fontSize: pxToRem(14),
          fontWeight: 600,
          lineHeight: 22 / 14
        }
      }
    },
    // Radar
    radar: {
      polygons: {
        fill: { colors: ["transparent"] },
        strokeColors: tailwindColorsConfig.theme.colors.slate["300"],
        connectorColors: tailwindColorsConfig.theme.colors.slate["300"]
      }
    },
    // polarArea
    polarArea: {
      rings: {
        strokeColor: tailwindColorsConfig.theme.colors.slate["300"]
      },
      spokes: {
        connectorColors: tailwindColorsConfig.theme.colors.slate["300"]
      }
    }
  },

  // Responsive
  responsive: [
    {
      // sm
      breakpoint: "640px",
      options: {
        plotOptions: { bar: { columnWidth: "40%" } }
      }
    },
    {
      // md
      breakpoint: "768px",
      options: {
        plotOptions: { bar: { columnWidth: "32%" } }
      }
    }
  ],

  theme: {
    mode: "light",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#255aee",
      shadeTo: "light",
      shadeIntensity: 0.65
    }
  }
};
