import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Log In</h2>
          <div className="login-underline"></div>
        </div>

        <div className="login-inputs">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Email@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="remember-forgot">
            <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
        </div>
        <div className="login-submit">
          <button>Log In</button>
        </div>

        <p className="login-footer">
          New Here? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;