import classes from '../../styles/01_atoms/Button.module.scss';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Click Me',
};

export default Button;
