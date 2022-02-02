import React from 'react';
import styles from './Footer.module.css';
import FooterHeader from './FooterHeader/FooterHeader';
import FooterLinks from './FooterLinks/FooterLinks';
import Logo from '../shared/Logo/logo.svg';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <FooterHeader />
      <FooterLinks />
      <hr />
      <nav>
        <img alt="Discord logo" src={Logo} />
        <button type="button">Sign Up</button>
      </nav>
    </div>
  );
}
