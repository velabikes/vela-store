import Price from '../Price'
import withCollectionByHandle from '../../containers/withCollectionByHandle'
import { offWhite, lightGreen, white, velaRed } from '../../style/colors'
import { AddIcon, CloseIcon } from '../Icons'

const Item = ({ node: { title, images, variants }, onSelect, selected }) => {
  return (
    <div onClick={() => onSelect(variants.edges[0].node)}>
      <div className='selector'>
        {selected === false && <AddIcon fill={white} />}
        {selected === true && <CloseIcon fill={white} />}
      </div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h4>{title}</h4>
      <Price value={variants.edges[0].node.priceV2.amount} />
      <style jsx>{`
      div {
        max-width: 45%;
        margin: 0.5em;
        display: flex;
        flex-direction: column;
      }
      @media only screen and (min-width: 768px) {
        div {
          max-width: 20%;
          margin: 0.5em 1.5em 0.5em 0em;
        }
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
        ${selected === true && `
          background-color: ${velaRed};
        `}
      }
    `}</style>
    </div>
  )
}

const ExtraSelector = ({ collection, onSelect, selected }) => {
  if (!collection) return <p />
  if (!collection.products) return <p />

  return (
    <div>
      <p>Adicione também os acessórios essenciais para a cidade:</p>
      <div className='Items'>
        {collection.products.edges.map(product => (
          <Item
            onSelect={onSelect}
            selected={selected.includes(product.node.variants.edges[0].node)}
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
