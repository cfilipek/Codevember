import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    const codevember = "< CodeVember />"
    return (
      <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className = "margin-right-nav" href="#home">{codevember}</Navbar.Brand>
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

