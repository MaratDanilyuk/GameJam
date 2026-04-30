import * as React from 'react';
import styles from './InfoBlock.module.scss';
import { Icon, type IconName } from '../Icon/Icon';

export interface InfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warn' | 'danger' | 'neutral';
  icon?: IconName;
  title?: React.ReactNode;
}

const ICON: Record<NonNullable<InfoBlockProps['tone']>, IconName> = {
  info: 'info', success: 'success', warn: 'warning', danger: 'error', neutral: 'info',
};

export const InfoBlock: React.FC<InfoBlockProps> = ({ tone = 'info', icon, title, children, className = '', ...rest }) => (
  <div className={[styles.block, styles[`tone-${tone}`], className].join(' ')} {...rest}>
    <span className={styles.icon}><Icon name={icon || ICON[tone]} size={22} /></span>
    <div className={styles.body}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div>{children}</div>
    </div>
  </div>
);
