import * as React from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, indeterminate, error, disabled, className = '', ...rest },
  ref,
) {
  const innerRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);
  React.useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <label className={[
      styles.root,
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      indeterminate ? styles.partly : '',
      className,
    ].filter(Boolean).join(' ')}>
      <input ref={innerRef} type="checkbox" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.box} aria-hidden>
        {indeterminate ? (
          <svg width="14" height="2" viewBox="0 0 14 2"><rect width="14" height="2" rx="1" fill="currentColor" /></svg>
        ) : (
          <svg width="14" height="11" viewBox="0 0 14 11"><path d="M1.5 5.8 5 9.4 12.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
