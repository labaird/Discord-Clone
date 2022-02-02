import React from 'react';
import PropTypes from 'prop-types';
import styles from './BodySection.module.css';

function BodySection(props) {
  const {
    headerText, altText, imgSrc, pText,
  } = props;

  return (
    <div className={styles.BodySection}>
      <img alt={altText} src={imgSrc} />
      <h1>
        {headerText}
      </h1>
      <p>
        {pText}
      </p>
    </div>
  );
}

BodySection.propTypes = {
  headerText: PropTypes.string,
  altText: PropTypes.string,
  imgSrc: PropTypes.string,
  pText: PropTypes.string,
};

BodySection.defaultProps = {
  headerText: '',
  altText: '',
  imgSrc: '',
  pText: '',
};

export default BodySection;
