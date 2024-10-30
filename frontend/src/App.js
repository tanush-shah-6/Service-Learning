import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"; 
import Home from "./components/Home/Home"; // Your Home component
// import SignUp from "./components/SignUp"; // Your SignUp component
import Login from "./components/Login/Login"; // Your SignIn component
// import "./App.css"; // Your app-specific styles

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Header will always be visible */}

        <main>
          <Routes>
            {/* Define routes for your main components */}
            <Route path="/" element={<Home />} /> Home page as default
            {/* <Route path="/signup" element={<SignUp />} /> SignUp page */}
            <Route path="/Login" element={<Login />} /> SignIn page
            {/* Add other routes as needed */}
          </Routes>
        </main>

        <Footer /> {/* Footer will always be visible */}
      </div>
    </Router>
  );
};

export default App;
