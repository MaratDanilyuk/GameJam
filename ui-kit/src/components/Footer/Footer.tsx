import * as React from 'react';
import styles from './Footer.module.scss';

export interface FooterProps {
  brand?: React.ReactNode;
  links?: { label: string; href?: string }[];
  copyright?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ brand, links, copyright }) => (
  <footer className={styles.foot}>
    <div className={styles.brand}>{brand}</div>
    <div className={styles.links}>
      {links?.map(l => <a key={l.label} href={l.href || '#'}>{l.label}</a>)}
    </div>
    <div>{copyright}</div>
  </footer>
);
