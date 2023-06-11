import logo from './logo.svg';
import './App.css';
import BloodDonationForm from './donorform';
import PatientForm from './patientform';

import React, { useState, useEffect } from 'react';


const url = "http://localhost:3000";

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url+'/donors');
      const data = await response.json();
      console.log(data)
      setData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <PatientForm/>
      </div>
  );
}

export default App;
