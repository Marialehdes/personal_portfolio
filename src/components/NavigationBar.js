import React from 'react';
//donwloaded bootstrap
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

//Got the idea to create this type of navigation bar from this website, I really like the clean look and I feel like it makes it better.
//https://react-bootstrap.netlify.app/docs/components/navbar/

function NavigationBar() {
  return (
    <Navbar className="customNavbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Maria Hernandez</Navbar.Brand>
        <Nav className="info">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;