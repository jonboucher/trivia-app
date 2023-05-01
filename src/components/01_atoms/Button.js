import classes from '../../styles/01_atoms/Button.module.scss';

function Button({ text, onClick, inverted, wide }) {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn}${inverted ? classes['btn--inverted'] : ''} ${wide ? classes['btn--wide'] : ''}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Click Me',
};

export default Button;
