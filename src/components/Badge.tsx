import type { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary';
}

export const Badge = ({ children, variant = 'default', className = '', ...props }: BadgeProps) => {
  const variantClass = variant === 'primary' ? styles.primary : '';
  
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
};
