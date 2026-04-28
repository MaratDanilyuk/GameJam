import * as React from 'react';
import styles from './Button.module.scss';
import { Icon, type IconName } from '../Icon/Icon';

export type ButtonSize = 40 | 48 | 56;
export type ButtonColor = 'primary' | 'second' | 'transparent' | 'brand' | 'ghost';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  size?: ButtonSize;
  color?: ButtonColor;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconOnly?: IconName;
  loading?: boolean;
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { size = 48, color = 'primary', iconLeft, iconRight, iconOnly, loading, block, disabled, children, className = '', ...rest },
  ref,
) {
  const cls = [
    styles.btn,
    styles[`size-${size}`],
    styles[`color-${color}`],
    iconOnly ? styles.iconOnly : '',
    block ? styles.block : '',
    className,
  ].filter(Boolean).join(' ');

  const iconSize = size === 40 ? 20 : 24;

  return (
    <button ref={ref} className={cls} disabled={disabled || loading} {...rest}>
      {loading ? (
        <span className={styles.loader} aria-label="loading" />
      ) : iconOnly ? (
        <Icon name={iconOnly} size={iconSize} />
      ) : (
        <>
          {iconLeft && <Icon name={iconLeft} size={iconSize} />}
          {children && <span>{children}</span>}
          {iconRight && <Icon name={iconRight} size={iconSize} />}
        </>
      )}
    </button>
  );
});
