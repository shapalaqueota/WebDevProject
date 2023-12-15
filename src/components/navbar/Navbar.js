import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="black" data-bs-theme="dark" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Final<span className="highlight-text">EXAM</span>.exe
        </BootstrapNavbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            MyProjects
          </Nav.Link>
          <Nav.Link as={Link} to="/contacts">
            Contacts
          </Nav.Link>
          <Nav.Link href="#pricing">Course</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
