import { HashRouter, Routes, Route } from 'react-router-dom';
import { PadLayoutProvider } from './context/PadLayoutContext';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import MovesPage from './pages/MovesPage/MovesPage';

export default function App() {
  return (
    <PadLayoutProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameId" element={<CharactersPage />} />
          <Route path="/game/:gameId/character/:characterId" element={<MovesPage />} />
        </Routes>
      </HashRouter>
    </PadLayoutProvider>
  );
}
