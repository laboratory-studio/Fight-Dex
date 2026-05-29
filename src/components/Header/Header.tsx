import { Link } from 'react-router-dom';
import PadLayoutToggle from '../PadLayoutToggle/PadLayoutToggle';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <span className={styles.brandIcon}>⚔</span>
        <span className={styles.brandText}>FightDex</span>
      </Link>
      <PadLayoutToggle />
    </header>
  );
}
