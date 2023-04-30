function DropDownSelect({ options, id, onChange }) {
  const optionsAry = options.map((option) => {
    return (
      <option value={option.value} key={option.value}>
        {option.text}
      </option>
    );
  });

  return (
    <select id={id} onChange={onChange}>
      {optionsAry}
    </select>
  );
}

DropDownSelect.defaultProps = {
  options: [{ text: 'Select an option', value: '' }],
};

export default DropDownSelect;
