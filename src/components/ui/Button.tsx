import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import styles from './Button.module.css';

type Variant = 'navy' | 'gold' | 'gradient' | 'yellow';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Muestra el "+" a la derecha (patrón de todos los CTA del Figma) */
  withPlus?: boolean;
  className?: string;
}

type ButtonProps = CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ children, variant = 'navy', size = 'md', withPlus, className = '', ...rest }: ButtonProps) {
  const cls = `${styles.button} ${styles[variant]} ${styles[size]} ${withPlus ? styles.withPlus : ''} ${className}`;
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {withPlus && <Icon name="plus" size={size === 'xl' ? 21 : 12} className={styles.plus} />}
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
