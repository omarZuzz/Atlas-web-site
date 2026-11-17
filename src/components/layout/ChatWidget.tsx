import { CONTACT } from '../../data/content';
import avatar from '../../assets/images/advisor-kender.webp';
import styles from './ChatWidget.module.css';

/** Burbuja flotante del asesor (Frame 55): 256×67, r38, borde navy 50%. */
export function ChatWidget() {
  return (
    <a href="#chat" className={styles.widget} aria-label={`Chatear con ${CONTACT.advisorName}, asesor de Atlas Travel`}>
      <span className={styles.avatarWrap}>
        <img src={avatar} alt="" width={49} height={49} className={styles.avatar} />
        <span className={styles.online} aria-hidden="true" />
      </span>
      <span className={styles.text}>
        <strong>Hola soy {CONTACT.advisorName} de atlas travel</strong>
        <span>Estoy aquí para despejar tus dudas</span>
      </span>
    </a>
  );
}
