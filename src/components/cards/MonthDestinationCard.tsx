import type { MonthDestination } from '../../data/types';
import { Button } from '../ui/Button';
import styles from './MonthDestinationCard.module.css';

interface Props {
  destination: MonthDestination;
  featured?: boolean;
}

/** Tarjeta vertical 603px (r37). La destacada mide 590px y lleva descripción + CTA. */
export function MonthDestinationCard({ destination, featured }: Props) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img src={destination.image} alt="" loading="lazy" className={styles.bg} />
      <span className={styles.badge}>{destination.badge}</span>
      <div className={styles.content}>
        <p className={styles.subtitle}>{destination.subtitle}</p>
        <h3 className={styles.title}>{destination.title}</h3>
        {featured && destination.description && <p className={styles.description}>{destination.description}</p>}
        {featured && (
          <Button variant="gold" size="xl" withPlus className={styles.cta} href="#">
            Explorar planes
          </Button>
        )}
      </div>
    </article>
  );
}
