import React from 'react';
import styles from './MemberTools.module.css';
import Img from './MemberTools.svg';

export default function MemberTools() {
  return (
    <div className={styles.MemberTools}>
      <div className={styles.Img}>
        <img alt="Displays a list of Roles such as Coach and Student Lead and people assigned to those roles" src={Img} />
      </div>
      <h1>
        From few to a fandom
      </h1>
      <p>
        Get any community running with
        moderation tools and custom member
        access. Give members special powers,
        set up private channels, and more.
      </p>
    </div>
  );
}
