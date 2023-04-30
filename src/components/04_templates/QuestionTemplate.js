import { useContext } from 'react';

import Question from '../03_organisms/Question';

import TriviaContext from '../../store/trivia-context';

function QuestionTemplate() {
  const ctx = useContext(TriviaContext);

  return (
    <div>
      {!ctx.isLoading && <Question />}
      {ctx.isLoading && <p>Please wait...</p>}
    </div>
  );
}
export default QuestionTemplate;
