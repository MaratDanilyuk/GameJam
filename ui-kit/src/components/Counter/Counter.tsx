import * as React from 'react';
import styles from './Counter.module.scss';

export interface CounterProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'danger' | 'primary' | 'success' | 'warn' | 'neutral';
  stroke?: boolean;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, max = 99, size = 'md', color = 'danger', stroke, className = '' }) => {
  const text = value > max ? `${max}+` : `${value}`;
  return (
    <span className={[
      styles.badge,
      styles[`size-${size}`],
      styles[`color-${color}`],
      stroke ? styles.stroke : '',
      className,
    ].filter(Boolean).join(' ')}>{text}</span>
  );
};
