import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="/">Samar City</Navbar.Brand>
        <Container />

        <Navbar.Brand href="/about-us">About Us</Navbar.Brand>
        <Navbar.Brand href="/blog">Blog</Navbar.Brand>
                
    </Navbar>
  );
}

export default Navigation;