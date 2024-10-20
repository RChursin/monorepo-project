'use client'; // Important to ensure client-side rendering

import React, { useState, useEffect } from 'react';
import './global.css'; // Assuming you have global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar/sidebar';
import AvatarDropdown from './components/avatar-dropdown/avatar-dropdown';
import MainContent from './components/main-content/main-content';

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
            <Col xs={2}>
              <Sidebar darkMode={darkMode} />
            </Col>
            <Col xs={9}>
              <MainContent>{children}</MainContent>
            </Col>
            <Col xs={1} className="d-flex align-items-start justify-content-end">
              <AvatarDropdown darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
