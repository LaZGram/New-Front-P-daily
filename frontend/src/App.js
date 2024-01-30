import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import Homefarmer from './page/Homefarmer';
import User from './User';
import Tabledata from './page/Tabledata';
import Milk from './page/Milk';
import Food from './page/Food';
import Homepage from './page/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="App">
      <Router>
        <header>
        <GiHamburgerMenu onClick={toggleNav} className="hamburger-icon" />
        <div className="header-container">P'dairy</div>
        </header>
        <div className='mar1'></div>
        <Navbar show={showNav} />
        <div className='main'>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/food" element={<Food />} />
            <Route path="/tabledata" element={<Tabledata />} />
            <Route path="/homefarmer" element={<Homefarmer />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
