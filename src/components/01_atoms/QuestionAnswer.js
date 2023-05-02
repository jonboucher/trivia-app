import { useContext } from 'react';

import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/01_atoms/QuestionAnswer.module.scss';

function QuestionAnswer({ text, isCorrect }) {
  const ctx = useContext(TriviaContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (isCorrect) {
      ctx.onScore();
    }
    ctx.onNextQuestion();
  };

  return (
    <button className={classes['answer']} onClick={handleClick}>
      {text}
    </button>
  );
}

export default QuestionAnswer;
