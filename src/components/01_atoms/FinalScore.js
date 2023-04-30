import { useContext } from 'react';
import TriviaContext from '../../store/trivia-context';

function FinalScore() {
  const ctx = useContext(TriviaContext);

  return <p>{ctx.score}</p>;
}
export default FinalScore;
