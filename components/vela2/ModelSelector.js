import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'

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
      <p>Em dúvida de qual tamanho escolher? Siga as recomendações de acordo com sua altura:</p>
      <h4>• Quadro baixo</h4>
      <p>P: 1,50m à 1,70m / M: 1,71m à 1,90m</p>
      <h4>• Quadro reto</h4>
      <p>P: 1,54m à 1,68m / M: 1,69m à 1,82m / G: 1,83m à 2,00m</p>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default ModelSelector
