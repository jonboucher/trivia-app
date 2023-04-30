import classes from '../../styles/01_atoms/Label.module.scss';

function Label({ text, htmlFor }) {
  return (
    <label className={classes['label']} htmlFor={htmlFor}>
      {text}
    </label>
  );
}

Label.defaultProps = {
  text: 'Label',
};

export default Label;
