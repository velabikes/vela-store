/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Head from "next/head";
import { compose } from "recompose";
import Display from "../components/velax-build/Display";
import Bar from "../components/velax-build/Bar";
import AddedToCart from "../components/velax-build/AddedToCart";
import ModelSelector from "../components/velax-build/ModelSelector";
import ExtraSelector from "../components/velax-build/ExtraSelector";
import VelaPlusSelector from "../components/velax-build/VelaPlusSelector";
import Tab from "../components/velax-build/Tab";
import withCheckoutLineItemsAdd from "../containers/withCheckoutLineItemsAdd";
import withCheckout from "../containers/withCheckout";
import ModelData from "../components/velax-build/ModelData";

const initialValues = {
  size: "G",
};

const Vela2 = ({ checkout, checkoutLineItemsAdd, handleCheckoutCreation }) => {
  const [selectedModel, setSelectedModel] = useState(initialValues);
  const [selectedExtra, setSelectedExtra] = useState([]);
  const [step, setStep] = useState(1);
  const [loadedCheckout, setLoadedCheckout] = useState(false);

  const selectedModelData = ModelData[JSON.stringify(selectedModel)] || {};

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
    return checkout.lineItems.edges.find((item) => item.node.variant.id === id);
  };

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      setStep(3);
    }

    if (step === 3) {
      const checkoutId = await handleCheckoutCreation();
      await checkoutLineItemsAdd({
        variables: {
          checkoutId,
          lineItems: [
            ...selectedExtra.map(({ id }) => ({
              variantId: id,
              quantity: 1,
            })),
            {
              variantId: selectedModelData.id,
              quantity: 1,
            },
          ],
        },
      });
      setStep(4);
    }

    if (step === 4) {
      {
        checkout.lineItems.edges.length
          ? window.location.replace(checkout.webUrl)
          : setStep(1);
      }
    }
  };

  return (
    <div className="velax">
      <Head>
        <title>Monte a sua Vela X</title>
        <meta http-equiv="content-language" content="pt-br" />
        <meta name="application-name" content="Vela Bikes Store" />
        <meta
          name="description"
          content="Escolha o modelo da sua Vela 2, os acessórios essenciais para a cidade e aproveite para pedalar smart!"
        />
        <meta
          property="og:url"
          content="https://velabikes.com.br/velax-build"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monte a sua Vela X" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Escolha o tamanho ideal da sua Vela X, acessórios essenciais para a cidade e aproveite para pedalar smart!"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FScreen%20Shot%202022-06-22%20at%2009.15.06.png?alt=media&token=35763e05-5cc3-47f8-ac71-5b0d75d8f9d6"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@velabikes" />
        <meta name="twitter:title" content="Monte a sua - Vela Bikes" />
        <meta
          name="twitter:description"
          content="Escolha o tamanho ideal da sua Vela X, acessórios essenciais para a cidade e aproveite para pedalar smart!"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FScreen%20Shot%202022-06-22%20at%2009.15.06.png?alt=media&token=35763e05-5cc3-47f8-ac71-5b0d75d8f9d6"
        />
      </Head>
      <div className="content">
        <Display model={selectedModel} />
        <Tab step={step} onStep={setStep}>
          <ModelSelector
            onModelChange={setSelectedModel}
            model={selectedModel}
          />
          <ExtraSelector
            model={selectedModel}
            selected={selectedExtra}
            onSelect={(id) =>
              setSelectedExtra(
                selectedExtra.includes(id)
                  ? selectedExtra.filter((item) => item !== id)
                  : [...selectedExtra, id]
              )
            }
          />
          <VelaPlusSelector
            model={selectedModel}
            selected={selectedExtra}
            onSelect={(id) =>
              setSelectedExtra(
                selectedExtra.includes(id)
                  ? selectedExtra.filter((item) => item !== id)
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
        .velax {
          margin-top: -10px;
        }

        .mobiledisplay {
          margin-top: 2em;
        }
        @media only screen and (min-width: 768px) {
          .content {
            display: flex;
            height: 80vh;
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default compose(withCheckout, withCheckoutLineItemsAdd)(Vela2);
