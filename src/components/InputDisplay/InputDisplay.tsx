import styles from './InputDisplay.module.css';
import type { PadLayout } from '../../types';

interface InputDisplayProps {
  input: string[];
  layout: PadLayout;
}

const PS_BUTTONS: Record<string, { label: string; color?: string; shape?: 'circle' | 'square' | 'triangle' | 'cross' | 'default' }> = {
  FP: { label: '□', color: '#e3e3e3', shape: 'square' },
  BP: { label: '△', color: '#5fcf80', shape: 'triangle' },
  FK: { label: '✕', color: '#5b9bd5', shape: 'cross' },
  BK: { label: '○', color: '#e06c75', shape: 'circle' },
  BL: { label: 'R2', color: '#aaaaaa', shape: 'default' },
  FS: { label: 'L2', color: '#aaaaaa', shape: 'default' },
};

const XBOX_BUTTONS: Record<string, { label: string; color?: string; shape?: 'circle' | 'square' | 'triangle' | 'cross' | 'default' }> = {
  FP: { label: 'X', color: '#5b9bd5', shape: 'default' },
  BP: { label: 'Y', color: '#e5c100', shape: 'default' },
  FK: { label: 'A', color: '#5fcf80', shape: 'default' },
  BK: { label: 'B', color: '#e06c75', shape: 'default' },
  BL: { label: 'RT', color: '#aaaaaa', shape: 'default' },
  FS: { label: 'LT', color: '#aaaaaa', shape: 'default' },
};

const DIRECTION_LABELS: Record<string, string> = {
  B: '←',
  F: '→',
  D: '↓',
  Up: '↑',
  Throw: 'Throw',
  '+': '+',
};

function parseToken(token: string, layout: PadLayout) {
  // Handle combined tokens like B+FP, FP+BP etc.
  if (token.includes('+')) {
    const parts = token.split('+');
    return parts.map((p, i) => (
      <span key={i}>
        {i > 0 && <span className={styles.plus}>+</span>}
        {renderSingle(p.trim(), layout)}
      </span>
    ));
  }
  return renderSingle(token, layout);
}

function renderSingle(token: string, layout: PadLayout) {
  const buttons = layout === 'playstation' ? PS_BUTTONS : XBOX_BUTTONS;

  if (token in buttons) {
    const btn = buttons[token];
    const shapeClass = btn.shape ? styles[`shape_${btn.shape}`] : styles.shape_default;
    return (
      <span
        className={`${styles.button} ${shapeClass}`}
        style={{ '--btn-color': btn.color } as React.CSSProperties}
        title={token}
      >
        {btn.label}
      </span>
    );
  }

  if (token in DIRECTION_LABELS) {
    return (
      <span className={styles.direction} title={token}>
        {DIRECTION_LABELS[token]}
      </span>
    );
  }

  return <span className={styles.generic}>{token}</span>;
}

export default function InputDisplay({ input, layout }: InputDisplayProps) {
  return (
    <span className={styles.inputRow}>
      {input.map((token, i) => {
        const isPlus = token === '+';
        return (
          <span key={i} className={styles.tokenWrapper}>
            {i > 0 && !isPlus && input[i - 1] !== '+' && (
              <span className={styles.separator} />
            )}
            {parseToken(token, layout)}
          </span>
        );
      })}
    </span>
  );
}
