import * as React from 'react';
import styles from './CloseButton.module.scss';
import { Icon } from '../Icon/Icon';

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 32 | 40 | 48;
  tone?: 'default' | 'light' | 'dark' | 'soft';
}

export const CloseButton: React.FC<CloseButtonProps> = ({ size = 40, tone = 'default', className = '', ...rest }) => (
  <button
    aria-label="Закрыть"
    className={[styles.btn, styles[`size-${size}`], tone !== 'default' ? styles[`tone-${tone}`] : '', className].filter(Boolean).join(' ')}
    {...rest}
  >
    <Icon name="close" size={size === 32 ? 16 : size === 40 ? 20 : 24} />
  </button>
);
