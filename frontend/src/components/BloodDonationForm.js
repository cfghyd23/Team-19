import '../styles/BloodDonationForm.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BloodDonationForm = () => {
    const [donorData, setDonorData] = useState({
        donorName: '',
        bloodGroup: '',
        weight: '',
        ageGroup: '',
        id: '',
        address: '',
        email: '',
        phoneNumber: '',
        gender: '',
        medical_id: '',
        haemoglobin:'',
      });

      const handleChange = (e) => {
        setDonorData({
          ...donorData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(donorData);
      
        axios.post("http://localhost:3000/donors", donorData)
          .then(response => {
            console.log('Response:', response);
          })
          .catch(error => {
            console.error(error);
          });
      };
      

  return (
    <div className="center-container">
      <div className="image-container">
        <img src="https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2021/06/Blood-Donation-2.jpg?fit=802%2C602&ssl=1" alt="Blood donation" />
        <h1 className="heading">DONOR</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="donorName">Name:</label>
            <input
              type="text"
              name="donorName"
              value={donorData.donorName}
              onChange={handleChange}
              required
            />
          </div>

          

          <div className="form-field">
            <label htmlFor="ageGroup">Age:</label>
            <input
              type="Number"
              name="ageGroup"
              value={donorData.ageGroup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="weight">Weight:</label>
            <input
              type="Number"
              name="weight"
              value={donorData.weight}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
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
    </label>
     
    <div className="form-field">
            <label htmlFor="number">Haemoglobin:</label>
            <input
              type="number"
              name="haemoglobin"
              value={donorData.haemoglobin}
              onChange={handleChange}
              required
            />
          </div>
    <label>
      <input type="checkbox" name='medication' />
      <span>Were you on medication for the last 3 days?</span>
    </label>
    <label>
      <input type="checkbox" name='alcohol'/>
      <span>Have you consumed alcohol in the last 24 hours?</span>
    </label>
  </div>
</div>

<div className="form-field">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              name="bloodGroup"
              value={donorData.bloodGroup}
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
              value={donorData.gender}
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
              value={donorData.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={donorData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={donorData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Id:</label>
            <input
              type="text"
              name="email"
              value={donorData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Medical Id:</label>
            <input
              type="text"
              name="medical_id"
              value={donorData.medical_id}
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

export default BloodDonationForm;