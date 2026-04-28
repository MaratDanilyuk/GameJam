import * as React from 'react';
import styles from './TextBlock.module.scss';

export interface TextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const TextBlock: React.FC<TextBlockProps> = ({ size = 'md', className = '', ...rest }) => (
  <div className={[styles.block, styles[`size-${size}`], className].filter(Boolean).join(' ')} {...rest} />
);
