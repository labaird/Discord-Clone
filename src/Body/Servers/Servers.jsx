import React from 'react';
import styles from './Servers.module.css';
import Img from './Servers.svg';
// Double-check all SVGs for how we organized them

export default function Servers() {
  return (
    <div className={styles.Servers}>
      <img alt="Displays an example of how Discord sorts a server into topic-based channels, such as one called #study group" src={Img} />
      <h1>
        Create an invite-only place where you belong
      </h1>
      <p>
        Discord servers are organized into topic-based
        channels where you can collaborate, share, and
        just talk about your day without clogging up a
        group chat.
      </p>
    </div>
  );
}
