/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { compose } from 'recompose'
import Display from '../components/rent/Display'
import Bar from '../components/rent/Bar'
import AddedToCart from '../components/rent/AddedToCart'
import ModelSelector from '../components/rent/ModelSelector'
import ExtraSelector from '../components/rent/ExtraSelector'
import Tab from '../components/rent/Tab'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckout from '../containers/withCheckout'
import ModelData from '../components/rent/ModelData'

const initialValues = {
  frame: "Baixo",
  time: "Semestral",
};

const Rent = ({ checkout, checkoutLineItemsAdd, handleCheckoutCreation}) => {
  const [selectedModel, setSelectedModel] = useState(initialValues)
  const [selectedExtra, setSelectedExtra] = useState([])
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [loadedCheckout, setLoadedCheckout] = useState(false);

  const { frame, time } = selectedModel
  const selectedModelData =
    ModelData[JSON.stringify({ frame, time })] || {}

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
      setStep(3)
    }

    if (step === 3) {
      {checkout.lineItems.edges.length ? window.location.replace(checkout.webUrl) : setStep(1)}
    }
  }

  return (
    <div className='rent'>
      <Head>
        <title>Alugue a Vela 2 - Vela Bikes</title>
        <meta http-equiv='content-language' content='pt-br' />
        <meta name='application-name' content='Vela Bikes Store' />
        <meta name='description' content='Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!' />
        <meta property='og:url' content='https://velabikes.com.br/vela2' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Alugue a Vela 2 - Vela Bikes' />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:description' content='Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!' />
        <meta property='og:image' content='https://images.prismic.io/velabikes/3aec68d3-2a0b-4aaf-a56a-24abba68dae0__MG_4306+%281%29.jpg?auto=compress,format&rect=0,10,5006,3337&w=3000&h=2000' />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" /> 
        <meta name="twitter:title" content="Alugue a Vela 2 - Vela Bikes" />
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
          <AddedToCart 
            onStep={setStep} 
            checked={checked} 
            onCheck={setChecked} 
            toggleButton={setActiveButton}
            activeButton={activeButton}
          />
          {console.log(checked)}
          {console.log(activeButton)}
        </Tab>
      </div>
      <Bar
        model={selectedModel}
        extra={selectedExtra}
        onContinue={handleNext}
        step={step}
        activeButton={activeButton}
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
)(Rent)
