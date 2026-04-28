import * as React from 'react';
import styles from './TooltipPopover.module.scss';
import { CloseButton } from '../CloseButton/CloseButton';

export interface TooltipPopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  title?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  onOpenChange?: (o: boolean) => void;
  children: React.ReactElement;
}

export const TooltipPopover: React.FC<TooltipPopoverProps> = ({ open, defaultOpen, title, body, footer, onOpenChange, children }) => {
  const [internal, setInternal] = React.useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const value = isControlled ? open : internal;
  const set = (v: boolean) => { if (!isControlled) setInternal(v); onOpenChange?.(v); };
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) set(false); };
    if (value) document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [value]);

  const trigger = React.cloneElement(children, { onClick: () => set(!value) });
  return (
    <span ref={ref} className={styles.wrap}>
      {trigger}
      {value && (
        <div className={styles.pop}>
          <div className={styles.close}><CloseButton size={32} onClick={() => set(false)} /></div>
          {title && <h4 className={styles.title}>{title}</h4>}
          {body && <div className={styles.body}>{body}</div>}
          {footer && <div className={styles.foot}>{footer}</div>}
        </div>
      )}
    </span>
  );
};
