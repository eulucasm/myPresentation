import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'green' | 'dark';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'light', className = '', ...props }, ref) => {
    const variantClass = variant !== 'light' ? styles[variant] : '';
    
    return (
      <div 
        ref={ref}
        className={`${styles.card} ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
