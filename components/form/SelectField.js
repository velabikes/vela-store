import Field from 'components/form/Field'
import SelectInput from 'components/form/SelectInput'

const SelectField = (props) =>
  <Field
    component={SelectInput}
    {...props}
  />

export default SelectField
