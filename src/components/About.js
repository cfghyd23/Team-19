
import React from "react";
import '../styles/About.css'
import BW from '../assets/BW.png'
function About() {
  return (
    <>
    <div className="About">
      <div className='leftSide'  style={{ backgroundImage: `url(${BW})` }}></div>
  
      <div className='rightSide'>
      <section classname="about-us">
  <div classname="about">
    
    <div classname="text">
      <h2>About Us</h2>
     
      <p>
      We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.
      </p>
      
    </div>
  </div>
</section>
        </div>
        </div>
      

    </>
  );
}

export default About;