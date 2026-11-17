import { Icon } from './Icon';
import styles from './CarouselArrow.module.css';

interface CarouselArrowProps {
  direction: 'prev' | 'next';
  /** ghost = hero (borde gris, transparente) · muted = gris deshabilitado · navy = 31px · navy-lg = 44px */
  variant?: 'ghost' | 'muted' | 'navy' | 'navy-lg';
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function CarouselArrow({
  direction,
  variant = 'navy',
  onClick,
  disabled,
  label,
  className = '',
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (direction === 'prev' ? 'Anterior' : 'Siguiente')}
    >
      <Icon name={direction === 'prev' ? 'arrow-left' : 'arrow-right'} size={variant === 'navy-lg' ? 24 : 18} />
    </button>
  );
}
