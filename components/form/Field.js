import { Field } from 'formik'
import PropTypes from 'prop-types'

const CustomField = ({ label, ...props }) =>
  <fieldset>
    <label>{label}</label>
    <Field {...props} />
  </fieldset>

CustomField.propTypes = {
  label: PropTypes.string
}

export default CustomField
