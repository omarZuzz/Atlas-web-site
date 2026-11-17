import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  /** default = 1440px (márgenes 240px en 1920) · wide = 1720px (márgenes 100px) */
  size?: 'default' | 'wide';
  as?: ElementType;
  className?: string;
}

export function Container({ children, size = 'default', as: Tag = 'div', className = '' }: ContainerProps) {
  return <Tag className={`${styles.container} ${styles[size]} ${className}`}>{children}</Tag>;
}
