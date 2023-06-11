import React from 'react';
import CountBlood from './CountBlood';
// Assuming you have a separate CSS file for styling

import BarChart from './BarChart'; // Import the chart components
import LineChart from './LineChart';
import PieChart from './PieChart';
import { UserData } from './Data';
import { UserData as userData2 } from './Data2';
import './Statistics.css'; 
import Card from './Card'; // Import the Card component


function Statistics() {
  const [userData, setUserData] = React.useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Age Distribution',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });


  const DonorData = {
    labels: userData.labels,
    datasets: [
      {
        label: 'Number of Donors',
        data: UserData.map((data) => data.Donor),
        backgroundColor: 'rgba(255,99,132,1)',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  const RecepientData = {
    labels: userData.labels,
    datasets: [
      {
        label: 'Number of Recepients',
        data: UserData.map((data) => data.Recepient),
        backgroundColor: 'rgba(255,99,132,1)',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };
  const pieChartData2 = {
    labels: userData2.map((data) => data.id),
    datasets: [
      {
        data: userData2.map((data) => data.count),
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: UserData.map((data) => data.userGain),
    datasets: [
      {
        label: 'Users donated',
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Blood Donation Statistics</h1>

      <div className="App">

        <div className='rowOne'>
          <div className='card' style={{ padding: '100px' }}>
            <Card title="Bar Chart" content="Age Distribution of Donors">
              <BarChart chartData={barChartData} />
            </Card>
          </div>
          <div style={{ padding: '100px' }}></div>

          <div className="card" style={{ paddingLeft: '100px', paddingRight: '100px' }}>

            <Card title="Availability of Blood by Group" content="Blood Group">
              <PieChart chartData={pieChartData2} />
            </Card>
          </div>

        </div>
        <div className='rowTwo'>
          <div className='card' style={{ padding: '100px' }}>
            <Card title="Recepients" content="Year Wise Recepients">
              <LineChart chartData={RecepientData} />
            </Card>
          </div>
          <div style={{ padding: '100px' }}></div>
          <div className='card' style={{ padding: '100px' }}>
            <Card title="Donors" content="Year Wise Donors">
              <LineChart chartData={DonorData} />
            </Card>
          </div>


        </div>
        <div>
          <CountBlood />
        </div>


      </div >
    </>

  );




}

export default Statistics;