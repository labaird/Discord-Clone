import React from 'react';
import propTypes from 'prop-types';

function FooterLinksSection(props) {
  const { title, links, className } = props;
  return (
    <section>
      <h1>{title}</h1>
      {
        links.map((link) => <a href={link.link} className={className}>{link.name}</a>)
      }
    </section>
  );
}

FooterLinksSection.propTypes = {
  title: propTypes.string,
  links: propTypes.arrayOf(propTypes.object),
  className: propTypes.string,
};

FooterLinksSection.defaultProps = {
  title: '',
  links: [],
  className: '',
};

export default FooterLinksSection;
