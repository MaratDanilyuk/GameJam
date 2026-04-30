import * as React from 'react';
import styles from './Tooltip.module.scss';

export interface TooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, side = 'top', delay = 100, children }) => {
  const [open, setOpen] = React.useState(false);
  const t = React.useRef<number | null>(null);
  const show = () => { t.current = window.setTimeout(() => setOpen(true), delay); };
  const hide = () => { if (t.current) window.clearTimeout(t.current); setOpen(false); };

  return (
    <span className={styles.wrap} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      <span role="tooltip" className={[styles.tip, styles[side], open ? styles.shown : ''].filter(Boolean).join(' ')}>
        {content}
      </span>
    </span>
  );
};
