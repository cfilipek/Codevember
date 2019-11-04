import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    const codevember = "< CodeVember />"
    return (
      <div>
  <Navbar bg="dark" variant="dark">
    <Link to="/"><Navbar.Brand className = "margin-right-nav">{codevember}</Navbar.Brand></Link>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Mission</Nav.Link>
      <Nav.Link href="#pricing">Contact Me</Nav.Link>
    </Nav>
  </Navbar>
  </div>
    );
  }
}

export default Navigation;

