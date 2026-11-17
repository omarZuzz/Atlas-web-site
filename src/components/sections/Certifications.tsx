import { Container } from '../ui/Container';
import ccs from '../../assets/images/cert-ccs.webp';
import sernatur from '../../assets/images/cert-sernatur.webp';
import styles from './Certifications.module.css';

export function Certifications() {
  return (
    <section className={styles.section} aria-labelledby="cert-title">
      <Container size="wide" className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="cert-title" className={styles.title}>
            <span className={styles.gold}>Nuestras alianzas</span> y<br />
            certificaciones
          </h2>
          <p className={styles.text}>
            Nos enorgullecemos de ser miembros activos y certificados de las principales organizaciones comerciales de
            chile
          </p>
        </div>
        <ul className={styles.logos}>
          <li>
            <img src={ccs} alt="Cámara de Comercio de Santiago — Confianza eCommerce" width={250} height={252} />
          </li>
          <li>
            <img src={sernatur} alt="SERNATUR" width={426} height={426} />
          </li>
        </ul>
      </Container>
    </section>
  );
}
