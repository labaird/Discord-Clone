import React from 'react';
import styles from './FooterHeader.module.css';

export default function FooterHeader() {
  return (
    <div className={styles.FooterHeader}>
      <h1>IMAGINE A PLACE</h1>
      <div className={styles.location}>
        <img alt="country flag" />
        English, USA
      </div>
      <div className={styles.socialMedia}>
        <img alt="Twitter" />
        <img alt="Snapchat" />
        <img alt="Facebook" />
        <img alt="YouTube" />
      </div>
    </div>
  );
}
