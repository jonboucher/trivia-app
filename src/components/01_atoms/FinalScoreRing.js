import { useContext } from 'react';

import classes from '../../styles/01_atoms/FinalScoreRing.module.scss';
import TriviaContext from '../../store/trivia-context';

function FinalScoreRing({ children }) {
  const ctx = useContext(TriviaContext);

  const ringPercent = parseInt((ctx.score / ctx.questions.length) * 943) * -1;

  return (
    <div className={classes['score-ring-wrapper']}>
      <div className={classes['score-wrapper']}>
        {children}
        <svg viewBox='0 0 400 350'>
          <circle className={classes['score-ring--path']} cx='200' cy='175' r='150' />
          <circle className={classes['score-ring']} cx='200' cy='175' r='150' />
          <circle
            className={classes['score-ring--blocker']}
            cx='200'
            cy='175'
            r='150'
            style={{ strokeDashoffset: ringPercent }}
          />
        </svg>
      </div>
    </div>
  );
}
export default FinalScoreRing;
