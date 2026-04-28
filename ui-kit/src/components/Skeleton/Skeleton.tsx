import * as React from 'react';
import styles from './Skeleton.module.scss';

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'rect' | 'circle' | 'text' | 'title';
  width?: number | string;
  height?: number | string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ variant = 'rect', width, height, style, className = '', ...rest }) => (
  <span
    className={[styles.skel, styles[variant], className].filter(Boolean).join(' ')}
    style={{ width, height, ...style }}
    {...rest}
  />
);
