import React from 'react';
import styles from './Intro.module.css';
import { ReactComponent as Img } from './Intro.svg';
import DownloadButton from '../shared/DownloadButton/DownloadButton';

export default function Intro() {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroTop}>
        <h1>
          IMAGINE A
          <br />
          PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>
      </div>

      <div className={styles.IntroBody}>
        <DownloadButton color="black" />
        {/* Make an onClick that uses client side rendering to change the component */}
        {/* Is onClick re-rendering or is it change in detection for iphone/windows/android? */}
        <button className={styles.browserButton} type="button">
          Open Discord in your browser
        </button>
      </div>
      {/* How do I get img to be placed correctly? */}
      <div className={styles.img}>
        <Img />
      </div>
    </div>
  );
}
