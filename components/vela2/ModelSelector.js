import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'

const initialValues = {
  size: 'P',
  tire: 'Creme',
  color: 'Azul'
}

const ModelSelector = ({ onModelChange }) => {
  const validate = values => {
    onModelChange(values)

    return {}
  }

  useEffect(() => onModelChange(initialValues), [])

  return (
    <Formik initialValues={initialValues} validate={validate}>
      <form>
        <ControlField options={['P', 'M', 'G']} name='size' label='Tamanho:' />
        <ControlField options={['Creme', 'Preto']} name='tire' label='Pneu:' />
        <ControlField options={['Vermelho', 'Coral', 'Verde', 'Azul', 'Preto']} name='color' label='Pneu:' />
      </form>
    </Formik>

  )
}

export default ModelSelector
