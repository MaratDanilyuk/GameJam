import * as React from 'react';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'elev';
  hoverable?: boolean;
  media?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', hoverable, media, title, footer, children, className = '', ...rest }) => (
  <div className={[
    styles.card,
    variant === 'flat' ? styles.flat : '',
    variant === 'elev' ? styles.elev : '',
    hoverable ? styles.hoverable : '',
    className,
  ].filter(Boolean).join(' ')} {...rest}>
    {media && <div className={styles.media}>{media}</div>}
    {title && <h3 className={styles.title}>{title}</h3>}
    {children && <div className={styles.body}>{children}</div>}
    {footer && <div className={styles.foot}>{footer}</div>}
  </div>
);
