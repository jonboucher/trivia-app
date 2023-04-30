function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

Button.defaultProps = {
  text: 'Click Me',
};

export default Button;
