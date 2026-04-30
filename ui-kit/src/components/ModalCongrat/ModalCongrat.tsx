import * as React from 'react';
import styles from './ModalCongrat.module.scss';
import { CloseButton } from '../CloseButton/CloseButton';

export interface ModalCongratProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  emoji?: React.ReactNode;
  actions?: React.ReactNode;
}

export const ModalCongrat: React.FC<ModalCongratProps> = ({
  open, onClose, title = 'Поздравляем!', subtitle, emoji = '★', actions,
}) => {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={() => onClose?.()} role="dialog" aria-modal="true">
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <div className={styles.confetti} />
        <CloseButton className={styles.close} tone="soft" size={32} onClick={onClose} />
        <div className={styles.medal}>{emoji}</div>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {actions && <div className={styles.footer}>{actions}</div>}
      </div>
    </div>
  );
};
