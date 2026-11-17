import { useState } from 'react';
import { Container } from '../ui/Container';
import { CarouselArrow } from '../ui/CarouselArrow';
import { MonthDestinationCard } from '../cards/MonthDestinationCard';
import { MONTH_DESTINATIONS, MONTHS, STORY_TABS } from '../../data/content';
import { useScrollCarousel } from '../../hooks/useScrollCarousel';
import styles from './DesignYourStory.module.css';

export function DesignYourStory() {
  const [tab, setTab] = useState(STORY_TABS[1]);
  const [month, setMonth] = useState(MONTHS[0]);
  const { trackRef, prev, next } = useScrollCarousel();

  return (
    <section className={styles.section} id="destinos" aria-labelledby="story-title">
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>LOS DESTINOS IMPERDIBLES DE LUJO</p>
          <h2 id="story-title" className={styles.title}>
            Diseña tu próxima historia
          </h2>
        </header>

        <div className={styles.tabs} role="tablist" aria-label="Criterio">
          {STORY_TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={styles.months} role="group" aria-label="Mes del año">
          {MONTHS.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={month === m}
              className={`${styles.month} ${month === m ? styles.monthActive : ''}`}
              onClick={() => setMonth(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <div className={styles.carousel}>
          <CarouselArrow direction="prev" variant="navy-lg" onClick={prev} className={styles.prev} />
          <div ref={trackRef} className={styles.track}>
            {MONTH_DESTINATIONS.map((d, i) => (
              <MonthDestinationCard key={d.id} destination={d} featured={i === 0} />
            ))}
          </div>
          <CarouselArrow direction="next" variant="navy-lg" onClick={next} className={styles.next} />
        </div>
      </Container>
    </section>
  );
}
