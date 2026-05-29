import styles from './PadLayoutToggle.module.css';
import { usePadLayout } from '../../context/PadLayoutContext';

export default function PadLayoutToggle() {
  const { layout, setLayout } = usePadLayout();

  return (
    <div className={styles.toggle}>
      <span className={styles.label}>Controller:</span>
      <div className={styles.pills}>
        <button
          className={`${styles.pill} ${layout === 'playstation' ? styles.active : ''}`}
          onClick={() => setLayout('playstation')}
        >
          <span className={styles.icon}>🎮</span>
          PlayStation
        </button>
        <button
          className={`${styles.pill} ${layout === 'xbox' ? styles.active : ''}`}
          onClick={() => setLayout('xbox')}
        >
          <span className={styles.icon}>🎮</span>
          Xbox
        </button>
      </div>
    </div>
  );
}
