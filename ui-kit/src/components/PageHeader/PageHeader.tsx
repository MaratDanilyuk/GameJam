import * as React from 'react';
import styles from './PageHeader.module.scss';
import { Icon } from '../Icon/Icon';

export interface PageHeaderProps {
  title: React.ReactNode;
  breadcrumbs?: string[];
  onBack?: () => void;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, onBack, actions }) => (
  <header className={styles.head}>
    {onBack && <button className={styles.back} onClick={onBack} aria-label="Назад"><Icon name="arrow-back" size={20} /></button>}
    <div className={styles.body}>
      {breadcrumbs && <div className={styles.crumbs}>{breadcrumbs.map((b, i) => <span key={i}>{b}</span>)}</div>}
      <h1 className={styles.title}>{title}</h1>
    </div>
    {actions && <div className={styles.actions}>{actions}</div>}
  </header>
);
