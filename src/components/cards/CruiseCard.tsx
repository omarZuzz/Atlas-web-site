import type { Cruise } from '../../data/types';
import { Icon } from '../ui/Icon';
import styles from './CruiseCard.module.css';

/** Tarjeta horizontal 404×148 (r24). La activa crece a 181px de alto. */
export function CruiseCard({ cruise, active }: { cruise: Cruise; active?: boolean }) {
  return (
    <a href="#" className={`${styles.card} ${active ? styles.active : ''}`}>
      <img src={cruise.image} alt="" className={styles.thumb} loading="lazy" />
      <span className={styles.body}>
        <span className={styles.title}>{cruise.title}</span>
        <span className={styles.meta}>
          <span className={styles.departures}>{cruise.departures}</span>
          <span className={styles.price}>{cruise.priceFrom}</span>
        </span>
      </span>
      <Icon name="chevron-right" size={20} className={styles.chevron} />
    </a>
  );
}
