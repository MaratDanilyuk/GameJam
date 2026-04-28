import * as React from 'react';
import styles from './Sticker.module.scss';

export interface StickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'primary' | 'brand' | 'warm' | 'success' | 'info' | 'soft';
  rotate?: number;
}

export const Sticker: React.FC<StickerProps> = ({ size = 'md', tone = 'primary', rotate = -2, style, className = '', children, ...rest }) => (
  <span
    className={[styles.sticker, styles[`size-${size}`], styles[`tone-${tone}`], className].join(' ')}
    style={{ ...style, ['--rot' as any]: `${rotate}deg` }}
    {...rest}
  >
    {children}
  </span>
);
