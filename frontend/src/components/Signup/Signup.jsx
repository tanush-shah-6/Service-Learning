import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Ensure the path is correct

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle the signup logic here (e.g., send a request to the backend)
    // For example: 
    // const formData = new FormData(e.target);
    // fetch('http://localhost:8800/signup', { method: 'POST', body: formData });
  };

  return (
    <div className='signup-page'>
        <div className="sign-up-form">
        <a href="./home.html"><img src="./images/logo.png" alt="Logo" /></a>
        <h1>Sign up now</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className="box" id="firstname" name="firstname" placeholder="Enter Firstname" required />
            <input type="text" className="box" id="lastname" name="lastname" placeholder="Enter Lastname" required />
            <input type="email" className="box" id="email" name="email" placeholder="Enter Email" required />
            <input type="password" className="box" id="password" name="password" placeholder="Enter Password" required />
            <br />
            <input type="submit" value="submit" id="submit" />
        </form>
        <hr />
        <p>Have an existing account? <Link to="/login">Log in</Link></p>
        </div>
    </div>
  );
};

export default Signup;
