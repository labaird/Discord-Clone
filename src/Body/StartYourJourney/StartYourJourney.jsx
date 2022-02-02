import React from 'react';
import styles from './StartYourJourney.module.css';
import DownloadButton from '../../shared/DownloadButton/DownloadButton';
import sparkles from './sparkles.svg';

export default function StartYourJourney() {
  return (
    <div className={styles.StartYourJourney}>
      {/* sparkles is only showing one middle piece of the star, not the whole thing */}
      <img alt="sparkles" src={sparkles} />
      <h1>Ready to start your journey?</h1>
      <DownloadButton color="purple" />
    </div>
  );
}
