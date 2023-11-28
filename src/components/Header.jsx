import React from 'react';
import logo from '../images/cslogo.png'; 

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="University Logo" className="logo" />
        <span className="department-name">DEPARTMENT OF<br></br>COMPUTER SCIENCE</span>
      </div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>          
          <li><a href="/staff">Staff</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
