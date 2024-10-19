import React from 'react';
import styles from './main-content.module.css';

export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['main-content']}>
      {children}
    </div>
  );
}