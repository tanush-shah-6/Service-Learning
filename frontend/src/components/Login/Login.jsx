import React from 'react';
import './Login.css'; // Ensure this path is correct

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // You can handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Uncomment this when the backend is ready
    // fetch('http://localhost:8800/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="log-in-form">
      <a href="./home.html">
        <img src="/images/logo.png" alt="Logo" />
      </a>
      <br />
      <h3>Login now</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="box"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          className="box"
          id="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit" id="loginButton" className="login-button">
          Login
        </button>
      </form>
      <hr />
      <p>
        Create an account? <a href="signup.html">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
