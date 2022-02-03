import React from 'react';
import styles from './FooterHeader.module.css';
import flag from '../../shared/flag/us-flag.png';
import twitterLogo from '../../shared/social-media-icons/twitter.svg';
import instagramLogo from '../../shared/social-media-icons/instagram.svg';
import facebookLogo from '../../shared/social-media-icons/facebook.svg';
import youtubeLogo from '../../shared/social-media-icons/youtube.svg';

export default function FooterHeader() {
  return (
    <div className={styles.FooterHeader}>
      <h1>IMAGINE A PLACE</h1>
      <div className={styles.location}>
        <img className={styles.flag} alt="country flag" src={flag} />
        English, USA
      </div>
      <div className={styles.socialMedia}>
        <img alt="Twitter" src={twitterLogo} />
        <img alt="Instagram" src={instagramLogo} />
        <img alt="Facebook" src={facebookLogo} />
        <img alt="YouTube" src={youtubeLogo} />
      </div>
    </div>
  );
}
