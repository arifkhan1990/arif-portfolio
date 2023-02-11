'use client';
import React from 'react';
import { Chart } from 'react-google-charts';
const PieChart = ({ textColor }) => {
  const data = [
    ['Problem Sumission', 'Total Submission'],
    ['Accepted', 2256],
    ['Partially Solved', 167],
    ['Wrong Answer', 1198],
    ['Time Limit Exceeded', 283],
    ['Runtime Error', 186], // CSS-style declaration
    ['Compile Error', 177],
    ['Hacked', 6],
    ['Others', 12],
  ];

  const options = {
    title: 'Total Submissions',
    titleTextStyle: {
      color: textColor, // color 'white' or 'black'
      fontName: 'Courier New', // 'Times New Roman'
      fontSize: 20, // 12, 18
      bold: true, // true or false
      italic: true, // true of false
    },
    pieHole: 0.4,
    is3D: false,
    colors: [
      '#4caf50',
      '#8bc34a',
      '#f44336',
      '#3f51b5',
      '#9c27b0',
      '#ff9800',
      '#9a7f75',
      '#9e9e9e',
    ],
    textStyle: {
      color: textColor,
    },
    backgroundColor: { fill: 'transparent' },
  };
  return (
    <Chart
      chartType='PieChart'
      width='100%'
      height='300px'
      data={data}
      options={options}
    />
  );
};

export default PieChart;
