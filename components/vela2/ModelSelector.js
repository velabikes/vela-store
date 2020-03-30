import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'

const initialValues = {
  frame: '',
  tire: '',
  color: '',
  size: ''
}

const ModelSelector = ({ onModelChange }) => {
  const validate = values => {
    onModelChange(values)

    return {}
  }

  useEffect(() => onModelChange(initialValues), [])

  return (
    <div>
      <Formik initialValues={initialValues} validate={validate}>
        <form>
          <ControlField options={['Baixo', 'Reto']} name='frame' label='Quadro:' />
          <ControlField options={['Creme', 'Preto']} name='tire' label='Pneu:' />
          <ControlField options={['Vermelho', 'Coral', 'Verde', 'Azul', 'Preto']} name='color' label='Cor:' />
          <ControlField options={['P', 'M', 'G']} name='size' label='Tamanho:' />
        </form>
      </Formik>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default ModelSelector
