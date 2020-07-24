import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'

const initialValues = {
  color: 'Verde',
  tire: 'Creme',
  size: 'P'
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
          <ControlField options={['Verde', 'Azul', 'Preto', 'Vermelho', 'Coral']} name='color' label='Cor:' />
          <ControlField options={['Creme', 'Preto']} name='tire' label='Pneu:' />
          <ControlField options={['P', 'M', 'G', 'GG']} name='size' label='Tamanho:' />
        </form>
      </Formik>
      <p>Em dúvida de qual tamanho escolher? Siga as recomendações de acordo com sua altura:</p>
      <h4>• Quadro baixo</h4>
      <p>→ P: 1,50m à 1,70m - Quadro 49 Aro 26"</p>
      <p>→ M: 1,71m à 1,90m - Quadro 48 Aro 700C</p>
      <br/>
      <h4>• Quadro reto</h4>
      <p>→ G: 1,68m à 1,82m - Quadro 55 Aro 700C</p>
      <p>→ GG: 1,83m à 2,00m - Quadro 59 Aro 700C</p>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default ModelSelector
