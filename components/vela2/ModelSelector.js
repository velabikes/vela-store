import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'
import { offWhite } from '../../style/colors'

const initialValues = {
  frame: 'Baixo',
  color: 'Verde',
  tire: 'Creme',
  size: 'Pequeno'
}

const ModelSelector = ({ onModelChange, model }) => {
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
          <ControlField options={['Verde', 'Azul', 'Preto', 'Vermelho', 'Coral']} name='color' label='Cor:' />
          <ControlField options={['Creme', 'Preto']} name='tire' label='Pneu:' />
          <ControlField options={model.frame === 'Baixo' ? ['Pequeno', 'Médio'] : ['Pequeno', 'Médio', 'Grande']} name='size' label='Tamanho:' />
        </form>
      </Formik>
      <style jsx>{`
      `}</style>
    </div>
  )
}

export default ModelSelector
