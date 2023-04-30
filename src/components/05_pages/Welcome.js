import GameOptionsForm from '../03_organisms/GameOptionsForm';

import classes from '../../styles/05_pages/Welcome.module.scss';

function Welcome() {
  return (
    <section className={classes['welcome']}>
      <div className='inner'>
        <h1>TriviaBuzz</h1>
        <p>
          Start a new game, <br />
          or select some custom options first.
        </p>
        <GameOptionsForm />
      </div>
    </section>
  );
}

export default Welcome;
