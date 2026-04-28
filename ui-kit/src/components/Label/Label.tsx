import * as React from 'react';
import styles from './Label.module.scss';

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'primary' | 'success' | 'warn' | 'danger' | 'info';
  dot?: boolean;
}

export const Label: React.FC<LabelProps> = ({ tone = 'neutral', dot, className = '', children, ...rest }) => (
  <span className={[styles.label, styles[`tone-${tone}`], className].join(' ')} {...rest}>
    {dot && <span className={styles.dot} />}
    {children}
  </span>
);
