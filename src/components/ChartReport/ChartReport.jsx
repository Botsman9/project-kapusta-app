import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './ChartReport.module.css';
import statisticsSelectors from '../../redux/statistics/statisticsSelectors';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function ChartComp() {
  const [widthS, setWidthS] = useState(window.screen.width);
  const incomesData = useSelector(
    statisticsSelectors.getIncomeStatisticsCategories,
  );
  const expenseData = useSelector(
    statisticsSelectors.getExpenseStatisticsCategories,
  );

  const handleResizeWindow = () => setWidthS(window.screen.width);

  const options = {
    aspectRatio: widthS <= 320 ? 0.8 : 2,
    plugins: {
      datalabels: {
        color: '#52555F',
        align: widthS <= 320 ? 'right' : 'top',
        anchor: 'end',
        padding: {
          top: widthS <= 320 ? -15 : 15,
          right: 10,
          bottom: 0,
        },
        formatter: function (value, context) {
          return value + 'грн';
        },
      },
    },
    indexAxis: widthS > 320 ? 'x' : 'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'top',
          display: widthS > 320,
        },
      },
      y: {
        grid: {
          display: widthS > 320,
          drawBorder: false,
        },

        ticks: {
          LayoutPosition: 'top',
          display: widthS <= 320,
        },
      },
    },
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [widthS, options]);

  const chooseBgColor = arr => {
    return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const incomeData = [5, 6, 10, 2, 5, 6, 8];

  const data = {
    labels,
    datasets: [
      {
        data: incomeData,
        maxBarThickness: widthS <= 320 ? 20 : 30,
        backgroundColor: chooseBgColor(labels),
        borderRadius: 10,
        inflateAmount: widthS <= 320 ? 2 : 10,
      },
    ],
  };

  return (
    <div className={s.barWrapper}>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
