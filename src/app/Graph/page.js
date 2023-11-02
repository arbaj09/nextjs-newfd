"use-client"

import React, { useState, useEffect } from 'react';
import './Graph.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const options = {
  indexyxis: 'X',
  elements: {
    area: {
      borderWidth: 2, // You can customize area element properties here
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Fd Return', // Update the chart title
    },
  },
};

const Graph = () => {
  const [data, setData] = useState({
    labels: ['1 Year', '2 Year', '3 Year', '4 Year', '5 Year', '6 Year', '7 Year', '8 Year', '9 Year', '10 Year'],
    datasets: [
      {
        label: 'Dataset',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  return (
    <div className='GRAPH'>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
