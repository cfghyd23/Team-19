// import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import BloodDonationForm from './BloodDonationForm'
import Statistics from './Statistics';
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
import About from './About';
import Service from './Service';
//import '../styles/style.css'; // Assuming you have a separate CSS file for styling
//import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import {withRouter,useNavigate} from 'react-router-dom'
import Patient from './Patient';





const Card = ({ title, content,buttonText,imgtxt, handlebuttonclick }) => {
  const navigate = useNavigate();


  return (
    <div className="card-123">
      <div className="card-content">
        <h2 className="heading">{title}</h2>
        <p>{content}</p>
        <img className="myimg" src={imgtxt}></img>
        <button onClick={()=>{navigate('/about'); }} className="card-button">{buttonText} </button>
      </div>
    </div>
  );
};

const Home = () => {
 

  //const history = useHistory();
 

  
  

  const totalRows = 2;
  const cardsPerRow = 1;
  const totalCards = totalRows * cardsPerRow;
  const navigate = useNavigate();

  const renderCards = () => {
    //
    const cards = [];
    cards.push(<Card key={0} title="Donors" buttonText={"Donors"} imgtxt={"https://st2.depositphotos.com/1017986/8169/i/450/depositphotos_81693086-stock-photo-female-hands-holding-red-heart.jpg"} />);
    cards.push(<Card key={1} title="Patient" buttonText={"Patient"} imgtxt={"https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY="} />);
    cards.push(<Card key={2} title="Serving units" buttonText={"Service Units"} imgtxt={"https://urbanhospitaldahod.com/assets/uploads/bl4.jpg"} />);
    cards.push(<Card key={3} title="About Us" buttonText={"About Us"} imgtxt={"https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"} />);
    
    
  

    return cards;
  };
  return (
    <div>
    <Routes>
       <Route path="/about" exact element={<About />} />``
    </Routes>
    <Routes>
    <Route path="/Service" exact Component={<Service />} />``
    </Routes>
    <Routes>
       <Route path="/Statistics" exact Component={<Statistics />} />``
    </Routes>
    <Routes>
    <Route path="/BloodDonationForm" exact Component={<BloodDonationForm />} />``
    </Routes>
    <Routes>
    <Route path="/Patient" exact Component={<Patient />} />''
     
    </Routes>
          
    {/* write all routes */}
    
  <div>

    <div classname="firstrow">
    <div className="card-1" style={{padding:'10px'}}>
      <div className="card-content">
        <h2 className="heading">Donors</h2>
        <img className="myimg" src={"https://st2.depositphotos.com/1017986/8169/i/450/depositphotos_81693086-stock-photo-female-hands-holding-red-heart.jpg"}></img>
        <button onClick={()=>{navigate('/BloodDonationForm'); }} className="card-button"> Donation Form </button>
      </div>
      <div className="card-2">
        <h2 className="heading">Patient</h2>
        
        <img className="myimg" src={"https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY="}></img>
        <div>
        <button onClick={()=>{navigate('/Patient'); }} className="card-button"> Patient </button>
        </div>
      </div> 
    </div>

      <div className="secondrow">
      <div className="card-3">
        <h2 className="heading">Service station</h2>
        <img className="myimg" src={"https://urbanhospitaldahod.com/assets/uploads/bl4.jpg"}></img>
        <div style={{padding:'10px'}}>
        <button onClick={()=>{navigate('/Service'); }} className="card-button">Blood Banks</button>
        </div>
      </div> 
      <div className="card-4">
        <h2 className="heading">About us</h2>
        <img className="myimg" src={"https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"}></img>
        <div style={{padding:'10px'}}>
        <button onClick={()=>{navigate('/about'); }} className="card-button">About Us</button>
        </div>
      </div> 
      </div>



    
    </div>

    </div> 
  </div>
  );
};



export default Home