'use client';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import './navbar.module.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="flex-column">
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Nav className="flex-column">
        {/* Use Next.js's Link for client-side routing */}
        <Link href="/home" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/projects" passHref>
          <Nav.Link>Projects</Nav.Link>
        </Link>
        <Link href="/contactMe" passHref>
          <Nav.Link>Contact Me</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
