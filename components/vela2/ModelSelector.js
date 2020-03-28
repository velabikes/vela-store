import { Formik } from 'formik'
import ControlField from '../form/ControlField'

const ModelSelector = () => {
  return (
    <Formik initialValues={{ test: 'P' }}>
      <ControlField options={['P', 'M', 'G']} name='test' label='Tamanho:' />
    </Formik>

  )
}

export default ModelSelector
