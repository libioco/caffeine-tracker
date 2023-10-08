import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = [1, 2, 3, 4, 5];
    const yValues = [100, 140, 200, 140, 130];
    const average = [200, 200, 200, 200, 200];

    const canvas = chartRef.current;
    const ctx = canvas.getContext('2d'); // Get the 2D rendering context

    // Destroy the previous chart if it exists
    if (canvas.chart) {
      canvas.chart.destroy();
    }

    // Create a custom gradient for the fill overlap color (e.g., purple)
    const gradient1 = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient1.addColorStop(0, 'rgba(255, 0, 0, 0.3)'); // Red
    gradient1.addColorStop(1, 'rgba(0, 0, 255, 0.3)'); // Blue

    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            fill: 'origin', // Fill to the starting point
            backgroundColor: gradient1, // Custom gradient
            borderColor: 'rgba(139, 69, 19)',
            data: yValues,
          },
          {
            fill: 'origin', // Fill to the starting point
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderColor: 'rgba(139, 69, 19)',
            data: average,
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Recorded Daily Intake of Caffeine (mg)',
          fontSize: 16,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            stepSize: 5,
            max: 400,
          },
        },
      },
    });

    // Store the chart instance on the canvas element
    canvas.chart = newChart;
  }, []);

  return <canvas ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
};

export default MyChart;
