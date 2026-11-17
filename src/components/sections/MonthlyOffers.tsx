import { OffersShowcase } from './OffersShowcase';
import { TRIPS } from '../../data/content';
import styles from './MonthlyOffers.module.css';

/** Sección 1 tras el hero: "OFERTAS ÚNICAS DEL MES" sobre fondo #F5F5F5. */
export function MonthlyOffers() {
  return (
    <section className={styles.section} aria-labelledby="ofertas-title">
      <OffersShowcase
        id="ofertas"
        title="Punta Cana"
        trips={TRIPS}
        aside={
          <>
            <p className={styles.eyebrow}>Cupos Confirmados</p>
            <h2 id="ofertas-title" className={styles.title}>
              OFERTAS ÚNICAS DEL MES
            </h2>
            <p className={styles.note}>Cupos Confirmados • Proveedor Mayorista</p>
          </>
        }
      />
    </section>
  );
}
