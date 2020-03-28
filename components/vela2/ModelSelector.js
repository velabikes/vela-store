import { Formik } from 'formik'
import ControlField from '../form/ControlField'

const ModelSelector = () => {
  return (
    <Formik initialValues={{test: 'a'}}>
      <ControlField options={['a', 'b', 'c']} name="test" />
    </Formik>

  )
}

export default ModelSelector
