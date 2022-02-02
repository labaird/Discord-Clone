import React from 'react';
import PropTypes from 'prop-types';
import styles from './DownloadButton.module.css';
import whiteDownloadIcon from './whiteDownload.svg';
import blackDownloadIcon from './blackDownload.svg';

function DownloadButton(props) {
  const { color } = props;
  let download;
  let buttonClass;

  if (color === 'purple') {
    download = whiteDownloadIcon;
    buttonClass = styles.purpleButton;
  } else {
    download = blackDownloadIcon;
    buttonClass = styles.whiteButton;
  }

  return (
    <div className={styles.DownloadButton}>
      <button className={buttonClass} type="button">
        <img alt="download icon" src={download} />
        Download for
        <br />
        Windows
      </button>
    </div>
  );
}

DownloadButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DownloadButton;
