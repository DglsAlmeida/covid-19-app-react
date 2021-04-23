import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import api from '../../services/api';
import { Container } from './styles'

interface TotalCasesProps {
  NewConfirmed:number;
  TotalConfirmed:number;
  NewDeaths:   number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export function BarChart() {
  const [totalCases, setTotalCases] = useState<TotalCasesProps>({} as TotalCasesProps);

  useEffect(() => {
    async function getTotalCases() {
      const response = await api.get('summary');
      const { Global } = response.data;
      console.log(Global);
      setTotalCases(Global);
    }
    getTotalCases()
  }, [])

  return (
    <Container>
      {totalCases && (
      <>
        <h1>Total cases worldwide</h1>
        <Bar 
          data={{
            labels: ['Total Confirmed', 'Total Deaths', 'Total Recovered'],
            datasets: [{
              label: 'Total covid cases in the world',
              data: [ 
                {x:'Total Confirmed', y: totalCases.TotalConfirmed},
                {x:'Total Deaths', y: totalCases.TotalDeaths},
                {x:'Total Recovered', y: totalCases.TotalRecovered},
                
              ],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2,
            }],
          }}
          options={{
            maintainAspectRatio: false,      
            layout: {
              padding: {
                left: 0,
                right: 600,
                bottom: 0,
                top: 0,
              }
            },
            scales: {
              xAxes: [{
                categoryPercentage: 0.6,
                barPercentage: 1.0,
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                }
              }]
            },
          }}
        />
      </>
      )}
    </Container>
  )
}