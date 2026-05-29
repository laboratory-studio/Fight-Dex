export type PadLayout = 'playstation' | 'xbox';

export interface Game {
  id: string;
  title: string;
  year: number;
  coverColor: string;
  accentColor: string;
  available: boolean;
}

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  gameId: string;
}

export type ButtonLabel = string;

export interface Move {
  name: string;
  input: ButtonLabel[];
  notes?: string;
}

export interface MoveSection {
  title: string;
  moves: Move[];
}

export interface CharacterMoves {
  characterId: string;
  sections: MoveSection[];
}
