import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { PadLayout } from '../types';

interface PadLayoutContextValue {
  layout: PadLayout;
  setLayout: (layout: PadLayout) => void;
}

const PadLayoutContext = createContext<PadLayoutContextValue | null>(null);

export function PadLayoutProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<PadLayout>('playstation');

  return (
    <PadLayoutContext value={{ layout, setLayout }}>
      {children}
    </PadLayoutContext>
  );
}

export function usePadLayout() {
  const ctx = useContext(PadLayoutContext);
  if (!ctx) throw new Error('usePadLayout must be used inside PadLayoutProvider');
  return ctx;
}
