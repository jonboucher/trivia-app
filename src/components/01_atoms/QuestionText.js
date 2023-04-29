import { useContext } from 'react';
import TriviaContext from '../../store/trivia-context';

function QuestionText() {
  const ctx = useContext(TriviaContext);

  return <p>{ctx.questions[ctx.currentQuestion].question.text}</p>;
}
export default QuestionText;
