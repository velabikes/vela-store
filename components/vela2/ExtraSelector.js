import Price from '../Price'
import withCollectionByHandle from '../../containers/withCollectionByHandle'

const data = [
  {
    sku: 'VEL-BD-20',
    title: 'Bagageiro Dianteiro',
    image: '',
    price: 389
  },
  {
    sku: 'VEL-BAT19',
    title: 'Bagageiro Traseiro',
    image: '',
    price: 169
  },
  {
    sku: 'VEL-RTV19',
    title: 'Retrovisor',
    image: '',
    price: 39
  }
]

const Item = ({ node: { title, images, variants }, onSelect, selected }) => {
  return (
    <div onClick={() => onSelect(variants.edges[0].node.id)}>
      <div>{JSON.stringify(selected)}</div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h3>{title}</h3>
      <Price value={variants.edges[0].node.priceV2.amount} />
    </div>
  )
}

const ExtraSelector = ({ collection, onSelect, selected }) => {
  if (!collection) return <p />
  if (!collection.products) return <p />

  return (
    <div>
      {collection.products.edges.map(product => (
        <Item
          onSelect={onSelect}
          selected={selected.includes(product.node.variants.edges[0].node.id)}
          {...product}
        />
      ))}
      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default withCollectionByHandle('acessorios', {
  filterUnavailable: true
})(ExtraSelector)
