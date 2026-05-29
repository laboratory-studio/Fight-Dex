import { useNavigate, useParams } from 'react-router-dom';
import { mk9Characters } from '../../data/mk9Characters';
import { games } from '../../data/games';
import styles from './CharactersPage.module.css';

const charactersByGame: Record<string, typeof mk9Characters> = {
  mk9: mk9Characters,
};

export default function CharactersPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();

  const game = games.find((g) => g.id === gameId);
  const characters = gameId ? charactersByGame[gameId] ?? [] : [];

  if (!game) {
    return (
      <main className={styles.page}>
        <p className={styles.notFound}>Game not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div>
          <p className={styles.gameYear}>{game.year}</p>
          <h1 className={styles.gameTitle}>{game.title}</h1>
        </div>
      </div>

      <div className={styles.grid}>
        {characters.map((char) => (
          <button
            key={char.id}
            className={styles.card}
            onClick={() => navigate(`/game/${gameId}/character/${char.id}`)}
            style={{ '--accent': game.accentColor } as React.CSSProperties}
          >
            <div className={styles.portrait}>
              <img
                src={char.imageUrl}
                alt={char.name}
                className={styles.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className={styles.portraitFallback}>
                {char.name.charAt(0)}
              </div>
            </div>
            <span className={styles.name}>{char.name}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
