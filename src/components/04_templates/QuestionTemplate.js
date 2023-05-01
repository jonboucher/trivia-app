import { useContext } from 'react';

import Question from '../03_organisms/Question';

import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/04_templates/QuestionTemplate.module.scss';

function QuestionTemplate() {
  const ctx = useContext(TriviaContext);

  return (
    <div className={classes['question-template']}>
      <div className='inner'>
        {!ctx.isLoading && <Question />}
        {ctx.isLoading && <p>Please wait...</p>}
      </div>
    </div>
  );
}
export default QuestionTemplate;
