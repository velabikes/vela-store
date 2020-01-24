import { Field } from 'formik'
import FieldError from 'components/form/FieldError'
import PropTypes from 'prop-types'
import { offWhite } from 'style/colors'

const CheckboxField = ({ label, name, ...props }) =>
  <div>
    <Field id='checkbox' type='checkbox' name={name} {...props} />
    <label htmlFor='checkbox'>
      {label}
    </label>
    <FieldError name={name} />
    <style jsx>{`
      div {
        position: relative;
        margin-bottom: 1em;
      }
      label {
        vertical-align: super;
      }
      :global(input[type="checkbox"]) {
        -webkit-appearance: none;
        padding-right: 1.5em;
        background-color: ${offWhite};
        border: none;
      }

      @supports(-webkit-appearance: none) {
        :global(input[type="checkbox"]) {
          -webkit-appearance: none;
          width: 1.2rem;
          height: 1.2rem;
          box-sizing: border-box;
          margin-right: 6px;
          background: ${offWhite};
          box-shadow: 0 2px 3px rgba(0,0,0,0.05), 0 2px 3px rgba(0,0,0,0.05);
        }

        :global(input[type="checkbox"]):checked {
          position: relative;
        }

        :global(input[type="checkbox"]):checked::after {
          position: absolute;
          top: 0.3em;
          left: 0.2em;
          content: "";
          width: 1.0em;
          height: 0.3em;
          border: 4px solid #3e5052;
          border-right: none;
          border-top: none;
          transform: rotate(-45deg);
        }
      }
    `}</style>
  </div>

CheckboxField.propTypes = {
  label: PropTypes.string
}

export default CheckboxField
