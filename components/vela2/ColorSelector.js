import { Formik } from 'formik'
import ControlField from '../form/ControlField'

const ColorSelector = () => {
  return (
    <Formik initialValues={{ test: 'Red' }}>
      <ControlField options={['Red', 'Coral', 'Green', 'Blue', 'Black']} name='test' label='Cor:' />
    </Formik>

  )
}

export default ColorSelector
