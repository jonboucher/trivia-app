import { useContext, useEffect, useState } from 'react';
import QuestionAnswer from '../01_atoms/QuestionAnswer';

import TriviaContext from '../../store/trivia-context';

function AnswerSet() {
  const [answers, setAnswers] = useState([]);

  const ctx = useContext(TriviaContext);
  const currentQuestion = ctx.questions[ctx.currentQuestion];

  const getAnswers = () => {
    const newAnswers = currentQuestion.incorrectAnswers.map((answer) => {
      return <QuestionAnswer text={answer} key={answer} />;
    });
    const place = Math.floor(Math.random() * (newAnswers.length + 1));
    newAnswers.splice(
      place,
      0,
      <QuestionAnswer text={currentQuestion.correctAnswer} key={currentQuestion.correctAnswer} />
    );

    return newAnswers;
  };

  useEffect(() => {
    setAnswers(getAnswers());
  }, [currentQuestion]);

  return <div>{answers}</div>;
}
export default AnswerSet;
