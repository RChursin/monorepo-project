import React from 'react';
import { NavDropdown, Form, Nav } from 'react-bootstrap';
import styles from './avatar-dropdown.module.css';

export default function AvatarDropdown({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <Nav>
      <NavDropdown
        title={<img src="/astronaut.png" alt="Avatar" className={styles.avatar} />}
        id="basic-nav-dropdown"
        className={`${styles['avatar-dropdown']} ${darkMode ? 'dark-mode' : ''}`}
        menuVariant={darkMode ? 'dark' : 'light'} {...darkMode ? { bg: 'dark' } : {}}
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
  );
}