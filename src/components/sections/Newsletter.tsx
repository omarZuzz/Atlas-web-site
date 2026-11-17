import { useState, type FormEvent } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import beach from '../../assets/images/newsletter-beach.webp';
import styles from './Newsletter.module.css';

/** "Club privado de viajeros Atlas" — tarjeta 1720×702 r56 con foto a la izquierda. */
export function Newsletter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO(back): POST /api/newsletter { name, email, consent }
    setSent(true);
  };

  return (
    <section className={styles.section} id="registro" aria-labelledby="club-title">
      <Container size="wide">
        <div className={styles.card}>
          <img src={beach} alt="" className={styles.image} loading="lazy" />

          <div className={styles.content}>
            <p className={styles.eyebrow}>CLUB PRIVADO DE VIAJEROS ATLAS</p>
            <h2 id="club-title" className={styles.title}>
              Las últimas ideas en viajes inolvidables
            </h2>
            <p className={styles.text}>
              Recibe antes que nadie los bloqueos con descuento de <strong>Tu Destino</strong>, guías de autor y
              preventas exclusivas.
            </p>

            {sent ? (
              <p className={styles.success} role="status">
                ¡Gracias! Te escribiremos pronto con nuestras ofertas exclusivas.
              </p>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="nl-name">
                  Tu nombre completo
                </label>
                <input id="nl-name" name="name" required placeholder="Tu nombre completo" className={styles.input} />
                <label className="sr-only" htmlFor="nl-email">
                  Tu correo electrónico
                </label>
                <input
                  id="nl-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className={styles.input}
                />

                <div className={styles.actions}>
                  <label className={styles.consent}>
                    <input type="checkbox" name="consent" required />
                    <span>Acepto la política de privacidad y recibir ofertas exclusivas de Atlas Travel.</span>
                  </label>

                  <Button type="submit" variant="navy" size="lg" withPlus className={styles.submit}>
                    Suscribirse
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
