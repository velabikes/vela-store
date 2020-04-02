import { useState } from 'react'
import Head from 'next/head'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import ModelSelector from '../components/vela2/ModelSelector'
import ExtraSelector from '../components/vela2/ExtraSelector'
import Tab from '../components/vela2/Tab'

const Vela2 = () => {
  const [selectedModel, setSelectedModel] = useState({})
  const [selectedExtra, setSelectedExtra] = useState([])
  const [step, setStep] = useState(1)

  return (
    <div className='vela2'>
      <Head>
        <title>Vela 2 - Vela Bikes</title>
      </Head>
      <Display model={selectedModel} />
      <Tab step={step} onStep={setStep}>
        <ModelSelector onModelChange={setSelectedModel} model={selectedModel} />
        <ExtraSelector
          selected={selectedExtra}
          onSelect={id =>
            setSelectedExtra(
              selectedExtra.includes(id)
                ? selectedExtra.filter(item => item !== id)
                : [...selectedExtra, id]
            )
          }
        />
      </Tab>
      <Bar model={selectedModel} extra={selectedExtra} onContinue={() => setStep(2)} />
    </div>
  )
}

export default Vela2
