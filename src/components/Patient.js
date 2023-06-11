import React, { useState, useEffect } from 'react';
import '../styles/Patient.css'

const Patient = () => {
  const [donorName, setDonorName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [lastDonationDate, setLastDonationDate] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [idCard, setIdCard] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const storedDonorInfo = localStorage.getItem('donorInfo');
    if (storedDonorInfo) {
      const {
        donorName,
        bloodGroup,
        lastDonationDate,
        ageGroup,
        idCard,
        address,
        email,
        phoneNumber,
        gender,
      } = JSON.parse(storedDonorInfo);
      setDonorName(donorName);
      setBloodGroup(bloodGroup);
      setLastDonationDate(lastDonationDate);
      setAgeGroup(ageGroup);
      setIdCard(idCard);
      setAddress(address);
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setGender(gender);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const donorInfo = {
      donorName,
      bloodGroup,
      lastDonationDate,
      ageGroup,
      idCard,
      address,
      email,
      phoneNumber,
      gender,
      pdfFile,
    };

    localStorage.setItem('donorInfo', JSON.stringify(donorInfo));
    alert('Thank you for your request!');

    setDonorName('');
    setBloodGroup('');
    setLastDonationDate('');
    setAgeGroup('');
    setIdCard('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
    setGender('');
    setPdfFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  return (
    <div className="center-container">
      <div className="image-container">
        <img src="https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2021/06/Blood-Donation-2.jpg?fit=802%2C602&ssl=1" alt="Blood donation" />
        <h1 className="heading">PATIENT</h1>
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
  <label htmlFor="bloodGroup">Blood Group:</label>
  <input
    type="text"
    id="bloodGroup"
    value={bloodGroup}
    onChange={(e) => setBloodGroup(e.target.value)}
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
  <label htmlFor="email">Email Id:</label>
  <input
    type="text"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
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
  <label htmlFor="gender">Gender:</label>
  <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
<div className="form-field">
  <label htmlFor="pdfFile">Upload Report:</label>
  <input
    type="file"
    id="pdfFile"
    onChange={handleFileChange}
    accept=".pdf"
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

export default Patient;
