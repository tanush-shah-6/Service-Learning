import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post('http://localhost:8800/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login Successful!');
        localStorage.setItem('token', "user"); // Store a token or user identifier as needed
        // Redirect to the home page or desired route after successful login
        navigate('/')// Update this if using React Router
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid email or password!');
    }
  };

  return (
    <div className='loginpage'>
      <div className="log-in-form">
        <a href="./home.html">
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <br />
        <h3>Login now</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" className="box" id="email" name="email" placeholder="Enter Email" required />
          <input type="password" className="box" id="password" name="password" placeholder="Enter Password" required />
          <br />
          <button type="submit" id="loginButton" className="login-button"> Login </button>
        </form>
        <hr />
        <p> Create an account? <Link to="/signup">Sign Up</Link> </p>
      </div>
    </div>
  );
};

export default Login;
