// import React from 'react'
import {Link} from 'react-router-dom'
import BloodDonationForm from './BloodDonationForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// function Home() {
//   return (
//     <>
//       <div>Home</div>
//           <Link to="/BloodDonationForm"> BloodDonationForm </Link>
        
//     </>
    
//   )
// }

// export default Home
import React from 'react';
//import BloodDonationForm from './BloodDonationForm';
import '../styles/Home.css';
//import '../styles/style.css'; // Assuming you have a separate CSS file for styling


const Card = ({ title, content,buttonText,imgtxt }) => {
  return (
    <div className="card-123">
      <div className="card-content">
        <h2 className="heading">{title}</h2>
        <p>{content}</p>
        <img className="myimg" src={imgtxt}></img>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

const Home = () => {
  

  const totalRows = 2;
  const cardsPerRow = 1;
  const totalCards = totalRows * cardsPerRow;

  const renderCards = () => {
    const cards = [];
    cards.push(<Card key={0} title="Donors" buttonText={"Donors"} imgtxt={"https://st2.depositphotos.com/1017986/8169/i/450/depositphotos_81693086-stock-photo-female-hands-holding-red-heart.jpg"} />);
    cards.push(<Card key={1} title="Patient" buttonText={"Patient"} imgtxt={"https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY="} />);
    cards.push(<Card key={2} title="Serving units" buttonText={"Service Units"} imgtxt={"https://urbanhospitaldahod.com/assets/uploads/bl4.jpg"} />);
    cards.push(<Card key={3} title="About Us" buttonText={"About Us"} imgtxt={"https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"} />);
  

    return cards;
  };
  return (
    <div>
      {/* <h1 className="page-heading">Home Page</h1> */}
      <div className="card-container">{renderCards()}</div>
    </div>
  );
};



export default Home