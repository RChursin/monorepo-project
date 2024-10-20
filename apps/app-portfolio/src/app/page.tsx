import React from 'react';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the main content of the page.</p>
    </div>
  );
}
