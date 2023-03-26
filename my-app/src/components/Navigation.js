import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navStyle = {
  backgroundColor: "#07061F",
  color: "white",
};

function Navigation() {
  return (
    <Navbar className="navigation">
        <Navbar.Brand href="/">Samar City</Navbar.Brand>
        <Container />

        <Navbar.Brand href="/about-us">About Us</Navbar.Brand>
        <Navbar.Brand href="/blog">Blog</Navbar.Brand>
                
    </Navbar>
  );
}

export default Navigation;