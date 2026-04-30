import * as React from 'react';
import styles from './Modal.module.scss';
import { CloseButton } from '../CloseButton/CloseButton';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  footer?: React.ReactNode;
  children?: React.ReactNode;
  closable?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, size = 'md', footer, children, closable = true }) => {
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && closable) onClose?.(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose, closable]);

  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={() => closable && onClose?.()} role="dialog" aria-modal="true">
      <div className={[styles.modal, styles[`size-${size}`]].join(' ')} onClick={e => e.stopPropagation()}>
        {(title || closable) && (
          <header className={styles.head}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {closable && <CloseButton onClick={onClose} />}
          </header>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
};
