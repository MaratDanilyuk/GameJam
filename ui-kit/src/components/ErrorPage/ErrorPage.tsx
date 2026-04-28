import * as React from 'react';
import styles from './ErrorPage.module.scss';

export interface ErrorPageProps {
  code?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ code = '404', title = 'Страница не найдена', description, actions }) => (
  <div className={styles.page}>
    <h1 className={styles.code}>{code}</h1>
    <h2 className={styles.title}>{title}</h2>
    {description && <p className={styles.body}>{description}</p>}
    {actions && <div className={styles.actions}>{actions}</div>}
  </div>
);
