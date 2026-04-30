import * as React from 'react';
import styles from './LikeButton.module.scss';
import { Icon } from '../Icon/Icon';

export interface LikeButtonProps {
  liked?: boolean;
  defaultLiked?: boolean;
  count?: number;
  onChange?: (liked: boolean) => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ liked, defaultLiked, count, onChange }) => {
  const [internal, setInternal] = React.useState(defaultLiked || false);
  const [pulse, setPulse] = React.useState(false);
  const isControlled = liked !== undefined;
  const value = isControlled ? !!liked : internal;

  const toggle = () => {
    setPulse(true);
    window.setTimeout(() => setPulse(false), 400);
    const next = !value;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const display = (count ?? 0) + (value && !isControlled && !defaultLiked ? 1 : 0);

  return (
    <button
      onClick={toggle}
      className={[styles.btn, value ? styles.liked : '', pulse ? styles.pulse : ''].filter(Boolean).join(' ')}
      aria-pressed={value}
    >
      <Icon name={value ? 'heart-filled' : 'heart'} size={18} />
      {count !== undefined && <span>{display}</span>}
    </button>
  );
};
