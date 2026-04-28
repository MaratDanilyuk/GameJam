import * as React from 'react';
import styles from './Radiobutton.module.scss';

export interface RadiobuttonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Radiobutton = React.forwardRef<HTMLInputElement, RadiobuttonProps>(function Radiobutton(
  { label, error, disabled, className = '', ...rest },
  ref,
) {
  return (
    <label className={[
      styles.root,
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      className,
    ].filter(Boolean).join(' ')}>
      <input ref={ref} type="radio" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.dot} aria-hidden />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
