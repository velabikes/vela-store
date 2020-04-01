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

const Item = ({node: {title, images, variants}}) => {
  return (
    <div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h3>{title}</h3>
      <Price value={variants.edges[0].node.priceV2.amount} />
    </div>
  )
}

const ExtraSelector = ({collection}) => {
  if (!collection) return <p />
  if (!collection.products) return <p />
  return collection.products.edges.map(Item)
}

export default withCollectionByHandle('acessorios', { filterUnavailable: true })(ExtraSelector)
