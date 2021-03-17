/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { compose } from 'recompose'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import AddedToCart from '../components/vela2/AddedToCart'
import ModelSelector from '../components/vela2/ModelSelector'
import ExtraSelector from '../components/vela2/ExtraSelector'
import VelaPlusSelector from '../components/vela2/VelaPlusSelector'
import Tab from '../components/vela2/Tab'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckout from '../containers/withCheckout'
import ModelData from '../components/vela2/ModelData'

const initialValues = {
	color: 'Verde',
	size: 'P',
	tire: 'Creme',
};


const Vela2 = ({ checkout, checkoutLineItemsAdd, handleCheckoutCreation }) => {
  const [selectedModel, setSelectedModel] = useState(initialValues);
  const [selectedExtra, setSelectedExtra] = useState([])
  const [step, setStep] = useState(1);
  const [loadedCheckout, setLoadedCheckout] = useState(false);

  const { size, color, tire } = selectedModel
  const selectedModelData =
    ModelData[JSON.stringify({ size, color, tire })] || {}


    useEffect(() => {
      if (loadedCheckout) return;
      if (!checkout) return;
      const bikeIds = findBikeIdOnCheckout();
      if (bikeIds.length > 0) {
        const bike = getModelById(bikeIds[bikeIds.length - 1]);
        setSelectedModel(bike);
      }
      setLoadedCheckout(true);
    }, [checkout]);

  
    const findBikeIdOnCheckout = () => {
      const modelIds = getAllModelIds();
      const bikeIds = [];
      for (let modelId of modelIds) {
        const item = findItemOnCheckout(modelId);
        if (item) {
          bikeIds.push(modelId);
        }
      }
  
      return bikeIds;
    };
  
  
    const getAllModelIds = () => {
      const models = [];
      Object.keys(ModelData).forEach((model) => {
        models.push(ModelData[model].id);
      });
  
      return models;
    };
  
    const getModelById = (id) => {
      let bike;
      Object.keys(ModelData).forEach((model) => {
        if (ModelData[model].id === id) {
          bike = model;
        }
      });
  
      return JSON.parse(bike);
    };
  
    const findItemOnCheckout = (id) => {
      return checkout.lineItems.edges.find(
        (item) => item.node.variant.id === id
      );
    };
  

  const handleNext = async () => {
    if (step === 1) {
      setStep(2)
    }
    if (step === 2) {
      setStep(3)
    }

    if (step === 3) {
      const checkoutId = await handleCheckoutCreation()
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
      setStep(4)
    }

    if (step === 4) {
      {checkout.lineItems.edges.length ? window.location.replace(checkout.webUrl) : setStep(1)}
    }
  }

  return (
    <div className='vela2'>
      <Head>
        <title>Reserve a sua - Vela Bikes</title>
        <meta http-equiv='content-language' content='pt-br' />
        <meta name='application-name' content='Vela Bikes Store' />
        <meta name='description' content='Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!' />
        <meta property='og:url' content='https://velabikes.com.br/vela2' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Reserve a sua - Vela Bikes' />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:description' content='Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!' />
        <meta property='og:image' content='https://images.prismic.io/velabikes/3aec68d3-2a0b-4aaf-a56a-24abba68dae0__MG_4306+%281%29.jpg?auto=compress,format&rect=0,10,5006,3337&w=3000&h=2000' />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" /> 
        <meta name="twitter:title" content="Reserve a sua - Vela Bikes" />
        <meta name="twitter:description" content="Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!'" />
        <meta name="twitter:image" content="https://images.prismic.io/velabikes/3aec68d3-2a0b-4aaf-a56a-24abba68dae0__MG_4306+%281%29.jpg?auto=compress,format&rect=0,10,5006,3337&w=3000&h=2000" />
      </Head>
      <div className='content'>
        <Display model={selectedModel} />
        <Tab step={step} onStep={setStep}>
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
          <VelaPlusSelector
            model={selectedModel}
            selected={selectedExtra}
            onSelect={id =>
              setSelectedExtra(
                selectedExtra.includes(id)
                  ? selectedExtra.filter(item => item !== id)
                  : [...selectedExtra, id]
              )}
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
        .mobiledisplay {
          margin-top: 10em;
        }
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
  withCheckoutLineItemsAdd
)(Vela2)
