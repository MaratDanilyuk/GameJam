import * as React from 'react';
import styles from './ChosenMaterial.module.scss';
import { Icon } from '../Icon/Icon';

export interface ChosenMaterialProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  glyph?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const ChosenMaterial: React.FC<ChosenMaterialProps> = ({ selected, glyph, title, subtitle, className = '', ...rest }) => (
  <div className={[styles.card, selected ? styles.selected : '', className].filter(Boolean).join(' ')} {...rest}>
    <div className={styles.icon}>{glyph ?? '★'}</div>
    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.sub}>{subtitle}</div>}
    </div>
    <div className={styles.check}><Icon name="check" size={24} /></div>
  </div>
);
