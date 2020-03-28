import { Formik } from 'formik'
import PropTypes from 'prop-types'
import ControlField from '../form/ControlField'

const TireSelector = ({ option }) => {
  return (
    <Formik initialValues={{ test: 'Creme' }}>
      <ControlField options={['Creme', 'Preto']} name='test' label='Pneu:' selected={option} />
    </Formik>

  )
}

TireSelector.propTypes = {
  option: PropTypes.string
}

export default TireSelector
