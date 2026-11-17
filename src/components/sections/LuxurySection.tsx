import { Container } from '../ui/Container';
import { OffersShowcase } from './OffersShowcase';
import { PILLARS, TRIPS } from '../../data/content';
import styles from './LuxurySection.module.css';

/** Fondo #F5F5F5: 3 pilares + segundo carrusel "Lo mejores planes de lujo". */
export function LuxurySection() {
  return (
    <section className={styles.section} id="nosotros" aria-labelledby="lujo-title">
      <Container>
        <ul className={styles.pillars}>
          {PILLARS.map((p) => (
            <li key={p.number} className={styles.pillar}>
              <p className={styles.pillarNumber}>Pilar {p.number}</p>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarText}>{p.description}</p>
            </li>
          ))}
        </ul>
      </Container>

      <OffersShowcase
        title="Lo mejores planes de lujo"
        trips={TRIPS}
        aside={
          <>
            <h2 id="lujo-title" className={styles.title}>
              La expresión más refinada de viajar
            </h2>
            <p className={styles.text}>
              Atlas Signature reúne una selección exclusiva de experiencias de lujo y ultra lujo, diseñadas
              meticulosamente para quienes buscan trascender el itinerario común. Priorizamos la calidad sobre la
              cantidad, el servicio sobre la improvisación y la experiencia sobre el precio.
            </p>
            <p className={styles.claim}>No es un catálogo. Es un filtro de experiencias.</p>
          </>
        }
      />
    </section>
  );
}
