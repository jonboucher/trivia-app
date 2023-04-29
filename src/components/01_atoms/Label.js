function Label({ text, htmlFor }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

Label.defaultProps = {
  text: 'Label',
};

export default Label;
