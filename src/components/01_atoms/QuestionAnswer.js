import { useContext } from 'react';

import TriviaContext from '../../store/trivia-context';

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
    <button onClick={handleClick}>
      {text} {isCorrect}
    </button>
  );
}

export default QuestionAnswer;
