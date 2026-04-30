import * as React from 'react';
import styles from './Tabs.module.scss';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  variant?: 'pill' | 'underline';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, value, defaultValue, onChange, variant = 'pill', className = '' }) => {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value ?? internal;

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={[styles.tabs, variant === 'underline' ? styles.underline : '', className].filter(Boolean).join(' ')}>
      <div className={styles.list} role="tablist">
        {items.map(it => (
          <button
            key={it.id}
            role="tab"
            aria-selected={active === it.id}
            className={[styles.tab, active === it.id ? styles.active : ''].filter(Boolean).join(' ')}
            onClick={() => select(it.id)}
          >
            {it.label}
            {it.count !== undefined && <span className={styles.count}>{it.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};
