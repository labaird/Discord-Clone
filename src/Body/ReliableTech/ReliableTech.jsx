import React from 'react';
import styles from './ReliableTech.module.css';
import Img from './ReliableTech.svg';

export default function ReliableTech() {
  return (
    <div className={styles.ReliableTech}>
      <h1>
        RELIABLE TECH FOR STAYING CLOSE
      </h1>
      <p>
        Low-latency voice and video feels like
        you&apos;re in the same room. Wave hello
        over video, watch friends stream their
        games, or gather up and have drawing
        session with screen share.
      </p>
      <div className={styles.Img}>
        <img alt="demonstration of a video call" src={Img} />
      </div>
    </div>
  );
}
