import React from 'react';
import CountBlood from './Components/CountBlood';
import './App.css'; // Assuming you have a separate CSS file for styling
import Card from './Components/Card'; // Import the Card component
import BarChart from './Components/BarChart'; // Import the chart components
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
import { UserData } from './Data';

function App() {
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
        label: 'Number of Recepients',
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
        label: 'Number of Donors',
        data: UserData.map((data) => data.Recepient),
        backgroundColor: 'rgba(255,99,132,1)',
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
          <div className='card'>
            <Card title="Bar Chart" content="Age Distribution of Donors">
              <BarChart chartData={userData} />
            </Card>
          </div>
          <div style={{ padding: '100px' }}></div>

          <div className='card'>
            <Card title="Pie Chart" content="This is a pie chart">
              <PieChart chartData={userData} />
            </Card>
          </div>

        </div>
        <div className='rowTwo'>
          <div className='card'>
            <Card title="Line Chart" content="Year Wise Recepients">
              <LineChart chartData={RecepientData} />
            </Card>
          </div>
          <div style={{ padding: '100px' }}></div>
          <div className='card'>
            <Card title="Line Chart" content="Year Wise Donors">
              <LineChart chartData={DonorData} />
            </Card>
          </div>


        </div>
        <div>
          <CountBlood />
        </div>


      </div>
    </>

  );
}

export default App;
