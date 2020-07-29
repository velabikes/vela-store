/* eslint-disable react/prop-types */
import { useState } from 'react'
import Head from 'next/head'
import { compose } from 'recompose'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import AddedToCart from '../components/vela2/AddedToCart'
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
    if (step === 1) {
      setStep(2)
    }

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
      setStep(3)
    }

    if (step === 3) {
      window.location.replace(checkout.webUrl)
    }
  }

  return (
    <div className='vela2'>
      <Head>
        <title>Vela 2: Monte a sua - Vela Bikes</title>
        <meta http-equiv='content-language' content='pt-br' />
        <meta name='application-name' content='Vela Bikes Store' />
        <meta name='description' content='Monte sua Vela 2 e aproveite para pedalar smart!' />
        <meta property='og:url' content='https://velabikes.com.br' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Vela Bikes' />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:description' content='Monte sua Vela 2 e aproveite para pedalar smart!' />
      </Head>
      <div className='content'>
        <Display model={selectedModel} />
        <Tab step={step}>
          <ModelSelector
            onModelChange={setSelectedModel}
            model={selectedModel}
          />
          <ExtraSelector
            model={selectedModel}
            selected={selectedExtra}
            onSelect={id =>
              setSelectedExtra(
                selectedExtra.includes(id)
                  ? selectedExtra.filter(item => item !== id)
                  : [...selectedExtra, id]
              )
            }
          />
          <AddedToCart onStep={setStep} />
        </Tab>
      </div>
      <Bar
        model={selectedModel}
        extra={selectedExtra}
        onContinue={handleNext}
        step={step}
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
