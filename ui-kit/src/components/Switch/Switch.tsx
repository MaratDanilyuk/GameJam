import * as React from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  size?: 'md' | 'lg';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, size = 'md', disabled, className = '', ...rest }, ref,
) {
  return (
    <label className={[styles.root, styles[`size-${size}`], disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}>
      <input ref={ref} type="checkbox" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.track}><span className={styles.thumb} /></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
