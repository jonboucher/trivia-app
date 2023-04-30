import { useContext } from 'react';

import FinalScoreDisplay from '../02_molecules/FinalScoreDisplay';
import Button from '../01_atoms/Button';

import TriviaContext from '../../store/trivia-context';

function GameEnd() {
  const ctx = useContext(TriviaContext);

  const handleReset = () => {
    ctx.onResetGame();
  };

  return (
    <div>
      <FinalScoreDisplay />
      <Button text={'Play Again'} onClick={handleReset} />
    </div>
  );
}
export default GameEnd;
