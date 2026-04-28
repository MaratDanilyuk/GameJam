import * as React from 'react';
import styles from './Separator.module.scss';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'thick';
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', variant = 'solid', className = '', ...rest }) => (
  <div
    role="separator"
    aria-orientation={orientation}
    className={[
      styles.sep,
      orientation === 'horizontal' ? styles.h : styles.v,
      variant === 'dashed' ? styles.dashed : '',
      variant === 'thick'  ? styles.thick  : '',
      className,
    ].filter(Boolean).join(' ')}
    {...rest}
  />
);
