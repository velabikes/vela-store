import { useState } from 'react'
import Head from 'next/head'
import { compose } from 'recompose'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import ModelSelector from '../components/vela2/ModelSelector'
import ExtraSelector from '../components/vela2/ExtraSelector'
import Tab from '../components/vela2/Tab'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import withCheckout from '../containers/withCheckout'
import ModelData from '../components/vela2/ModelData'

const Vela2 = ({ checkout, checkoutId, checkoutLineItemsAdd }) => {
  const [selectedModel, setSelectedModel] = useState({})
  const [selectedExtra, setSelectedExtra] = useState([])
  const [step, setStep] = useState(1)

  const { frame, color, tire, size } = selectedModel
  const selectedModelData =
    ModelData[JSON.stringify({ frame, color, tire, size })] || {}

  const handleNext = async () => {
    if (step === 2) {
      await checkoutLineItemsAdd({
        variables: {
          checkoutId,
          lineItems: [
            ...selectedExtra.map(({ id }) => ({
              variantId: id,
              quantity: 1
            })),
            {
              variantId: selectedModelData.id,
              quantity: 1
            }
          ]
        }
      })
      window.location.replace(checkout.webUrl)
    }

    setStep(2)
  }

  return (
    <div className='vela2'>
      <Head>
        <title>Vela 2 - Vela Bikes</title>
      </Head>
      <div className='content'>
        <Display model={selectedModel} />
        <Tab step={step} onStep={setStep}>
          <ModelSelector
            onModelChange={setSelectedModel}
            model={selectedModel}
          />
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
      </div>
      <Bar
        model={selectedModel}
        extra={selectedExtra}
        onContinue={handleNext}
      />
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .content {
            display: flex;
            height: calc(100vh - 130px);
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout,
  withCheckoutLineItemsAdd,
  withCheckoutId
)(Vela2)
