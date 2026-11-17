import { Container } from '../ui/Container';
import { CONTACT, FOOTER_COLUMNS } from '../../data/content';
import logo from '../../assets/icons/logo-atlas-footer.svg';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contacto">
      <Container className={styles.main}>
        <div className={styles.brand}>
          <img src={logo} alt="Atlas Travel" width={191} height={149} className={styles.logo} />
          <p className={styles.about}>
            Agencia de viajes chilena especializada en experiencias a medida, bloqueos confirmados junto a nuestro
            operador mayorista.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.title} className={styles.column} aria-label={col.title}>
            <h2 className={styles.columnTitle}>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className={styles.legal}>
        <Container className={styles.legalInner}>
          <p>© 2026 Atlas Travel Chile (atlastravel.cl). Todos los derechos reservados.</p>
          <p>
            Conectado con{' '}
            <a href={CONTACT.bookingUrl} target="_blank" rel="noreferrer">
              {CONTACT.bookingDomain}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
