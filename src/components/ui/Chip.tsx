import styles from './Chip.module.css';

interface ChipProps {
  label: string;
  tone?: 'outline' | 'navy' | 'gold';
  pressed?: boolean;
  onClick?: () => void;
}

/** Píldora de filtro (Europa · Sudamérica · TOP DEALS…) */
export function Chip({ label, tone = 'outline', pressed, onClick }: ChipProps) {
  return (
    <button type="button" className={`${styles.chip} ${styles[tone]}`} aria-pressed={pressed} onClick={onClick}>
      <span className="optical-center">{label}</span>
    </button>
  );
}
