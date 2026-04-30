import * as React from 'react';
import styles from './Input.module.scss';
import { Icon, type IconName } from '../Icon/Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  help?: string;
  error?: string;
  size?: 'md' | 'lg';
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, help, error, size = 'md', iconLeft, iconRight, disabled, className = '', id, ...rest },
  ref,
) {
  const autoId = React.useId();
  const fieldId = id || autoId;

  return (
    <div className={[
      styles.field,
      styles[`size-${size}`],
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      className,
    ].filter(Boolean).join(' ')}>
      {label && <label htmlFor={fieldId} className={styles.label}>{label}</label>}
      <div className={styles.wrap}>
        {iconLeft && <span className={`${styles.icon} ${styles.iconLeft}`}><Icon name={iconLeft} size={20} /></span>}
        <input ref={ref} id={fieldId} className={styles.input} disabled={disabled} {...rest} />
        {iconRight && <span className={`${styles.icon} ${styles.iconRight}`}><Icon name={iconRight} size={20} /></span>}
      </div>
      {(error || help) && <div className={styles.help}>{error || help}</div>}
    </div>
  );
});
