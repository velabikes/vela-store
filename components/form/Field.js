import { Field } from 'formik'
import PropTypes from 'prop-types'
import FieldError from 'components/form/FieldError'

const CustomField = ({ label, name, ...props }) =>
  <div>
    <label>{label}</label>
    <Field name={name} {...props} />
    <FieldError name={name} />
    <br />
  </div>

CustomField.propTypes = {
  error: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string
}

export default CustomField
