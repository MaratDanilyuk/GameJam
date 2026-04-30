import * as React from 'react';
import styles from './Toast.module.scss';
import { Icon, type IconName } from '../Icon/Icon';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warn' | 'danger';
  icon?: IconName;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

const ICON: Record<NonNullable<ToastProps['tone']>, IconName> = {
  info: 'info', success: 'success', warn: 'warning', danger: 'error',
};

export const Toast: React.FC<ToastProps> = ({
  tone = 'info', icon, actionLabel, onAction, onClose, className = '', children, ...rest
}) => (
  <div className={[styles.toast, styles[`tone-${tone}`], className].join(' ')} role="status" {...rest}>
    <span className={styles.icon}><Icon name={icon || ICON[tone]} size={22} /></span>
    <span className={styles.text}>{children}</span>
    {actionLabel && <button className={styles.action} onClick={onAction}>{actionLabel}</button>}
    {onClose && <button className={styles.close} onClick={onClose} aria-label="Закрыть"><Icon name="close" size={18} /></button>}
  </div>
);
