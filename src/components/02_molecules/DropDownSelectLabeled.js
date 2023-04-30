import Label from '../01_atoms/Label';
import DropDownSelect from '../01_atoms/DropDownSelect';

import classes from '../../styles/02_molecules/DropDownSelectLabeled.module.scss';

function DropDownSelectLabeled({ label, labelFor, selectOptions, onChange }) {
  return (
    <div className={classes['dds--labeled']}>
      <Label text={label} htmlFor={labelFor} />
      <DropDownSelect options={selectOptions} id={labelFor} onChange={onChange} />
    </div>
  );
}
export default DropDownSelectLabeled;
