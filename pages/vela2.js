import {useState} from 'react'
import Head from 'next/head'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import ModelSelector from '../components/vela2/ModelSelector'

const Vela2 = () => {
  const [selectedModel, setSelectedModel] = useState({})

  return (
    <div className='vela2'>
      <Head>
        <title>Vela 2 - Vela Bikes</title>
      </Head>
      <Display model={selectedModel} />
      <ModelSelector onModelChange={setSelectedModel} model={selectedModel} />
      <Bar model={selectedModel} />
    </div>
  )
}

export default Vela2
