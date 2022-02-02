import React from 'react';
import styles from './FooterLinks.module.css';
import FooterLinksSection from './FooterLinksSection';

export default function FooterLinks() {
  const productLinks = [
    { name: 'Download', link: '/download' },
    { name: 'Nitro', link: '/nitro' },
    { name: 'Status', link: 'https://discordstatus.com' },
  ];
  const companyLinks = [
    { name: 'About', link: '/company' },
    { name: 'Jobs', link: '/jobs' },
    { name: 'Branding', link: '/branding' },
    { name: 'Newsroom', link: '/newsroom' },
  ];
  const resourcesLinks = [
    { name: 'College', link: '/college' },
    { name: 'Support', link: '/support.discord.com/hc/en-us' },
    { name: 'Safety', link: '/safety' },
    { name: 'Blog', link: '/blog' },
    { name: 'Feedback', link: '//feedback.discord.com' },
    { name: 'Developers', link: '/developers/docs' },
    { name: 'StreamKit', link: '/streamkit' },
  ];
  //    note: cookie settings is set to root, but it does something unusual why?
  const policiesLinks = [
    { name: 'Terms', link: '/terms' },
    { name: 'Privacy', link: '/privacy' },
    { name: 'Cookie Settings', link: '/' },
    { name: 'Guidelines', link: '/guidelines' },
    { name: 'Acknowledgements', link: '/acknowledgements' },
    { name: 'Licenses', link: '/licenses' },
    { name: 'Moderation', link: '/moderation' },
  ];

  return (
    <div className={styles.FooterLinks}>
      <FooterLinksSection className={styles.footerLinksSection} title="Product" links={productLinks} />
      <FooterLinksSection className={styles.footerLinksSection} title="Company" links={companyLinks} />
      <FooterLinksSection className={styles.footerLinksSection} title="Resources" links={resourcesLinks} />
      <FooterLinksSection className={styles.footerLinksSection} title="Policies" links={policiesLinks} />
    </div>
  );
}
