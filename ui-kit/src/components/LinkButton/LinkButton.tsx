import * as React from 'react';
import styles from './LinkButton.module.scss';
import { Icon, type IconName } from '../Icon/Icon';

export interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: 'primary' | 'muted' | 'danger';
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ tone = 'primary', iconLeft, iconRight, children, className = '', ...rest }) => (
  <button className={[styles.btn, tone !== 'primary' ? styles[tone] : '', className].filter(Boolean).join(' ')} {...rest}>
    {iconLeft && <Icon name={iconLeft} size={16} />}
    {children}
    {iconRight && <Icon name={iconRight} size={16} />}
  </button>
);
