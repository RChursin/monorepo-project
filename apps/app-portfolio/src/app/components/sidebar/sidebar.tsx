'use client';

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'; // Next.js Image for optimized images
import styles from './sidebar.module.css';

export default function Sidebar({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`${styles.sidebar} ${darkMode ? styles['dark-mode'] : ''}`}>
      <Navbar expand="lg" className="flex-column">
        {/* Link to the index page ("/") */}
        <Link href="/" legacyBehavior passHref>
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src="/astronaut.png" // Path to your logo image
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            My Portfolio
          </Navbar.Brand>
        </Link>

        <Nav className="flex-column mt-3">
          <Link href="/about" legacyBehavior passHref>
            <Nav.Link>About Me</Nav.Link>
          </Link>
          <Link href="/home" legacyBehavior passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/projects" legacyBehavior passHref>
            <Nav.Link>Projects</Nav.Link>
          </Link>
          <Link href="/contact" legacyBehavior passHref>
            <Nav.Link>Contact Me</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
