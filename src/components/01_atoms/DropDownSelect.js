import classes from '../../styles/01_atoms/DropDownSelect.module.scss';

function DropDownSelect({ options, id, onChange }) {
  const optionsAry = options.map((option) => {
    return (
      <option value={option.value} key={option.value}>
        {option.text}
      </option>
    );
  });

  return (
    <div className={classes['dds-wrapper']}>
      <select className={`${classes['dds']}`} id={id} onChange={onChange}>
        {optionsAry}
      </select>
    </div>
  );
}

DropDownSelect.defaultProps = {
  options: [{ text: 'Select an option', value: '' }],
};

export default DropDownSelect;
