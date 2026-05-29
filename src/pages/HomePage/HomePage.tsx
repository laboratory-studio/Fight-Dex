import { useNavigate } from 'react-router-dom';
import { games } from '../../data/games';
import styles from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Choose Your Game</h1>
        <p className={styles.subtitle}>Select a fighting game to browse characters and moves</p>
      </div>
      <div className={styles.grid}>
        {games.map((game) => (
          <button
            key={game.id}
            className={`${styles.card} ${!game.available ? styles.locked : ''}`}
            style={{
              '--card-bg': game.coverColor,
              '--card-accent': game.accentColor,
            } as React.CSSProperties}
            onClick={() => game.available && navigate(`/game/${game.id}`)}
            disabled={!game.available}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <span className={styles.cardYear}>{game.year}</span>
              <h2 className={styles.cardTitle}>{game.title}</h2>
              {!game.available && (
                <span className={styles.comingSoon}>Coming Soon</span>
              )}
              {game.available && (
                <span className={styles.playBtn}>Browse Characters →</span>
              )}
            </div>
            <div className={styles.cardAccentBar} />
          </button>
        ))}
      </div>
    </main>
  );
}
