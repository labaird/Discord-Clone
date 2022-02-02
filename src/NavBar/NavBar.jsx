import React from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Hamburger } from './hamburger.svg';
// Why can't I import without ReactComponent?
export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Logo className={styles.logo} />
      <a href="https://discord.com/login">Login</a>
      <button type="button">
        <Hamburger />
      </button>
    </nav>
  );
}
