import * as React from 'react';
import styles from './Sidebar.module.scss';
import { Icon, type IconName } from '../Icon/Icon';
import { Counter } from '../Counter/Counter';

export interface SidebarItem { id: string; label: string; icon?: IconName; count?: number; section?: string; }
export interface SidebarProps { items: SidebarItem[]; value?: string; onChange?: (id: string) => void; }

export const Sidebar: React.FC<SidebarProps> = ({ items, value, onChange }) => {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value ?? internal;
  const groups: { name: string; items: SidebarItem[] }[] = [];
  let cur = '';
  items.forEach(it => {
    const sec = it.section ?? '';
    if (sec !== cur) { groups.push({ name: sec, items: [] }); cur = sec; }
    groups[groups.length - 1].items.push(it);
  });
  return (
    <aside className={styles.bar}>
      {groups.map((g, i) => (
        <React.Fragment key={i}>
          {g.name && <div className={styles.section}>{g.name}</div>}
          {g.items.map(it => (
            <button key={it.id} className={[styles.item, active === it.id ? styles.active : ''].join(' ')}
              onClick={() => { setInternal(it.id); onChange?.(it.id); }}>
              {it.icon && <span className={styles.icon}><Icon name={it.icon} size={20} /></span>}
              <span>{it.label}</span>
              {it.count !== undefined && <span className={styles.count}><Counter value={it.count} size="sm" color={active === it.id ? 'primary' : 'neutral'} /></span>}
            </button>
          ))}
        </React.Fragment>
      ))}
    </aside>
  );
};
