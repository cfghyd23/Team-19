import React, { useState, useEffect } from 'react';
import '../styles/Patient.css'

import axios from 'axios';

const PatientForm = () => {
    const [patientData, setPatientData] = useState({
        patientName: '',
        bloodGroup: '',
        weight: '',
        ageGroup: '',
        address: '',
        id:'',
        email: '',
        phoneNumber: '',
        gender: '',
        medical_id: '',
      });

      const handleChange = (e) => {
        setPatientData({
          ...patientData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(patientData)
          axios.post("http://localhost:3000/patients", patientData).then(response=>{
            console.log('Response:',response);
          })
        .catch(error=> {
          console.error(error);
        });
      };

  return (
    <div className="center-container">
      <div className="image-container">
        <img src="https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2021/06/Blood-Donation-2.jpg?fit=802%2C602&ssl=1" alt="Blood donation" />
        <h1 className="heading">PATIENT</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="donorName">Name:</label>
            <input
              type="text"
              name="patientName"
              value={patientData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          

          <div className="form-field">
            <label htmlFor="ageGroup">Age:</label>
            <input
              type="text"
              name="ageGroup"
              value={patientData.ageGroup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              name="weight"
              value={patientData.weight}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-field">
  <div className="checkbox-container">
    <label>
      <input type="checkbox" name='threedaysdonated'/>
      <span>Do you have donated blood in the last 3 months?</span>
    </label>
    <label>
      <input type="checkbox" name='flu'/>
      <span>Do you have symptoms of major flu or cold?</span>
    </label>
    <label>
      <input type="checkbox" name='hepatitis'/>
      <span>Do you have a history of hepatitis B or C?</span>
    </label>
    <label>
      <input type="checkbox" name='blood_pressure'/>
      <span>Do you have high blood pressure?</span>
    </label> */}
     
    {/* <div className="form-field">
            <label htmlFor="number">Hamemoglobin:</label>
            <input
              type="number"
              name="haemoglobin"
              value={patientData.haemoglobin}
              onChange={handleChange}
              required
            />
          </div>
    <label> */}
      {/* <input type="checkbox" name='medication' />
      <span>Were you on medication for the last 3 days?</span>
    </label>
    <label>
      <input type="checkbox" name='alcohol'/>
      <span>Have you consumed alcohol in the last 24 hours?</span>
    </label>
  </div>
</div> */}

<div className="form-field">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              name="bloodGroup"
              value={patientData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              value={patientData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>


          <div className="form-field">
            <label htmlFor="idCard">Aadhar Number:</label>
            <input
              type="text"
              name="id"
              value={patientData.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={patientData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={patientData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Id:</label>
            <input
              type="text"
              name="email"
              value={patientData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Medical Id:</label>
            <input
              type="text"
              name="medical_id"
              value={patientData.medical_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="submit-button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;