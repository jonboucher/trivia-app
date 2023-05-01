import { useContext } from 'react';

import FinalScoreDisplay from '../02_molecules/FinalScoreDisplay';
import Button from '../01_atoms/Button';

import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/05_pages/GameEnd.module.scss';

function GameEnd() {
  const ctx = useContext(TriviaContext);

  const handleReset = () => {
    ctx.onResetGame();
  };

  return (
    <div className={classes['game-end']}>
      <FinalScoreDisplay />
      <Button text={'Play Again'} onClick={handleReset} />
    </div>
  );
}
export default GameEnd;
