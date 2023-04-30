import Label from '../01_atoms/Label';
import DropDownSelect from '../01_atoms/DropDownSelect';

function DropDownSelectLabeled({ label, labelFor, selectOptions, onChange }) {
  return (
    <>
      <Label text={label} htmlFor={labelFor} />
      <DropDownSelect options={selectOptions} id={labelFor} onChange={onChange} />
    </>
  );
}
export default DropDownSelectLabeled;
