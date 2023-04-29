function DropDownSelect({ options, id }) {
  const optionsAry = options.map((option) => {
    return (
      <option value={option.value} key={option.value} id={id}>
        {option.text}
      </option>
    );
  });

  return <select>{optionsAry}</select>;
}

DropDownSelect.defaultProps = {
  options: [{ text: 'Select an option', value: '' }],
};

export default DropDownSelect;
