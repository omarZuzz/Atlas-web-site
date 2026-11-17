import { useState, type ReactNode } from 'react';
import { Container } from '../ui/Container';
import { Chip } from '../ui/Chip';
import { CarouselArrow } from '../ui/CarouselArrow';
import { TripCard } from '../cards/TripCard';
import { REGION_FILTERS } from '../../data/content';
import type { Trip } from '../../data/types';
import { useScrollCarousel } from '../../hooks/useScrollCarousel';
import styles from './OffersShowcase.module.css';

interface OffersShowcaseProps {
  /** Columna izquierda (titular editorial) */
  aside: ReactNode;
  /** Título del carrusel (Brawler Bold 30) */
  title: string;
  trips: Trip[];
  id?: string;
}

/**
 * Bloque "columna editorial + filtros + carrusel de paquetes".
 * Se usa 2 veces en la home: "OFERTAS ÚNICAS DEL MES" y "La expresión más refinada de viajar".
 */
export function OffersShowcase({ aside, title, trips, id }: OffersShowcaseProps) {
  const [filter, setFilter] = useState('Rio de Janeiro');
  const { trackRef, prev, next, canPrev, canNext } = useScrollCarousel();

  return (
    <div className={styles.showcase} id={id}>
      <Container size="wide" className={styles.grid}>
        <div className={styles.aside}>{aside}</div>

        <div className={styles.main}>
          <div className={styles.filters} role="group" aria-label="Filtrar por destino">
            {REGION_FILTERS.map((f) => (
              <Chip
                key={f}
                label={f}
                tone={f === filter ? 'navy' : f === 'Punta Cana' ? 'gold' : 'outline'}
                pressed={f === filter}
                onClick={() => setFilter(f)}
              />
            ))}
          </div>

          <h3 className={styles.title}>{title}</h3>

          <div className={styles.carousel}>
            <CarouselArrow
              direction="prev"
              variant={canPrev ? 'navy' : 'muted'}
              onClick={prev}
              disabled={!canPrev}
              className={styles.prev}
            />
            <div ref={trackRef} className={styles.track}>
              {trips.map((t) => (
                <TripCard key={t.id} trip={t} />
              ))}
            </div>
            <CarouselArrow
              direction="next"
              variant={canNext ? 'navy' : 'muted'}
              onClick={next}
              disabled={!canNext}
              className={styles.next}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
