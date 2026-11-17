import banner from '../../assets/images/atlas-signature-banner.webp';
import styles from './SignatureBanner.module.css';

/** Franja dorada 24px + banner 417px con el lockup "Atlas Signature". */
export function SignatureBanner() {
  return (
    <section className={styles.banner} aria-label="Atlas Signature">
      <img src={banner} alt="" className={styles.bg} loading="lazy" />
      <h2 className={styles.lockup}>
        <span className={styles.atlas}>Atlas</span>
        <span className={styles.signature}>Signature</span>
      </h2>
    </section>
  );
}
