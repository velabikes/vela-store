import { useState } from 'react'
import Head from 'next/head'
import { compose } from 'recompose'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import ModelSelector from '../components/vela2/ModelSelector'
import ExtraSelector from '../components/vela2/ExtraSelector'
import Tab from '../components/vela2/Tab'
import { lightGray } from '../style/colors'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import withCheckout from '../containers/withCheckout'

const Vela2 = ({ checkout, checkoutId, checkoutLineItemsAdd }) => {
  const [selectedModel, setSelectedModel] = useState({})
  const [selectedExtra, setSelectedExtra] = useState([])
  const [step, setStep] = useState(1)

  const handleNext = async () => {
    if (step === 2) {
      await checkoutLineItemsAdd({
        variables: {
          checkoutId,
          lineItems: selectedExtra.map(({ id }) =>
            ({
              variantId: id,
              quantity: 1
            })
          )
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
      <Bar model={selectedModel} extra={selectedExtra} onContinue={handleNext} />
    </div>
  )
}

export default compose(
  withCheckout,
  withCheckoutLineItemsAdd,
  withCheckoutId
)(Vela2)
