import { Container } from '../ui/Container';
import { CarouselArrow } from '../ui/CarouselArrow';
import { HERO, STAR_DESTINATIONS } from '../../data/content';
import { useScrollCarousel } from '../../hooks/useScrollCarousel';
import heroBg from '../../assets/images/hero-punta-cana.webp';
import styles from './Hero.module.css';

export function Hero() {
  const { trackRef, prev, next, canPrev, canNext, progress } = useScrollCarousel();

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img src={heroBg} alt="" className={styles.bg} fetchPriority="high" />
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{HERO.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {HERO.titleLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <span className={styles.goldRule} aria-hidden="true" />
        </div>

        <div className={styles.stars}>
          <h2 className={styles.starsTitle}>{HERO.starTitle}</h2>
          <div ref={trackRef} className={styles.track}>
            {STAR_DESTINATIONS.map((d, i) => (
              <a key={d.id} href="#" className={`${styles.starCard} ${i === 0 ? styles.starCardActive : ''}`}>
                <img src={d.image} alt={d.name} loading="eager" />
              </a>
            ))}
          </div>
          <div className={styles.controls}>
            <CarouselArrow direction="prev" variant="ghost" onClick={prev} disabled={!canPrev} />
            <CarouselArrow direction="next" variant="ghost" onClick={next} disabled={!canNext} />
            <div className={styles.progress} aria-hidden="true">
              <span style={{ left: `calc(${progress} * (100% - 24px))` }} />
            </div>
            <span className={styles.month}>{HERO.month}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
