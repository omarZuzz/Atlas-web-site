import { useState } from 'react';
import { CONTACT, SERVICE_CATEGORIES } from '../../data/content';
import { Icon } from '../ui/Icon';
import styles from './ServicesBar.module.css';

/** Barra de servicios (Group 6): pestaña dorada "COMPRA EN LÍNEA" + panel navy con 11 categorías. */
export function ServicesBar() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);

  return (
    <div className={styles.wrap} id="servicios">
      <div className={styles.bar}>
        <p className={styles.tab}>
          <strong>COMPRA EN LÍNEA:</strong> <span>Arma tu viaje a tu medida</span>
        </p>

        <div className={styles.panel}>
          <ul className={styles.items}>
            {SERVICE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <a
                  href={c.href}
                  className={`${styles.item} ${active === c.id ? styles.itemActive : ''}`}
                  aria-current={active === c.id ? 'true' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(c.id);
                  }}
                >
                  <span className={styles.iconCircle}>
                    <img src={c.icon} alt="" width={53} height={53} />
                  </span>
                  <span className={styles.label}>{c.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className={styles.assurances}>
            <li>
              <Icon name="check-circle" size={18} />
              <span>
                Confirmación inmediata vía <strong>{CONTACT.bookingDomain}</strong>
              </span>
            </li>
            <li>
              <Icon name="check-circle" size={18} />
              <span>Bloqueos aéreos garantizados</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
