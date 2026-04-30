import * as React from 'react';
import styles from './Header.module.scss';

export interface HeaderProps {
  brand?: React.ReactNode;
  nav?: { id: string; label: string }[];
  active?: string;
  onNav?: (id: string) => void;
  right?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ brand, nav, active, onNav, right }) => (
  <header className={styles.header}>
    {brand && <div className={styles.brand}>{brand}</div>}
    {nav && (
      <nav className={styles.nav}>
        {nav.map(n => (
          <button key={n.id} className={active === n.id ? styles.active : ''} onClick={() => onNav?.(n.id)}>{n.label}</button>
        ))}
      </nav>
    )}
    <div className={styles.right}>{right}</div>
  </header>
);
