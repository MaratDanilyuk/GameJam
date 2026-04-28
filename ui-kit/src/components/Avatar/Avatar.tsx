import * as React from 'react';
import styles from './Avatar.module.scss';

const PALETTE = [
  ['#5137C7', '#9F8FE8'],
  ['#FF4B5C', '#FFB0B7'],
  ['#FFB020', '#FFD68C'],
  ['#2BD07B', '#90E5BC'],
  ['#001AFF', '#7C8CFF'],
  ['#5842E2', '#A99CF1'],
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: 32 | 40 | 48 | 64 | 80;
  status?: 'online' | 'offline' | 'busy';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name = '', size = 48, status, className = '' }) => {
  const initials = React.useMemo(() => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    return (parts[0]?.[0] || '?').toUpperCase() + (parts[1]?.[0] || '').toUpperCase();
  }, [name]);

  const [from, to] = PALETTE[hash(name || 'x') % PALETTE.length];
  const bg = `linear-gradient(135deg, ${from}, ${to})`;

  return (
    <span className={[styles.avatar, styles[`size-${size}`], className].join(' ')} style={{ background: bg }}>
      {src ? <img src={src} alt={name} className={styles.img} /> : <span>{initials}</span>}
      {status && <span className={[styles.dot, styles[status]].join(' ')} />}
    </span>
  );
};
