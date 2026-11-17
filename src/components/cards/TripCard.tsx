import type { Trip } from '../../data/types';
import { Button } from '../ui/Button';
import heart from '../../assets/icons/icon-heart-badge.svg';
import clock from '../../assets/icons/icon-clock.svg';
import star from '../../assets/icons/icon-star.svg';
import styles from './TripCard.module.css';

/** Tarjeta de paquete (Group 12): 338×450, imagen 226px + banda dorada con la ruta. */
export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={trip.image} alt="" loading="lazy" style={{ objectPosition: trip.imagePosition }} />
        <button type="button" className={styles.fav} aria-label="Guardar en favoritos">
          <img src={heart} alt="" width={25} height={25} />
        </button>
        <p className={styles.route}>{trip.location}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.duration}>
            <img src={clock} alt="" width={14} height={13} />
            {trip.duration}
          </span>
          <span className={styles.rating}>
            <img src={star} alt="" width={11} height={11} />
            <strong>{trip.rating}</strong>
            <span>({trip.reviews} reseñas)</span>
          </span>
        </div>

        <h3 className={styles.title}>{trip.title}</h3>

        <ul className={styles.tags}>
          {trip.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <p className={styles.price}>
            <small>Desde {trip.priceFrom}</small>
            <strong>{trip.price}</strong>
            <small>{trip.priceNote}</small>
          </p>
          <Button variant="navy" size="sm" withPlus>
            Reservar
          </Button>
        </div>
      </div>
    </article>
  );
}
