import { useContext } from 'react';

import Welcome from './components/05_pages/Welcome';
import QuestionTemplate from './components/04_templates/QuestionTemplate';
import GameEnd from './components/05_pages/GameEnd';
import Loading from './components/01_atoms/Loading';

import TriviaContext from './store/trivia-context';

import './App.scss';

function App() {
  const ctx = useContext(TriviaContext);

  return (
    <main className='app'>
      {ctx.isLoading === true && <Loading />}
      {ctx.gameState === 'WELCOME' && <Welcome />}
      {ctx.gameState === 'PLAYING' && <QuestionTemplate />}
      {ctx.gameState === 'END' && <GameEnd />}
    </main>
  );
}

export default App;
