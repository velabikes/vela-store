import Price from '../Price'
import withCollectionByHandle from '../../containers/withCollectionByHandle'
import { offWhite, lightGreen, white, velaRed } from '../../style/colors'
import { AddIcon, CloseIcon } from '../Icons'

const rackmap = {
    Baixo: 0,
    Reto: 2
}

const Item = ({ node: { title, images, variants, handle }, onSelect, selected, model }) => {
  const variantIndex = handle === 'bagageiro-traseiro' ? rackmap[model.frame] : 0
  const isSelected = selected.includes(variants.edges[variantIndex].node)

  return (
    <div onClick={() => onSelect(variants.edges[variantIndex].node)}>
      <div className='selector'>
        {isSelected === false && <AddIcon fill={white} />}
        {isSelected === true && <CloseIcon color={white} />}
      </div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h4>{title}</h4>
      <Price value={variants.edges[0].node.priceV2.amount} />
      <style jsx>{`
        div {
          max-width: 40%;
          margin: 0.7em;
          display: flex;
          flex-direction: column;
        }
        img {
          width: 100%;
          background-color: ${offWhite};
        }
        h4 {
          margin: 0;
          padding: 0.5em 0 0 0;
          line-height: 1.25em;
        }
        .selector {
          z-index: 1;
          align-self: flex-end;
          width: 1.5em;
          transition: 0.5s;
          cursor: pointer;
          border-radius: 2em;
          padding: 0.2em;
          margin-bottom: -1em;
          margin-right: -0.5em;
          background-color: ${lightGreen};
          ${isSelected === true &&
            `
          background-color: ${velaRed};
        `}
        }
      `}</style>
    </div>
  )
}

const ExtraSelector = ({ collection, onSelect, selected, model }) => {
  if (!collection) return <p />
  if (!collection.products) return <p />

  return (
    <>
      <h4>O que já está incluso?</h4>
      <div className='core'>
        <p>✔ Carregador padrão Vela</p>
        <p>✔ Ferramentas essenciais</p>
        <p>✔ Kit de paralamas</p>
        <p>✔ Faróis integrados</p>
        <p>✔ Mudflaps</p>
      </div>
      <h4>Personalize com mais acessórios:</h4>
      <p>Adicione todos os ítens extras essenciais para Velejar com tranquilidade pela cidade:</p>
      <div className='extraitems'>
        {collection.products.edges
          .filter(product => {
            const filter =
              model.frame === 'Reto'
                ? 'bagageiro-dianteiro-1'
                : 'bagageiro-dianteiro-bambu'

            return product.node.handle !== filter
          })
          .map(product => (
            <Item
              onSelect={onSelect}
              selected={selected}
              model={model}
              {...product}
            />
          ))}
        </div>
        <style jsx>{`
          .core {
            background-color: ${offWhite};
            padding: 1em;
            margin-bottom: 1em;
          }
          .core p {
            font-size: 0.9em;
          }
          .extraitems {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            max-width: 100%;
            flex-wrap: wrap;
          }
        `}</style>
    </>
  )
}

export default withCollectionByHandle('essentials', {
  filterUnavailable: true
})(ExtraSelector)
