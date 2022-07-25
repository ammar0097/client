import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul className="nav-list" style={{marginTop:10}}>
        <li className="nav-item">home</li>
        <li className="nav-item">about me</li>
        <li className="nav-item">js</li>
        <li className="nav-item">portfolio</li>
      </ul>
    </>
  );
};

export default Navbar;
