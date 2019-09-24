import { Field } from 'formik'
import PropTypes from 'prop-types'

const FieldCheckbox = ({ label, ...props }) =>
  <fieldset>
    <label><Field {...props} />{label}</label><style jsx>{`
        input {
          width: 25px;
          height: 25px;
          font-size: 16px;
        }
        label {
          font-weight: 400!important;
          font-size: 16px;
        }
    `}</style>
  </fieldset>

FieldCheckbox.propTypes = {
  label: PropTypes.string
}

export default FieldCheckbox
