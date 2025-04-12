import React from 'react';
import './Home.css'; 
import doctorImage from '../assets/doctor.png'; 
import { Link } from 'react-router-dom';
import groupimage from '../assets/group_profiles.png'; 


function All() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className='title'>Quality Healthcare at Your <br></br>Fingertips</h1>

        <p className="hero-text">
          Simply browse through our extensive list of trusted doctors,<br></br> schedule your appointment hassle-free.
        </p>
        
        <button className="book-button">
          Book appointment <span className="arrow">→</span>
        </button>
      </div>

      <div className="hero-image">
        <img src={doctorImage} alt="Doctor with stethoscope" />
      </div>
      <div className="group-image">
        <img src={groupimage} alt="group image" />
      </div>
    </div>
  );
}

export default All;
