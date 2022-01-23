import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import useWResize from '../../hooks/useWResize.js';
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
  const isExpense = useSelector(state => state.statistics.isExpense);
  const handleResizeWindow = () => setWidthS(window.screen.width);
  const viewPort = useWResize();
  const options = {
    aspectRatio: viewPort.width <= 320 ? 0.8 : 2,
    plugins: {
      datalabels: {
        color: '#52555F',
        align: viewPort.width <= 320 ? 'right' : 'top',
        anchor: 'end',
        padding: {
          top: viewPort.width <= 320 ? -15 : 15,
          right: 10,
          bottom: 0,
        },
        formatter: function (value, context) {
          return value + 'грн';
        },
      },
    },
    indexAxis: viewPort.width > 320 ? 'x' : 'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'top',
          display: viewPort.width > 320,
        },
      },
      y: {
        grid: {
          display: viewPort.width > 320,
          drawBorder: false,
        },

        ticks: {
          LayoutPosition: 'top',
          display: viewPort.width <= 320,
        },
      },
    },
  };

  const chooseBgColor = arr => {
    return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
  };

  const exData = Object.values(expenseData).map(el => el.total);
  const labels = Object.keys(expenseData);

  const inData = Object.values(incomesData).map(el => el.total);
  const lab = Object.keys(incomesData);

  const data = {
    labels: isExpense ? labels : lab,
    datasets: [
      {
        data: isExpense ? exData : inData,
        maxBarThickness: viewPort.width <= 320 ? 20 : 30,
        backgroundColor: chooseBgColor(labels),
        borderRadius: 10,
        inflateAmount: viewPort.width <= 320 ? 2 : 10,
      },
    ],
  };
  return (
    <div className={s.barWrapper}>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
