import Label from '../01_atoms/Label';
import DropDownSelect from '../01_atoms/DropDownSelect';

function DropDownSelectLabeled({ label, labelFor, selectOptions }) {
  return (
    <>
      <Label text={label} htmlFor={labelFor} />
      <DropDownSelect options={selectOptions} id={labelFor} />
    </>
  );
}
export default DropDownSelectLabeled;
