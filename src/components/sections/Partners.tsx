import { Container } from '../ui/Container';
import { CarouselArrow } from '../ui/CarouselArrow';
import { Button } from '../ui/Button';
import { CruiseCard } from '../cards/CruiseCard';
import { CRUISES, PARTNERS } from '../../data/content';
import { useScrollCarousel } from '../../hooks/useScrollCarousel';
import styles from './Partners.module.css';

/** Sección navy: carrusel de logos de partners + navieras (Scenic). */
export function Partners() {
  const { trackRef, prev, next } = useScrollCarousel<HTMLUListElement>();

  return (
    <section className={styles.section} aria-labelledby="partners-title">
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>las marcas que respaldan nuestra calidad</p>
          <h2 id="partners-title" className={styles.title}>
            Algunos de nuestros partners
          </h2>
        </header>
      </Container>

      <div className={styles.stripWrap}>
        <CarouselArrow direction="prev" variant="navy-lg" onClick={prev} className={styles.prev} />
        <div className={styles.strip}>
          <ul ref={trackRef} className={styles.logos}>
            {PARTNERS.map((p) => (
              <li key={p.id}>
                <img src={p.logo} alt={p.name} width={261} height={261} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
        <CarouselArrow direction="next" variant="navy-lg" onClick={next} className={styles.next} />
      </div>

      <Container size="wide">
        <header className={styles.cruiseHeader}>
          <h3 className={styles.cruiseTitle}>Scenic cultura de lujo</h3>
          <p className={styles.cruiseSubtitle}>Navieras líderes y cruceros de expedición con bloqueos exclusivos</p>
        </header>
        <div className={styles.cruises}>
          {CRUISES.map((c, i) => (
            <CruiseCard key={c.id} cruise={c} active={i === 2} />
          ))}
        </div>
        <div className={styles.cta}>
          <Button variant="gold" size="md" withPlus href="#">
            Ver todos
          </Button>
        </div>
      </Container>
    </section>
  );
}
