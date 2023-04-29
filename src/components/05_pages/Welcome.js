import Button from '../01_atoms/Button';
import GameOptionsForm from '../03_organisms/GameOptionsForm';

function Welcome() {
  return (
    <section>
      <div className='inner'>
        <h1>Welcome to JB Trivia</h1>
        <p>Press play to start a new game, or select some custom options first</p>
        <GameOptionsForm />
      </div>
    </section>
  );
}

export default Welcome;
