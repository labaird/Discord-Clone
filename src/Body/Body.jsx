import React from 'react';
import styles from './Body.module.css';
import Servers from './Servers/Servers';
import HangingOut from './HangingOut/HangingOut';
import MemberTools from './MemberTools/MemberTools';
import ReliableTech from './ReliableTech/ReliableTech';
import StartYourJourney from './StartYourJourney/StartYourJourney';

export default function Body() {
  return (
    <div className={styles.Body}>
      <Servers />
      <HangingOut />
      <MemberTools />
      <ReliableTech />
      <StartYourJourney />
    </div>
  );
}
