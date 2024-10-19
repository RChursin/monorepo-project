"use client"; // This must be the first line

import React, { useState, useEffect } from 'react';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <html lang="en">
      <body className={darkMode ? 'dark-mode' : ''}>
        <Container fluid>
          <Row>
            {/* Left Sidebar */}
            <Col xs={2} className="bg-light sidebar p-3">
              <Navbar expand="lg" className="flex-column">
                <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
                <Nav className="flex-column">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                </Nav>
              </Navbar>
            </Col>

            {/* Main Content */}
            <Col xs={8} className="main-content p-4">
              {children}
            </Col>

            {/* Top-right Avatar and Dropdown */}
            <Col xs={2} className="d-flex align-items-start justify-content-end p-3">
              <Nav>
                <NavDropdown
                  title={<img src="/path-to-avatar.jpg" alt="Avatar" className="avatar" />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                  <Form.Check
                    type="switch"
                    id="dark-mode-switch"
                    label="Dark Mode"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="mx-3"
                  />
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Container>

        {/* Add custom styles for dark mode */}
        <style>{`
          .dark-mode {
            background-color: #121212;
            color: #e0e0e0;
          }
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .sidebar {
            height: 100vh;
            position: fixed;
          }
          .main-content {
            margin-left: 16.6667%; /* Matches the sidebar width */
          }
        `}</style>
      </body>
    </html>
  );
}