import { Formik } from 'formik'
import { useEffect } from 'react'
import ControlField from '../form/ControlField'

const initialValues = {
  frame: 'Reto',
  size: 'M',
  color: 'Verde',
  tire: 'Creme'
}

const ModelSelector = ({ onModelChange, model }) => {
  const validate = values => {
    if (values.frame === 'Reto' && values.size === 'P') {
      onModelChange({...values, size: 'M'})
      return {}
    }
    onModelChange(values)
    return {}
  }

  useEffect(() => onModelChange(initialValues), [])

  return (
    <div>
      <Formik initialValues={initialValues} validate={validate}>
        <form>
          <ControlField options={['Reto', 'Baixo']} name='frame' label='Tipo de quadro:' />
          <ControlField options={model.frame === 'Baixo' ? ['P', 'M'] : ['M', 'G', 'GG']} name='size' label='Tamanho:' />
          <ControlField options={['Verde', 'Azul', 'Preto', 'Vermelho', 'Coral']} name='color' label='Cor:' />
          <ControlField options={['Creme', 'Preto']} name='tire' label='Pneu:' />
        </form>
      </Formik>
      <p>Em dúvida de qual tamanho escolher? Siga as recomendações de acordo com sua altura:</p>
      <h3>• Quadro baixo</h3>
      <p>→ P: 1,50m à 1,70m - Quadro 49 Aro 26"</p>
      <p>→ M: 1,71m à 1,90m - Quadro 49 Aro 700C</p>
      <br/>
      <h3>• Quadro reto</h3>
      <p><b>→ Mês de Mobilidade: 1,58m à 1,74m - Quadro 51 Aro 26"</b></p>
      <p>→ G: 1,75m à 1,83m - Quadro 55 Aro 700C</p>
      <p>→ GG: 1,84m à 2,00m - Quadro 59 Aro 700C</p>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default ModelSelector
