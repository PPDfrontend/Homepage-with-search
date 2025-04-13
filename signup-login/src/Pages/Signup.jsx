import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom' ;
import Login from './Login'

function Signup() {
    return (
        <div className="SignUp-page">
          <div className="SignUp-container">
        {/* Header */}
        <div className="SignUp-header">
          <h2>Create Account</h2>
          <div className="SignUp-underline"></div>
        </div>
      <div className="SignUp-inputs">
        {/* Form Fields - Left and Right Sections */}
        <div className="SignUp-form">
          {/* Right Section (Personal Info) */}
          <div className="SignUp-right">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              required
            />
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Last Name"
              required
            />
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="tel"
              id="PhoneNumber"
              name="PhoneNumber"
              placeholder="Phone Number"
              required
            />
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email@example.com"
              required
            />
          </div>

          {/* Left Section (Password, DOB, Gender) */}
          <div className="SignUp-left">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Confirm your password"
              required
            />
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
            {/* Gender Selection */}
            <div className="gender-selection">
              <label htmlFor="gender">Gender</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                />
                <label htmlFor="male" className='male'>Male</label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                />
                <label htmlFor="female" className='female'>Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="SignUp-submit">
          <button>Sign Up</button>
        </div>
        <p className="SignUp-footer">
          Already have an Account ? <Link to="/Login">Log In</Link>
        </p>
        </div>
      </div>
    );
  }
  
  export default Signup