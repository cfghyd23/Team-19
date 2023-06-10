import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}  />
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
        <Link to="/Service"> Service </Link>
        
       
        
        
        
      </div>
    </div>
  );
}
export default Navbar;
