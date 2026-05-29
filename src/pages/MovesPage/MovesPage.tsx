import { useNavigate, useParams } from 'react-router-dom';
import { mk9Characters } from '../../data/mk9Characters';
import { games } from '../../data/games';
import mk9Moves from '../../data/mk9Moves';
import { usePadLayout } from '../../context/PadLayoutContext';
import InputDisplay from '../../components/InputDisplay/InputDisplay';
import styles from './MovesPage.module.css';

const charactersByGame: Record<string, typeof mk9Characters> = {
  mk9: mk9Characters,
};

const movesByGame: Record<string, typeof mk9Moves> = {
  mk9: mk9Moves,
};

export default function MovesPage() {
  const { gameId, characterId } = useParams<{ gameId: string; characterId: string }>();
  const navigate = useNavigate();
  const { layout } = usePadLayout();

  const game = games.find((g) => g.id === gameId);
  const characters = gameId ? charactersByGame[gameId] ?? [] : [];
  const character = characters.find((c) => c.id === characterId);
  const moves = gameId && characterId ? movesByGame[gameId]?.[characterId] : null;

  if (!game || !character) {
    return (
      <main className={styles.page}>
        <p className={styles.notFound}>Character not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          ← Characters
        </button>
      </div>

      <div className={styles.characterHeader}>
        <div className={styles.portrait}>
          <img
            src={character.imageUrl}
            alt={character.name}
            className={styles.portraitImg}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className={styles.portraitFallback}>{character.name.charAt(0)}</div>
        </div>
        <div className={styles.characterInfo}>
          <p className={styles.gameName}>{game.title} · {game.year}</p>
          <h1
            className={styles.characterName}
            style={{ '--accent': game.accentColor } as React.CSSProperties}
          >
            {character.name}
          </h1>
        </div>
      </div>

      {moves ? (
        <div className={styles.sections}>
          {moves.sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.movesList}>
                {section.moves.map((move, i) => (
                  <div key={i} className={styles.moveRow}>
                    <span className={styles.moveName}>{move.name}</span>
                    <span className={styles.moveInput}>
                      <InputDisplay input={move.input} layout={layout} />
                    </span>
                    {move.notes && (
                      <span className={styles.moveNotes}>{move.notes}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className={styles.noMoves}>No moves data available for this character.</p>
      )}
    </main>
  );
}
