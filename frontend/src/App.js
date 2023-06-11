import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Service from "./components/Service"
import About from "./components/About"
import Patient from './components/Patient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BloodDonationForm from './components/BloodDonationForm';


import Statistics from './components/Statistics'
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/*" exact Component={Home} />
            <Route path="/about" exact Component={About} />
            <Route path="/Service" exact Component={Service} />
            <Route path="/Statistics" exact Component={Statistics} />
            <Route path="/BloodDonationForm" exact Component={BloodDonationForm} />
            <Route path="/Patient" exact Component={Patient} />
            

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}
export default App
