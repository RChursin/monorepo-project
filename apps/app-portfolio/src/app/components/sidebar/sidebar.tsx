import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './sidebar.module.css';

export default function Sidebar({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`${styles.sidebar} ${darkMode ? styles['dark-mode'] : ''}`}>
      <Navbar expand="lg" className="flex-column">
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}