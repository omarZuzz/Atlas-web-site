import { useState } from 'react';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { MEGA_MENU_COLLECTIONS, MEGA_MENU_DESTINATIONS } from '../../data/content';
import styles from './MegaMenu.module.css';

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Mega menú "Destinos" — replica el frame "menu" del Figma (panel #F5F5F5 de 723px). */
export function MegaMenu({ open, onClose }: MegaMenuProps) {
  const [active, setActive] = useState('por-mes');

  return (
    <div id="mega-menu" className={`${styles.panel} ${open ? styles.open : ''}`} onMouseLeave={onClose} hidden={!open}>
      <Container className={styles.inner}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarTitle}>EXPLORAR COLECCIONES</p>
          <ul className={styles.collections}>
            {MEGA_MENU_COLLECTIONS.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={`${styles.collection} ${active === c.id ? styles.collectionActive : ''}`}
                  onClick={() => setActive(c.id)}
                  aria-pressed={active === c.id}
                >
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.description}</small>
                  </span>
                  <Icon name="chevron-right" size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.catalogCard}>
            <p className={styles.catalogTitle}>Catálogo en Tiempo Real</p>
            <p className={styles.catalogText}>Accede al inventario completo de bloqueos Tu Destino y reserva online.</p>
            <a href="#catalogo" className={styles.catalogLink}>
              <span>Ir al catálogo completo</span>
              <Icon name="arrow-up-right" size={20} />
            </a>
          </div>
        </aside>

        <section className={styles.content} aria-label="Especiales por mes">
          <h2 className={styles.contentTitle}>Por mes - Especiales de Atlas Travel</h2>
          <ul className={styles.grid}>
            {MEGA_MENU_DESTINATIONS.map((d) => (
              <li key={d.id}>
                {d.image ? (
                  <a href="#" className={styles.tile}>
                    <img src={d.image} alt="" loading="lazy" />
                    <span className={styles.tileName}>{d.name}</span>
                    {d.caption && <span className={styles.tileCaption}>{d.caption}</span>}
                    <span className={styles.tileSeason}>{d.season}</span>
                  </a>
                ) : (
                  <div className={`${styles.tile} ${styles.placeholder}`} aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
