import * as React from 'react';
import styles from './HelpButton.module.scss';
import { Icon } from '../Icon/Icon';

export interface HelpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const HelpButton: React.FC<HelpButtonProps> = ({ className = '', ...rest }) => (
  <button aria-label="Помощь" className={[styles.btn, className].join(' ')} {...rest}>
    <Icon name="help" size={20} />
  </button>
);
