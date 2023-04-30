import { useContext, useState } from 'react';

import Button from '../01_atoms/Button';
import DropDownSelectLabeled from '../02_molecules/DropDownSelectLabeled';

import TriviaContext from '../../store/trivia-context';

import classes from '../../styles/03_organisms/GameOptionsForm.module.scss';

const DIFFICULTY_OPTIONS = [
  { text: 'Any', value: '' },
  { text: 'Easy', value: 'easy' },
  { text: 'Medium', value: 'medium' },
  { text: 'Hard', value: 'hard' },
];

const MODE_OPTIONS = [
  { text: '10 Questions', value: '10' },
  { text: '20 Questions', value: '20' },
  // { text: 'Endless', value: 'endless' },
];

function GameOptionsForm() {
  const [options, setOptions] = useState({ difficulty: DIFFICULTY_OPTIONS[0].value, mode: MODE_OPTIONS[0].value });

  const ctx = useContext(TriviaContext);

  const handleChange = (e, field) => {
    setOptions((prevOptions) => {
      return { ...prevOptions, [field]: e.target.value };
    });
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    ctx.onStartGame(options);
  };

  return (
    <form className={classes['game-options-form']}>
      <Button text={'Play!'} onClick={handleStartGame} />
      <DropDownSelectLabeled
        label={'Mode'}
        labelFor={'mode'}
        selectOptions={MODE_OPTIONS}
        onChange={(e) => handleChange(e, 'mode')}
      />
      <DropDownSelectLabeled
        label={'Difficulty'}
        labelFor={'difficulty'}
        selectOptions={DIFFICULTY_OPTIONS}
        onChange={(e) => handleChange(e, 'difficulty')}
      />
    </form>
  );
}
export default GameOptionsForm;
