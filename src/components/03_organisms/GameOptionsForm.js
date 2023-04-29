import Button from '../01_atoms/Button';
import DropDownSelectLabeled from '../02_molecules/DropDownSelectLabeled';

import classes from '../../styles/03_organisms/GameOptionsForm.module.scss';

function GameOptionsForm() {
  const difficultyOptions = [
    { text: 'Any', value: '' },
    { text: 'Easy', value: 'easy' },
    { text: 'Medium', value: 'medium' },
    { text: 'Hard', value: 'hard' },
  ];

  const modeOptions = [
    { text: '10 Questions', value: 'ten' },
    { text: '20 Questions', value: 'twenty' },
    { text: 'Endless', value: 'endless' },
  ];

  return (
    <form className={classes['game-options-form']}>
      <Button text={'Play!'} />
      <DropDownSelectLabeled label={'Mode'} labelFor={'mode'} selectOptions={modeOptions} />
      <DropDownSelectLabeled label={'Difficulty'} labelFor={'difficulty'} selectOptions={difficultyOptions} />
    </form>
  );
}
export default GameOptionsForm;
