'use client';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.module.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="flex-column">
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}