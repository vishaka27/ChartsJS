import React from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
  labels: [ 'January', 'February', 'March',
  'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Movember', 'December' ],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 5, 200, 1000, 20, 400, 100, 90]
    },
    {
      label: 'Snowfall',
      backgroundColor: 'orange',
      borderColor: 'red',
      borderWidth: 1,
      data: [-60, -80, -10, -81, -56, -5, -200, -1000, -20, -400, -100, -90]
    }
  ]
};

const pieState = {
  labels:
    ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
};

const barState = {
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 5, 200]
    }
  ]
}

class App extends React.Component {
  render() {
    const lineState = (canvas) => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, "#f49080");

      var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
      gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
      return {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: gradientStroke,
            borderColor: gradientStroke,
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          },
          {
            label: 'Snowfall',
            fill: true,
            lineTension: 0.5,
            backgroundColor: gradientFill,
            borderColor: 'blue',
            borderWidth: 2,
            data: [100, 600, 80, 50, 30]
          },
          {
            label: 'Wind',
            fill: false,
            lineTension: 1,
            backgroundColor: 'orange',
            borderColor: 'green',
            borderWidth: 2,
            data: [40, 20, 90, 100, 500]
          }
        ]
      }
    };
    
    return (
      <div>
        <Line
            data={lineState}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'top'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 10,
                    padding: 20
                  },
                  gridLines: {
                    drawTicks: false,
                    display: true
                  }
                }],
                xAxes: [{
                  gridLines: {
                    zeroLineColor: 'transparent'
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                  }
                }]
              }
            }}
          />
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '50%', border: '1px solid #dedede', padding: '10px', margin: '10px' }}>
            <Bar
              data={barState}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'top'
                }
              }}
            />
          </div>
          <div style={{ width: '50%', border: '1px solid #dedede', padding: '10px', margin: '10px' }}>
            <Doughnut
              data={pieState}
              options={{
                title: {
                  display: true,
                  text: 'Doughnut chart',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'top'
                }
              }}
            />
          </div>
        </div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'top'
            },
            scales: {
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                stacked: true,
              }]
            }
          }}
        />
        <Pie
          data={pieState}
          options={{
            title: {
              display: true,
              text: 'Pie chart',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div> 
    );
  }
}

export default App;
