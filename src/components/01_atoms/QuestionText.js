import { useContext } from 'react';
import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/01_atoms/QuestionText.module.scss';

function QuestionText() {
  const ctx = useContext(TriviaContext);

  return <p className={classes['question-text']}>{ctx.questions[ctx.currentQuestion].question.text}</p>;
}
export default QuestionText;
