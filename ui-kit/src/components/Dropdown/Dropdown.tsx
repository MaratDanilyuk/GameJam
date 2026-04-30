import * as React from 'react';
import styles from './Dropdown.module.scss';
import { Icon } from '../Icon/Icon';

export interface DropdownOption { value: string; label: React.ReactNode; }
export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, value, defaultValue, onChange, placeholder = 'Выберите…', className = '' }) => {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const v = value ?? internal;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const current = options.find(o => o.value === v);

  return (
    <div ref={ref} className={[styles.wrap, className].join(' ')}>
      <button className={[styles.trigger, open ? styles.open : ''].join(' ')} onClick={() => setOpen(!open)}>
        <span style={{ color: current ? undefined : 'var(--c-text-muted)' }}>{current?.label ?? placeholder}</span>
        <span className={styles.chev}><Icon name="expand-more" size={20} /></span>
      </button>
      {open && (
        <div className={styles.menu}>
          {options.map(o => (
            <div key={o.value} className={[styles.opt, v === o.value ? styles.active : ''].join(' ')}
              onClick={() => { setInternal(o.value); onChange?.(o.value); setOpen(false); }}>
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
