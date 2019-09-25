import { Field } from 'formik'
import PropTypes from 'prop-types'

const CustomField = ({ label, error, ...props }) =>
  <div>
    <label>{label}</label>
    <Field {...props} />
    {error}
    <br />
  </div>

CustomField.propTypes = {
  error: PropTypes.func,
  label: PropTypes.string
}

export default CustomField
