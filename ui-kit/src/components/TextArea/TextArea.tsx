import * as React from 'react';
import styles from './TextArea.module.scss';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  help?: string;
  showCount?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, error, help, showCount, maxLength, value, defaultValue, className = '', id, ...rest }, ref,
) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [internal, setInternal] = React.useState(defaultValue?.toString() || '');
  const v = value !== undefined ? String(value) : internal;
  return (
    <div className={[styles.field, error ? styles.error : '', className].filter(Boolean).join(' ')}>
      {label && <label htmlFor={fieldId} className={styles.label}>{label}</label>}
      <div className={styles.wrap}>
        <textarea ref={ref} id={fieldId} className={styles.area}
          value={value} defaultValue={defaultValue} maxLength={maxLength}
          onChange={e => { setInternal(e.target.value); rest.onChange?.(e); }}
          {...rest} />
      </div>
      {(error || help || showCount) && (
        <div className={styles.foot}>
          <span>{error || help}</span>
          {showCount && maxLength && <span>{v.length} / {maxLength}</span>}
        </div>
      )}
    </div>
  );
});
