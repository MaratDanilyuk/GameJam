import * as React from 'react';
import styles from './TapBar.module.scss';
import { Icon, type IconName } from '../Icon/Icon';
import { Counter } from '../Counter/Counter';

export interface TapBarItem {
  id: string;
  label: React.ReactNode;
  icon: IconName;
  badge?: number;
}

export interface TapBarProps {
  items: TapBarItem[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export const TapBar: React.FC<TapBarProps> = ({ items, value, onChange, className = '' }) => {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value ?? internal;
  return (
    <nav className={[styles.bar, className].join(' ')}>
      {items.map(it => (
        <button
          key={it.id}
          className={[styles.item, active === it.id ? styles.active : ''].filter(Boolean).join(' ')}
          onClick={() => { setInternal(it.id); onChange?.(it.id); }}
          aria-current={active === it.id}
        >
          <span className={styles.icon}><Icon name={it.icon} size={24} /></span>
          <span>{it.label}</span>
          {it.badge !== undefined && <span className={styles.badge}><Counter value={it.badge} size="sm" /></span>}
        </button>
      ))}
    </nav>
  );
};
