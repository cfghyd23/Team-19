import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <i className="bi bi-instagram  white-icon large-icon"></i>
        <i className="bi bi-twitter white-icon large-icon white-icon "></i>
        <i className="bi bi-linkedin white-icon large-icon"></i>
        <i className="bi bi-facebook white-icon large-icon"></i>
        </div>
        <p> &copy; 2020 Bloodwarriors.com</p>
    </div>
  )
}

export default Footer