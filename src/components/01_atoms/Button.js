function Button({ text }) {
  return <button onClick={(e) => e.preventDefault()}>{text}</button>;
}

Button.defaultProps = {
  text: 'Click Me',
};

export default Button;
