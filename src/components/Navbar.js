import React from "react";
import "./Navbar.css";
import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navbar = () => {
  return (
    <>
      <NavbarBootstrap bg="light" variant="light">
        <NavbarBootstrap.Brand href="#home">Ammar</NavbarBootstrap.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About me</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
        </Nav>
      </NavbarBootstrap>
    </>
  );
};

export default Navbar;
