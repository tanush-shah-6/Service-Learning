import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"; 
import Home from "./components/Home/Home"; // Your Home component
import Signup from "./components/Signup/Signup"; // Your SignUp component
import Login from "./components/Login/Login"; // Your SignIn component
import ClimateTroopers from "./components/Services/ClimateTroopers";
import Project8 from "./components/Projects/Project8";
import Gallery from "./components/Gallery/Gallery";
// import "./App.css"; // Your app-specific styles

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Header will always be visible */}

        <main>
          <Routes>
            {/* Define routes for your main components */}
            <Route path="/" element={<Home />} /> 
            <Route path="/Gallery" element={<Gallery />} /> 
            {/* <Route path="/signup" element={<SignUp />} /> SignUp page */}
            <Route path="/Login" element={<Login />} /> 
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Services/ClimateTroopers" element={<ClimateTroopers />} />  
            <Route path="/Projects/Project8" element={<Project8 />} />  
            {/* Add other routes as needed */}
          </Routes>
        </main>

        <Footer /> {/* Footer will always be visible */}
      </div>
    </Router>
  );
};

export default App;
