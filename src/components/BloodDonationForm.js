import React, { useState, useEffect } from 'react';
import '../styles/BloodDonationForm.css'

const BloodDonationForm = () => {
  const [donorName, setDonorName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [idCard, setIdCard] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const storedDonorInfo = localStorage.getItem('donorInfo');
    if (storedDonorInfo) {
      const {
        donorName,
        bloodGroup,
        ageGroup,
        idCard,
        address,
        email,
        number,
        phoneNumber,
        gender,
      } = JSON.parse(storedDonorInfo);
      setDonorName(donorName);
      setBloodGroup(bloodGroup);
      setAgeGroup(ageGroup);
      setIdCard(idCard);
      setAddress(address);
      setEmail(email);
      setNumber(number);
      setPhoneNumber(phoneNumber);
      setGender(gender);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const donorInfo = {
      donorName,
      bloodGroup,
      ageGroup,
      idCard,
      address,
      email,
      number,
      phoneNumber,
      gender
    };

    localStorage.setItem('donorInfo', JSON.stringify(donorInfo));
    alert('Thank you for donating!');

    setDonorName('');
    setBloodGroup('');
    setAgeGroup('');
    setIdCard('');
    setAddress('');
    setEmail('');
    setNumber('');
    setPhoneNumber('');
    setGender('');
  };


  return (
    <div className="center-container" >
      <div className="image-container">
        <img src="https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2021/06/Blood-Donation-2.jpg?fit=802%2C602&ssl=1" alt="Blood donation" />
        <h1 className="heading">DONOR</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="donorName">Name:</label>
            <input
              type="text"
              id="donorName"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="ageGroup">Age:</label>
            <input
              type="text"
              id="ageGroup"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
  <div className="checkbox-container">
    <label>
      <input type="checkbox" />
      <span>Do you have donated blood in the last 3 months?</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>Do you have symptoms of major flu or cold?</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>Do you have a history of hepatitis B or C?</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>Do you have high blood pressure?</span>
    </label>
     
    <div className="form-field">
            <label htmlFor="number">Hamemoglobin:</label>
            <input
              type="number"
              id="number"
              onChange={(e) => setNumber(e.target.value)}
              accept=".pdf"
              required
            />
          </div>
    <label>
      <input type="checkbox" />
      <span>Were you on medication for the last 3 days?</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>Have you consumed alcohol in the last 24 hours?</span>
    </label>
  </div>
</div>


<div className="form-field" >

            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">Select Group</option>
              <option value="male">A+</option>
              <option value="female">A-</option>
              <option value="other">B+</option>
              <option value="other">B-</option>
              <option value="other">AB+</option>
              <option value="other">AB-</option>
              <option value="other">O+</option>
              <option value="other">O-</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>


          <div className="form-field">
            <label htmlFor="idCard">Aadhar Number:</label>
            <input
              type="text"
              id="idCard"
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Id:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="submit-button-container" >
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodDonationForm;