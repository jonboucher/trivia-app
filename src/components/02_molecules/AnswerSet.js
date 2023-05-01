import { useContext, useEffect, useState } from 'react';
import QuestionAnswer from '../01_atoms/QuestionAnswer';

import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/02_molecules/AnswerSet.module.scss';

function AnswerSet() {
  const [answers, setAnswers] = useState([]);

  const ctx = useContext(TriviaContext);
  const currentQuestion = ctx.questions[ctx.currentQuestion];

  useEffect(() => {
    const getAnswers = () => {
      const newAnswers = currentQuestion.incorrectAnswers.map((answer) => {
        return <QuestionAnswer text={answer} key={answer} isCorrect={false} />;
      });
      const place = Math.floor(Math.random() * (newAnswers.length + 1));
      newAnswers.splice(
        place,
        0,
        <QuestionAnswer text={currentQuestion.correctAnswer} key={currentQuestion.correctAnswer} isCorrect={true} />
      );

      return newAnswers;
    };
    setAnswers(getAnswers());
  }, [currentQuestion]);

  return <div className={classes['answer-set']}>{answers}</div>;
}
export default AnswerSet;
