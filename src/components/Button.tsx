import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'dark';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const variantClass = styles[variant];
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ x: -2, y: -2, boxShadow: '8px 8px 0px 0px #191A23' }}
        whileTap={{ x: 2, y: 2, boxShadow: '2px 2px 0px 0px #191A23' }}
        className={`${styles.button} ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
