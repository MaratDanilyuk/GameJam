import * as React from 'react';
import styles from './ProgressBar.module.scss';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: React.ReactNode;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'primary' | 'success' | 'warn' | 'danger';
  shimmer?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value, max = 100, label, showValue, size = 'md', tone = 'primary', shimmer, className = '',
}) => {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={[
      styles.root,
      styles[`size-${size}`],
      styles[`tone-${tone}`],
      shimmer ? styles.shimmer : '',
      className,
    ].filter(Boolean).join(' ')}>
      {(label || showValue) && (
        <div className={styles.head}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={styles.track} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
        <div className={styles.fill} style={{ ['--p' as any]: `${pct}%` }} />
      </div>
    </div>
  );
};
