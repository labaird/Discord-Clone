import React from 'react';
import styles from './HangingOut.module.css';
import Img from './HangingOut.svg';

export default function HangingOut() {
  return (
    <div className={styles.HangingOut}>
      <img alt="Display of a Discord channel where the participants are using the voice call feature to talk with each other" src={Img} />
      <h1>
        Where hanging out is easy
      </h1>
      <p>
        Grab a seat in a voice channel when
        you&apos;re free. Friends in your server
        can see you&apos;re around and instantly
        pop in to talk without having to call.
      </p>
    </div>
  );
}
