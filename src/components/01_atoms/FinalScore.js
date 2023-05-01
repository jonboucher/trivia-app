import { useContext } from 'react';
import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/01_atoms/FinalScore.module.scss';

function FinalScore() {
  const ctx = useContext(TriviaContext);

  return (
    <div className={classes['final-score']}>
      <p>Final Score:</p>
      <p className={classes['score']}>{ctx.score}</p>
    </div>
  );
}
export default FinalScore;
