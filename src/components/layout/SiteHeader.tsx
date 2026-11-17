import { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { MegaMenu } from './MegaMenu';
import { CONTACT, NAV_LINKS } from '../../data/content';
import logo from '../../assets/icons/logo-atlas-travel.svg';
import instagram from '../../assets/icons/social-instagram.svg';
import facebook from '../../assets/icons/social-facebook.svg';
import tiktok from '../../assets/icons/social-tiktok.svg';
import headset from '../../assets/icons/icon-headset.svg';
import user from '../../assets/icons/icon-user.svg';
import badge from '../../assets/icons/icon-badge-check.svg';
import styles from './SiteHeader.module.css';

const SOCIALS = [
  { name: 'Instagram', icon: instagram, href: '#' },
  { name: 'Facebook', icon: facebook, href: '#' },
  { name: 'TikTok', icon: tiktok, href: '#' },
];

/**
 * Header superpuesto al hero: barra superior (pill translúcida) + navegación.
 * "Destinos" abre el mega menú (frame "menu" del Figma).
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <Container>
        {/* Barra superior */}
        <div className={styles.topBar}>
          <ul className={styles.socials}>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name}>
                  <img src={s.icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.announcement}>
            <img src={badge} alt="" width={24} height={24} />
            <span>
              Distribuidor Oficial Autorizado <strong>Palace Resort</strong>
            </span>
          </p>

          <div className={styles.topActions}>
            <a href={CONTACT.phoneHref} className={styles.topLink}>
              <img src={headset} alt="" width={24} height={24} />
              <span>{CONTACT.phone}</span>
            </a>
            <a href="#registro" className={styles.topLink}>
              <img src={user} alt="" width={24} height={24} />
              <span>Registrate</span>
            </a>
          </div>
        </div>

        {/* Navegación principal */}
        <div className={styles.navRow}>
          <a href="/" className={styles.logo} aria-label="Atlas Travel — inicio">
            <img src={logo} alt="Atlas Travel" width={307} height={40} />
          </a>

          <nav aria-label="Principal" className={`${styles.nav} ${mobileOpen ? styles.navMobileOpen : ''}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.hasMegaMenu ? (
                    <button
                      type="button"
                      className={styles.navLink}
                      aria-expanded={menuOpen}
                      aria-controls="mega-menu"
                      onClick={() => setMenuOpen((v) => !v)}
                      onMouseEnter={() => setMenuOpen(true)}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.navActions}>
            <button type="button" className={styles.searchBtn} aria-label="Buscar">
              <Icon name="search" size={20} />
            </button>
            <Button variant="gradient" size="sm" href="#cotizar">
              COTIZAR VIAJE
            </Button>
            <button
              type="button"
              className={styles.burger}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </Container>

      <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
