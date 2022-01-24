// import { useState } from 'react';
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

export function ChartComp({ categoryRender }) {
  const incomesData = useSelector(
    statisticsSelectors.getIncomeStatisticsCategories,
  );
  console.log('categoryRender', categoryRender);

  const expenseData = useSelector(
    statisticsSelectors.getExpenseStatisticsCategories,
  );
  console.log('🚀 ~ expenseData', expenseData);

  const isExpense = useSelector(state => state.statistics.isExpense);
  const viewPort = useWResize();

  const options = {
    aspectRatio: viewPort.width <= 768 ? 0.8 : 2,
    plugins: {
      datalabels: {
        color: '#52555F',
        align: viewPort.width <= 768 ? 'right' : 'top',
        anchor: 'end',
        padding: {
          top: viewPort.width <= 768 ? -15 : 30,
          right: 10,
          bottom: 0,
        },
        formatter: function (value, context) {
          return value + 'грн';
        },
      },
    },
    indexAxis: viewPort.width > 768 ? 'x' : 'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'top',
          display: viewPort.width > 768,
        },
      },
      y: {
        grid: {
          display: viewPort.width > 768,
          drawBorder: false,
        },

        ticks: {
          LayoutPosition: 'top',
          display: viewPort.width <= 768,
        },
      },
    },
  };

  const chooseBgColor = arr => {
    return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
  };

  const getTotalData = data => {
    const props = Object.entries(data).sort((a, b) => b[1].total - a[1].total);
    const labels = props.map(([label]) => label);
    const values = props.map(([, stats]) => stats.total);
    console.log('🚀 ~ values', values);
    return { labels, values };
  };

  const getCategoryData = data => {
    const { total, ...categoryData } = data[categoryRender];
    console.log('🚀 ~ categoryData', categoryData);
    const props = Object.entries(categoryData).sort((a, b) => b[1] - a[1]);
    const labels = props.map(([label]) => label);
    const values = props.map(([, stats]) => stats);
    return { labels, values };
  };
  const chartData = isExpense ? expenseData : incomesData;
  const { labels, values } = categoryRender
    ? getCategoryData(chartData)
    : getTotalData(chartData);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        maxBarThickness: viewPort.width <= 768 ? 20 : 30,
        backgroundColor: chooseBgColor(labels),
        borderRadius: 10,
        inflateAmount: viewPort.width <= 768 ? 2 : 10,
      },
    ],
  };

  return (
    <div className={s.barWrapper}>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
