import Price from '../Price'
import withCollectionByHandle from '../../containers/withCollectionByHandle'
import { offWhite, lightGreen, white, velaRed } from '../../style/colors'
import { AddIcon, CloseIcon } from '../Icons'

const rackmap = {
    P: 0,
    M: 0,
    G: 2,
    GG: 1
}

const Item = ({ node: { title, images, variants, handle }, onSelect, selected, model }) => {
  const variantIndex = handle === 'bagageiro-traseiro' ? rackmap[model.size] : 0
  const isSelected = selected.includes(variants.edges[variantIndex].node)

  return (
    <div onClick={() => onSelect(variants.edges[variantIndex].node)}>
      <div className='selector'>
        {isSelected === false && <AddIcon fill={white} />}
        {isSelected === true && <CloseIcon fill={white} />}
      </div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h4>{title}</h4>
      <Price value={variants.edges[0].node.priceV2.amount} />
      <style jsx>{`
        div {
          max-width: 40%;
          margin: 0.5em;
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
    <div>
      <p>Adicione também os acessórios extras essenciais para a cidade:</p>
      <div className='Items'>
        {collection.products.edges
          .filter(product => {
            const filter =
              model.size === 'G' || 'GG'
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
        <style jsx>{`
          .Items {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            max-width: 100%;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </div>
  )
}

export default withCollectionByHandle('essentials', {
  filterUnavailable: true
})(ExtraSelector)
