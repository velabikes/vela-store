import { Field } from 'formik'
import PropTypes from 'prop-types'

const FieldCheckbox = ({ label, ...props }) =>
  <fieldset>
    <label>
      <Field type='checkbox' {...props} />
      {label}
    </label>
    <style jsx>{`
      label :global(input) {
        -webkit-appearance: none;
        padding-right: 1.5em;
        background-color: white;
        border: none;
      }
      label {
        font-weight: 400 !important;
        font-size: 16px;
      }
    `}</style>
  </fieldset>

FieldCheckbox.propTypes = {
  label: PropTypes.string
}

export default FieldCheckbox
