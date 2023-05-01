import FinalScore from '../01_atoms/FinalScore';
import FinalScoreRing from '../01_atoms/FinalScoreRing';

function FinalScoreDisplay() {
  return (
    <div>
      <FinalScoreRing>
        <FinalScore />
      </FinalScoreRing>
    </div>
  );
}
export default FinalScoreDisplay;
